<template>
  <div class="nav">
    <div class="container">
      <nav class="navbar">
        <nuxt-link
          class="logo"
          to="./"
        >
          <img src="~/static/Logo.svg" alt="uddug logo">
          <img class="logo__team" src="~/static/Uddug.svg" alt="uddug team">
        </nuxt-link>
        <ul class="navbar-nav justify-content-end">
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
 @import "../../assets/styles/main";
.navbar {
  padding: 0;
  margin-top: 70px;

  @include media-breakpoint-down(xs) {
    margin-top: 40px;
  }
}

.logo {
  cursor: crosshair;

  &__team {
    margin-left: 12.26px;
  }
}

.navbar-nav {
  li {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
