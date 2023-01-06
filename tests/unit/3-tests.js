import { mount } from '@vue/test-utils'
import ToDoListTable from '@/components/ToDoListTable'
import Home from '@/views/Home'
import ToDoListCreateForm from '@/components/ToDoListCreateForm'

describe('Testing Home.vue', () => {
  const wrapper = mount(Home)

  it('tells if title is correct', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toMatch('Aufgaben')
  })

  it('has todo-list-create-form component', () => {
    const createForm = wrapper.findComponent(ToDoListCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })

  it('has todo-list-table component', () => {
    const table = wrapper.findComponent(ToDoListTable)
    expect(table.exists()).toBeTruthy()
  })
})
