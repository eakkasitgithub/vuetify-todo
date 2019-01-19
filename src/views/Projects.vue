<template>
  <div class="home">
    <!-- Fake info for now :P -->
    <h1>{{ $t('titles.my_projects') }}</h1>
    <v-container fluid my-4 pa-0>
      <v-card flat class="pa-3">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <h3>{{ $t('labels.project_title') }}</h3>
            <div>Play PUBG after dinner</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <h3>{{ $t('labels.person') }}</h3>
            <div>Em Torres</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <h3>{{ $t('labels.due_by') }}</h3>
            <div>-</div>
          </v-flex>
          <v-flex xs4 sm4 md2>
            <h3>{{ $t('labels.status') }}</h3>
            <div>{{ $t('labels.state.in_progress') }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {

}
</script>
