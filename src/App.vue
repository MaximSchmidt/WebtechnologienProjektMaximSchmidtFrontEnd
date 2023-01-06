<template>
  <div class="background">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
.background  {
  background: rgb(11, 12, 24);
  height: 1000vh;
}
</style>
