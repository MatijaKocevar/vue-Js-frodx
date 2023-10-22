import { defineStore } from 'pinia'
import { simulateApiCall } from '../services/api'

export const RegistrationStatusOption = {
  NOT_SUBMITTED: 'Not submitted',
  SUBMITTED: 'Submitted',
  ERROR: 'Error'
}

export const useUserRegistrationStore = defineStore({
  id: 'userRegistration',
  state: () => ({
    registrationStatus: RegistrationStatusOption.NOT_SUBMITTED,
    userData: {
      name: '',
      email: '',
      phone: ''
    },
    errorMessage: ''
  }),
  actions: {
    isRegistrationSubmitted() {
      return this.registrationStatus === RegistrationStatusOption.SUBMITTED
    },
    setRegistrationStatus(status) {
      this.registrationStatus = status
    },
    setUserData(userData) {
      this.userData = userData
    },
    async submitRegistration(formData) {
      this.userData = formData
      let response = {}

      try {
        response = await simulateApiCall()

        this.registrationStatus = RegistrationStatusOption.SUBMITTED
        this.errorMessage = response.message
      } catch (error) {
        this.registrationStatus = 'Error'
        this.errorMessage = error.message
      }
    }
  }
})
