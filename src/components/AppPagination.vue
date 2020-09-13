<template>
  <ul class="pagination">
    <li
      :disabled="currentPage === 1"
      :class="{ disable: currentPage === 1 }"
      class="common-li prev-page"
      @click="pPage(currentPage)"
    >
      Prev
    </li>
    <li
      v-for="(page, index) of pageCount"
      :key="index"
      :page="page"
      class="common-li item-pagination"
      :class="{ active: currentPage === page }"
      @click="emitCurrentPage(page)"
    >
      {{ page }}
    </li>
    <li
      :disabled="currentPage === pageCount"
      :class="{ disable: currentPage === pageCount }"
      class="common-li next-page"
      @click="nPage(currentPage)"
    >
      Next
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
      required: true,
    },

    pageCount: {
      type: Number,
      default: 1,
      required: true,
    },
  },

  methods: {
    emitCurrentPage(page) {
      this.$emit('onCurrentPage', page)
    },

    pPage(page) {
      if (this.currentPage !== 1) {
        this.$emit('onPrevPage', --page)
      }
    },

    nPage(page) {
      if (this.currentPage !== this.pageCount) {
        this.$emit('onNextPage', ++page)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 20px;

  .common-li {
    @media screen and (max-width: 576px) {
      padding: 5px 5px;
    }

    padding: 10px 15px;
    margin-left: -1px;
    color: #000000;
    background-color: #fff;
    border: 1px solid #dee2e6;

    &:hover {
      color: #0056b3;
      background-color: #e9ecef;
      border-color: #dee2e6;
    }
  }

  .disable {
    color: #6c757d;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;

    &:hover {
      background-color: #fff;
      border-color: #dee2e6;
      color: #6c757d;
    }
  }

  .active {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
}
</style>
