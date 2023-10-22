<script setup>
  import { computed } from 'vue'
  import { useUserRegistrationStore, RegistrationStatusOption } from '../../../../stores/userRegistration'
  import { useUnsavedChangesStore } from '../../../../stores/unsavedChanges'

  const registrationStore = useUserRegistrationStore()
  const unsavedChangesStore = useUnsavedChangesStore()

  const registrationStatus = computed(() => registrationStore.registrationStatus)
  const errorMessage = computed(() => registrationStore.errorMessage)
  const showSubmitted = computed(
    () => registrationStatus.value === RegistrationStatusOption.SUBMITTED && !unsavedChangesStore.unsavedChanges
  )
</script>

<template>
  <div class="registration-status">
    <p v-if="showSubmitted" v-highlight="'green'" class="submitted">Submitted</p>
    <p v-else-if="registrationStatus === RegistrationStatusOption.ERROR" v-highlight="'red'" class="error">
      Error: {{ errorMessage }}
    </p>
    <p v-else-if="registrationStatus === RegistrationStatusOption.NOT_SUBMITTED" v-highlight="'lightblue'" class="idle">
      Not submitted
    </p>
  </div>
</template>

<style lang="scss" src="./RegistrationStatusStyle.scss" scoped />
