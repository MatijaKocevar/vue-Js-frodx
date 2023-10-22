import { defineStore } from 'pinia'

export const useUnsavedChangesStore = defineStore({
  id: 'unsavedChanges',
  state: () => ({
    unsavedChanges: false
  }),
  actions: {
    setUnsavedChanges(value) {
      this.unsavedChanges = value
    }
  }
})
