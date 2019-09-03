<template>
  <v-card>
    <v-img v-if="img" :src="img" />
    <div v-show="!img && state" @click="onCapture" class="justify-center">
      <vue-web-cam ref="webcam"
                   :device-id="deviceId"
                   height="100%"
                   @started="onStarted"
                   @stopped="onStopped"
                   @error="onError"
                   @cameras="onCameras"
                   @camera-change="onCameraChange" />
    </div>
    <v-row v-if="!state" align="center" justify="center" class="py-12">
      <v-icon color="error" x-large>visibility_off</v-icon>
    </v-row>


    <v-card-actions class="pt-0">

      <!-- image preview -->
      <template v-if="img">
        <div class="flex-grow-1"></div>

        <v-btn icon @click="onImageDelete" color="error">
          <v-icon >delete</v-icon>
        </v-btn>
        <v-btn icon @click="onImageSave" color="success">
          <v-icon >check</v-icon>
        </v-btn>

      </template>

      <!-- camera preview -->
      <template v-else>

        <!-- device-chooser -->
        <v-menu :offset-y="true" :close-on-content-click="true">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>settings</v-icon>
            </v-btn>
          </template>
          <v-list shaped dense>
            <v-subheader> {{$t('component.camera.settings.device')}} </v-subheader>

            <v-list-item-group v-model="deviceId" color="primary">
              <v-list-item v-for="device in devices"
                           :key="device.deviceId"
                           :value="device.deviceId"
                           @click="onCameraChange(device.deviceId)">

                <v-list-item-content>
                  <v-list-item-title v-text="device.label"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <!-- device power button -->
        <v-btn icon v-if="state" @click="onStop">
          <v-icon >videocam</v-icon>
        </v-btn>
        <v-btn icon v-else @click="onStart" color="error">
          <v-icon >videocam_off</v-icon>
        </v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { WebCam } from "vue-web-cam";

  export default {
    name: "Camera",
    components: {
      "vue-web-cam": WebCam
    },
    data() {
      return {
        img: null,
        camera: null,
        deviceId: null,
        state: false,
        devices: []
      };
    },
    computed: {
      device: function() {
        return this.devices.find(n => n.deviceId === this.deviceId);
      }
    },
    watch: {
      camera: function(id) {
        this.deviceId = id;
      },
      devices: function() {
        // Once we have a list select the first one
        const [first, ...tail] = this.devices;
        if (first) {
          this.camera = first.deviceId;
          this.deviceId = first.deviceId;
          this.state = true;
        }
      }
    },
    methods: {
      onCapture() {
        this.img = this.$refs.webcam.capture();
      },
      onStarted(stream) {
        this.state = true;
      },
      onStopped(stream) {
        this.state = false;
      },
      onStop() {
        this.$refs.webcam.stop();
      },
      onStart() {
        this.$refs.webcam.start();
      },
      onError(error) {
        console.log("On Error Event", error);
      },
      onCameras(cameras) {
        this.devices = cameras;
      },
      onCameraChange(deviceId) {
        this.deviceId = deviceId;
        this.camera = deviceId;
      },
      onImageSave() {
        //here we want to return a "true" image (the user took and choose one!)
        this.$emit('imageSave', this.img);
        this.img = null
      },
      onImageDelete() {
        this.img = null
      }
    }
  }
</script>

<style scoped>

</style>
