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
        <!--div class="row justify-center q-gutter-md">
          <ShopCard v-for="(element, index) in $store.state.shop" :key="index"
            :title="$store.state.products[element].title"
            :image="$store.state.products[element].image"
            :index="element"
          />
        </div-->

        <q-list bordered>

          <ShopCard v-for="(element, index) in shopItems" :key="index"
            :title="$store.state.products[element].title"
            :image="$store.state.products[element].image"
            :price="$store.state.products[element].price"
            :long-description="$store.state.products[element].longDescription"
            :index="element"
            :delete="deleteArray"
          />

          <q-item v-ripple>
            <q-item-section avatar>
              <q-avatar rounded class="cursor-pointer">
                <img src="../assets/logoPillSlim.png">
              </q-avatar>
            </q-item-section>
            <q-item-section overline>TOTAL: </q-item-section>
            <q-item-section>{{getTotalPrice}} RON</q-item-section>
            <q-item-section side top>
              <div class="q-gutter-md" style="font-size: 25px; visibility: hidden">
                <q-icon class="cursor-pointer" name="add" />
                <q-icon class="cursor-pointer" name="remove" />
                <q-icon class="cursor-pointer" name="remove_shopping_cart" />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
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
        },
        data () {
            return {
                shopItems: this.returnArray()
            }
        },
        computed: {
            getTotalPrice () {
                return this.$store.getters.getTotalPrice;
            }
        },
        methods: {
            returnArray() {
                const items = this.$store.state.shop;
                return [...new Set(items)];
            },
            deleteArray() {
                this.shopItems = this.returnArray();
            }
        }
    }
</script>

<style scoped>

</style>