<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">
        Projects<span class="projects__title__and">and</span>
        <span class="projects__title__technologies">Technologies</span>
      </h2>
      <div class="row">
        <div v-for="p in projects" :key="p.name" class="col-12 col-sm-6">
          <div class="projects__item">
            <p v-if="p.current" class="projects__item__current">
              active development <span class="mark-ellipse" />
            </p>
            <div class="row">
              <div class="col-auto mr-auto">
                <h3 class="projects__item__title">
                  {{ p.name }}
                </h3>
              </div>
              <div class="col-auto">
                <a v-if="p.url !== ''" class="projects__item__link d-md-block d-none" :href="p.url" target="_blank">
                  Visit project →
                </a>
              </div>
            </div>
            <p class="projects__item__text">
              {{ p.description }}
              
            </p>
            <div class="projects__item__stack-main">
              <div v-for="(t, i) in p.stack.main" :key="i" class="projects__item__stack-main__unit">
                {{ t }}
              </div>
            </div>
            <div class="projects__item__stack-other">
              <span class="projects__item__stack-other__title">Other Technologies:</span>
              <span v-for="(t, i) in p.stack.other" :key="i" class="projects__item__stack-other__unit">
                {{ t }}<span v-if="i !== Object.keys(p.stack.other).length - 1">, </span>
              </span>
            </div>
            <a v-if="p.url !== ''" class="projects__item__link d-md-none" :href="p.url" target="_blank">
              Visit project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

interface Project {
  current: boolean,
  name: string,
  url: string,
  description: string,
  stack: {
    main: string[],
    other: string[]
  }
}

