<template>
  <q-toolbar class="bg-dark text-white">
    <q-avatar rounded>
      <img src="../assets/logoPillSlimBg.png">
    </q-avatar>

    <q-toolbar-title>Farmacia online Moisil</q-toolbar-title>

    <q-btn flat round dense icon="shopping_cart" @click="viewShop = true"/>
    <q-btn flat round dense icon="emoji_objects" @click="triggerDark" />

    <q-dialog v-model="viewShop">
      <Shop />
    </q-dialog>

  </q-toolbar>
</template>

<script>
    import Shop from "./Shop";
    export default {
        name: "Navbar",
        components: {
            Shop
        },
        data () {
            return {
                viewShop: false
            }
        },
        methods: {
            triggerDark() {
                this.$q.dark.toggle()
            }
        }
    }
</script>

<style scoped>

</style>