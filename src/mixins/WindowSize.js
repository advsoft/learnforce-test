export default {
  computed: {
    smallScreen () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm':
        case 'md':
        case 'lg':
        case 'xl': return false
      }      
    }
  }
}