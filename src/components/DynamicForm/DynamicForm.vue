<script setup>
  import { ref, toRefs } from 'vue'

  const emit = defineEmits(['update:modelValue', 'submit'])

  const props = defineProps({
    modelValue: {
      type: Object,
      default: () => ({})
    }
  })

  const { modelValue } = toRefs(props)
  const errorMessage = ref('')

  const handleInput = (key, value) => {
    const updatedValue = { ...modelValue.value, [key]: value }
    emit('update:modelValue', updatedValue)
  }

  const handleSubmit = () => {
    for (const field in modelValue.value) {
      if (!modelValue.value[field]) {
        errorMessage.value = 'All fields are required!'
        return
      }
    }
    errorMessage.value = ''
    emit('submit', modelValue.value)
  }
</script>

<template>
  <div class="registration-form">
    <form @submit.prevent="handleSubmit">
      <slot v-bind="{ modelValue, input: handleInput }"></slot>
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" src="./DynamicFormStyle.scss" scoped />
