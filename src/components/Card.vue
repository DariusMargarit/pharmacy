<template>
  <q-card class="my-card" @click="layout = true">
    <q-img
        style="image-rendering: pixelated"
        :src="image"
        basic
    />

    <q-card-section>
      <div class="text-h6">{{title}}</div>
      <div class="text-subtitle2">{{price}} RON</div>
      <br>
      {{shortDescription}}
    </q-card-section>
    <q-dialog v-model="layout">
      <CardDescription
          :title="title"
          :description="longDescription"
          :image="image"
          :index="index"
      />
    </q-dialog>
  </q-card>
</template>

<script>
    import CardDescription from "./CardDescription";
    export default {
        name: "Card",
        components: {
            CardDescription
        },
        props: {
            title: "",
            shortDescription: "",
            longDescription: "",
            price: null,
            image: null,
            index: null
        },
        data() {
            return {
                layout: false,

                moreContent: true,
                drawer: false,
                drawerR: false,
            }
        }

    }
</script>

<style scoped>
.my-card {
  width: 250px;
}
</style>