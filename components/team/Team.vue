<template>
  <section class="team">
    <div class="container">
      <h2 class="section-header">
        Our team
      </h2>
    </div>
    <div class="carousel">
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="i in 5" :key="i">
          <div class="carousel__item">
            <img class="carousel__item__image" src="~/assets/images/team/as.jpg">
            <h2 class="carousel__item__name">
              Andrew Skurlatov
            </h2>
            <h3 class="carousel__item__position">
              Technical Lead
            </h3>
            <ul class="carousel__item__roles">
              <li>Backend implementation</li>
              <li>Technical Consulting</li>
              <li>Blockchain development</li>
            </ul>
            <div class="carousel__item__social">
              <img class="carousel__item__social__icon" src="~/assets/images/social/facebook.svg">
              <img class="carousel__item__social__icon" src="~/assets/images/social/linkedin.svg">
              <img class="carousel__item__social__icon" src="~/assets/images/social/twitter.svg">
              <img class="carousel__item__social__icon" src="~/assets/images/social/github.svg">
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data () {
    return {
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              centerPadding: '30px'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main";

.team {
  padding: 100px 0 140px 0;

  @include media-breakpoint-only(md) {
    padding-bottom: 177px;
  }

  @include media-breakpoint-only(sm) {
    padding-bottom: 120px;
  }

  @include media-breakpoint-only(xs) {
    padding-bottom: 115px;
  }
}

.carousel {
  margin-top: 50px;

  @include media-breakpoint-only(sm) {
    margin-top: 17px;
  }

  @include media-breakpoint-only(xs) {
    margin-top: 20px;
  }

  &__item {
    height: 539px;
    padding-top: 51px;
    margin: 0 9px;
    border: 1px solid $lighter;
    box-sizing: border-box;
    border-radius: 15px;
    text-align: center;

    @include media-breakpoint-between(sm, md) {
      height: 448px;
    }

    &__image {
      width: 150px;
      height: 150px;
      margin: auto;
      border-radius: 50%;

      @include media-breakpoint-between(sm, md) {
        width: 120px;
        height: 120px;
      }
    }

    &__name {
      color: $browner;
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 25px;
      margin: 45px 0 2px;

      @include media-breakpoint-between(sm, md) {
        font-size: 18px;
        line-height: 21px;
      }
    }

    &__position {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 40px;
      color: $black;

      @include media-breakpoint-between(sm, md) {
        font-size: 14px;
        line-height: 120%;
      }
    }

    &__roles {
      list-style: none;
      padding: 0;
      line-height: 170%;
      color: $darker;
      margin-top: 41px;

      @include media-breakpoint-between(sm, md) {
        font-size: 14px;
      }
    }

    &__social {
      text-align: center;
      margin-top: 35px;
      //position: relative;
      //bottom: 41px;
      //left: -50%;
      //margin-left: 50%;

      &__icon {
        display: inline !important;
        margin: 0 6px !important;
      }
    }
  }
}
</style>
