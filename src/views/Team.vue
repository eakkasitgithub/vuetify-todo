<template>
  <div class="team">
    <h1 class="my-4">{{ $t('titles.team') }}</h1>
    <v-container fluid my-4 pa-0 grid-list-xl>
      <v-layout row wrap>
        <v-flex v-for="person in team" :key="person.name" xs12 sm6 md4 lg3>
          <v-card flat class="text-xs-center" xs6>
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img v-if="person.avatar" :src="person.avatar" class="d-inline-block align-top" alt="">
                <v-icon v-if="!person.avatar" size="100">fas fa-user-circle</v-icon>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="headline">{{ person.name }}</div>
              <div class="subheading">{{ person.role }}</div>
            </v-card-text>
            <v-divider></v-divider>
            <div class="text-xs-center">
              <v-btn icon @click="socialNetworkUrl(person.github)">
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn icon @click="socialNetworkUrl(person.twitter)">
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          { name: 'Emigdio Torres R', role: 'Web Developer', avatar: 'assets/avatars/emigdio.png', github: 'github.com/emigdio821', twitter: 'twitter.com/emigdio821' },
          { name: 'Liu Kang', role: 'Mortal Kombat fighter', avatar: 'assets/avatars/liu_kang.png' },
          { name: 'John Snow', role: 'King in the North', avatar: 'assets/avatars/jsnow.png' },
          { name: 'Mark Portnoy', role: 'Drummer', avatar: 'assets/avatars/portnoy.png' },
          { name: 'Nameless', role: 'Unknown', avatar: null }
        ]
      }
    },
    methods: {
      socialNetworkUrl(url) {
        if (!url) return;
        return window.open('https://' + url);
      }
    }
  }
</script>
