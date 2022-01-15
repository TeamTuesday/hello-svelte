import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    msg: "hello world",
  },
});

export default app;
