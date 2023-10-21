import { defineStore } from 'pinia'

export const useUserRegistrationStore = defineStore({
  id: 'userRegistration',
  state: () => ({
    registrationStatus: 'Not submitted',
    userData: {
      name: '',
      email: '',
      phone: ''
    },
    errorMessage: ''
  }),
  actions: {
    submitRegistration(formData) {
      //mock random success
      const isSuccess = Math.random() > 0.5

      if (isSuccess) {
        this.userData = formData
        this.registrationStatus = 'Submitted'
        this.errorMessage = null
      } else {
        this.registrationStatus = 'Error'
        this.errorMessage = 'Something went wrong!'
      }

      return isSuccess
    }
  }
})
