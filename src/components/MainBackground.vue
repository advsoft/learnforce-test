<template>
  <v-layout
    column
    justify-end
    align-center
    class="main-background white--text">

    <p class="text-h4 text-sm-h2 neuton text-center font-weight-bold px-4 px-sm-0">
      Hi Marcel,<br/><br/>Welkom bij Leadership Solutions!
    </p>

    <div class="text-hi-2 text-body-1 text-sm-h4 text-center px-4 px-sm-0">
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
        class="flex-grow-0 pa-2">

        <img
          height="20"
          class="mr-4"
          src="@/assets/images/check-mark.svg">

        <span
          class="bottom-text text-h6 font-weight-bold"
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

  .text-hi-2 {
    max-width: 1000px;
  }

  .door {
    @media screen and (min-width: 600px) {
      width: 392px;
    }
  }

  .bottom-container {
    width: 100%;

    .bottom-text {
      width: 235px;
      line-height: 1;
    }
  }
}
</style>