<template>
  <div class="overview">
    <div class="overview__headline">Übersicht</div>
    <Tasks 
      class="overview__tasks"
      @deletedtasks="deleteSelectedTasks($event)"
      @activate-overlay="this.showOverlay = $event"
      :text="this.allTasks" 
    />
  </div>
    <Overlay 
      class="overview__overlay"
      v-if="showOverlay"
      @activate-overlay="this.showOverlay = $event"
      @click="openOverlay"
      @addtask="addNewTask($event)"
    />
</template>

<script>
import Overlay from '../components/Overlay.vue'
import Tasks from '../components/Tasks.vue'
import { getAllTasks, saveAllTasks, deleteTasks } from '../services/taskServices'

export default {
  name: 'App',
  components: {
    Overlay,
    Tasks
  },
  data() {
    return { 
      allTasks: [],
      showOverlay: false,
    }
  },
  mounted() {
      this.allTasks = getAllTasks()
  },
  computed: {
    savedTasks() {
      return this.tasks
    }
  },
  methods: {
    addNewTask(task) {
      this.allTasks.push(task)  
      saveAllTasks(this.allTasks)
    },

    deleteSelectedTasks(tasks) {
      console.log("deleteSelectedTasks", tasks)
      tasks.forEach(task => {
        const index = this.allTasks.indexOf(task)

        if(index !== -1) {
          deleteTasks(index, this.allTasks)
        }
      })
      saveAllTasks(this.allTasks);
    },
  },
}
</script>

<style lang="scss">

.overview {
    width: 100%;
    border-radius: 24px;
    background: #98a4da;
    margin: 12px;
    padding: 30px;

    &__headline {
        font-weight: 600;
        font-size: 21px;
        line-height: 36px;
        text-align: start;
        padding-bottom: 15px;
    }
}

@media only screen and (min-width: 768px) {
    .overview {
        width: 678px;
        min-height: 720px;
        padding: 60px;

        &__headline {
            font-size: 32px;
            line-height: 36px;
        }
    }
}
</style>
