<template>
  <header class="container musthead">
    <h1 class="musthead__title">
      <span class="musthead__underliner"> Production</span>-focused Development <span class="musthead__underliner">Team</span>
    </h1>
    <div class="row musthead__about">
      <div class="col-2 col-sm-1 order-sm-1">
        <h3 class="musthead__about__title">
          About
        </h3>
      </div>
      <div class="col-10 col-sm-5 order-sm-2 col-md-6 col-lg-5">
        <p class="musthead__about__text">We combine proven methodologies, business domain knowledge and technology expertise of skilled software professionals to deliver highly optimized solutions and services across wide range of industry domains.</p>
      </div>
      <div class="offset-sm-1 order-sm-3 d-none d-sm-block d-md-none" />
      <div class="offset-2 d-block d-sm-none" />
      <div class="col-10 col-sm-4 order-sm-6 order-md-3 col-lg-3 ">
        <p class="musthead__about__text">Our projects are different, but all of them share the need to have a software solution</p>
      </div>
      <div class="offset-lg-3 order-lg-4" />
      <div class="offset-lg-1 order-lg-4" />
      <div class="col-12 col-sm-5 order-sm-4 order-md-4 col-md-4 col-lg-3">
        <div class="musthead__about__item">
          <p><span class="break-line">Experienced</span><span class="break-line"> and cross-functional</span></p>
        </div>
      </div>
      <div class="offset-sm-1 order-sm-5 d-none d-sm-block d-md-none" />
      <div class="offset-sm-2 order-sm-7 d-none d-sm-block d-md-none" />
      <div class="col-12 col-sm-5 order-sm-8 col-md-4">
        <div class="musthead__about__item musthead__about__item-centre">
          <p><span class="break-line">Modern stack</span><span class="break-line"> (latest technology trends)</span></p>
        </div>
      </div>
      <div class="offset-sm-7 order-sm-9 d-none d-sm-block d-md-none" />
      <div class="col-12 col-sm-5 order-sm-10 mr-sm-auto col-md-4 col-lg-3">
        <div class="musthead__about__item musthead__about__item-last">
          <p><span class="break-line">Trusted</span><span class="break-line"> development partner</span></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})

</script>

<style lang="scss">
@import "../assets/styles/main";

.musthead {
  padding-top: 143px;
  padding-bottom: 122px;

  &__underliner {
    // TODO need corner radius for underline
    text-decoration: underline;
    text-decoration-color: $lighter;
  }

  &__title {
    margin-bottom: 0;
    max-width: 686px;
    height: 140px;
    color: $dark;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 110%;
    letter-spacing: -0.04em;

    @include media-breakpoint-down(xs) {
      font-size: 31px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }

    @include media-breakpoint-only(sm) {
      font-size: 48px;
    }
  }

  &__about {
    margin-top: 70px;

    @include media-breakpoint-down(md) {
      margin-top: 104px;
    }

    @include media-breakpoint-down(xs) {
      margin-top: 122px;
    }

    &__title {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 150%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $grayer;

      @include media-breakpoint-down(md) {
        font-size: 11px;
      }

      @include media-breakpoint-down(xs) {
        font-size: 10px;
        margin-top: 4px;
      }
    }

    &__text {
      @include media-breakpoint-down(sm) {
        font-size: 14px;
        margin-bottom: 25px;
      }

      @include media-breakpoint-down(xs) {
        margin-bottom: 20px;
      }
    }

    &__item {
      background: $dark;
      transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;
      padding: 25px 25px 25px;
      border-radius: 10px;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 120%;
      color: $white;

      cursor: help;

      &:hover {
        background: $white;
        color: $darker;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      }

      @include media-breakpoint-up(lg) {
        font-size: 18px;
      }

      @include media-breakpoint-up(md) {
        margin-top: 99px;
      }

      @include media-breakpoint-down(sm) {
        font-size: 14px;
        margin-bottom: 23px;
      }

      @include media-breakpoint-down(xs) {
        font-size: 16px;
        margin-bottom: 10px;
      }

      // TODO need to change way to show bullets
      /*p::before {
        content: "• ";
        color: $lighter;
        font-size: 25px;
        font-weight: bolder;
        display: inline-block;
        width: 13px;
        margin-left: -13px;
      }*/
    }

    &__item-centre {
      @include media-breakpoint-up(lg) {
        padding-left: 55px;
      }

      @include media-breakpoint-only(sm) {
        margin-top: -67px;
      }
    }

    &__item-last {
      @include media-breakpoint-only(sm) {
        margin-top: -67px;
      }
    }
  }
}
</style>
