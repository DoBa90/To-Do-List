import { shallowMount } from '@vue/test-utils'
import Tasks from '@/components/Tasks.vue'


const mountComp = options => shallowMount(Tasks, {
    propsData: {
          text: [],
    },
    mocks: options?.mocks
});

describe('Tasks.vue', () => {
    it('renders', () => {
        const tasks = mountComp();

        expect(tasks.exists()).toBeTruthy();
    })

    it('renders variant "default" correctly', () => {
        const tasks = mountComp();

        expect(tasks.html()).toMatchSnapshot();
    });

      // it('renders props.msg when passed', () => {
      //     const tasks = mountComp();
      //     const text = 'Hier alle Geräte ansehen und das richtige Produkt finden';
    
      //     expect(tasks.text()).toMatch(text)
      // })
})



// import { createLocalVue, shallowMount } from '@vue/test-utils';
// import NavigationBox from '@/components/NavigationBox/NavigationBox.vue';

// const localVue = createLocalVue();

// const mountComp = options => shallowMount(NavigationBox, {
//     localVue,
//     propsData: {
//         headline: 'Hier alle Geräte ansehen und das richtige Produkt finden',
//         url: 'https://kaufland.de/elektronik',
//         href: 'https://kaufland.de/elektronik',
//         ...options?.propsData
//     },
//     mocks: options?.mocks
// });

// describe('NavigationBox', () => {
//     it('renders', () => {
//         const navigationBox = mountComp();

//         expect(navigationBox.exists()).toBeTruthy();
//     })