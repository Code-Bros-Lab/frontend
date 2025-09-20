import { createApp } from "vue";

const App = {
  data: () => ({
    status: "Checking API…",
    apiUrl: import.meta.env.VITE_API_BASE_URL
  }),
  async mounted() {
    try {
      const res = await fetch(`${this.apiUrl}/health`);
      if (res.ok) {
        const json = await res.json();
        this.status = `API OK ✅ ${JSON.stringify(json)}`;
      } else {
        this.status = `API error ❌ (status ${res.status})`;
      }
    } catch (e) {
      this.status = "API unreachable ❌";
    }
  },
  template: `
    <main style="font-family: system-ui; padding: 2rem">
      <h1>Hello from Vue</h1>
      <p><strong>API URL:</strong> {{ apiUrl }}</p>
      <p><strong>Status:</strong> {{ status }}</p>
    </main>
  `
};

createApp(App).mount("#app");
