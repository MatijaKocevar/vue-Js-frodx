<script setup>
  import { onUnmounted, onMounted, ref, toRefs } from 'vue'
  import { simulateApiCall } from '../../../services/api'
  import { useDynamicFormStore } from '../../../stores/dynamicForm'

  const emit = defineEmits(['update:modelValue', 'submit'])

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  })

  const { modelValue, title, id } = toRefs(props)
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
    const { setFormData } = useDynamicFormStore()
    const updatedValue = { ...modelValue.value, [key]: target.value }

    setFormData(id.value, updatedValue)
    validateInput(target)

    emit('update:modelValue', updatedValue)
  }

  const handleSubmit = async () => {
    let response = {}

    try {
      response = await simulateApiCall(modelValue.value)
      errorMessage.value = ''

      const updatedValue = Object.keys(modelValue.value).reduce((acc, key) => {
        acc[key] = ''
        return acc
      }, {})

      emit('update:modelValue', updatedValue)
      emit('submit', response)
    } catch (error) {
      emit('submit', error)
      errorMessage.value = error.message
    }
  }

  onMounted(() => {
    const { getFormData } = useDynamicFormStore()

    const formData = getFormData(id.value)
    emit('update:modelValue', formData)
  })
</script>

<template>
  <div class="registration-form">
    <form @submit.prevent="handleSubmit">
      <h2>{{ title }}</h2>
      <slot v-bind="{ modelValue, input: handleInput }"></slot>
      <button type="submit">Submit</button>
    </form>
    <div class="error">
      <p v-if="errorMessage !== ''" v-highlight="'red'">Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<style lang="scss" src="./DynamicFormStyle.scss" scoped />
