import { Component, Show, createSignal, } from "solid-js";
import { Counter } from "./Counter";
const App: Component = () => {
  const [mounted, setMounted] = createSignal(true);
  return (
    <div class="">
      <button onClick={() => setMounted(prev => !prev)}>{mounted() ? "Unmount" : "Remount"}</button>
      <Show when={mounted()}>
        <Counter />
      </Show>
    </div>
  );
};

export default App;
