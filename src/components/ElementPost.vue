<template>
  <li class="list-item">
    <router-link
      class="link-title"
      active-class="active"
      :to="{ name: 'Post', params: { id: post.id } }"
    >
      {{ post.title }}
    </router-link>
    <p class="list-item-body">{{ post.body }}</p>
  </li>
</template>

<script>
export default {
  name: 'ElementPost',
  props: {
    post: {
      type: Object,
      default: {},
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.list-item {
  @media screen and (max-width: 576px) {
    padding: 10px 20px;
    margin: 0 10px 10px 10px;
  }

  border: 1px solid #000000;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px 30px;

  &:last-child {
    margin-bottom: 0;
  }

  .link-title {
    @media screen and (max-width: 576px) {
      font-size: 20px;
    }

    text-decoration: none;
    font-weight: bolder;
    font-size: 24px;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  .list-item-body {
    @media screen and (max-width: 576px) {
      font-size: 16px;
    }

    margin-top: 10px;
    font-size: 18px;
  }
}
</style>
