<template>
  <div id="app">
    <div id="nav">
      <router-link exact class="nav-link" active-class="active" to="/"
        >PostList</router-link
      >
      <router-link
        exact
        class="nav-link"
        active-class="active"
        to="/create-post"
        >CreatePost</router-link
      >
      <router-link exact class="nav-link" active-class="active" to="/users"
        >Users</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
a,
span,
button {
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 28px;
}

ul {
  list-style: none;

  li {
    cursor: default;
  }
}

table {
  width: 100%;
  display: table;

  tr {
    td {
      @media screen and (max-width: 576px) {
        font-size: 14px;
      }

      border: 1px solid #000;
      font-size: 20px;

      .info {
        @media screen and (max-width: 576px) {
          font-size: 14px;
        }

        cursor: pointer;
        font-size: 18px;
        padding: 0 3px;
      }
    }
  }
}

#app {
  @media screen and (max-width: 992px) {
    max-width: 100%;
    margin: 20px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  max-width: 80%;
  margin: 20px auto;

  #nav {
    text-align: center;
    margin-bottom: 30px;

    .nav-link {
      @media screen and (max-width: 992px) {
        font-size: 24px;
      }

      @media screen and (max-width: 576px) {
        font-size: 24px;
        display: flex;
        flex-direction: column;
      }

      padding: 10px 15px;
      margin-right: 5px;
      text-decoration: none;
      font-size: 28px;
      border-radius: 5px;
      color: #000000;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background-color: beige;
      }
    }
  }

  .lists {
    list-style: none;
  }
}
</style>
