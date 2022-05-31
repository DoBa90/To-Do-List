import { shallowMount } from '@vue/test-utils'
import Overview from '@/views/Overview.vue'


const mountComp = options => shallowMount(Overview, {
  mocks: options?.mocks
});

describe('Overview.vue', () => {
  it('renders', () => {
    const overview = mountComp();

    expect(overview.exists()).toBeTruthy();
  })

  it('renders variant "default" correctly', () => {
    const overview = mountComp();

    expect(overview.html()).toMatchSnapshot();
});
})