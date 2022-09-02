<template>
<!--  <nav class="shadow-sm" :class="modeColor">-->
  <nav class="shadow-sm" >
    <div class="container">
      <ul class="nav justify-content-between align-items-center py-3">
        <li class="brand nav-item">
          <router-link to="/"  class="nav-link fs-sm-4">
            Where in the word
          </router-link>
        </li>
        <li class="nav-item">
<!--          <a class="nav-link switcher" href="#" @click="changeMode"><i class="fa-regular fa-moon me-1"></i>Dark Mode</a>-->
          <a class="nav-link switcher " href="#"><i class="fa-regular fa-moon me-1"></i>Dark Mode</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  // props: {
  //   modeColor: {
  //     type: String,
  //     default: 'light'
  //   }
  // },
  // methods: {
  //   changeMode() {
  //     this.$emit('changeMode');
  //   }
  // }
}
</script>

<style scoped lang="scss">
@import '../scss/_variables';


nav {
  background: $darkModeText_LightModeElements;

  .brand a{
    color: $lightModeText;
    font-weight: 800;
  }

  .switcher {
    color: $lightModeText;
    font-weight: 300;
    font-size: 16px;
  }
}

nav.dark {
  background: $darkModeElements;
  .brand a{
    color: $darkModeText_LightModeElements;
    font-weight: 800;
  }

  .switcher {
    color: $darkModeText_LightModeElements;
    font-weight: 300;
    font-size: 16px;
  }
}
</style>
