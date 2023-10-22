import { defineStore } from 'pinia'

export const useDynamicFormStore = defineStore({
  id: 'dynamicForm',

  state: () => ({
    formData: {}
  }),

  actions: {
    setFormData(formId, data) {
      this.formData[formId] = data
    },

    getFormData(formId) {
      return this.formData[formId]
    },

    resetFormData(formId) {
      if (this.formData[formId]) {
        delete this.formData[formId]
      }
    },
    getAllFormData() {
      return this.formData
    }
  }
})
