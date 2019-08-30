<template>
  <v-layout
    column
    justify-center
  >
    <v-flex xs12>
      <Recognition v-for="recognition in filteredRecognitions"
                   :key="recognition.correlationId"
                   :image="recognition.image"
                   :correlationId="recognition.correlationId"
                   :uploaded="uploaded(recognition)"
                   :recognized="recognized(recognition)"
                   :found="found(recognition)"
                   :notified="notified(recognition)"
      >
      </Recognition>
    </v-flex>

    <v-footer app class="pa-0">
      <v-toolbar dense>
        <div class="flex-grow-1"></div>

        <v-toolbar-items>

          <!-- delete menu -->
          <v-menu offset-y top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">
                <v-icon>delete</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>placeholder</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- filter menu -->
          <v-menu offset-y top :close-on-content-click="false">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" :color="changedFilter ? 'info' : ''">
                <v-icon>search</v-icon>
              </v-btn>
            </template>
            <v-list light>
              <v-list-item>
                <v-switch v-model="search.fail" :label="$t('recognize.filter.fail')" ></v-switch>
              </v-list-item>
              <v-list-item>
                <v-switch v-model="search.completed" :label="$t('recognize.filter.completed')" ></v-switch>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>

      </v-toolbar>
    </v-footer>
  </v-layout>
</template>

<script>
import Recognition from "../../components/Recognition";
import { mapState } from 'vuex';

export default {
  components: {Recognition},
  data() {
    return {
      search: {
        fail: true,
        completed: true
      }
    }
  },
  computed:{
    ...mapState({
      recognitions: state => state.recognition.recognitions,
    }),
    filteredRecognitions(){
      return this.recognitions.filter(recognition => {
        if(!this.search.fail && this.hasFail(recognition.status.map(s => s.code))) return false
        if(!this.search.completed) {
          let steps = {}
          for(let status of recognition.status) {
            if(!steps[status.source]) {
              steps[status.source] = []
            }
            steps[status.source].push(status.code)
          }
          for(let source of Object.keys(steps)) {
            if(!this.hasDone(steps[source])) return true
          }
          return false
        }
        return true
      })
    },
    changedFilter() {
      return !this.search.fail ||
        !this.search.completed
    },
  },
  methods:{
    uploaded(recognition){
      //if we have a recognition -> we uploaded it successfully
      return 'done'
    },
    recognized(recognition){
      return this.getStatus(recognition, 'image-recognizer');
    },
    found(recognition){
      return this.getStatus(recognition, 'text-mapper');
    },
    notified(recognition){
      return this.getStatus(recognition, 'notifier');
    },
    hasFail(codes) {
      return codes.filter(c => (c === 500 || c === 404)).length >= 1
    },
    hasDone(codes) {
      return codes.filter(c => c === 200).length >= 1
    },
    getStatus(recognition, source) {
      let codes = recognition.status.filter(s => s.source.includes(source))
        .map(s => s.code)

      if(this.hasFail(codes)) return 'fail'
      if(this.hasDone(codes)) return 'done'
      if(codes.filter(c => c === 202).length >= 1) return 'start'
      return null;
    }
  }
}
</script>
