<template>
    <div class="tasks">
        <li class="tasks__items" v-for="item in text" :key="item">
            <input class="tasks__input" type="checkbox" :value="item" v-model="checkedProducts"/>
            <Tile 
              class="tasks__tile" 
              :date="item.date" 
              :name="item.name" 
              :image="item.image" 
              :description="item.description" 
            />
        </li>
        <div class="tasks__wrapper" >
          <Button class="tasks__round-button" text="" variant="roundButton" @click="openOverlay()" />
          <Button class="tasks__button" text="Löschen" variant="whiteButton" @click="deleteTasks()"/>
          <Button class="tasks__button" text="Erledigt" variant="blueButton" />
        </div>
    </div>
</template>

<script>
import Tile from './Tile.vue'
import Button from './Button.vue'

export default {
  name: 'HelloWorld',
  components: { Tile, Button },
  props: {
    text: Array
  },
  data(){
    return {
      checkedProducts:[]
    }
  },
  methods: {
    deleteTasks() {
      console.log("deletedtasks");
      // console.log("deletedtasks", this.checkedProducts)
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
.tasks {
    &__items {
        color: #000000;
        opacity: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding-bottom: 20px;
    }

    &__wrapper {
        display: grid;
        grid-template-columns: auto auto auto;
        align-items: center;
        column-gap: 10px;
        justify-content: space-around; 
    }

    &__button {
        justify-self: end;
    }
}

@media only screen and (min-width: 768px) {
.tasks {
    &__wrapper {
        grid-template-columns: auto 140px 140px;
        padding-left: 28px;
        justify-content: initial; 
    }
}  
}
</style>
