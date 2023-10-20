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

<script>
  import InputField from '../InputField/InputField.vue'

  export default {
    components: {
      InputField
    },
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        console.log(this.formData)
      },
      handleNameInput(value) {
        this.formData.name = value
      },
      handleEmailInput(value) {
        this.formData.email = value
      },
      handlePhoneInput(value) {
        this.formData.phone = value
      }
    }
  }
</script>

<style src="./RegistrationFormStyle.scss" scoped />
