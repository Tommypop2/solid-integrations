import { Component, createEffect, createSignal } from "solid-js";
import { createCompiled } from "../src";
const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const [files, setFiles] = createSignal({
    "main.js": "import {coolFun} from './fax.js'; coolFun()",
    "fax.js": "export function coolFun(){console.log('FaxNoCap')}",
  });
  const [compiled, { mutate, refetch }] = createCompiled(files);
  return (
    <div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white">
      <div class="wrapper-v">
        <h4>Counter component</h4>
        <p class="caption">it's very important...</p>
        {/* <button class="btn" onClick={increment}>
          {count()}
        </button> */}
        {JSON.stringify(compiled()?.[0].code)}
      </div>
    </div>
  );
};

export default App;
