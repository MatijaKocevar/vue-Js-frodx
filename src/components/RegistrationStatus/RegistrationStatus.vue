<script setup>
  import { computed } from 'vue'
  import { useUserRegistrationStore } from '../../stores/userRegistration'
  import { useUnsavedChangesStore } from '../../stores/unsavedChanges'

  const registrationStore = useUserRegistrationStore()
  const unsavedChangesStore = useUnsavedChangesStore()

  const registrationStatus = computed(() => registrationStore.registrationStatus)
  const errorMessage = computed(() => registrationStore.errorMessage)
  const showSubmitted = computed(() => registrationStatus.value === 'Submitted' && !unsavedChangesStore.unsavedChanges)
</script>

<template>
  <div class="registration-status">
    <div v-if="showSubmitted" class="submitted">Submitted</div>
    <div v-else-if="registrationStatus === 'Error'" class="error">Error: {{ errorMessage }}</div>
  </div>
</template>

<style src="./RegistrationStatusStyle.scss" scoped />
