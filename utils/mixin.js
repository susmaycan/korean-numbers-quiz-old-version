export default {
  data () {
    return {
      isMobileScreenSize: false
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobileScreenSize = window.innerWidth < 1200
    },
    removeSpaces (str) {
      return str.replace(/ /g, '')
    }
  }
}
