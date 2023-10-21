<script setup>
  import InputField from '../InputField/InputField.vue'
  import { ref } from 'vue'
  import { useUserRegistrationStore } from '../../stores/userRegistration'
  import RegistrationStatus from '../RegistrationStatus/RegistrationStatus.vue'

  const formData = ref({
    name: '',
    email: '',
    phone: ''
  })

  const store = useUserRegistrationStore()

  const handleSubmit = () => {
    const wasSuccessful = store.submitRegistration(formData.value)

    if (wasSuccessful) {
      formData.value.name = ''
      formData.value.email = ''
      formData.value.phone = ''
    }
  }
</script>

<template>
  <div class="registration-form">
    <form @submit.prevent="handleSubmit">
      <InputField
        id="name"
        v-model="formData.name"
        label="Name"
        type="text"
        :is-required="true"
        error-message="Name is required."
      />
      <InputField
        id="email"
        v-model="formData.email"
        label="Email"
        type="email"
        :is-required="true"
        error-message="Email is required."
      />
      <InputField
        id="phone"
        v-model="formData.phone"
        label="Phone"
        type="tel"
        :is-required="true"
        error-message="Phone is required."
      />
      <button type="submit">Submit</button>
    </form>
    <RegistrationStatus />
  </div>
</template>

<style src="./RegistrationFormStyle.scss" scoped />
