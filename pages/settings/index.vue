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

            <LoginForm :form-id="mqtt.formId"
                       :data="mqttConfiguration"
                       @submit="onSaveMqttSettings"
                       @validationChange="onValidationChange"
                       @tryConnect="onTryConnect">
            </LoginForm>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="4" >

        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            flat
          >
            <v-toolbar-title>{{$t('settings.others.title')}}</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-select
              :items="localeOptions"
              :value="locale"
              item-text="label"
              item-value="value"
              prepend-icon="language"
              :label="$t('settings.others.language.title')"
              @change="onLanguageChange"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-btn block color="primary" type="submit" :form="mqtt.formId" :disabled="!mqtt.valid || mqtt.tryConnect" :loading="mqtt.tryConnect">
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
  import { mapActions, mapGetters, mapState } from 'vuex';
  import LoginForm from "../../components/LoginForm";

  export default {
    components: {LoginForm},
    comments: {
      LoginForm
    },
    data: () => ({
      mqtt: {
        formId: 'settings-mqtt-form',
        valid: false,
        tryConnect: false,
      },
      language: null,
      saved: false
    }),
    computed: {
      ...mapGetters({
        mqttConfiguration: 'mqtt/getConfiguration'
      }),
      ...mapState({
        locale: state => state.i18n.locale,
        locales: state => state.i18n.locales,
      }),
      localeOptions(){
        return this.locales.map(l => ({value: l, label: this.$t('settings.others.language.codes.' + l)}))
      }
    },
    methods: {
      ...mapActions({
        applyConfiguration: 'mqtt/applyConfiguration',
        applyLanguage: 'i18n/applyLanguage'
      }),
      onValidationChange(valid) {
        this.mqtt.valid = valid
      },
      onTryConnect(tryConnect) {
        this.mqtt.tryConnect = tryConnect
      },
      onSaveMqttSettings(data) {
        this.saved = false
        this.applyConfiguration({
          broker: data.broker,
          clientId: data.clientId,
          username: data.username,
          password: data.password,
        })
        this.applyLanguage(this.language)
        this.saved = true
      },
      onLanguageChange(lang){
        this.language = lang
      }
    },
  }
</script>

<style scoped>

</style>
