<template>
  <div class="wrap-create-post">
    <h2>Create Post</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="titlePost"
        />
      </div>
      <div class="form-group">
        <label for="body">Body:</label>
        <textarea
          id="body"
          class="form-control form-control-body"
          v-model="bodyPost"
        ></textarea>
      </div>
      <button class="submit-form" type="submit">Add post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      titlePost: '',
      bodyPost: '',
    }
  },

  methods: {
    onSubmit() {
      console.log('titlePost: ' + this.titlePost, 'bodyPost: ' + this.bodyPost)
    },
  },
}
</script>

<style scoped lang="scss">
.wrap-create-post {
  text-align: center;

  h2 {
    margin-bottom: 25px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    label {
      font-size: 18px;
    }

    .form-control {
      padding: 5px 10px;
      font-size: 16px;
    }

    .form-control-body {
      @media screen and (max-width: 576px) {
        width: 200px;
      }

      resize: none;
      width: 350px;
      height: 200px;
    }
  }

  .submit-form {
    padding: 5px 10px;
    font-size: 16px;
  }
}
</style>
