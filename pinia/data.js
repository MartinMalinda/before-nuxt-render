import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    name: "initial name"
  })
});
