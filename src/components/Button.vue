<template>
    <button :class="`button button__${variant}`"> {{ text }} </button>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    variant: {
        type: String,
        default: 'whiteButton',
        validator(value) {
            return ['whiteButton', 'blueButton', 'roundButton'].includes(value)
        },
    },
    text: String,
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .button {
        cursor: pointer;
        width: fit-content;

        &__whiteButton {
            background: #FFFFFF;
            color: #3D5DE8;
            border: 2px solid #3D5DE8;
            border-radius: 100px;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            height: 44px;
            padding-left: 15px;
            padding-right: 15px;

            &:hover {
                box-shadow: 0 6px 14px 0 #666;
            }
        }

        &__blueButton {
            background: #3D5DE8;
            color: #FFFFFF;
            border: 2px solid #3D5DE8;
            border-radius: 100px;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            height: 44px;
            padding-left: 15px;
            padding-right: 15px;
            
            &:hover {
                box-shadow: 0 6px 14px 0 #666;
            }
        }

        &__roundButton {
            width: 40px;
            height: 40px;
            background-color: #3D5DE8;
            border-radius: 50%;
            transition: all 0.1s ease-in-out;

            font-size: 35px;
            color: white;
            text-align: center;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            &:hover {
                box-shadow: 0 6px 14px 0 #666;
            }

            &:before, &:after {
                position: absolute;
                left: 15px;
                content: ' ';
                height: 22px;
                width: 3px;
                background-color: white;
                border-radius: 20px;
                left: 45%;
            }

            &:after {
                transform: rotate(-90deg);
            }
        }
    }

@media only screen and (min-width: 768px) {
    .button {
        &__roundButton {
            width: 60px;
            height: 60px;

            font-size: 50px;
            text-align: center;
            border: none;

            &:before, &:after {
                height: 32px;
                width: 5px;
            }
        }
    }
}
</style>
