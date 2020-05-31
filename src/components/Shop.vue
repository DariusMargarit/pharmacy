<template>
  <q-layout view="Lhh lpR fff" container
            style="height: 800px; max-width: 1000px;"
            class="shadow-2 rounded-borders">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-toolbar-title> Lista de cumparaturi </q-toolbar-title>
        <q-btn flat v-close-popup round dense icon="close" />
      </q-toolbar>
    </q-header>

    <q-page-container :class="{ 'bg-dark': $q.dark.isActive, 'bg-white': !$q.dark.isActive  }">
      <q-page padding>
        <div class="row justify-center q-gutter-md">
          <ShopCard v-for="(element, index) in $store.state.shop" :key="index"
            :title="$store.state.products[element].title"
            :image="$store.state.products[element].image"
            :index="element"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
    import ShopCard from "./ShopCard";
    export default {
        name: "Shop",
        components: {
            ShopCard
        }
    }
</script>

<style scoped>

</style>