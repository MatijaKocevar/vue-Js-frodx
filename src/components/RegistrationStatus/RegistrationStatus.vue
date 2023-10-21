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
    <p v-if="showSubmitted" v-highlight="'green'" class="submitted">Submitted</p>
    <p v-else-if="registrationStatus === 'Error'" v-highlight="'red'" class="error">Error: {{ errorMessage }}</p>
  </div>
</template>

<style src="./RegistrationStatusStyle.scss" scoped />
