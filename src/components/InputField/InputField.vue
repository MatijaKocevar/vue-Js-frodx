<script setup>
  import { ref, toRefs, defineProps, defineEmits } from 'vue'

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

  const emit = defineEmits(['input'])

  const {
    id: inputId,
    label: inputLabel,
    type: inputType,
    value,
    errorMessage,
    isRequired: inputIsRequired
  } = toRefs(props)

  const localValue = ref(value.value)
  const inputFieldRef = ref(null)

  const handleInput = () => {
    validateInput()
    emit('input', localValue.value)
  }

  const validateInput = () => {
    if (inputFieldRef.value.value.trim() === '' && inputIsRequired.value) {
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
    <label :for="inputId">{{ inputLabel }}:</label>
    <input
      :id="inputId"
      ref="inputFieldRef"
      v-model="localValue"
      :type="inputType"
      :required="inputIsRequired"
      autocomplete="on"
      @input="handleInput"
    />
  </div>
</template>

<style src="./InputFieldStyle.scss" scoped />
