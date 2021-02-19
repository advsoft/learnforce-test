<template>
  <v-layout
    column
    justify-end
    align-center
    class="main-background white--text">

    <div class="text-hi-1 text-center font-weight-bold">
      Hi Marcel,<br/><br/>Welkom bij Leadership Solutions!
    </div>

    <div class="text-hi-2 text-center">
      Het platform waar jij kunt ontdekken hoe je succesvol kunt zijn op het gebied van leiderschap.
    </div>

    <v-btn
      outlined
      dark
      x-large>
      Geef je code door
    </v-btn>

    <v-layout
      justify-space-between wrap
      align-center
      flex-column flex-md-row
      class="bottom-container flex-grow-0">

      <v-layout
        v-for="(item, index) in bottomText"
        :key="index"
        class="bottom-item flex-grow-0 pa-2">
        <img
          height="20"
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
    font-size: 60px;
  }

  .text-hi-2 {
    font-size: 30px;
    max-width: 850px;
  }

  button {
    @media screen and (max-width: 600px) {
      margin: 16px 0;
    }    

    @media screen and (min-width: 600px) {
      margin: 113px 0;    
      width: 392px;
    }
  }

  .bottom-container {
    width: 100%;

    @media screen and (max-width: 600px) {
      padding: 16px 16px;
    }    

    @media screen and (min-width: 600px) {    
      padding: 46px 142px;
    }

    .bottom-item {
      img {
        margin-right: 15px;
        margin-top: 0px;
      }

      .bottom-text {
        width: 230px;
        font-size: 20px;
        line-height: 1;
      }
    }
  }
}
</style>