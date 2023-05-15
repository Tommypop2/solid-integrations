import { Component, createEffect, createRoot, createSignal, onMount } from "solid-js";
import { createScreenshotURL, makeScreenshotURL } from "../src";
const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const [component, setComponent] = createSignal<HTMLElement>();
  const screenshotURL = createScreenshotURL(component);
  createEffect(() => {
    console.log(screenshotURL());
  });
  return (
    <div
      class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"
      ref={setComponent}
    >
      <div class="wrapper-v">
        <h4>Counter component</h4>
        <p class="caption">it's very important...</p>
        <button class="btn" onClick={increment}>
          {count()}
        </button>
      </div>
      <button
        onClick={async () => {
          const url = await makeScreenshotURL(component()!);
          console.log(url);
        }}
      >
        Screenshot
      </button>
    </div>
  );
};

export default App;
