<template>
  <div>
    <header class="container musthead">
      <h1 class="musthead__title">
        <span class="musthead__underliner">Production</span>-focused Development <span class="musthead__underliner musthead__title__team">Team</span>
      </h1>
      <div class="row musthead__about">
        <div class="col-2 col-sm-1 order-sm-1">
          <h3 class="musthead__about__title">
            About
          </h3>
        </div>
        <div class="col-10 col-sm-5 order-sm-2 col-md-6 col-lg-5">
          <p class="musthead__about__text">
            {{ about[0] }}
          </p>
        </div>
        <div class="offset-sm-1 order-sm-3 d-none d-sm-block d-md-none" />
        <div class="offset-2 d-block d-sm-none" />
        <div class="col-10 col-sm-4 order-sm-6 order-md-3 col-lg-3 ">
          <p class="musthead__about__text">
            {{ about[1] }}
          </p>
        </div>
        <div class="offset-lg-3 order-lg-4 d-md-none d-lg-block" />
        <div class="offset-lg-1 order-lg-4 d-md-none d-lg-block" />
        <div class="col-12 col-sm-5 order-sm-4 order-md-4 col-md-4 col-lg-3">
          <div class="musthead__about__item">
            <p class="musthead__about__item__text">
              <span class="break-line">{{ advantages[0][0] }}</span><span class="break-line">{{ advantages[0][1] }}</span>
            </p>
          </div>
        </div>
        <div class="offset-sm-1 order-sm-5 d-none d-sm-block d-md-none" />
        <div class="offset-sm-2 order-sm-7 d-none d-sm-block d-md-none" />
        <div class="col-12 col-sm-5 order-sm-8 col-md-4">
          <div class="musthead__about__item musthead__about__item-centre">
            <p class="musthead__about__item__text">
              <span class="break-line">{{ advantages[1][0] }}</span><span class="break-line">{{ advantages[1][1] }}</span>
            </p>
          </div>
        </div>
        <div class="offset-sm-7 order-sm-9 d-none d-sm-block d-md-none" />
        <div class="col-12 col-sm-5 order-sm-10 mr-sm-auto col-md-4 col-lg-3">
          <div class="musthead__about__item musthead__about__item-last">
            <p class="musthead__about__item__text">
              <span class="break-line">{{ advantages[2][0] }}</span><span class="break-line">{{ advantages[2][1] }}</span>
            </p>
          </div>
        </div>
      </div>
    </header>
    <section class="container services">
      <div class="row">
        <div v-for="(s, i) in services" :key="i" class="col-12 col-sm-6 col-lg-3">
          <div class="services__item services__item-consulting" :class="s.icon">
            <h3 class="services__item__title">
              {{ s.title }}
            </h3>
            <p class="services__item__text">
              {{ s.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Team />
    <Projects />
    <section class="container partners">
      <h2 class="section-header">
        {{ partners.title }}
      </h2>
      <div class="row">
        <div class="col-sm-5 order-sm-2 partners__logos">
          <a v-for="(p, i) in partners.partners" :key="i" :href="p.url" target="_blank">
            <img :src="require(`~/assets/images/partners/${p.logo}`)" :alt="p.name">
          </a>
        </div>
        <div class="offset-sm-1 order-sm-1" />
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 order-sm-0">
          <p class="partners__text">
            {{ partners.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Projects from '@/components/projects'
import Team from '@/components/team'

interface Service {
  title: string
  description: string
  icon: string
}

interface Partner {
  name: string
  logo: string
  url: string
}

export default Vue.extend({
  components: {
    Team,
    Projects
  },
  data () {
    return {
      about: [
        `We combine proven methodologies, business domain knowledge and technology
expertise of skilled software professionals to deliver highly optimized solutions and
services across wide range of industry domains.`,
        `Our projects are different, but all of
them share the need to have a software solution.`
      ],
      advantages: [
        [
          'Experienced',
          'and cross-functional'
        ],
        [
          'Modern stack',
          '(latest technology trends)'
        ],
        [
          'Trusted',
          'development partner'
        ]
      ],
      services: [
        {
          title: 'Technical Consulting',
          description: 'Advice on the strategic employment of modern technologies based on a thorough analysis and experience.',
          icon: 'icon-consulting'
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Using DevOps best practises to design and implement most related solutions for all major cloud providers.',
          icon: 'icon-cloud'
        },
        {
          title: 'Machine Learning',
          description: 'Artificially intelligent machines are able to sift through and interpret massive amounts of data from various sources to carry out a wide range of tasks.',
          icon: 'icon-ml'
        },
        {
          title: 'Blockchain Developing',
          description: 'Decentralized applications and distributed services powered by public and private blockchain networks.',
          icon: 'icon-blockchain'
        }
      ] as Service[],
      partners: {
        title: 'Partners',
        description: 'We are proud of our partners who support us every step of the way.',
        partners: [
          {
            name: 'kickstox',
            logo: 'kickstox.svg',
            url: 'https://kickstox.com'
          },
          {
            name: 'snark',
            logo: 'snark.svg',
            url: 'https://snark.art'
          },
          {
            name: 'lime',
            logo: 'lime.svg',
            url: 'http://lime-expo.ru'
          },
          {
            name: 'regionconsalt',
            logo: 'regionconsalt.png',
            url: 'http://regionc.ru'
          }
        ] as Partner[]
      }
    }
  }
})

</script>

<style lang="scss">
@import "../assets/styles/main";

.musthead {
  padding-top: 143px;
  padding-bottom: 122px;

  @include media-breakpoint-only(md) {
    padding-bottom: 130px;
  }

  @include media-breakpoint-down(sm) {
    padding-bottom: 80px;
  }

  &__underliner {
    // TODO need corner radius for underline
    text-decoration: underline;
    text-decoration-color: $scarleter;
    cursor: pointer;
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

    &__team {
      @include media-breakpoint-down(xs) {
        display: block;
      }
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
      margin-top: 4px;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 150%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $grayer;

      @include media-breakpoint-down(md) {
        font-size: 10px;
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
      padding: 25px 0 25px 32px;
      border-radius: 10px;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 120%;
      color: $white;

      &:hover {
        background: $white;
        color: $darker;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }

      @include media-breakpoint-up(lg) {
        font-size: 18px;
      }

      @include media-breakpoint-up(md) {
        margin-top: 99px;
      }

      @include media-breakpoint-only(md) {
        padding-left: 57px;
      }

      @include media-breakpoint-only(sm) {
        font-size: 14px;
        margin-bottom: 23px;
        padding-left: 45px;
      }

      @include media-breakpoint-only(xs) {
        font-size: 16px;
        margin-bottom: 10px;
      }

      &__text {
        padding-left: 24px;
        background: transparent url("~assets/images/bullet.svg") no-repeat 0 5px;

        @include media-breakpoint-up(sm) {
          padding-left: 21px;
        }
      }
    }

    &__item-centre {
      @include media-breakpoint-up(lg) {
        padding-left: 55px;
      }

      @include media-breakpoint-only(md) {
        padding-left: 37.5px;
      }

      @include media-breakpoint-only(sm) {
        margin-top: -67px;
        padding-left: 28.5px;
      }
    }

    &__item-last {
      @include media-breakpoint-only(sm) {
        margin-top: -67px;
      }
    }
  }
}

.services {
  padding-bottom: 50px;
  border-bottom: 1px solid $lighter;

  @include media-breakpoint-up(sm) {
    border-top: 1px solid $lighter;
    padding-top: 80px;
  }

  @include media-breakpoint-up(lg) {
    padding-top: 100px;
  }

  &__item {
    margin-bottom: 50px;
    padding-left: 56px;

    @include media-breakpoint-up(lg) {
      padding-left: 0;
      padding-top: 56px;
    }

    &__title {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
      letter-spacing: -0.02em;
      color: $darker;
      margin-bottom: 5px;
    }

    &__text {
      font-size: 14px;
      line-height: 140%;
      color: $browner;

      @include media-breakpoint-up(lg) {
        padding-right: 10px;
      }
    }
  }
}

.partners {
  padding: 110px 0 140px 0;

  @include media-breakpoint-only(xs) {
    padding-top: 186px;
  }

  @include media-breakpoint-only(sm) {
    padding-top: 120px;
  }

  &__text {
    line-height: 170%;

    @include media-breakpoint-only(xs) {
      text-align: center;
      line-height: 150%;
    }
  }

  &__logos {

    @include media-breakpoint-only(xs) {
      text-align: center;
      padding: 40px 0 34px 0;
    }

    img {
      margin-right: 30px;
      height: 40px;
    }
  }
}

.icon-consulting {
  background: transparent url("~assets/images/services/consulting.svg") no-repeat 0 2px;
}

.icon-cloud {
  background: transparent url("~assets/images/services/cloud.svg") no-repeat 0 2px;
}

.icon-ml {
  background: transparent url("~assets/images/services/ml.svg") no-repeat 0 2px;
}

.icon-blockchain {
  background: transparent url("~assets/images/services/blockchain.svg") no-repeat 0 2px;
}
</style>
