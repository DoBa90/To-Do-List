<template>
    <label v-if="title" class="input-field__title"> {{ title }} </label>
    <input 
        :class="`input-field__${variant}`"  
        maxlength="60" 
        :name="content" 
        :id="content" 
        :type="`${variant === 'textInput' ? 'text' : 'file'}`" 
        placeholder="Beschreibung"
    />
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    variant: {
        type: String,
        default: 'input',
        validator(value) {
            return ['textInput', 'fileInput'].includes(value)
        },
    },
    content: String,
    title: String,
    placeholder: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.input-field {
    &__textInput {
        width: 100%;
        height: 60px;
        background: #FFFFFF;
        border-radius: 8px;
    }

    &__fileInput {
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
            font-size: 12px;
            line-height: 27px;
        }
    }
}
</style>
