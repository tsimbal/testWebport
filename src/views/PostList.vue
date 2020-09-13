<template>
  <div class="post-list">
    <ul class="lists">
      <element-post
        v-for="post of getPostByPageNumber(currentPage)"
        :key="post.id"
        :post="post"
      />
    </ul>
    <app-pagination
      :current-page="currentPage"
      :page-count="pageCount"
      @onPrevPage="prevPage"
      @onNextPage="nextPage"
      @onCurrentPage="pageClick"
    />
  </div>
</template>

<script>
import ElementPost from '@/components/ElementPost'
import AppPagination from '@/components/AppPagination'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PostList',
  data() {
    return {
      currentPage: 1,
    }
  },

  computed: {
    ...mapGetters(['pageCount', 'getPostByPageNumber']),
  },

  methods: {
    ...mapActions(['getPosts']),

    pageClick(page) {
      if (page !== this.currentPage) {
        this.currentPage = page
      }
    },

    prevPage() {
      this.currentPage--
    },

    nextPage() {
      this.currentPage++
    },
  },

  created() {
    this.getPosts()
  },

  components: {
    AppPagination,
    ElementPost,
  },
}
</script>

<style scoped lang="scss">
.post-list {
  margin-top: 15px;
}
</style>
