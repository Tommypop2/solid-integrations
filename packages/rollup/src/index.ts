import { Accessor, createResource } from "solid-js";
import { OutputOptions, rollup } from "@rollup/browser";
type Modules = Record<string, string>;
/**
 * An integration that, given a signal containing source code, returns a resource containing the rollup bundle version of that source
 *
 * @param modules A signal accessor that contains a record of filenames, to their values
 * @param inputFile The file that will be treated as the entrypoint
 * @param outputOptions Options to be passed to rollup's generate function
 * @return Returns a resource containing the rollup output
 */
export const createCompiled = (
  modules: Accessor<Modules>,
  inputFile: string = "main.js",
  outputOptions: OutputOptions = { format: "es", inlineDynamicImports: true },
) => {
  const compiled = createResource(modules, async files => {
    const bundler = await rollup({
      input: inputFile,
      plugins: [
        {
          name: "loaded",
          resolveId(source) {
            if (files.hasOwnProperty(source)) {
              return source;
            }
            if (source.startsWith("./") && files.hasOwnProperty(source.replace("./", ""))) {
              return source.replace("./", "");
            }
          },
          load(id) {
            if (files.hasOwnProperty(id)) {
              return files[id];
            }
          },
        },
      ],
    });
    const { output } = await bundler.generate(outputOptions);
    return output;
  });
  return compiled;
};
/**
 *
 * @param modules A signal accessor that contains a record of filenames, to their values
 * @param inputFile The file that will be treated as the entrypoint
 * @param outputOptions Options to be passed to rollup's generate function
 * @returns An accessor containing the compiled code, or undefined
 */
export const createCompiledCode = (
  modules: Accessor<Modules>,
  inputFile: string = "main.js",
  outputOptions: OutputOptions = { format: "es", inlineDynamicImports: true },
): Accessor<String | undefined> => {
  const [compiled] = createCompiled(modules, inputFile, outputOptions);
  return () => compiled()?.[0].code;
};
