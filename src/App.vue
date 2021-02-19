<template>
  <v-app id="topbar">
    <v-app-bar
      app
      dark      
      color="#141414"
      height="93">

      <img
        class="logo"
        height="33px"
        src="@/assets/images/logo.svg"/>

      <v-spacer></v-spacer>

      <span class="username font-weight-bold">MARCEL</span>

      <v-avatar
        class="avatar"
        color="white"
        size="57"/>
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
  .logo {
    margin-left: 18px;
  }

  .username {
    font-size: 20px;    
  }

  .avatar {
    margin-left: 38px;
    margin-right: 26px;
  }
}
</style>
