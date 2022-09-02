<template>
  <div>
<!--  <div :class="modeColor">-->
<!--    <Header :modeColor="modeColor" @changeMode="changeMode"/>-->
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'



export default {
  name: 'App',
  components: {
    Header,
  },
  // data() {
  //   return {
  //     modeColor: 'light',
  //   };
  // },
  // methods: {
  //   changeMode() {
  //     this.modeColor = this.modeColor === 'light' ? 'dark' : 'light';
  //   },
  // },
}
</script>
<style lang="scss">
@import './scss/_variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $lightModeBackground;
  color: $lightModeText;
}


.dark {
  background-color: $darkModeBackground;
  color: $darkModeText_LightModeElements;
}

</style>
