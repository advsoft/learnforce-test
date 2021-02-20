<template>
  <v-app id="topbar">
    <v-app-bar
      app
      dark      
      color="#141414"
      :height="$vuetify.breakpoint.xs ? 60 : 93">

      <img
        class="logo ml-sm-5"        
        src="@/assets/images/logo.svg"/>

      <v-spacer></v-spacer>

      <span class="text-caption text-sm-h6 font-weight-bold">MARCEL</span>

      <v-avatar
        class="avatar ml-2 ml-sm-10 mr-sm-8"
        color="white"
        :size="$vuetify.breakpoint.xs ? 40 : 57"/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#topbar { 
  @media screen and (max-width: 600px) {        
    .logo {
      height: 26px;
    }
  }

  @media screen and (min-width: 600px) {      
    .logo {
      height: 33px;
    }
  }
}
</style>
