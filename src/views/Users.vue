<template>
  <div class="wrap-table">
    <table>
      <thead>
        <tr class="tr-head">
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Website</td>
          <td>Info</td>
        </tr>
      </thead>
      <tbody>
        <User v-for="user of users" :key="user.id" :user="user" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import User from '@/components/User'

export default {
  name: 'Users',

  computed: {
    ...mapGetters(['users']),
  },

  methods: {
    ...mapActions(['getUsers']),
  },

  created() {
    this.getUsers()
  },

  components: { User },
}
</script>

<style scoped lang="scss">
.wrap-table {
  overflow-x: auto;
  width: 100%;

  table {
    margin-top: 20px;
    text-align: center;

    .tr-head {
      font-weight: bold;
      font-size: 22px;
    }
  }
}
</style>
