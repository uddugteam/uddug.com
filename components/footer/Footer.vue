<template>
  <footer id="footer" class="mustfooter">
    <!--<div class="mustfooter__contacts container">
      <div class="row">
        <div class="col-12 col-md-4">
          <h2 class="mustfooter__contacts__title">
            Got any ideas?<span class="mustfooter__contacts__title__break"> Let’s talk.</span>
          </h2>
        </div>
        <div class="offset-lg-1" />
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="mustfooter__contacts__form">
            <label for="contactName">Name</label>
            <input id="contactName" type="text" placeholder="John Silver">
            <label for="contactEmail">E-mail</label>
            <input id="contactEmail" type="email" placeholder="example@mail.com">
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="mustfooter__contacts__form">
            <label for="contactThoughts">Thoughts</label>
            <textarea id="contactThoughts" placeholder="Tell us your thoughts" />
            <button id="contactSubmit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>-->
    <div class="mustfooter__bottom container">
      <div class="row">
        <div class="col-sm-auto mr-sm-auto col-12 order-1">
          <p class="copyrights">
            Uddùg team ©, 2013-2020
          </p>
        </div>
        <div class="col-sm-auto mustfooter__bottom__social col-6 order-4 order-sm-2">
          <img class="mustfooter__bottom__social__icon" src="~/assets/images/social/facebook-footer.svg" alt="facebook">
          <img class="mustfooter__bottom__social__icon" src="~/assets/images/social/linkedin-footer.svg" alt="linkedin">
          <img class="mustfooter__bottom__social__icon" src="~/assets/images/social/twitter-footer.svg" alt="twitter">
          <img class="mustfooter__bottom__social__icon" src="~/assets/images/social/github-footer.svg" alt="github">
        </div>
        <div class="col-sm-auto col-12 order-2 order-sm-3">
          <p class="mustfooter__bottom__contact icon-mail">
            <a href="mailto:info@uddug.com">
              info@uddug.com
            </a>
          </p>
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
  color: $white;
  font-size: 14px;
  line-height: 100%;

  &__contacts {
    padding: 134px 0 79px;

    @include media-breakpoint-only(sm) {
      padding: 85px 0 127px;
    }

    @include media-breakpoint-only(xs) {
      padding: 64px 0;
    }

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 42px;
      line-height: 110%;
      letter-spacing: -0.03em;

      @include media-breakpoint-down(md) {
        font-size: 32px;
      }

      @include media-breakpoint-only(sm) {
        margin-bottom: 38px;
      }

      @include media-breakpoint-only(xs) {
        margin-bottom: 40px;
        font-size: 24px;
      }

      &__break {
        @include media-breakpoint-up(md) {
          display: block;
        }
      }
    }

    &__form {
      font-family: 'PT Sans', sans-serif;
      margin-right: 10px;

      label {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 17px;
        margin-bottom: 3px;
      }

      input, label, textarea, button {
        display: block;
      }

      input, textarea {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid $darker;
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 14px;
        line-height: 18px;
        background: none;
        color: $bluer;
      }

      input {
        padding: 11px 12px;
      }

      textarea {
        resize: none;
        height: 120px;
        padding: 15px 12px;

        @include media-breakpoint-only(xs) {
          margin-bottom: 16px;
        }
      }

      button {
        background: $white;
        width: 100%;
        text-align: center;
        border: none;
        border-radius: 3px;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        color: $dark;
        line-height: 17px;
        padding: 12px 0 11px 0;

      }
    }
  }

  &__bottom {
    padding: 28px 0 110px 0;
    border-top: 1px solid $darker;

    @include media-breakpoint-only(md) {
      padding-bottom: 98px;
    }

    @include media-breakpoint-only(sm) {
      padding: 32px 0 52px 0;
    }

    @include media-breakpoint-only(xs) {
      padding: 32px 0 45px 0;
    }

    a {
      color: inherit !important;

      &:hover {
        color: $scarleter !important;
      }
    }

    &__social {
      @include media-breakpoint-only(xs) {
        padding-left: 12px;
      }

      &__icon {
        margin-right: 40px;

        @include media-breakpoint-only(sm) {
          margin-right: 30px;
        }

        @include media-breakpoint-only(xs) {
          margin-right: 12px;
        }
      }
    }

    p {
      padding-top: 4px;
    }
  }
}

.copyrights {
  @include media-breakpoint-only(xs) {
    margin-bottom: 22px;
  }
}

.icon-mail {
  background: transparent url("~assets/images/communications/email.svg") no-repeat;
  padding-left: 28.25px;
  margin-right: 42px;

  @include media-breakpoint-only(sm) {
    margin-right: 30px;
  }

  @include media-breakpoint-only(xs) {
    margin-bottom: 18px;
  }
}

.icon-phone {
  background: transparent url("~assets/images/communications/call.svg") no-repeat;
  padding-left: 26.37px;
}
</style>
