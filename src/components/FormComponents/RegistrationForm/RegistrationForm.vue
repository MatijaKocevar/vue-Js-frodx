<script setup>
  import InputField from '../../CommonComponents/InputField/InputField.vue'
  import { ref } from 'vue'
  import { useUserRegistrationStore } from '../../../stores/userRegistration'
  import { useUnsavedChangesStore } from '../../../stores/unsavedChanges'
  import RegistrationStatus from './RegistrationStatus/RegistrationStatus.vue'

  const formData = ref({
    name: '',
    email: '',
    phone: ''
  })

  const { submitRegistration, setRegistrationStatus, isRegistrationSubmitted } = useUserRegistrationStore()
  const { setUnsavedChanges } = useUnsavedChangesStore()

  const handleSubmit = async () => {
    await submitRegistration(formData.value)

    if (isRegistrationSubmitted()) {
      formData.value = {
        name: '',
        email: '',
        phone: ''
      }

      setUnsavedChanges(false)
    }
  }

  const handleInputChange = () => {
    setUnsavedChanges(true)
    setRegistrationStatus('Not submitted')
  }
</script>

<template>
  <div class="registration">
    <div class="form">
      <h2>Registration Form</h2>
      <form @submit.prevent="handleSubmit">
        <InputField
          id="name"
          v-model="formData.name"
          label="Name"
          type="text"
          :is-required="true"
          error-message="Name is required."
          @input="handleInputChange"
        />
        <InputField
          id="email"
          v-model="formData.email"
          label="Email"
          type="email"
          :is-required="true"
          error-message="Email is required."
          @input="handleInputChange"
        />
        <InputField
          id="phone"
          v-model="formData.phone"
          label="Phone"
          type="tel"
          :is-required="true"
          error-message="Phone is required."
          @input="handleInputChange"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="status">
      <RegistrationStatus />
    </div>
  </div>
</template>

<style lang="scss" src="./RegistrationFormStyle.scss" scoped />
