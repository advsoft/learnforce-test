<template>
  <v-layout
    wrap
    class="trainer-row">

    <v-layout
      column
      align-center
      justify-center
      class="trainer-container color-block">

      <v-avatar size="144">
        <img :src="imgPath(image)"/>
      </v-avatar>

      <span class="text-h5 text-sm-h3 neuton font-weight-bold text-center my-6">{{ name }}</span>          
      <span class="text-h6 text-sm-h4 text-center">{{ desc }}</span>          
    </v-layout>  

    <div class="image-block">
      <img src="@/assets/images/main-5.png"/>
    </div>
  </v-layout>
</template>

<script>
import ImgPathMixin from '@/mixins/ImgPathMixin'

export default {
  name: 'Trainer',
  mixins: [ ImgPathMixin ],
  props: {
    image: String,
    name: String,
    desc: String
  }
}
</script>

<style lang="scss">
.trainer-row {
  max-width: 1380px;

  .trainer-container {
    padding: 4%;
  }
}
</style>