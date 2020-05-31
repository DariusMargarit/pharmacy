<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-img
          class="col"
          :src="image"
      >
        <div class="absolute-bottom text-h6">
          {{title}}
        </div>
      </q-img>

      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn flat round icon="remove_shopping_cart" @click="removeProduct" />
        <q-btn flat round icon="more_horiz" />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
    export default {
        name: "ShopCard",
        props: {
            image: null,
            title: "",
            index: null
        },
        methods: {
            removeProduct () {
                this.$store.commit('removeItemFromShop', this.index)
            }
        }
    }
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 300px
</style>