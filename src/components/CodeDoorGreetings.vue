<template>
  <v-layout
    column
    align-center text-center
    class="code-door-greetings pa-8 py-sm-12 px-md-26">

    <v-avatar
      size="119">
      <img src="@/assets/images/trainer-avatar.png"/>
    </v-avatar>

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <Dot
        v-for="(dot, index) in dots"
        :key="index"
        :dot="dot">
      </Dot>
    </template>

    <p class="letter-spacing-3 font-weight-bold text-h4 text-sm-h2 mt-4">Gefeliciteerd</p>

    <p class="grey--text lighten-2 tex-h6 mt-4 mt-sm-16">Je gaat aan de slag met het curriculum over:</p>
    <p class="letter-spacing-1-5 neuton text-h4 font-weight-bold my-4 my-sm-10">Zelfleiderschap</p>
    <p class="grey--text lighten-2 tex-h6">We hebben 6 modules gekoppeld aan jouw profiel.</p>

    <v-btn
      outlined      
      width="245"
      class="text-none"
      x-large>
      Start direct
    </v-btn>
  </v-layout>
</template>

<script>
import Dot from './Dot'

export default {
  name: 'CodeDoorGreetings',
  components: {
    Dot
  },
  data () {
    return {
      dots: [
        { x: 75, y: 71, r: 4, c: '#fea901' },
        { x: 195, y: 51, r: 8, c: '#fea901' },
        { x: 126, y: 214, r: 8, c: '#fea901' },
        { x: 211, y: 265, r: 4, c: '#fea901' },
        { x: 611, y: 14, r: 4, c: '#fea901' },
        { x: 670, y: 54, r: 4, c: '#fea901' },
        { x: 720, y: 175, r: 4, c: '#fea901' },
        { x: 525, y: 274, r: 4, c: '#fea901' },
        { x: 566, y: 100, r: 8, c: '#fea901' },
        { x: 194, y: 116, r: 4, c: '#150f04' },
        { x: 460, y: 32, r: 4, c: '#150f04' },
        { x: 620, y: 210, r: 4, c: '#150f04' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/vars.scss";

.code-door-greetings {
  @media screen and (min-width: 960px) {
    position: relative;
    width: 757px;
  }
}
</style>