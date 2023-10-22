<script setup>
  import SampleForm from '../../components/FormComponents/SampleForm/SampleForm.vue'
  import AddressForm from '../../components/FormComponents/AddressForm/AddressForm.vue'
  import PaymentDetailsForm from '../../components/FormComponents/PaymentDetailsForm/PaymentDetailsForm.vue'
  import UserProfileForm from '../../components/FormComponents/UserProfileForm/UserProfileForm.vue'
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
