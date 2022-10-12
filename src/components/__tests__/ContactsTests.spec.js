/**
 * @vitest-enviroment happy-dom
 */

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Contacts from '../Contacts.vue'


describe('Contacts test', () => {
  it('renders properly', () => {
    const wrapper = mount(Contacts)
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})


it('should refresh', async () => {
  const wrapper = mount(Contacts)
  await wrapper.find('button').trigger('click')
  expect(wrapper.find('p[class="loadingState"]').exists()).toBeTruthy()
  })