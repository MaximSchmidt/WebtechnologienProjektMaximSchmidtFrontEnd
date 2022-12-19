<template>
  <table class="table table-dark">
    <thead class="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">titel</th>
      <th scope="col">description</th>
      <th scope="col">category</th>
      <th scope="col">date</th>
      <th scope="col">priority</th>
      <th scope="col">complete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo in todos" :key="todo.id">
      <th scope="row">{{todo.id}}</th>
      <td>{{todo.titel}}</td>
      <td>{{todo.description}}</td>
      <td>{{todo.category}}</td>
      <td>{{todo.date}}</td>
      <td>{{todo.priority ? 'erledigt' : 'nicht erledigt'}}</td>
      <td>{{todo.complete ? 'erledigt' : 'nicht erledigt'}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ToDoListTable',
  data () {
    return {
      todos: []
    }
  },
  mounted () {
    const endpoint = 'http://localhost:8080/api/v1/todolist'
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(todo => {
        this.todos.push(todo)
      }))
      .then(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
