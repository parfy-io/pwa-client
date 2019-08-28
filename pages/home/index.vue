<template>
  <v-layout
    column
    justify-center
  >
    <v-flex xs12>
      <Camera @imageSave="newImage" />
    </v-flex>

    <div v-if="image">
      <v-img :src="image" />
    </div>
  </v-layout>
</template>

<script>

import Camera from "../../components/Camera";
export default {
  components: {Camera},
  data() {
    return {
      image: null
    }
  },
  methods:{
    newImage(image) {
      this.image = image
    }
  }
}
</script>
