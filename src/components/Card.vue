<template>
  <q-card class="my-card" @click="layout = true">
    <q-img
        style="image-rendering: pixelated"
        :src="image"
        basic
    >
      <div class="absolute-bottom text-h6">
        {{title}}
      </div>
    </q-img>

    <q-card-section>
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