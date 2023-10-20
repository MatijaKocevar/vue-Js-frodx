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

  const { id, label, type, value, errorMessage, isRequired } = toRefs(props)
  const inputFieldRef = ref(null)

  const handleInput = () => {
    validateInput()
    emit('input', value.value)
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
      :required="inputIsRequired"
      autocomplete="on"
      @input="handleInput"
    />
  </div>
</template>

<style src="./InputFieldStyle.scss" scoped />
