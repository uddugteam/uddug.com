<template>
  <footer class="mustfooter">
    <div class="mustfooter__bottom container">
      <div class="row">
        <div class="col-auto mr-auto mustfooter__bottom__item">
          <p>Uddùg LTD, 2020</p>
        </div>
        <div class="col-auto mustfooter__bottom__item">
          <p>info@uddug.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main";

.mustfooter {
  background: $dark;
  border-radius: 25px 25px 0 0;
  padding: 32px 0 110px 0;
  color: $white;
  font-size: 14px;
  line-height: 100%;

  &__bottom {
    &__item {
      padding: 0;
    }
  }
}
</style>
