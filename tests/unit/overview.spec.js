import { shallowMount } from '@vue/test-utils'
import Overview from '@/views/Overview.vue'


const mountComp = options => shallowMount(Overview, {
  mocks: options?.mocks
});

describe('Overview.vue', () => {
  it('renders', () => {
    const overview = mountComp();

    expect(overview.exists()).toBeTruthy();
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
  })

  it('renders variant "default" correctly', () => {
    const overview = mountComp();

    expect(overview.html()).toMatchSnapshot();
});
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