<script setup>
  import SampleForm from '../../components/SampleForm/SampleForm.vue'
  import AddressForm from '../../components/AddressForm/AddressForm.vue'
  import PaymentDetailsForm from '../../components/PaymentDetailsForm/PaymentDetailsForm.vue'
  import UserProfileForm from '../../components/UserProfileForm/UserProfileForm.vue'
</script>

<template>
  <div class="forms-page">
    <SampleForm />
    <AddressForm />
    <PaymentDetailsForm />
    <UserProfileForm />
  </div>
</template>

<style lang="scss" src="./FormsPageStyle.scss" scoped></style>
