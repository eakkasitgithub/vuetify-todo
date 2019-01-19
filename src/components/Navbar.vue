<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="showDrawer = !showDrawer">
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light hidden-xs-only">Todo</span>
        <span class="hidden-xs-only">App</span>
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
            <span>{{ $t('locale_name') }}</span>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(locale, index) in availableLocales"
              :key="index"
              @click="switchLocale(index)"
            >
              <v-list-tile-title>{{ localeFullName(locale) }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn class="hidden-xs-only" flat>
          <span>{{ $t('labels.sign_out') }}</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="showDrawer" class="orange darken-1" app>
      <v-list>
        <v-list-tile class="hidden-sm-and-up white--text">
          <span class="font-weight-light headline">Todo</span>
          <span class="headline">App</span>
        </v-list-tile>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title font-weight-regular white--text">{{ linksText(link.text) }}</v-list-tile-title>
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
    linksText(text) {
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
