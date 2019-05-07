<template lang="pug">
  div(id="app")
    h1 Hello, World!
    slide(:steps="4")
      p(v-if="step >= 1")
        | {{step}}
      p(v-if="step >= 2")
        | {{step}}
      p(v-if="step >= 3")
        | {{step}}
      p(v-if="step >= 4")
        | {{step}}
</template>
<script>
import { Slideshow } from 'eagle.js'
export default {
  mixins: [Slideshow]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
