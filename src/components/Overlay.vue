<template>
  <div class="overlay">
    <div class="overlay__content">
      <div class="overlay__header">
        <a href="#" @click="activeOverlay" class="overlay__close"></a>
      </div>
      <NewTask 
        @activate-overlay="this.$emit('activateOverlay', false )"
        @addtask="addTask($event)"
      />
    </div>
  </div>
</template>

<script>
import NewTask from './NewTask.vue'

export default {
  name: 'HelloWorld',
  components: { NewTask },
  props: {
    Element: String
  },
  methods: {
    addTask(toDo){
      this.$emit("addtask", toDo);
      this.activeOverlay();
    },
    activeOverlay () {
      this.$emit('activateOverlay', false )
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   .overlay {
      position: fixed;
      height: 100%;
      width: 95%;
      top: 0;
      scroll-behavior: smooth;
      animation-duration: 400ms;
      animation-timing-function: ease-in-out;
      animation-name: slidein;
      display: flex;
      justify-content: center;
      align-items: center;

      &__header {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        position: relative;
      }

      &__content {
        overflow: scroll;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #8897da;
        border-radius: 24px;
        padding: {
          right: 40px;
          bottom: 40px;
          left: 40px;
        }
      }

      &__close {
          display: block;
          position: absolute;
          right: 0;
          top: 25px;
          width: 32px;
          height: 32px;

        &:before, &:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 32px;
            width: 5px;
            background-color: #3D5DE8;
            width: 4.57px;
            border-radius: 20px;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }
      }
    }
@media only screen and (min-width: 768px) {
    .overlay {
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      scroll-behavior: smooth;
      animation-duration: 400ms;
      animation-timing-function: ease-in-out;
      animation-name: slidein;

      &__header {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        position: relative;
      }

      &__content {
        display: flex;
        flex-direction: column;
        width: 678px;
        height: 760px;
        background: #8897da;
        border-radius: 24px;
        padding: {
          right: 40px;
          bottom: 40px;
          left: 40px;
        }
      }

      &__close {
        display: block;
        position: absolute;
        right: 0;
        top: 25px;
        width: 32px;
        height: 32px;

        &:before, &:after {
          position: absolute;
          left: 15px;
          content: ' ';
          height: 32px;
          width: 5px;
          background-color: #3D5DE8;
          width: 4.57px;
          border-radius: 20px;
        }

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }
}
</style>
