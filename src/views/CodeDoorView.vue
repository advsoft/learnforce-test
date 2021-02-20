<template>
  <v-layout class="code-door-view">
    <MainBackground/>

    <div class="fade"/>

    <div class="centering-container">
      <v-layout
        column
        align-center
        class="white code-door-content">
        <router-view/>
      </v-layout>
    </div>
  </v-layout>  
</template>

<script>
import MainBackground from '@/components/MainBackground'

export default {
  name: 'CodeDoorView',
  components: {
    MainBackground
  }
}
</script>

<style lang="scss">
@import "@/styles/vars.scss";

.code-door-view {
  position: relative;
  overflow-x: hidden;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: .57; }
  }

  .fade {
    position: absolute;  
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // fade in
    opacity: .57;
    background-color: rgb(46, 36, 36);    
    animation: fadein 1s;
  }

  .centering-container {
    position: absolute;  
    top: 0;

    @media screen and (min-width: 600px) {
      left: 50%;
    }

    .code-door-content {
      position: relative;      

      @media screen and (min-width: 600px) {
        left: -50%;        
      }
    }
  }
}
</style>