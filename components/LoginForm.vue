<template>
  <div>
    <v-form v-model="valid" @submit.prevent="onSubmit()" :id="formId" >
      <v-text-field
        :label="$t('login.mqttBroker')"
        prepend-icon="cloud"
        placeholder="mqtt://parfy.io:1833"
        type="text"
        v-model="broker"
        :rules="ruleRequired"
        required
      ></v-text-field>

      <v-text-field
        :label="$t('login.clientId')"
        prepend-icon="domain"
        type="text"
        v-model="clientId"
        :rules="ruleRequired"
        required
      ></v-text-field>

      <v-text-field
        :label="$t('login.username')"
        prepend-icon="person"
        type="text"
        v-model="username"
      ></v-text-field>

      <v-text-field
        id="password"
        :label="$t('login.password')"
        prepend-icon="lock"
        type="password"
        v-model="password"
      ></v-text-field>
    </v-form>

    <div class="text-center ma-2">
      <v-snackbar v-model="connectionFailed" color="error" class="text-center">
        {{$t('login.error.connection')}}
        <v-btn text @click="connectionFailed = false" >
          <v-icon>close</v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </div>

</template>

<script>
  export default {
    name: "LoginForm",
    props: {
      formId: {
        required: true
      },
      data: {
        required: false
      }
    },
    data() {
      return {
        broker: this.data ? this.data.broker : null,
        clientId: this.data ? this.data.clientId : null,
        username: this.data ? this.data.username : null,
        password: this.data ? this.data.password : null,
        valid: false,
        tryConnect: false,
        connectionFailed: false
      }
    },
    computed: {
      ruleRequired(){
        return [
          v => !!v || this.$t('common.form.validation.required')
        ]
      }
    },
    methods: {
      onSubmit(){
        if(!this.valid) return
        this.tryConnect = true
        this.connectionFailed = false

        this.$webworker.mqttWorker.tryConnection(this.broker, this.clientId, this.username, this.password)
          .then(() => {
            this.tryConnect = false
            this.connectionFailed = false
            this.$emit('submit', {
              broker: this.broker,
              clientId: this.clientId,
              username: this.username,
              password: this.password,
            })
          })
          .catch(() => {
            this.tryConnect = false
            this.connectionFailed = true
          })
      }
    },
    watch: {
      valid(valid){
        this.$emit('validationChange', valid)
      },
      tryConnect(tryConnect){
        this.$emit('tryConnect', tryConnect)
      }
    }
  }
</script>

<style scoped>

</style>
