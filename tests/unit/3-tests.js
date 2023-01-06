import { mount } from '@vue/test-utils'
import ToDoListTable from '@/components/ToDoListTable'
import Home from '@/views/Home'
import ToDoListCreateForm from '@/components/ToDoListCreateForm'

// eslint-disable-next-line no-undef
describe('Testing Home.vue', () => {
  const wrapper = mount(Home)

  // eslint-disable-next-line no-undef
  it('tells if title is correct', () => {
    const wrapper = mount(Home)
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toMatch('Aufgaben')
  })

  // eslint-disable-next-line no-undef
  it('has todo-list-create-form component', () => {
    const createForm = wrapper.findComponent(ToDoListCreateForm)
    // eslint-disable-next-line no-undef
    expect(createForm.exists()).toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('has todo-list-table component', () => {
    const table = wrapper.findComponent(ToDoListTable)
    // eslint-disable-next-line no-undef
    expect(table.exists()).toBeTruthy()
  })
})
