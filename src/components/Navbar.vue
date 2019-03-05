<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="showDrawer = !showDrawer">
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase mx-0">
        <span class="font-weight-regular">TODO</span>
        <span class="font-weight-bold">APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu
          offset-y
          transition="slide-y-transition"
          bottom
        >
          <v-btn
            slot="activator"
            flat
          >
            <span>{{ $t('locale_code') }}</span>
            <v-icon right>public</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(locale, index) in availableLocales"
              :key="index"
              @click="switchLocale(index)"
            >
              <v-list-tile-title class="body-1 text-uppercase">{{ localeFullName(locale) }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn class="hidden-xs-only" flat>
          <span>{{ $t('labels.sign_out') }}</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="showDrawer" class="grey darken-3" app>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="assets/avatars/emigdio.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="title font-weight-regular white--text">Emigdio Torres R</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile class="hidden-lg-and-up white--text">
          <span class="font-weight-regular headline">TODO</span>
          <span class="font-weight-bold headline">APP</span>
        </v-list-tile>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title font-weight-regular white--text">{{ drawerText(link.text) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="hidden-sm-and-up">
          <v-list-tile-content>
            <v-btn depressed block>
              <span>{{ $t('labels.sign_out') }}</span>
              <v-icon right>exit_to_app</v-icon>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    methods: {
      switchLocale(index) {
        this.$locale = this.availableLocales[index]
      },
      localeFullName(locale) {
        return this.$i18n.messages[locale].locale_name
      },
      drawerText(text) {
        return this.$i18n.messages[this.$locale].titles[text]
      }
    },
    data() {
      return {
        showDrawer: false,
        availableLocales: this.$available_locales,
        links: [
          { icon: 'dashboard', text: 'dashboard', route: '/' },
          { icon: 'folder', text: 'my_projects', route: '/projects' },
          { icon: 'person', text: 'team', route: '/team' }
        ]
      }
    }
  }
</script>

<style>
  nav {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) !important;
  }
</style>
