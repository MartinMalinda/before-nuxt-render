<script>
import { defineComponent, onServerPrefetch } from "@vue/composition-api";
import { useDataStore } from "../pinia/data";
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export default defineComponent({
  setup() {
    const store = useDataStore();
    onServerPrefetch(async () => {
      await wait(400);
      store.state.name = "changed name";
    });
    return { store };
  },
});
</script>

<template>
  <div>
    store: {{ store }}
    <Nuxt />
  </div>
</template>
