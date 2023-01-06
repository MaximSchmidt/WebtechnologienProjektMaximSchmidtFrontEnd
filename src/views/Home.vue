<template>
  <div class="container mt-5">
    <h1> <p class="text-white">Aufgaben</p> </h1>
  </div>
  <to-do-list-create-form v-if="tableOpen" :tableData="tableData" :editTodo="editTodo" :closeTable="closeTable"></to-do-list-create-form>
  <div class="container mt-5">
    <div class="row">
      <div class="col-2">
        <input class="form-control" v-model="searchInput" placeholder="Filter nach Keywords"/>
      </div>
      <button class="btn btn-primary col-auto px-4" @click="openTable">➕</button>
    </div>
    <div class="row mt-2">
      <p class="text-decoration-underline text-white h6">Offen:</p>
      <to-do-list-table :toDos="checkToDos(false)" :deleteToDo="deleteToDo" :editTodo="editTodo" :openTable="openTable"></to-do-list-table>
    </div>
    <div class="row mt-2">
      <p class="text-decoration-underline text-white h6">Fertig:</p>
      <to-do-list-table :toDos="checkToDos(true)" :deleteToDo="deleteToDo" :editTodo="editTodo"></to-do-list-table>
    </div>
  </div>
</template>

<script>
import ToDoListTable from '@/components/ToDoListTable'
import ToDoListCreateForm from '@/components/ToDoListCreateForm'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { ToDoListCreateForm, ToDoListTable },
  data () {
    return {
      todos: [],
      searchInput: '',
      tableOpen: false,
      tableData: null
    }
  },
  methods: {
    checkToDos (isComplete) {
      return this.todos.filter(x => x.complete === isComplete && (x.category.includes(this.searchInput))).sort((x) => x.priority ? -1 : 1)
    },
    async deleteToDo (toDo) {
      const index = this.todos.findIndex(x => x.id === toDo.id)
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist/' + toDo.id
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const requestOptions = {
        method: 'DELETE',
        headers: headers,
        redirect: 'follow'
      }
      const response = await fetch(endpoint, requestOptions)
      if (response.ok) {
        this.todos.splice(index, 1)
      }
    },
    async editTodo (toDo) {
      if (this.tableOpen) {
        this.closeTable()
      }
      let endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist'
      let method = 'POST'
      const index = this.todos.findIndex(x => x.id === toDo.id)
      if (index !== -1) {
        endpoint += '/' + toDo.id
        method = 'PUT'
      }

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const toDoString = JSON.stringify(toDo)
      const requestOptions = {
        method: method,
        headers: headers,
        body: toDoString,
        redirect: 'follow'
      }
      const response = await fetch(endpoint, requestOptions)

      if (response.ok) {
        if (index !== -1) {
          this.todos[index] = toDo
        } else {
          toDo.id = parseInt(response.headers.get('location'))
          this.todos.push(toDo)
        }
      }
    },
    openTable (toDo = null) {
      this.tableOpen = true
      this.tableData = toDo
    },
    closeTable () {
      this.tableOpen = false
      this.tableData = null
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todolist'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(toDo => {
        this.todos.push(toDo)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
