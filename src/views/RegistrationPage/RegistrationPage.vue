<template>
  <div class="registration-page">
    <RegistrationForm />
  </div>
</template>

<script>
  import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.vue'

  export default {
    components: {
      RegistrationForm
    }
  }
</script>

<style lang="scss" src="./RegistrationPageStyle.scss" scoped></style>
