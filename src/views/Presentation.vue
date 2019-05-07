<template lang="pug">
  h1 Hello, World!
</template>
<script>
export default {
  methods: {
    updateSlides: function () {
      this.currentSlideIndex = +this.$route.params.slide
      this.$nextTick(() => {
        this.step = +this.$route.params.step
      })
    },
    updateURL: function () {
      this.$router.push(`/${this.currentSlideIndex}/${this.step}`)
    }
  },
  watch: {
    $route: 'updateSlides',
    step: 'updateURL',
    currentSlideIndex: 'updateURL'
  }
}
</script>
