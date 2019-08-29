<template>
  <v-layout
    column
    justify-center
  >
    <v-flex xs12>
      <Camera @imageSave="newImage" />
    </v-flex>

    <div class="text-center ma-2">
      <v-snackbar v-model="imageUploadSuccess" color="success" class="text-center">
        {{$t('recognize.success')}}
        <v-btn text @click="imageUploadSuccess = false" >
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
      <v-snackbar v-model="imageUploadFail" color="error" class="text-center">
        {{$t('recognize.error')}}
        <v-btn text @click="imageUploadFail = false" >
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
    </div>

  </v-layout>
</template>

<script>
import Camera from "../../components/Camera";
import { mapMutations } from 'vuex';
import uuid4 from 'uuid4'

export default {
  components: {Camera},
  data() {
    return {
      imageUploadSuccess: false,
      imageUploadFail: false,
    }
  },
  methods:{
    ...mapMutations({
      initRecognition: 'recognition/initRecognition'
    }),
    newImage(image) {
      this.imageUploadSuccess = false
      this.imageUploadFail = false
      const correlationId = uuid4()

      this.$webworker.mqttWorker.sendImage(image, correlationId)
        .then(() => {
          this.imageUploadSuccess = true
          this.imageUploadFail = false
          this.initRecognition({correlationId, image})
        }).catch((err) => {
          this.imageUploadSuccess = false
          this.imageUploadFail = true
          console.log(err)
      })
    }
  }
}
</script>
