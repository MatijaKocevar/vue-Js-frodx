<script setup>
  import { ref } from 'vue'
  import DynamicForm from '../DynamicForm/DynamicForm.vue'

  const formData = ref({
    username: '',
    birthdate: '',
    bio: ''
  })

  const handleFormSubmit = (response) => {
    console.log('Submitted profile:', response)
  }
</script>

<template>
  <DynamicForm v-model="formData" title="User profile" @submit="handleFormSubmit">
    <template #default="{ modelValue, input }">
      <div class="input-field">
        <label for="username">Username:</label>
        <input
          id="username"
          :value="modelValue.username"
          type="text"
          required
          @input="(e) => input('username', e.target)"
        />
      </div>
      <div class="input-field">
        <label for="birthdate">Birthdate:</label>
        <input
          id="birthdate"
          :value="modelValue.birthdate"
          type="date"
          required
          @input="(e) => input('birthdate', e.target)"
        />
      </div>
      <div class="input-field">
        <label for="bio">Bio:</label>
        <textarea id="bio" :value="modelValue.bio" rows="4" required @input="(e) => input('bio', e.target)"></textarea>
      </div>
    </template>
  </DynamicForm>
</template>

<style lang="scss" src="./UserProfileFormStyle.scss" scoped />
