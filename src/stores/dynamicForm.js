import { defineStore } from 'pinia'

export const DynamicFormStatus = {
  NOT_SUBMITTED: 'not_submitted',
  SUBMITTED: 'submitted',
  ERROR: 'error'
}

export const useDynamicFormStore = defineStore({
  id: 'dynamicForm',

  state: () => ({
    formData: {}
  }),

  actions: {
    setFormData(formId, data, status) {
      this.formData[formId] = data
      this.formData[formId].status = status
    },
    getFormData(formId) {
      return this.formData[formId]
    },
    resetFormData(formId, status) {
      if (this.formData[formId]) {
        for (let key in this.formData[formId]) {
          if (key === 'status') {
            this.formData[formId][key] = status
            return
          }

          this.formData[formId][key] = ''
        }
      }
    },
    setFormStatus(formId, status) {
      if (this.formData[formId]) {
        this.formData[formId].status = status
      }
    },
    getAllFormData() {
      return this.formData
    }
  }
})
