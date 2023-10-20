<script setup>
  import InputField from '../InputField/InputField.vue'
  import { ref } from 'vue'

  const formData = ref({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = () => {
    console.log(formData.value)
  }

  const handleNameInput = (value) => (formData.value.name = value)
  const handleEmailInput = (value) => (formData.value.email = value)
  const handlePhoneInput = (value) => (formData.value.phone = value)
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
        @input="handleNameInput"
      />
      <InputField
        id="email"
        v-model="formData.email"
        label="Email"
        type="email"
        :is-required="true"
        error-message="Email is required."
        @input="handleEmailInput"
      />
      <InputField
        id="phone"
        v-model="formData.phone"
        label="Phone"
        type="tel"
        :is-required="true"
        error-message="Phone is required."
        @input="handlePhoneInput"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style src="./RegistrationFormStyle.scss" scoped />
