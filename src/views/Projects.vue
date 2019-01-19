<template>
  <div class="home">
    <!-- Fake info for now :P -->
    <h1 class="my-4">{{ $t('titles.my_projects') }}</h1>
    <v-container fluid my-4 pa-0>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${ project.status }`">
          <v-flex xs12 md6>
            <h3>{{ $t('labels.project_title') }}</h3>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h3>{{ $t('labels.person') }}</h3>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h3>{{ $t('labels.due_by') }}</h3>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div :class="{'text-xs-center': $vuetify.breakpoint.smAndUp}">
              <v-chip :class="`white--text body-2 mx-0 ${ project.status }`">
                <v-avatar>
                  <v-icon>{{ stateIcon(project.status) }}</v-icon>
                </v-avatar>
                {{ projectState(project.status) }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  methods: {
    projectState(text) {
      return this.$i18n.messages[this.$locale].labels.state[text]
    },
    stateIcon(state) {
      return state === 'in_progress' ? 'timelapse' : 'check_circle'
    }
  },
  data() {
    return {
      projects: [
        { title: 'Learn Vuejs', person: 'Em Torres', due: 'January 19, 2019', status: 'in_progress' },
        { title: 'Learn Vuetify', person: 'Liu Kang', due: 'January 08, 2019', status: 'done' },
        { title: 'Add i18n localization', person: 'John Snow', due: 'August 12, 2019', status: 'in_progress' },
        { title: 'Create a Github repo', person: 'Homer Simpson', due: 'December 17, 2019', status: 'done' },
        { title: 'Code some stuff', person: 'Rick Sánchez', due: 'February 22, 2019', status: 'in_progress' }
      ]
    }
  }
}
</script>
<style>
.project.in_progress {
  border-left: 4px solid tomato;
}
.project.done {
  border-left: 4px solid green;
}
.v-chip.in_progress {
  background: tomato;
}
.v-chip.done {
  background: green;
}
</style>
