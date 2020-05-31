<template>
  <q-layout view="Lhh lpR fff" container
            style="height: 500px"
            class="shadow-2 rounded-borders">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-toolbar-title>{{title}}</q-toolbar-title>
        <q-btn flat v-close-popup round dense icon="add_shopping_cart" @click="addProduct"/>
        <q-btn flat v-close-popup round dense icon="close" />
      </q-toolbar>
    </q-header>

    <q-page-container :class="{ 'bg-dark': $q.dark.isActive, 'bg-white': !$q.dark.isActive  }">
      <q-page padding>
        <img :src="image" style="float:right; margin-left: 10px;" height="100px">
        <p>
          {{description}}
          {{description}}
          {{description}}
        </p>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
    export default {
        name: "CardDescription",
        props: {
            title: "",
            description: "",
            image: null,
            index: null
        },
        methods: {
            addProduct () {
                this.$store.commit('addItemInShop', this.index)
            }
        }
    }
</script>

<style scoped>
</style>