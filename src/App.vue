<template>
  <div>
    <Navbar />
    <q-layout view="lHh Lpr lFf">
      <router-view />
    </q-layout>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: 'LayoutDefault',
  components : {
    Navbar
  }
}
</script>

<style>
</style>
