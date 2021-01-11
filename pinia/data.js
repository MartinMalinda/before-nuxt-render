import { createStore } from 'pinia';

export const useDataStore = createStore({
  id: 'data',
  state: () => ({
    name: 'initial name'
  })
});
