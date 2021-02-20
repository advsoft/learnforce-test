export default {
	methods: {
    imgPath (name) {
      let images = require.context('../assets/images/', true, /\.png$/);
      return images(`./${name}.png`);
    }
	}
}