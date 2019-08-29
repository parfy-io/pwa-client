<template>
  <v-layout
    column
    justify-center
  >
    <v-flex xs12>
      <Recognition v-for="recognition in recognitions"
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

  </v-layout>
</template>

<script>
import Recognition from "../../components/Recognition";
import { mapState } from 'vuex';

export default {
  components: {Recognition},
  data() {
    return {
    }
  },
  computed:{
    ...mapState({
      recognitions: state => state.recognition.recognitions,
    }),
  },
  methods:{
    uploaded(recognition){
      //if we have a recognition -> we uploaded it successfully
      return true
    },
    recognized(recognition){
      let codes = recognition.status.filter(s => s.source === 'image-recognizer')
        .map(s => s.code)

      if(!codes || codes.length === 0) return null;
      return codes[0] === 200
    },
    found(recognition){
      let codes = recognition.status.filter(s => s.source === 'text-mapper')
        .map(s => s.code)

      if(!codes || codes.length === 0) return null;
      return codes[0] === 200
    },
    notified(recognition){
      let codes = recognition.status.filter(s => s.source.includes('notifier'))
        .map(s => s.code)

      if(!codes || codes.length === 0) return null;
      return codes[0] === 200
    },
  }
}
</script>
