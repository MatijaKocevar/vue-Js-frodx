<script setup>
  import { ref } from 'vue'
  import DynamicForm from '../DynamicForm/DynamicForm.vue'

  const formData = ref({
    name: '',
    email: ''
  })

  const handleFormSubmit = (formData) => {
    console.log('Submitted data:', formData)
  }
</script>

<template>
  <DynamicForm v-model="formData" title="Sample" @submit="handleFormSubmit">
    <template #default="{ modelValue, input }">
      <div class="input-field">
        <label for="name">Name:</label>
        <input
          id="name"
          :modelValue="modelValue.name"
          type="text"
          required
          @input="(e) => input('name', e.target.value)"
        />
      </div>
      <div class="input-field">
        <label for="email">Email:</label>
        <input
          id="email"
          :modelValue="modelValue.email"
          type="email"
          required
          @input="(e) => input('email', e.target.value)"
        />
      </div>
    </template>
  </DynamicForm>
</template>

<style lang="scss" src="./SampleFormStyle.scss" scoped />
