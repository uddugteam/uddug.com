<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">Our projects<span class="projects__title__and">and</span>
        <span class="projects__title__technologies">Technologies</span>
      </h2>
      <div class="row">
        <div class="col-12 col-sm-6">
          <div class="projects__item">
            <h3 class="projects__item__title">
              Trusted Health Consul
            </h3>
            <p class="projects__item__text">Platform perform deep analisys of the medical data using machine learning algoritms. Peer-to-peer database architecture provides secure and anonymous data.</p>
            <div class="projects__item__stack-main">
              <div class="projects__item__stack-main__unit">
                Rust
              </div>
              <div class="projects__item__stack-main__unit">
                Substrate
              </div>
              <div class="projects__item__stack-main__unit">
                Polkadot
              </div>
              <div class="projects__item__stack-main__unit">
                Healthcare.ai
              </div>
              <div class="projects__item__stack-main__unit">
                Terraform
              </div>
              <div class="projects__item__stack-main__unit">
                GKE
              </div>
              <div class="projects__item__stack-main__unit">
                React
              </div>
              <div class="projects__item__stack-main__unit">
                IPFS
              </div>
            </div>
            <div class="projects__item__stack-other">
              <span class="projects__item__stack-other__title">Other Technologies:</span>
              <span class="projects__item__stack-other__unit">POA,</span>
              <span class="projects__item__stack-other__unit">LibP2P,</span>
              <span class="projects__item__stack-other__unit">Python,</span>
              <span class="projects__item__stack-other__unit">Swagger,</span>
              <span class="projects__item__stack-other__unit">Gcp,</span>
              <span class="projects__item__stack-other__unit">Docker.</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="projects__item">
            <h3 class="projects__item__title">
              Cryptozaur
            </h3>
            <p class="projects__item__text">Platform for creating and interacting with crypto faucets, based on micropayments x4 coins. 2014 - the world top 10 faucets.</p>
            <div class="projects__item__stack-main">
              <div class="projects__item__stack-main__unit">
                Go
              </div>
              <div class="projects__item__stack-main__unit">
                Ethereun
              </div>
              <div class="projects__item__stack-main__unit">
                Solidity
              </div>
              <div class="projects__item__stack-main__unit">
                PostgreSQL
              </div>
              <div class="projects__item__stack-main__unit">
                Laravel
              </div>
            </div>
            <div class="projects__item__stack-other">
              <span class="projects__item__stack-other__title">Other Technologies:</span>
              <span class="projects__item__stack-other__unit">Php,</span>
              <span class="projects__item__stack-other__unit">Js,</span>
              <span class="projects__item__stack-other__unit">Linux.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Projects'
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main";
.projects {
  background: $blaker;
  border-radius: 25px;
  padding: 140px 0;
  text-align: center;

  @include media-breakpoint-only(sm) {
    padding-bottom: 60px;
  }

  @include media-breakpoint-only(xs) {
    padding-bottom: 192px;
  }

  &__title {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: $white;
    margin-bottom: 71px;
    display: table;

    @include media-breakpoint-down(sm) {
      font-size: 32px;
    }

    @include media-breakpoint-only(xs) {
      display: block;
      margin-bottom: 143px;
    }

    &__and {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      margin: 0 10px 0 17px;
      vertical-align: middle;

      @include media-breakpoint-down(sm) {
       margin-left: 18px;
      }

      @include media-breakpoint-only(xs) {
        display: block;
        margin: 13px 0 6px 0;
      }
    }

    &__technologies {
      padding: 6px 15px;
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      background: $scarleter;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 170%;
      align-items: center;
      text-align: center;
      vertical-align: middle;
    }
  }

  &__item {
    background: $dark;
    transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;
    color: #CECFE9;
    padding: 80px 33px;
    text-align: left;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 20px;

    @include media-breakpoint-up(xl) {
      padding: 90px 100px;
    }

    @include media-breakpoint-up(lg) {
      padding: 90px 80px;
    }

    @include media-breakpoint-up(md) {
      padding: 80px 57px;
    }

    @include media-breakpoint-up(sm) {
      margin-right: 5px;
    }

    &:hover {
      background: $white;
      color: $black;
    }

    &:hover &__title {
      color: $blaker;
    }

    &:hover &__stack-main__unit {
      color: $scarleter;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    &:hover &__stack-other {
      color: $grayer;
    }

    &:hover &__stack-other__title {
      color: $browner;
    }

    &__title {
      transition: color 0.5s;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.02em;
      color: $white;
      margin-bottom: 10px;

      @include media-breakpoint-up(lg) {
        font-size: 21px;
      }
    }

    &__text {
      line-height: 140%;
      margin-bottom: 30px;

      @include media-breakpoint-up(lg) {
        font-size: 15px;
      }
    }

    &__stack-main {

      &__unit {
        transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;
        display: inline-block;
        padding: 6px 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        border-radius: 3px;
        color: $white;
        font-weight: 500;
        margin-bottom: 5px;

        &:hover {
          background: $scarleter;
          color: $white !important;
        }

        @include media-breakpoint-up(lg) {
          font-size: 16px;
        }
      }
    }

    &__stack-other {
      padding-top: 5px;
      font-size: 14px;

      &__title {
        transition: color 0.5s;
        color: $white;
      }
    }
  }
}
</style>
