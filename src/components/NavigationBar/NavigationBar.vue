<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const navElement = ref(null)

  const handleResize = () => {
    calculateAndEmitNavbarHeight()
  }

  const calculateAndEmitNavbarHeight = () => {
    if (navElement.value) {
      const navbarHeight = navElement.value.offsetHeight
      emit('navbar-resized', navbarHeight)
    }
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    calculateAndEmitNavbarHeight()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  const emit = defineEmits(['navbar-resized'])
</script>

<template>
  <nav id="navigation-bar" :ref="navElement" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarNav" class="navbar-items collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link d-lg-inline d-block"> Registration </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link d-lg-inline d-block"> About </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style src="./NavigationBarStyle.scss" scoped />
