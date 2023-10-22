<script setup>
  import { ref } from 'vue'
  import DynamicForm from '../DynamicForm/DynamicForm.vue'

  const formData = ref({
    name: '',
    email: ''
  })

  const handleFormSubmit = (response) => {
    console.log('Sample form response: ', response)
  }
</script>

<template>
  <DynamicForm id="sample-form" v-model="formData" title="Sample" @submit="handleFormSubmit">
    <template #default="{ modelValue, input }">
      <div class="input-field">
        <label for="name">Name:</label>
        <input
          id="name"
          :value="modelValue.name"
          type="text"
          autocomplete="on"
          required
          @input="(e) => input('name', e.target)"
        />
      </div>
      <div class="input-field">
        <label for="email">Email:</label>
        <input
          id="email"
          :value="modelValue.email"
          type="email"
          autocomplete="on"
          required
          @input="(e) => input('email', e.target)"
        />
      </div>
    </template>
  </DynamicForm>
</template>

<style lang="scss" src="./SampleFormStyle.scss" scoped />
