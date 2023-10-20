<template>
  <div class="input-field">
    <label :for="id">{{ label }}:</label>
    <input
      :id="id"
      ref="inputField"
      :value="localValue"
      :type="type"
      :required="isRequired"
      autocomplete="on"
      @input="handleInput"
    />
  </div>
</template>

<script>
  export default {
    props: {
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
    },
    emits: ['input'],
    data() {
      return {
        localValue: this.value
      }
    },
    methods: {
      handleInput() {
        this.localValue = this.$refs.inputField.value
        this.$emit('input', this.localValue)
        this.validateInput()
      },
      validateInput() {
        const input = this.$refs.inputField

        if (input.value.trim() === '' && this.isRequired) {
          input.setCustomValidity(this.errorMessage)
        } else {
          input.setCustomValidity('')
        }

        input.checkValidity()
        input.reportValidity()
      }
    }
  }
</script>

<style src="./InputFieldStyle.scss" scoped />
