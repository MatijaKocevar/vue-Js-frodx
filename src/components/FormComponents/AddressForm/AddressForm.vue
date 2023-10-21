<script setup>
  import { ref } from 'vue'
  import DynamicForm from '../DynamicForm/DynamicForm.vue'

  const formData = ref({
    street: '',
    city: '',
    postalCode: ''
  })

  const handleFormSubmit = (formData) => {
    console.log('Submitted address:', formData)
  }
</script>

<template>
  <DynamicForm v-model="formData" title="Address" @submit="handleFormSubmit">
    <template #default="{ modelValue, input }">
      <div class="input-field">
        <label for="street">Street:</label>
        <input
          id="street"
          :value="modelValue.street"
          type="text"
          required
          @input="(e) => input('street', e.target.value)"
        />
      </div>
      <div class="input-field">
        <label for="city">City:</label>
        <input id="city" :value="modelValue.city" type="text" required @input="(e) => input('city', e.target.value)" />
      </div>
      <div class="input-field">
        <label for="postalCode">Postal Code:</label>
        <input
          id="postalCode"
          :value="modelValue.postalCode"
          type="text"
          required
          @input="(e) => input('postalCode', e.target.value)"
        />
      </div>
    </template>
  </DynamicForm>
</template>

<style lang="scss" src="./AddressFormStyle.scss" scoped />
