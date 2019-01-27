<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="flex mineshaft white--text text-xs-center"
    >
      <v-card-text class="white--text pb-0">
        Sup! You can follow me on these social networks:
      </v-card-text>
      <v-card-text class="social-card">
        <v-btn
          v-for="icon in icons"
          :key="icon.url"
          class="mx-2 white--text"
          icon
          @click="socialNetworkUrl(icon.url)"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text mineshaft lighten-1">
        &copy;{{ currentYear() }} — <strong class="mx-1">Em Torres R.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    methods: {
      currentYear() {
        return new Date().getFullYear()
      },
      socialNetworkUrl(url) {
        return window.open('https://' + url);
      }
    },
    data() {
      return {
        icons: [
          { icon: 'fab fa-facebook', url: 'www.facebook.com/emigdioTR' },
          { icon: 'fab fa-twitter', url: 'www.twitter.com/emigdio821' },
          { icon: 'fab fa-linkedin', url: 'www.linkedin.com/in/emigdio821' },
          { icon: 'fab fa-github', url: 'www.github.com/emigdio821' }
        ]
      }
    }
  }
</script>
<style>
.social-card button:hover {
  transform: scale(1.2) !important;
}
</style>
