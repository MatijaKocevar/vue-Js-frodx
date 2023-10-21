<script setup>
  import { computed, toRefs } from 'vue'
  import { useUserRegistrationStore } from '../../stores/userRegistration'

  const props = defineProps({
    unsavedChanges: {
      type: String,
      required: true
    }
  })

  const { unsavedChanges } = toRefs(props)
  const store = useUserRegistrationStore()

  const registrationStatus = computed(() => store.registrationStatus)
  const errorMessage = computed(() => store.errorMessage)
  const showSubmitted = computed(() => registrationStatus.value === 'Submitted' && !unsavedChanges.value)
</script>

<template>
  <div>
    <div v-if="showSubmitted">Submitted</div>
    <div v-else-if="registrationStatus === 'Error'">Error: {{ errorMessage }}</div>
  </div>
</template>
