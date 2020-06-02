<template>
  <div>
    <Navbar />
    <q-layout view="hHh lpR fff">
      <router-view />
      <br><br>
      <br><br>
      <q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          Realizat de Andone Alexandru si Ciofalau Dragos © CoffeOverdose
        </q-toolbar>
      </q-footer>
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
