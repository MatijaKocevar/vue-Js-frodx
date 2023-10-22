import { defineStore } from 'pinia'
import { simulateApiCall } from '../services/api'

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
    isRegistrationSubmitted() {
      return this.registrationStatus === 'Submitted'
    },
    setRegistrationStatus(status) {
      this.registrationStatus = status
    },
    async submitRegistration(formData) {
      this.userData = formData
      let response = {}

      try {
        response = await simulateApiCall()

        this.registrationStatus = 'Submitted'
        this.errorMessage = response.message
      } catch (error) {
        this.registrationStatus = 'Error'
        this.errorMessage = error.message
      }
    }
  }
})
