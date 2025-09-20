import { createApp } from "vue";

const App = {
  data: () => ({ status: "…checking API" }),
  async mounted() {
    try {
      const base = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${base}/health`);
      this.status = res.ok ? "API OK ✅" : `API error ❌ (${res.status})`;
    } catch (e) {
      this.status = "API unreachable ❌";
    }
  },
  template: `<main style="font-family: system-ui; padding: 2rem">
    <h1>Hello from Vue</h1>
    <p>{{ status }}</p>
  </main>`
};

createApp(App).mount("#app");
