<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.website }}</td>
    <td>
      <button class="info" @click="showModalWindow">Info</button>
      <modal-window :user="user" v-if="showModal" @close="closeWindow" />
    </td>
  </tr>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'

export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      default: {},
      required: true,
    },
  },

  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    showModalWindow() {
      this.showModal = true
    },

    closeWindow(p) {
      this.showModal = p
    },
  },

  components: { ModalWindow },
}
</script>

<style scoped lang="scss"></style>