export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          current: true,
          name: 'Health Consul',
          description: 'Platform performs real-time medical data deep analisis and automate decisions using machine learning algoritms. System empowers patients, providers, and payers delivering a highly connected, seamless experience along every step in the care journey. Peer-to-peer database architecture provides secure and anonymous data.',
          stack: {
            main: [
              'Rust',
              'Substrate',
              'Polkadot',
              'IPFS',
              'GKE',
              'Healthcare.ai',
              'React',
              'Terraform'
            ],
            other: [
              'LibP2P',
              'POA',
              'Python',
              'Swagger',
              'Kubernetes',
              'GCP',
              'Docker'
            ]
          },
          url: ''
        },
        {
          current: true,
          name: 'Jun::Db',
          description: 'Substrate pallet provides a configurable database module with allowance to store and  manipulate a big amount of data. It's a very highload action to store large amounts of data on-chain. The most-common and useful solution for decentralised apps is to use IPFS as a data storage and store on-chain only hashes. Our team inspired by the OrbitDB focuses on the scalability, decentralised, easy-learning solution for Substrat developers. that want to manipulate big amounts of data easily. Available storage data types: key-value and hash.',
          stack: {
            main: [
              'Rust',
              'Substrate',
              'Offchain::ipfs',
              'IPFS',
            ]
          },
          url: ''
        },
        {
          name: 'Kickstox',
          description: 'Football trading game. The platform aims to become the online reference point for football fans and allows you to trade your favourite players from your favourite football teams, analize stats (in real time), and challenge your friends.',
          stack: {
            main: [
              'Go',
              'PostgreSql',
              'RabbitMq',
              'GKE',
              'Terraform',
              'React',
              'MQTT'
            ],
            other: [
              'Microservices',
              'Nats',
              'Redis',
              'Kubernetes',
              'GCP',
              'Swagger',
              'Docker',
              'GRPC',
              'Ansible'
            ]
          },
          url: 'https://kickstox.com'
        },
        {
          name: 'Snark.art',
          description: 'Snark.art uses the power of blockchain as a creative media to change the way art is made and collected.',
          stack: {
            main: [
              'Go',
              'Ethereum',
              'Solidity',
              'Nats',
              'GRPC',
              'PostgreSql',
              'Swagger',
              'React',
              'EKS'
            ],
            other: [
              'Node.js',
              'Microservices',
              'Redis',
              'AWS',
              'Kubernetes',
              'S3',
              'Docker',
              'Next.js',
              'Web3.js',
              'Angular2',
              'stripe',
              'ffmpeg'
            ]
          },
          url: 'https://snark.art'
        },
        {
          name: 'Zam Zam',
          description: 'Digital bank realises international money transfers based on blockchain technology with a hybrid billing architecture, includes exchange (fiat/digytal currency) and credit cards services.',
          stack: {
            main: [
              'Go',
              'Stellar',
              'Ethereum',
              'Bitcoin',
              'GRPC',
              'PostgreSql',
              'Vue.js',
              'Swift',
              'Kotlin'
            ],
            other: [
              'Redis',
              'Kubernetes',
              'Microservices',
              'Nats',
              'Docker',
              'Nuxt.js',
              'MVVC',
              'Viper'
            ]
          },
          url: 'https://zam.io'
        },
        {
          name: 'ICEX',
          description: 'Cryptocurrency exchange with various trading sectors and opportunity to be a company sub-broker. Platform properly includes a group of site-projects to create a full-fledged financial ecosystem including: wallets, funds, indicative tools, analytical center, trading core.',
          stack: {
            main: [
              'C++',
              'Go',
              'PHP',
              'Laravel',
              'Ethereum',
              'Solidity',
              'Bitcoin',
              'Vue.js',
              'HighCharts',
              'Redis'
            ],
            other: [
              'PostgreSql',
              'Docker',
              'Nuxt.js',
              'Litecoin',
              'Ripple',
              'Stellar',
              'Monero',
              'Dash',
              'Dogecoin',
              'Iota',
              'Cardano'
            ]
          },
          url: 'https://github.com/icexch'
        },
        {
          name: 'Your Ads Media',
          description: 'RTB ad network allows publishers to place promotional materials on the advertisers channels and to pay with cryptocurrencies, also via credit cards services.',
          stack: {
            main: [
              'PHP',
              'Laravel',
              'Bitcoin',
              'JavaScript',
              'Redis'
            ],
            other: [
              'Jquery',
              'Mysql',
              'D3.js'
            ]
          },
          url: ''
        },
        {
          name: 'Cryptozaur',
          description: 'Platform allows to create unlinited amount of crypto-faucets and to receive passive income, or allows to invest and interact with other faucets. System based on micro payments (x4 coins). 2014 award - the world top 10 faucets.',
          stack: {
            main: [
              'PHP',
              'Laravel',
              'Bitcoin',
              'JavaScript',
              'Redis'
            ],
            other: [
              'Jquery',
              'Mysql',
              'Litecoin',
              'Dogecoin'
            ]
          },
          url: ''
        },
        {
          name: 'Rum boutique',
          description: 'Business processes optimisation for all divisions within the ininternational company working with rum distribution (e-commerce, promotional, loyalty, accounting, stock, control and security).',
          stack: {
            main: [
              'PHP',
              'Laravel',
              'Mysql',
              'JavaScript'
            ],
            other: [
              'Jquery',
              'Symphony',
              'Redis'
            ]
          },
          url: ''
        }
      ] as Project[]
    }
  }
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
      letter-spacing: 0;
    }
  }

  &__item {
    background: $dark;
    transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;
    color: #CECFE9;
    padding: 80px 33px 0;
    text-align: left;
    border-radius: 10px;
    font-size: 14px;
    margin-bottom: 20px;
    user-select: none;
    height: 545px;

    @include media-breakpoint-only(xl) {
      padding: 90px 100px;
    }

    @include media-breakpoint-only(lg) {
      padding: 90px 80px;
    }

    @include media-breakpoint-only(md) {
      padding: 80px 57px;
    }

    @include media-breakpoint-only(sm) {
      margin-right: 5px;
      height: 570px;
      padding-bottom: 29px;
    }

    @include media-breakpoint-only(xs) {
      height: auto;
      padding-bottom: 33px;
    }

    &:hover {
      background: $white;
      color: $black;
    }

    &:hover &__title {
      color: $blaker;
    }

    &:hover &__link {
      color: $scarleter;
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

    &:hover &__current {
      color: $scarleter;
    }

    &:hover .mark-ellipse {
      background-color: $scarleter;
    }

    &__current {
      transition: color 0.5s;
      color: #00FF19;
      font-size: 14px;
      line-height: 150%;
      vertical-align: middle;
      margin-bottom: 30px;
      margin-top: -25px;
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

    &__link {
      transition: color 0.2s, text-decoration 0.2s;
      color: $bluer;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      text-decoration: underline;

      &:hover {
        color: $dark !important;
        text-decoration: none;
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
        margin-right: 5px;

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

      margin-bottom: 20px;
    }
  }
}

.mark-ellipse {
  transition: background-color 0.5s;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #00FF19;
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px;
}
</style>
