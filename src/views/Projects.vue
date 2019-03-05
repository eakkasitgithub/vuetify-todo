<template>
  <div class="home">
    <!-- Fake info for now :P -->
    <h1 class="my-4">{{ $t('titles.my_projects') }}</h1>
    <v-container fluid my-4 pa-0>
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn fab small outline color="grey" class="ml-0 mr-2 mt-3" v-on="on" @click="sortBy('title')">
              <v-icon>folder</v-icon>
            </v-btn>
          </template>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn fab small outline color="grey" class="mx-0 mt-3" v-on="on" @click="sortBy('person')">
              <v-icon>person</v-icon>
            </v-btn>
          </template>
          <span>Sort by person</span>
        </v-tooltip>
      </v-layout>
      <template>
        <v-data-table
          :items="projects"
          :headers="headers"
          :pagination.sync="pagination"
          class="elevation-1 project-table body-2 mb-4"
          style="display: none;"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th
                v-for="header in props.headers"
                :key="header.text"
                :class="header.sortable ? ['text-xs-left column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : ''] : 'text-xs-left'"
                @click="changeSort(header.value, header.sortable)"
              >
                {{ headerText(header.text) }}
                <v-icon v-if="header.sortable">arrow_upward</v-icon>
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <tr :class="`py-2 ${ props.item.status }`">
              <td class="body-2">{{ props.item.title}}</td>
              <td class="body-2">{{ props.item.person }}</td>
              <td class="body-2">{{ props.item.due }}</td>
              <td>
                <div>
                  <v-chip :class="`white--text body-2 mx-0 ${ props.item.status  }`">
                    <v-avatar>
                      <v-icon>{{ stateIcon(props.item.status ) }}</v-icon>
                    </v-avatar>
                    {{ projectState(props.item.status ) }}
                  </v-chip>
                </div>
              </td>
            </tr>
          </template>
        </v-data-table>
      </template>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${ project.status }`">
          <v-flex xs12 md6>
            <h4>{{ $t('labels.project_title') }}</h4>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h4>{{ $t('labels.person') }}</h4>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h4>{{ $t('labels.due_by') }}</h4>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div>
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
    },
    headerText(text) {
      return this.$i18n.messages[this.$locale].labels[text]
    },
    changeSort(column, sortable) {
      if (!sortable) { return }
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  data() {
    return {
      pagination: {
        sortBy: 'name'
      },
      headers: [
        { text: 'project_title', sortable: false, value: 'project_title' },
        { text: 'person', sortable:true, value: 'person' },
        { text: 'due_by', sortable: false, value: 'due_by' },
        { text: 'status', sortable:true, value: 'status' }
      ],
      projects: [
        { title: 'Learn Vuejs', person: 'Em Torres', due: 'January 19, 2019', status: 'in_progress' },
        { title: 'Learn Vuetify', person: 'Liu Kang', due: 'January 08, 2019', status: 'done' },
        { title: 'Add i18n localization', person: 'John Snow', due: 'August 12, 2019', status: 'in_progress' },
        { title: 'Create a Github repo', person: 'Homer Simpson', due: 'December 17, 2019', status: 'done' },
        { title: 'Code some stuff', person: 'Rick Sánchez', due: 'February 22, 2019', status: 'in_progress' },
        { title: 'Add Data Table', person: 'Le Papu', due: 'February 26, 2019', status: 'in_progress' }
      ]
    }
  }
}
</script>
<style>
.project-table .in_progress {
  border-left: 8px solid tomato;
}
.project-table .done {
  border-left: 8px solid green;
}
.project.in_progress {
  border-left: 4px solid tomato;
}
.project.done {
  border-left: 4px solid green;
}
.v-card {
  border-radius: 0;
}
.v-chip.in_progress {
  background: tomato;
}
.v-chip.done {
  background: green;
}
</style>
