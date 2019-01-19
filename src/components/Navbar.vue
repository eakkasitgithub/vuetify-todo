<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="showDrawer = !showDrawer">
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="showDrawer" app class="orange darken-1">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title font-weight-regular white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDrawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Da Team', route: '/team' }
      ]
    }
  }
}
</script>
