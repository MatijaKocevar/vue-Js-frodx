<template>
  <nav id="navigation-bar" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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

<script>
  export default {
    emits: ['navbar-resized'],
    mounted() {
      window.addEventListener('resize', this.handleResize)

      this.calculateAndEmitNavbarHeight()
    },
    methods: {
      handleResize() {
        this.calculateAndEmitNavbarHeight()
      },
      calculateAndEmitNavbarHeight() {
        const navbarHeight = this.$el.offsetHeight

        this.$emit('navbar-resized', navbarHeight)
      }
    }
  }
</script>

<style src="./NavigationBarStyle.scss" scoped />
