<template>
  <li class="comments-item">
    <p class="comments-email">Email: {{ comment.email }}</p>
    <p class="comments-title">{{ comment.name }}</p>
    <p class="comments-body">{{ comment.body }}</p>
  </li>
</template>

<script>
export default {
  name: 'CommentsPost',
  props: {
    comment: {
      type: Object,
      default: {},
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.comments-item {
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px 20px;

  &:last-child {
    margin-bottom: 0;
  }

  .comments-email {
    font-weight: 500;
    font-size: 18px;
    font-style: italic;
  }

  .comments-title {
    @media screen and (max-width: 576px) {
      font-size: 20px;
    }

    font-weight: 600;
    margin-top: 10px;
    font-size: 24px;
  }

  .comments-body {
    @media screen and (max-width: 576px) {
      font-size: 18px;
    }

    margin-top: 5px;
    font-size: 18px;
  }
}
</style>
