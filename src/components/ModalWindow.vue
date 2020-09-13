<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h4>About user company</h4>
            </slot>
            <button @click="close">&times;</button>
          </div>
          <div class="modal-body">
            <p>{{ user.company.name }}</p>
            <p>"{{ user.company.catchPhrase }}"</p>
            <p>{{ user.company.bs }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    user: {
      type: Object,
      default: {},
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit('close', false)
    },
  },
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      @media screen and (max-width: 576px) {
        width: 200px;
      }

      width: 350px;
      margin: 0 auto;
      padding: 15px 20px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: 'Helvetica', 'Arial', sans-serif;

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
          margin: 0;
        }

        button {
          background-color: transparent;
          font-size: 24px;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }

      .modal-body {
        p {
          margin-top: 10px;
        }
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
