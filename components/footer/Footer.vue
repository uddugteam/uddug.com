<template>
  <footer id="footer" class="mustfooter">
    <div class="mustfooter__contacts container">
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
            <input id="contactName" v-model="form.name.value" type="text" placeholder="John Silver" :class="{ inputerror: form.name.error }">
            <label for="contactEmail">E-mail</label>
            <input id="contactEmail" v-model="form.email.value" type="email" placeholder="example@mail.com" :class="{ inputerror: form.email.error }">
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="mustfooter__contacts__form">
            <label for="contactThoughts">Thoughts</label>
            <textarea id="contactThoughts" v-model="form.message.value" placeholder="Tell us your thoughts" :class="{ inputerror: form.message.error }" />
            <button id="contactSubmit" @click="sendMail()">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mustfooter__bottom container">
      <div class="row">
        <div class="col-sm-auto mr-sm-auto col-12 order-1">
          <p class="copyrights">
            {{ copyrights }}
          </p>
        </div>
        <div class="col-sm-auto mustfooter__bottom__social col-6 order-4 order-sm-2">
          <a v-for="s in bottom.social" :key="s.type" :href="s.link" target="_blank" class="mustfooter__bottom__social__icon">
            <i :class="`icon-${s.type}`" />
          </a>
        </div>
        <div class="col-sm-auto col-12 order-2 order-sm-3">
          <p class="mustfooter__bottom__contact">
            <a :href="`mailto:${bottom.mail}`" class="mustfooter__bottom__contact__link">
              <i class="icon-email mustfooter__bottom__contact__icon" /><span class="mustfooter__bottom__contact__text">{{ bottom.mail }}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="js">
export default {
  name: 'Footer',
  data () {
    return {
      copyrights: 'Uddùg team © 2013-2020',
      form: {
        isSend: false,
        name: {
          error: false,
          value: ''
        },
        email: {
          error: false,
          value: ''
        },
        message: {
          error: false,
          value: ''
        }
      },
      bottom: {
        social: [
          {
            type: 'github',
            link: 'http://github.com/uddugteam'
          },
          {
            type: 'linkedin',
            link: 'https://www.linkedin.com/company/uddug'
          }
        ],
        mail: 'info@uddug.com'
      }
    }
  },
  methods: {
    sendMail () {
      this.form.name.error = this.form.name.value === ''
      this.form.message.error = this.form.message.value === ''
      this.form.email.error = this.form.email.value === '' || !this.validEmail(this.form.email.value)

      if (this.form.name.error || this.form.email.error || this.form.message.error) {
        console.warn('contact form has errors')
        return
      }

      this.$axios.setBaseURL('https://uddug.dev:8081')
      this.$axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

      this.$axios.post(
        '/contact',
        {
          email: this.form.email.value,
          name: this.form.name.value,
          message: this.form.message.value
        }
      )

      console.log('message have sent')
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
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
        transition: border-color 0.3s;
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

        &:hover {
          border-color: $white;
        }

        &:focus {
          outline: none;
          border-color: $darker;
        }
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
        transition: color 0.3s, background-color 0.3s;
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

        &:hover {
          background-color: $scarleter;
          color: $white;
        }

        &:active, &:focus {
          background-color: $skyer;
          color: $white;
          border: none;
          outline: none;
        }
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
      transition: color 0.2s, text-decoration 0.2s;
      color: inherit !important;

      &:hover {
        color: $scarleter !important;
      }

      &:active, &:focus {
        color: $skyer !important;
      }
    }

    &__social {
      @include media-breakpoint-only(xs) {
        padding-top: 22px;
      }

      &__icon {
        font-size: 23px;

        margin-right: 40px;

        @include media-breakpoint-only(sm) {
          margin-right: 30px;
        }

        @include media-breakpoint-only(xs) {
          margin-right: 12px;
        }
      }
    }

    &__contact {
      vertical-align: middle;
      &__icon {
        vertical-align: middle;
        display: inline-block;
        font-size: 20px;
      }

      &__text {
        vertical-align: middle;
        display: inline-block;

        &:hover {
          text-decoration: underline;
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
    padding-left: 5px;
  }
}

.inputerror {
  border-color: $scarleter !important;
  color: $scarleter;
}

</style>
