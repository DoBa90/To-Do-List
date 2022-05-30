<template>
    <div class="component">
        <div class="component__headline"> Aufgabe hinzufügen Vorschau </div>
        <Tile class="component__tile" :date="this.date" :name="name" :image="userImage" :description="description" />
        <div class="component__hr" />
        <div class="component__layout">
            <label class="component__input-label" for="name">Aufgabe</label>
            <input class="component__input" v-model="name" name="name" id="name" type="text" placeholder="Add a Name...">
            <label class="component__input-label" for="description">Beschreibung</label>
            <input class="component__input" v-model="description" name="description" id="description" type="text" placeholder="Add a description...">
            <input class="component__inputNone" name="image" id="image" type="file" placeholder="Add a Image..." @change="onFileChange">
            <label class="component__fileInput" for="image"></label>
            <!-- <Input variant="fileInput" content="image" title="" placeholder=""  @change="onFileChange"/> -->
            <!-- <Input variant="textInput" content="name" title="Aufgabe" placeholder="Bitte füge ein Aufgabe ein" /> -->
            <div class="component__button-wrapper">
              <Button text="Anlegen" variant="blueButton" @click="addTask()"/>
              <Button text="Abbrechen" variant="whiteButton" @click="activeOverlay"/>
            </div>
            <p v-if="errors.length">
              <ul>
                <li v-for="error in errors" :key="error">
                  {{ error }}
                </li>
              </ul>
            </p>
        </div>
    </div>
</template>

<script>
import Tile from './Tile.vue'
import Button from './Button.vue'
// import Input from './Input.vue'

export default {
  name: 'HelloWorld',
  components: { Tile, Button },
  props: {
    msg: String
  },
  data() {
    return { 
      name: '',
      description: '',
      userImage: '',
      errors: [],
    }
  },
  computed: {
    date() {
      let date = new Date();
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('de-DE', options)
    },
    uniqueId() {
      return Math.random().toString(16).slice(2)
    }
  },
  methods: {
    addTask(){
      if (this.name && this.description) {
        const toDo = {'id': this.uniqueId, 'date': this.date, 'name': this.name, 'description': this.description, 'image': this.userImage}
        this.$emit("addtask", toDo);
      }

      this.errors = [];
      if (!this.name) {
        this.errors.push('Name erforderlich.');
      }
      if (!this.description) {
        this.errors.push('Beschreibung erforderlich.');
      }
    },
    activeOverlay () {
      this.$emit('activateOverlay', false )
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage(file) {
      const reader = new FileReader()
      const vm = this

      reader.onload = (e) => {
        vm.userImage = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .component {
        display: flex;
        flex-direction: column;

        &__layout {
            display: flex;
            flex-direction: column;
        }

        &__tile {
            margin-bottom: 20px;
            margin-top: 20px;
            width: 100%;
        }

        &__headline {
            font-weight: 600;
            font-size: 21px;
            line-height: 25px;
            letter-spacing: 0.006em;
            align-self: flex-start;
            text-align: start;
            margin-top: 18px;
        }

        &__input {
            width: 100%;
            height: 60px;
            background: #FFFFFF;
            border-radius: 8px;
            margin-bottom: 27px;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
        }

        &__input-label {
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            align-self: flex-start;
            margin-bottom: 16px;
        }

        &__fileInput {
          align-self: flex-start;

          &::-webkit-file-upload-button {
              visibility: hidden;
          }
          &::before {
              content: 'Select some files';
              padding: 5px 8px;
              white-space: nowrap;
              cursor: pointer;
              background: #FF0054;
              color: #FFFFFF;
              border: 2px solid #FF0054;
              border-radius: 100px;
              font-weight: 600;
              font-size: 18px;
              line-height: 27px;
              height: 44px;
              padding-left: 15px;
              padding-right: 15px;
          }
        }

        &__inputNone {
            display:none
        }

        &__button-wrapper {
            display: flex;
            align-self: flex-start;
            gap: 24px;
            margin-top: 12px;
            margin-bottom: 12px;            
        }

        &__hr {
            border: 1px solid #212018;
            width: 100%;
            margin-top: 33px;
            margin-bottom: 33px;
        }
    }

@media only screen and (min-width: 768px) {
    .component {
        &__headline {
            font-size: 32px;
        }

        &__button-wrapper {
            display: flex;
            align-self: flex-end;
            gap: 24px;
        }
    }
}
</style>
