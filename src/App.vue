<script setup>
  import { ref, computed } from 'vue'
  import NavigationBar from './components/NavigationBar/NavigationBar.vue'

  const navbarHeight = ref(0)

  const handleNavbarResize = (height) => {
    navbarHeight.value = height
  }

  const contentStyles = computed(() => {
    const paddingTop = `${navbarHeight.value}px`
    return { paddingTop }
  })
</script>

<template>
  <NavigationBar @navbar-resized="handleNavbarResize" />

  <div class="container views" :style="contentStyles">
    <router-view />
  </div>
</template>

<style src="./AppStyle.scss" scoped></style>
