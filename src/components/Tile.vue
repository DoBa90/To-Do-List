<template>
    <div class="tile">
        <img class="tile__item-pic" alt="Vue logo" :src="imageSource">
        <div class="tile__wrapper-text">
            <div class="tile__date"> {{date}} </div>
            <div class="tile__headline">{{ name }}</div>
            <div class="tile__description">{{ description }}</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    date: String,
    name: String,
    description: String,
    image: String,
  },
  data(){
    return {
      checkedProducts:[]
    }
  },
  computed: {
      imageSource() {
        const noImage = require('../assets/noPhoto.jpeg')
        return this.image ? this.image : noImage
      }
  },
  methods: {
    deleteTasks() {
      console.log("deletedtasks");
      this.$emit("deletedtasks", this.checkedProducts);
    },
    openOverlay() {
      this.$emit('activateOverlay', true )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .tile {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 16px;

        &__item-pic {
            width: 100%;
        }

        &__wrapper-text {
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 24px;
            padding-top: 15px;
            overflow: hidden;
        }

        &__date {
            align-self: flex-end;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
        }

        &__headline {
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            text-align: start;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 100%;
            display: block;
            overflow: hidden;
        }

        &__description {
            font-weight: 400;
            font-size: 12px;
            line-height: 27px;
            text-align: start;
            display: -webkit-box;
            text-overflow: ellipsis;
            width: 100%;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
@media only screen and (min-width: 768px) {
    .tile {
        flex-direction: row;

        &__item-pic {
            width: 30%;
        }

        &__wrapper-text {
            width: 70%;
        }

        &__headline {
            font-size: 24px;
            line-height: 28px;
        }

        &__description {
            font-size: 18px;
            line-height: 27px;
        }
    }
}
</style>
