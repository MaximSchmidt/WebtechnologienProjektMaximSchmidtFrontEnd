<template>
  <h1>ToDos</h1>
  <div class="container-fluid">
    <to-do-list-table></to-do-list-table>
  </div>
  <to-do-list-create-form></to-do-list-create-form>
</template>

<script>
import ToDoListTable from '@/components/ToDoListTable'
import ToDoListCreateForm from '@/components/ToDoListCreateForm'
export default {
  name: 'ToDos',
  components: {
    ToDoListCreateForm,
    ToDoListTable
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/todolist', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>
<style scoped>
</style>
