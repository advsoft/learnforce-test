<template>
  <v-app id="topbar">
    <v-app-bar
      app
      dark      
      color="#141414"
      :height="smallScreen ? 60 : 93">

      <img
        class="logo"        
        src="@/assets/images/logo.svg"/>

      <v-spacer></v-spacer>

      <span class="username font-weight-bold">MARCEL</span>

      <v-avatar
        class="avatar"
        color="white"
        :size="smallScreen ? 40 : 57"/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import WindowSize from './mixins/WindowSize'

export default {
  name: 'App',
  mixins: [ WindowSize ]
}
</script>

<style lang="scss">
#topbar { 
  @media screen and (max-width: 600px) {        
    .logo {
      height: 26px;
    }

    .username {
      font-size: 12px;
    }

    .avatar {
      margin-left: 8px;      
    }
  }

  @media screen and (min-width: 600px) {      
    .logo {
      margin-left: 18px;
      height: 33px;
    }

    .username {
      font-size: 20px;    
    }

    .avatar {
      margin-left: 38px;      
      margin-right: 26px;
    }
  }
}
</style>
