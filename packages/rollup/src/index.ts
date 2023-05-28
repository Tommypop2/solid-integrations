import { Accessor, createResource } from "solid-js";
import { OutputOptions, rollup } from "@rollup/browser";
type Modules = Record<string, string>;
/**
 * An integration that, given a signal containing source code, returns a resource containing the rollup bundle version of that source
 *
 * @param modules A signal accessor containing a record containing the files as the key, and their source as the value
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
