<script setup>
  import { ref } from 'vue'
  import DynamicForm from '../DynamicForm/DynamicForm.vue'

  const formData = ref({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const handleFormSubmit = (response) => {
    console.log('Payment details form response: ', response)
  }
</script>

<template>
  <DynamicForm id="payment-details-form" v-model="formData" title="Payment details" @submit="handleFormSubmit">
    <template #default="{ modelValue, input }">
      <div class="input-field">
        <label for="cardName">Cardholder Name:</label>
        <input
          id="cardName"
          :value="modelValue.cardName"
          type="text"
          required
          @input="(e) => input('cardName', e.target)"
        />
      </div>
      <div class="input-field">
        <label for="cardNumber">Card Number:</label>
        <input
          id="cardNumber"
          :value="modelValue.cardNumber"
          type="text"
          pattern="\d{16}"
          required
          @input="(e) => input('cardNumber', e.target)"
        />
      </div>
      <div class="input-field">
        <label for="expiryDate">Expiry Date:</label>
        <input
          id="expiryDate"
          :value="modelValue.expiryDate"
          type="month"
          required
          @input="(e) => input('expiryDate', e.target)"
        />
      </div>
      <div class="input-field">
        <label for="cvv">CVV:</label>
        <input
          id="cvv"
          :value="modelValue.cvv"
          type="number"
          pattern="\d{3,4}"
          required
          @input="(e) => input('cvv', e.target)"
        />
      </div>
    </template>
  </DynamicForm>
</template>

<style lang="scss" src="./PaymentDetailsFormStyle.scss" scoped />
