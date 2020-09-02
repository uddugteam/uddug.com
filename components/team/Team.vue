<template>
  <section class="team">
    <div class="container">
      <div class="row">
        <div class="col-auto mr-sm-auto team__title">
          <h2 class="section-header">
            Team
          </h2>
        </div>
        <div class="col-auto">
          <div class="slider-control d-none d-sm-block">
            <div class="slider-control__arrow" @click="showPrev">
              <i class="icon-left-arrow" />
            </div>
            <div class="slider-control__arrow" @click="showNext">
              <i class="icon-right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel">
      <VueSlickCarousel ref="carousel" v-bind="slickOptions">
        <div v-for="t in team" :key="t.name">
          <div class="carousel__item">
            <img class="carousel__item__image" :src="require(`~/assets/images/team/${t.photo}`)" :alt="t.name">
            <h2 class="carousel__item__name">
              {{ t.name }}
            </h2>
            <h3 class="carousel__item__position">
              {{ t.position }}
            </h3>
            <ul class="carousel__item__roles">
              <li v-for="r in t.roles" :key="r">
                {{ r }}
              </li>
            </ul>
            <div class="carousel__item__social">
              <a v-for="s in t.social" :key="s.type" :href="s.link" target="_blank" class="carousel__item__social__icon">
                <i :class="`icon-${s.type}`" />
              </a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'Team',
  data () {
    return {
      team: [
        {
          name: 'Andrew Skurlatov',
          photo: 'as.jpg',
          position: 'Technical Lead',
          roles: [
            'Architecture design',
            'Backend',
            'Blockchain'
          ],
          social: [
            {
              type: 'facebook',
              link: 'https://www.facebook.com/andrey.skurlatov'
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/andrew-skurlatov/'
            },
            {
              type: 'github',
              link: 'https://github.com/andskur'
            },
            {
              type: 'twitter',
              link: 'https://twitter.com/Andskur1'
            }
          ]
        },
        {
          name: 'Mike Manko',
          photo: 'mm.jpg',
          position: 'Head of Product',
          roles: [
            'Project Management',
            'Business Development',
            'Strategic planning'
          ],
          social: [
            {
              type: 'facebook',
              link: 'https://www.facebook.com/stones.rolling.31'
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/mikhail-manko-97a491a2/'
            },
            {
              type: 'github',
              link: 'https://github.com/MikeMS-sys'
            }
          ]
        },
        {
          name: 'Ivan Podtsebnev',
          photo: 'ip.jpg',
          position: 'DevOps Engineer',
          roles: [
            'DevOps',
            'Cloud Infrastructure',
            'Security'
          ],
          social: [
            {
              type: 'facebook',
              link: 'https://www.facebook.com/ivan.podtsebnev'
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/naykip/'
            },
            {
              type: 'github',
              link: 'https://github.com/naykip'
            }
          ]
        },
        {
          name: 'Nikita Velko',
          photo: 'nv.jpg',
          position: 'Senior Frontend Developer',
          roles: [
            'Frontend',
            'Architecture Design',
            'Real-time UX'
          ],
          social: [
            {
              type: 'facebook',
              link: 'https://www.facebook.com/n1ckgreat'
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/nikichv/'
            },
            {
              type: 'github',
              link: 'https://github.com/nikichv'
            }
          ]
        },
        {
          name: 'Constantine Czerniak',
          photo: 'cc.jpg',
          position: 'Data Scientist',
          roles: [
            'Machine Learning',
            'Data Science',
            'Neural Networking'
          ],
          social: [
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/сczerniak/'
            },
            {
              type: 'github',
              link: 'https://github.com/nikichv'
            }
          ]
        },
        {
          name: 'Anuar Zhumaev',
          photo: 'az.jpg',
          position: 'Lead Designer',
          roles: [
            'Product Design',
            'Art-Direction',
            'Concepting'
          ],
          social: [
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/yxorama/'
            }
          ]
        }
      ],
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '520px',
        autoplay: true,
        responsive: [
          {
            breakpoint: 1921,
            settings: {
              centerPadding: '350px'
            }
          },
          {
            breakpoint: 1800,
            settings: {
              centerPadding: '220px'
            }
          },
          {
            breakpoint: 1600,
            settings: {
              centerPadding: '180px'
            }
          },
          {
            breakpoint: 1500,
            settings: {
              centerPadding: '130px'
            }
          },
          {
            breakpoint: 1440,
            settings: {
              centerPadding: '100px'
            }
          },
          {
            breakpoint: 1281,
            settings: {
              centerPadding: '80px'
            }
          },
          {
            breakpoint: 1112,
            settings: {
              centerPadding: '5px'
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: '20px'
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              centerPadding: '20px'
            }
          },
          {
            breakpoint: 426,
            settings: {
              slidesToShow: 1,
              centerPadding: '50px'
            }
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              centerPadding: '30px'
            }
          },
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              centerPadding: '0px'
            }
          }
        ]
      }
    }
  },
  methods: {
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main";

.team {
  padding: 100px 0 80px 0;

  @include media-breakpoint-only(md) {
    padding-bottom: 117px;
  }

  @include media-breakpoint-only(sm) {
    padding-bottom: 60px;
  }

  @include media-breakpoint-only(xs) {
    padding-bottom: 55px;
  }

  &__title {
    @include media-breakpoint-down(xs) {
      margin: auto;
    }
  }
}

.carousel {
  padding-top: 50px;

  @include media-breakpoint-only(sm) {
    padding-top: 17px;
  }

  @include media-breakpoint-only(xs) {
    padding-top: 20px;
  }

  &__item {
    transition: margin-top 0.5s, box-shadow 0.5s;
    height: 539px;
    width: 285px;
    margin: auto auto 60px;
    padding-top: 51px;
    border: 1px solid $lighter;
    box-sizing: border-box;
    border-radius: 15px;
    text-align: center;

    @include media-breakpoint-only(lg) {
      width: 265px;
    }

    @include media-breakpoint-only(md) {
      width: 211px;
    }

    @include media-breakpoint-only(sm) {
      width: 202px;
    }

    @include media-breakpoint-between(sm, md) {
      height: 448px;
    }

    &:hover {
      box-shadow: 0 30px 40px rgba(0, 0, 0, 0.1);
      margin-top: -10px;
      border: none;
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

      &__icon {
        transition: color 0.2s;
        display: inline !important;
        margin: 0 6px !important;
        color: $darker;
        font-size: 30px;

        &:hover {
          color: $scarleter;
        }
      }
    }
  }
}

.slider-control {
  padding-top: 15px;

  &__arrow {
    transition: color 0.2s;
    width: 15px;
    height: 22px;
    display: inline-block;
    margin-left: 50px;
    font-size: 22px;

    &:hover {
      color: $scarleter;
    }

    i {
      cursor: pointer !important;
      user-select: none;
    }
  }
}
</style>
