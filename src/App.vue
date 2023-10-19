<template>
  <NavigationBar @navbar-resized="handleNavbarResize" />

  <div class="container views" :style="contentStyles">
    <router-view />
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar/NavigationBar.vue'

  export default {
    components: {
      NavigationBar
    },
    data() {
      return {
        navbarHeight: 0
      }
    },
    computed: {
      contentStyles() {
        const paddingTop = this.navbarHeight + 'px'
        return { paddingTop }
      }
    },
    methods: {
      handleNavbarResize(navbarHeight) {
        this.navbarHeight = navbarHeight
      }
    }
  }
</script>

<style src="./AppStyle.scss" scoped />
