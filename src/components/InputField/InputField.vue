<script setup>
  import { ref, toRefs, watch } from 'vue'

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      required: true
    },
    isRequired: Boolean
  })

  const emit = defineEmits(['update:modelValue'])

  const { id, label, type, modelValue, errorMessage, isRequired } = toRefs(props)

  const localValue = ref(modelValue.value)
  const inputFieldRef = ref(null)

  watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
  })

  watch(modelValue, (newVal) => {
    localValue.value = newVal
  })

  const handleInput = () => {
    validateInput()
  }

  const validateInput = () => {
    if (inputFieldRef.value.value.trim() === '' && isRequired.value) {
      inputFieldRef.value.setCustomValidity(errorMessage.value)
    } else {
      inputFieldRef.value.setCustomValidity('')
    }

    inputFieldRef.value.checkValidity()
    inputFieldRef.value.reportValidity()
  }
</script>

<template>
  <div class="input-field">
    <label :for="id">{{ label }}:</label>
    <input
      :id="id"
      ref="inputFieldRef"
      v-model="localValue"
      :type="type"
      :required="isRequired"
      autocomplete="on"
      @input="handleInput"
    />
  </div>
</template>

<style src="./InputFieldStyle.scss" scoped />
