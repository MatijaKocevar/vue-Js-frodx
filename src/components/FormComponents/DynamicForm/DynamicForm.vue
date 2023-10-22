<script setup>
  import { onMounted, ref, toRefs } from 'vue'
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
      required: true
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  })

  const { modelValue, title, id } = toRefs(props)
  const errorMessage = ref('')
  const { setFormData, resetFormData, getFormData } = useDynamicFormStore()

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

    setFormData(id.value, updatedValue)
    validateInput(target)

    emit('update:modelValue', updatedValue)
  }

  const handleSubmit = async () => {
    let response = {}

    try {
      response = await simulateApiCall(modelValue.value)

      if (response?.success) {
        const updatedValue = Object.keys(modelValue.value).reduce((acc, key) => {
          acc[key] = ''
          return acc
        }, {})

        errorMessage.value = ''
        resetFormData(id.value)

        emit('update:modelValue', updatedValue)
        emit('submit', response)
      }
    } catch (error) {
      emit('submit', error)
      errorMessage.value = error.message
    }
  }

  onMounted(() => {
    const formData = getFormData(id.value)

    if (formData) {
      emit('update:modelValue', formData)
    }
  })
</script>

<template>
  <div class="registration">
    <div class="form">
      <form @submit.prevent="handleSubmit">
        <h2>{{ title }}</h2>
        <slot v-bind="{ modelValue, input: handleInput }"></slot>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="error">
      <p v-if="errorMessage !== ''" v-highlight="'red'">Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<style lang="scss" src="./DynamicFormStyle.scss" scoped />
