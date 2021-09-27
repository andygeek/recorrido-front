import StringField from '@/components/fields/string.vue'
import { mount } from '@vue/test-utils'

describe('StringField', () => {

  test('If I write something in the input it should emit the value', async () => {
    const wrapper = mount(StringField, {
      propsData: {
        name: 'Name',
        value: 'Value'
      }
    })
    let input = wrapper.find('input[type="search"]')
    input.setValue('andygeek')
    expect(wrapper.emitted('update:write')![0][0]).toEqual('andygeek')
  })
})