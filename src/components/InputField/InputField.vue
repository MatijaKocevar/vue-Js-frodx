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
    value: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      required: true
    },
    isRequired: Boolean
  })

  const emit = defineEmits(['input', 'update:modelValue'])

  const { id, label, type, value, errorMessage, isRequired } = toRefs(props)

  const localValue = ref(value.value)
  const inputFieldRef = ref(null)

  watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
  })

  const handleInput = () => {
    validateInput()
    emit('input', localValue.value)
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
