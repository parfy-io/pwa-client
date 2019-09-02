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
            <LoginForm form-id="login-form"
                       @submit="onLogin"
                       @validationChange="onValidationChange"
                       @tryConnect="onTryConnect">
            </LoginForm>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" type="submit" form="login-form" :disabled="!form.valid || tryConnect" :loading="tryConnect">{{$t('login.submit')}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import LoginForm from "../components/LoginForm";

export default {
  components: {LoginForm},
  props: {
    source: String,
  },
  data: () => ({
    form: {
      valid: false
    },
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
    onValidationChange(valid) {
      this.form.valid = valid
    },
    onTryConnect(tryConnect) {
      this.tryConnect = tryConnect
    },
    onLogin(data) {
      this.applyConfiguration({
        broker: data.broker,
        clientId: data.clientId,
        username: data.username,
        password: data.password,
      })
      this.$router.push('/home/')
    }
  }
}
</script>
