<template>
  <div class="post-card">
    <h2 class="post-card-title">{{ activePost.title }}</h2>
    <p class="post-card-body">{{ activePost.body }}</p>
    <hr />
    <hr />
    <h2 class="head-comments">Comments:</h2>
    <ul class="lists list-comments">
      <comments-post
        v-for="comment of postComments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CommentsPost from '@/components/CommentsPost'

export default {
  name: 'Post',
  components: { CommentsPost },
  props: {
    id: {
      type: Number,
      default: 1,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['activePost', 'postComments']),
  },

  methods: {
    ...mapActions(['getPostById', 'getComments']),
  },

  created() {
    this.getPostById(this.id)
    this.getComments(this.id)
  },
}
</script>

<style scoped lang="scss">
.post-card {
  .post-card-title {
    @media screen and (max-width: 576px) {
      font-size: 24px;
    }
  }

  .post-card-body {
    @media screen and (max-width: 576px) {
      font-size: 18px;
    }

    margin-top: 10px;
    font-size: 20px;
  }

  .head-comments {
    @media screen and (max-width: 576px) {
      font-size: 26px;
      margin: 5px 0;
    }

    margin: 20px 0;
    font-size: 28px;
    font-weight: bold;
  }

  .list-comments {
    margin: 0 0 0 20px;
  }
}
</style>
