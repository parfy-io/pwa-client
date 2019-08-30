<template>
  <v-card>
    <v-img :src="image"/>

    <v-card-actions>
      <v-chip-group>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-chip :class="uploadedClass" v-on="on">
              <v-icon>cloud_upload</v-icon>
            </v-chip>
          </template>
          <span>{{$t('recognize.status.uploaded')}}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-chip :class="recognizedClass" v-on="on">
              <v-icon>image_search</v-icon>
            </v-chip>
          </template>
          <span>{{$t('recognize.status.recognized')}}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-chip :class="foundClass" v-on="on">
              <v-icon>search</v-icon>
            </v-chip>
          </template>
          <span>{{$t('recognize.status.found')}}</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-chip :class="notifiedClass" v-on="on">
              <v-icon>speaker_notes</v-icon>
            </v-chip>
          </template>
          <span>{{$t('recognize.status.notified')}}</span>
        </v-tooltip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "Recognition",
    props: {
      image: {
        required: true,
      },
      correlationId: {
        required: true,
      },
      uploaded: {
        required: true,
        default: 'done'
      },
      recognized: {
        required: true,
      },
      found: {
        required: true,
      },
      notified: {
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {
      uploadedClass(){
        if(this.uploaded === 'start') return 'info'
        if(this.uploaded === 'done') return 'success'
        if(this.uploaded === 'fail') return 'error'
        return ''
      },
      recognizedClass(){
        if(this.recognized === 'start') return 'info'
        if(this.recognized === 'done') return 'success'
        if(this.recognized === 'fail') return 'error'
        return ''
      },
      foundClass(){
        if(this.found === 'start') return 'info'
        if(this.found === 'done') return 'success'
        if(this.found === 'fail') return 'error'
        return ''
      },
      notifiedClass(){
        if(this.notified === 'start') return 'info'
        if(this.notified === 'done') return 'success'
        if(this.notified === 'fail') return 'error'
        return ''
      },
    }
  }
</script>

<style scoped>

</style>
