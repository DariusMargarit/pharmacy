<template>
  <div>
    <q-item v-ripple>
      <q-item-section avatar>
        <q-avatar rounded class="cursor-pointer" @click="showProduct = true">
          <img :src="image">
        </q-avatar>
      </q-item-section>
      <q-item-section overline>{{title}}</q-item-section>
      <q-item-section>{{price * getCount}} RON</q-item-section>
      <q-item-section side top>
        <q-item-label caption>{{getCount}} PRODUSE</q-item-label>
        <div class="q-gutter-md" style="font-size: 25px;">
          <q-icon class="cursor-pointer" name="add" @click="addProduct" />
          <q-icon class="cursor-pointer" name="remove" @click="removeOneProduct" />
          <q-icon class="cursor-pointer" name="remove_shopping_cart" @click="removeProduct" />
        </div>
      </q-item-section>
    </q-item>
    <q-separator/>
    <q-dialog v-model="showProduct">
      <CardDescription
          :title="title"
          :description="longDescription"
          :image="image"
          :index="index"
          :price="price"
      />
    </q-dialog>
  </div>
</template>

<script>
    import CardDescription from "./CardDescription";
    export default {
        name: "ShopCard",
        props: {
            image: null,
            title: "",
            index: null,
            price: null,
            delete: Function,
            longDescription: null
        },
        components: {
            CardDescription
        },
        data () {
            return {
                showProduct: false
            }
        },
        computed: {
            getCount () {
                return this.$store.getters.getItemFromShop(this.index);
            }
        },
        methods: {
            removeProduct () {
                this.$store.commit('removeAllItemFromShop', this.index);
                this.delete();
            },
            addProduct () {
                this.$store.commit('addItemInShop', [this.index, 1])
            },
            removeOneProduct () {
                this.$store.commit('removeOneItemFromShop', this.index);
            }
        }
    }
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 300px
</style>