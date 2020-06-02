<template>
  <q-card>
    <q-card-section class="row items-center">
      <q-avatar icon="shopping_cart" color="dark" text-color="white" />
      <span class="q-ml-sm cursor-pointer">
        Doresc sa cumpar {{itemsCount}} produse. <br> TOTAL: {{itemsCount}} RON
        <q-popup-edit v-model.number="itemsCount" buttons>
          <q-input type="number" v-model.number="itemsCount" dense autofocus />
        </q-popup-edit>
      </span>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Inchide" color="dark" v-close-popup />
      <q-btn flat label="Adauga in cos" color="dark" v-close-popup @click="addProduct" />
    </q-card-actions>



  </q-card>
</template>

<script>
    export default {
        name: "PopupItems",
        props: {
            index: null
        },
        data () {
            return {
                itemsCount: 1
            }
        },
        methods: {
            addProduct () {
                this.$store.commit('addItemInShop', [this.index, this.itemsCount])
            }
        }
    }
</script>

<style scoped>

</style>