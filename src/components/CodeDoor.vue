<template>
  <v-layout
    column
    align-center text-center
    class="code-door pa-6 pa-md-26">

    <span class="neuton text-h4 text-sm-h3 font-weight-bold">Geef je code door</span>

    <v-layout
      column
      align-center text-center
      class="tex-block mt-6 mt-sm-14">
      <p>Om de content van de <b>Leadership Solutions Academy</b> te ontsluiten heb je een code ontvangen.</p>  
      <p>Geef deze code hieronder in om jouw persoonlijke programma te starten:</p>
    </v-layout>

    <v-layout class="input-container my-4 mt-md-6 mb-md-10">
      <v-text-field
        outlined
        color="black"
        v-model="code"
        placeholder="Code"
        hide-details
        class="mr-2"/>

      <v-btn        
        color="black"
        class="text-none white--text"
        :disabled="!code"
        height="56"
        to="/code/greetings">
        Verstuur
      </v-btn>
    </v-layout>

    <p class="mx-4 mx-sm-n10">Je gaat straks door een spraakmakend programma op gebied van leiderschap. Wij houden je tussentijds op de hoogte van informatie die relevant is voor jouw leerervaring. Leadership Solutions gaat vertrouwelijk om met jouw informatie in lijn met onze <a href="#" target="_blank">privacy policy</a>.</p>    
  </v-layout>
</template>

<script>
export default {
  name: 'CodeDoor',
  data () {
    return {
      code: ''
    }
  }
}
</script>

<style lang="scss">
.code-door {
  .tex-block {
    max-width: 350px;
  }

  .input-container {
    height: 56px;
  }
}
</style>