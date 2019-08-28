<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>{{$t('login.title')}}</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="form.valid" @submit.prevent="login" id="login-form">
              <v-text-field
                :label="$t('login.mqttBroker')"
                prepend-icon="cloud"
                placeholder="mqtt://parfy.io:1833"
                type="text"
                v-model="form.broker"
                :rules="ruleRequired"
                required
              ></v-text-field>

              <v-text-field
                :label="$t('login.clientId')"
                prepend-icon="domain"
                type="text"
                v-model="form.clientId"
                :rules="ruleRequired"
                required
              ></v-text-field>

              <v-text-field
                :label="$t('login.username')"
                prepend-icon="person"
                type="text"
                v-model="form.username"
              ></v-text-field>

              <v-text-field
                id="password"
                :label="$t('login.password')"
                prepend-icon="lock"
                type="password"
                v-model="form.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" type="submit" form="login-form" :disabled="!form.valid || tryConnect" :loading="tryConnect">{{$t('login.submit')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <div class="text-center ma-2">
          <v-snackbar v-model="connectionFailed" color="error" class="text-center">
            {{$t('login.error.connection')}}
            <v-btn text @click="connectionFailed = false" >
              <v-icon>close</v-icon>
            </v-btn>
          </v-snackbar>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    source: String,
  },
  data: () => ({
    form: {
      broker: null,
      clientId: null,
      username: null,
      password: null,
      valid: false
    },
    connectionFailed: false,
    tryConnect: false,
  }),
  computed: {
    ruleRequired(){
      return [
          v => !!v || this.$t('common.form.validation.required')
      ]
    }
  },
  methods: {
    ...mapActions({
      applyConfiguration: 'mqtt/applyConfiguration'
    }),
    login() {
      if(!this.form.valid) return
      this.connectionFailed = false
      this.tryConnect = true

      this.$webworker.mqttWorker.tryConnection(this.form.broker, this.form.clientId, this.form.username, this.form.password)
        .then(() => {
          this.tryConnect = false
          this.applyConfiguration({
            broker: this.form.broker,
            clientId: this.form.clientId,
            username: this.form.username,
            password: this.form.password,
          })
          this.$router.push('/home/')
        })
        .catch(() => {
          this.connectionFailed = true
          this.tryConnect = false
        })
    }
  }
}
</script>
