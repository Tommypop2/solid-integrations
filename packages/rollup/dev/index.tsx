import { Component, createEffect, createSignal } from "solid-js";
import { createCompiled, createCompiledCode } from "../src";
const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const [files, setFiles] = createSignal({
    "main.js": "import {coolFun} from './coolFile.js'; coolFun()",
    "coolFile.js": "export function coolFun(){console.log('Hello World')}",
  });
  // const [compiled, { mutate, refetch }] = createCompiled(files);
  const compiled = createCompiledCode(files);
  return (
    <div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white">
      <div class="wrapper-v">
        <h4>Counter component</h4>
        <p class="caption">it's very important...</p>
        {/* <button class="btn" onClick={increment}>
          {count()}
        </button> */}
        {JSON.stringify(compiled())}
      </div>
    </div>
  );
};

export default App;
