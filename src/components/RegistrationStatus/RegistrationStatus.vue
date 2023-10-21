<script setup>
  import { computed } from 'vue'
  import { useUserRegistrationStore } from '../../stores/userRegistration'

  const store = useUserRegistrationStore()
  const registrationStatus = computed(() => store.registrationStatus)
  const errorMessage = computed(() => store.errorMessage)
</script>

<template>
  <div>
    <div v-if="registrationStatus === 'Submitted'">Submitted</div>
    <div v-else-if="registrationStatus === 'Error'">Error: {{ errorMessage }}</div>
  </div>
</template>
