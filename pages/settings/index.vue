<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" >

        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            flat
          >
            <v-toolbar-title>{{$t('settings.mqtt.title')}}</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>

            <LoginForm :form-id="form.id"
                       :data="mqttConfiguration"
                       @submit="onSaveMqttSettings"
                       @validationChange="onValidationChange"
                       @tryConnect="onTryConnect">
            </LoginForm>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-btn block color="primary" type="submit" :form="form.id" :disabled="!form.valid || tryConnect" :loading="tryConnect">
          <v-icon>delete</v-icon>
          {{$t('settings.save')}}
        </v-btn>
      </v-col>
    </v-row>

    <v-snackbar v-model="saved" color="success" class="text-center">
      {{$t('settings.saved')}}
      <v-btn text @click="saved = false" >
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import LoginForm from "../../components/LoginForm";

  export default {
    components: {LoginForm},
    comments: {
      LoginForm
    },
    data: () => ({
      form: {
        id: 'settings-mqtt-form',
        valid: false,
      },
      tryConnect: false,
      saved: false
    }),
    computed: {
      ...mapGetters({
        mqttConfiguration: 'mqtt/getConfiguration'
      }),
    },
    methods: {
      ...mapActions({
        applyConfiguration: 'mqtt/applyConfiguration'
      }),
      onValidationChange(valid) {
        this.form.valid = valid
      },
      onTryConnect(tryConnect) {
        this.tryConnect = tryConnect
      },
      onSaveMqttSettings(data) {
        this.saved = false
        this.applyConfiguration({
          broker: data.broker,
          clientId: data.clientId,
          username: data.username,
          password: data.password,
        })
        this.saved = true
      }
    },
  }
</script>

<style scoped>

</style>
