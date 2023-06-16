

import { defineStore } from 'pinia';

export const useActionStore = defineStore('Actions', {
  state: () => ({
    selectedActionId: null
  }),
  actions: {
    setSelectedActionId(actionId) {
      this.selectedActionId = actionId;
    },
    clearSelectedActionId() {
      this.selectedActionId = null;
    }
  }
});
