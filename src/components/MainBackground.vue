<template>
  <v-layout
    column
    justify-end
    align-center
    class="main-background white--text">

    <div class="text-hi-1 text-center font-weight-bold px-4 px-sm-0">
      Hi Marcel,<br/><br/>Welkom bij Leadership Solutions!
    </div>

    <div class="text-hi-2 text-center px-4 px-sm-0">
      Het platform waar jij kunt ontdekken hoe je succesvol kunt zijn op het gebied van leiderschap.
    </div>

    <v-btn
      outlined
      dark
      x-large
      class="my-4 my-sm-28 door text-none"
      to="/code">
      Geef je code door
    </v-btn>

    <v-layout
      justify-space-between wrap
      align-center
      flex-column flex-md-row
      class="bottom-container flex-grow-0 pa-4 py-sm-11 px-sm-35">

      <v-layout
        v-for="(item, index) in bottomText"
        :key="index"
        class="bottom-item flex-grow-0 pa-2">

        <img
          height="20"
          class="mr-4"
          src="@/assets/images/check-mark.svg">

        <span
          class="bottom-text font-weight-bold"
          v-html="item"/>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: 'MainBackground',
  data () {
    return {
      bottomText: [
        '24 lessen over<br/> persoonlijk leiderschap',
        'Ga verder waar je<br/> gebleven bent.',
        'Spraakmakende<br/> webinars en live events',
        'Inclusief werkboeken om<br/> verder te verdiepeIn'
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/vars.scss";

.main-background {
  width: 100%;

  background-image: url("~@/assets/images/background.png");
  background-size: cover;

  @media screen and (min-width: 600px) {
    height: calc(100vh - #{$topbarHeight});
  }

  .text-hi-1 {
    font-family: Neuton;

    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
    
    @media screen and (min-width: 600px) {
      font-size: 60px;
    }      
  }

  .text-hi-2 {
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
    
    @media screen and (min-width: 600px) {
      font-size: 30px;
    }      

    max-width: 850px;
  }

  .door {
    @media screen and (min-width: 600px) {
      width: 392px;
    }
  }

  .bottom-container {
    width: 100%;

    .bottom-item {
      .bottom-text {
        width: 230px;
        font-size: 20px;
        line-height: 1;
      }
    }
  }
}
</style>