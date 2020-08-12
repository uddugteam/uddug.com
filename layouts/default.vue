<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import "~/assets/styles/main.scss";
</style>
