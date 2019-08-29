<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Parfy.io</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
      <div class="flex-grow-1"></div>
      <v-icon v-if="mqttConnected">wifi</v-icon>
      <v-icon v-else>wifi_off</v-icon>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      ...mapState({
        mqttConnected: state => state.mqtt.connected,
      }),
    }
  }
</script>
