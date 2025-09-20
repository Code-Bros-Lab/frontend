<template>
  <main style="font-family: system-ui; padding: 2rem">
    <h1>Hello from Vue</h1>
    <p><strong>API URL:</strong> {{ apiUrl }}</p>
    <p><strong>Status:</strong> {{ status }}</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const status = ref("Checking API…");

onMounted(async () => {
  try {
    const res = await fetch(`${apiUrl}/health`);
    if (res.ok) {
      const json = await res.json();
      status.value = `API OK ✅ ${JSON.stringify(json)}`;
    } else {
      status.value = `API error ❌ (status ${res.status})`;
    }
  } catch {
    status.value = "API unreachable ❌";
  }
});
</script>
