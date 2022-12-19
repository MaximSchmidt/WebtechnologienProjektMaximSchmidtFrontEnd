<template>
  <h1>ToDos</h1>
  <div class="container-fluid">
    <ToDoListTable> </ToDoListTable>
  </div>
</template>

<script>
import ToDoListTable from '@/components/ToDoListTable'
export default {
  name: 'ToDos',
  components: {
    ToDoListTable
  }
}
</script>
<style scoped>
</style>
