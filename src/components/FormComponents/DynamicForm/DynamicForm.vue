<script setup>
  import { ref, toRefs, watch } from 'vue'
  import { simulateApiCall } from '../../../services/api'

  const emit = defineEmits(['update:modelValue', 'submit'])

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  })

  const { modelValue, title } = toRefs(props)
  const errorMessage = ref('')

  const validateInput = (target) => {
    if (target.validity.valueMissing) {
      target.setCustomValidity(`Field is required!`)
    } else {
      target.setCustomValidity('')
    }
    target.checkValidity()
    target.reportValidity()
  }

  const handleInput = (key, target) => {
    const updatedValue = { ...modelValue.value, [key]: target.value }
    validateInput(target)
    emit('update:modelValue', updatedValue)
  }

  const handleSubmit = async () => {
    let response = {}

    try {
      response = await simulateApiCall(modelValue.value)
      emit('submit', response)
      errorMessage.value = ''
    } catch (error) {
      emit('submit', error)
      errorMessage.value = error.message
    }
  }
</script>

<template>
  <div class="registration-form">
    <form @submit.prevent="handleSubmit">
      <h2>{{ title }}</h2>
      <slot v-bind="{ modelValue, input: handleInput }"></slot>
      <button type="submit">Submit</button>
      <div class="error">
        <p v-if="errorMessage !== ''" v-highlight="'red'">Error: {{ errorMessage }}</p>
      </div>
    </form>
  </div>
</template>

<style lang="scss" src="./DynamicFormStyle.scss" scoped />
