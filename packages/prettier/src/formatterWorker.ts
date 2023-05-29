import { format } from "prettier/standalone";
import type { Options } from "prettier";
import parserBabel from "prettier/parser-babel";

type FormatterPayload = {
  event: "FORMAT" | "FORMAT_CURSOR";
  code: string;
  options?: Options;
};
function formatCode(code: string, options?: Options) {
  const defaults = {
    parser: "babel-ts",
    plugins: [parserBabel],
  };
  const opts = Object.assign({}, options, defaults);
  return format(code, opts);
}
self.addEventListener("message", async ({ data }: { data: FormatterPayload }) => {
  const { event, code, options } = data;
  switch (event) {
    case "FORMAT":
      self.postMessage({ event: event, code: formatCode(code, options) });
      break;
    case "FORMAT_CURSOR":
      break;
  }
});
export {};
