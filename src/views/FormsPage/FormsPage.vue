<script setup>
  import SampleForm from '../../components/SampleForm/SampleForm.vue'
  import AddressForm from '../../components/AddressForm/AddressForm.vue'
  import PaymentDetailsForm from '../../components/PaymentDetailsForm/PaymentDetailsForm.vue'
</script>

<template>
  <div class="forms-page">
    <SampleForm />
    <AddressForm />
    <PaymentDetailsForm />
  </div>
</template>

<style lang="scss" src="./FormsPageStyle.scss" scoped></style>
