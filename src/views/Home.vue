<template>
  <v-layout
    column
    id="home-page">
    <MainBackground/>

    <v-layout wrap>
      <v-layout
        column
        align-center
        justify-center
        class="white-block">
        <span class="block-title font70 mb-4">Wat leuk dat we deze reis samen aan gaan</span>
        <span class="block-text">Zoek je de juiste handvatten om echt door te zetten? Ben jij klaar voor de volgende stap in je carrière? Ik geloof in jouw succes! Samen gaan we aan de slag met ingrediënten voor persoonlijke groei.</span>
        <span class="block-name"><b>Angelien Landstra –</b> Founder Leadership Solutions</span>
      </v-layout>

      <div class="image-block">
        <img src="@/assets/images/main-1.png"/>
      </div>
    </v-layout>

    <v-layout wrap>
      <div class="image-block">
        <img src="@/assets/images/main-2.png"/>
      </div>

      <v-layout
        column
        align-center
        justify-center
        class="color-block">
        <span class="block-title font70 mb-4">Ieder deel van de training heeft een werkboek</span>
        <span class="block-text">Zo verdiep je de materie en krijg je praktische opdrachten om het geleerde meteen in de praktijk te brengen.</span>

        <v-btn
          outlined x-large
          color="white"
          class="align-self-start">
          Download het eerste werkboek
        </v-btn>
      </v-layout>
    </v-layout>
      
    <v-layout wrap>
      <v-layout
        column
        align-center
        justify-center
        class="white-block">
        <span class="block-title font70 mb-4">Spraakmakende webinars & events</span>
        <span class="block-text">In het programma wordt je geregeld uitgenodigd voor webinars, ask-me-anything calls en live events. Heb je gerichte vragen of uitdagingen? Stel ze in de webinars en je krijgt persoonlijk advies.</span>
      </v-layout>

      <div class="image-block">
        <img src="@/assets/images/main-3.png"/>
      </div>
    </v-layout>
      
    <v-layout wrap>
      <div class="image-block">
        <img src="@/assets/images/main-4.png"/>
      </div>

      <v-layout
        column
        align-center
        justify-center
        class="color-block">
        <span class="block-title font70 mb-4">Leer met iedere device, waar je ook bent op eigen tempo</span>
        <span class="block-text">Wisselen van laptop naar tablet of mobiel? Geen enkel probleem! Log in met je andere device en je kunt meteen verder waar je gebleven was. Wel zo handig.</span>
      </v-layout>      
    </v-layout>

    <v-layout
      align-center
      justify-center
      class="font70 font-weight-bold text-trainers text-center">
      Over de trainers
    </v-layout>

    <v-layout
      column
      align-center
      class="bottom-section">

      <v-layout
        wrap
        class="trainer-row">

        <v-layout
          column
          align-center
          justify-center
          class="trainer-container color-block">
          <v-avatar
            size="144">
            <img src="@/assets/images/trainer-avatar.png"/>
          </v-avatar>

          <span class="trainer-name font-weight-bold text-center my-6">Angelien Landstra</span>          
          <span class="trainer-desc text-center">Executive trainer & coach met meer dan 20 jaar ervaring op het gebied van leiderschap- en team ontwikkeling.</span>          
        </v-layout>

        <div class="image-block">
          <img src="@/assets/images/main-5.png"/>
        </div>
      </v-layout>

      <span class="text-time font-weight-bold mt-10">{{ currentTime }}</span>
      <span class="font70 font-weight-bold text-center">Your journey starts now</span>
      <v-btn
        class="code-button my-10"
        outlined x-large
        color="black">
        Geef je code door
      </v-btn>
    </v-layout>

    <v-footer
      color="black"
      dark
      class="footer d-flex flex-column justify-center align-center">
      <img src="@/assets/images/logo.svg"/>

      <v-layout class="mt-11 social-icons justify-space-between flex-grow-0">
        <img width="30" height="30" src="@/assets/images/social-1.svg"/>
        <img width="30" height="30" src="@/assets/images/social-2.svg"/>
        <img width="30" height="30" src="@/assets/images/social-3.svg"/>
      </v-layout>
    </v-footer>
  </v-layout>
</template>

<script>
import moment from 'moment'
import MainBackground from '@/components/MainBackground'

export default {
  name: 'Home',
  components: {
    MainBackground
  },
  data () {
    return {
      timer: null,
      currentTime: null
    }
  },
  mounted () {
    this.timer = window.setInterval(() => {
      this.currentTime = moment().format('HH:mm:ss')
    }, 500)
  },
  beforeDestroy () {
    window.clearInterval(this.timer)
  }
}
</script>

<style lang="scss">
#home-page {
  button {
    text-transform: none !important;
  }

  .white-block,
  .color-block {
    padding: 8%;

    .block-title {
      font-family: Neuton;
      font-weight: bold;
      line-height: 1;
      word-break: break-all;
    }

    .block-text {
      @media screen and (max-width: 600px) {
        font-size: 18px;
      }

      @media screen and (min-width: 600px) {
        font-size: 35px;
      }
    }

    .block-name {
      @media screen and (max-width: 600px) {      
        margin-top: 40px;
        font-size: 13px;
      }

      @media screen and (min-width: 600px) {
        margin-top: 80px;
        font-size: 27px;
      }
    }

    button {
      margin-top: 48px;
    }
  }

  .white-block,
  .color-block,
  .image-block {
    width: 50%;
    min-width: 360px;
    max-width: 100%;
  }

  .image-block {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .color-block {
    background-color: #256d7e;
    color: white;
  }

  .text-trainers {
    background-color: #fcfafa;
    font-family: Neuton;

    @media screen and (max-width: 600px) {
      height: 150px;
    }

    @media screen and (min-width: 600px) {
      height: 331px;      
    }
  }

  .bottom-section {
    font-family: Neuton;

    .trainer-row {
      max-width: 1380px;

      .trainer-container {
        padding: 4%;
      }

      .trainer-name {
        @media screen and (max-width: 600px) {      
          font-size: 25px;
        }

        @media screen and (min-width: 600px) {
          font-size: 49px;
        }
      }

      .trainer-desc {
        @media screen and (max-width: 600px) {      
          font-size: 20px;
        }

        @media screen and (min-width: 600px) {
          font-size: 40px;
        }

        font-family: Roboto;        
      }      
    }

    .text-time {
      @media screen and (max-width: 600px) {      
        font-size: 45px;
      }

      @media screen and (min-width: 600px) {
        font-size: 90px;
      }
    }

    button {
      @media screen and (min-width: 600px) {
        width: 392px;
      }
    }
  }

  .footer {
    height: 235px;

    @media screen and (min-width: 600px) {
      margin-top: 80px;
    }

    .social-icons {
      width: 180px;
    }
  }
}
</style>
