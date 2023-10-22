<script setup>
  import { onMounted, ref, toRefs, computed } from 'vue'
  import { simulateApiCall } from '../../../services/api'
  import { useDynamicFormStore } from '../../../stores/dynamicForm'
  import { DynamicFormStatus } from '../../../stores/dynamicForm'

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
  const { setFormData, resetFormData, getFormData, setFormStatus, formData } = useDynamicFormStore()
  const formStatus = computed(() => formData[id.value]?.status)

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

    setFormData(id.value, updatedValue, DynamicFormStatus.NOT_SUBMITTED)
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
        resetFormData(id.value, DynamicFormStatus.SUBMITTED)

        emit('update:modelValue', updatedValue)
        emit('submit', response)
      }
    } catch (error) {
      setFormStatus(id.value, DynamicFormStatus.ERROR)

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
    <div class="status">
      <p v-if="formStatus === DynamicFormStatus.ERROR" v-highlight="'red'">Error: {{ errorMessage }}</p>
      <p v-else-if="formStatus === DynamicFormStatus.SUBMITTED" v-highlight="'green'">Submitted</p>
      <p v-else-if="!formStatus || formStatus === DynamicFormStatus.NOT_SUBMITTED" v-highlight="'lightblue'">
        Not submitted
      </p>
    </div>
  </div>
</template>

<style lang="scss" src="./DynamicFormStyle.scss" scoped />
