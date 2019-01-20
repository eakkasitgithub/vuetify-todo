<template>
  <v-app class="grey lighten-4" id="main-app">
    <Navbar />
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
html {
  overflow-y: auto;
}
.v-icon--right {
  margin-left: 6px !important;
}
table.v-table thead tr th {
  font-size: 16px;
  color: #212121 !important;
}
table.v-table .column.sortable.active {
  font-weight: 600;
}
</style>
