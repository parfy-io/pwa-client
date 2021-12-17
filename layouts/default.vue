<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.route" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(link.text) }}</v-list-item-title>
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

      <div class="flex-grow-1"></div>
      <v-system-bar color="indigo" class="pa-0">
        <v-icon v-if="mqttConnected">wifi</v-icon>
        <v-icon v-else>wifi_off</v-icon>
      </v-system-bar>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>
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
      links: [
        { icon: 'home', text: 'navigation.home', route: '/home/' },
        { icon: 'perm_media', text: 'navigation.status', route: '/status/' },
        { icon: 'settings_applications', text: 'navigation.settings', route: '/settings/' },
      ]
    }),
    computed: {
      ...mapState({
        mqttConnected: state => state.mqtt.connected,
      }),
    }
  }
</script>
