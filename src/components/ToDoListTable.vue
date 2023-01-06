<template>
  <div>
    <table class="table table-striped table-dark">
      <thead>
      <tr>
        <th scope="col">Titel</th>
        <th scope="col">Beschreibung</th>
        <th scope="col">Keywords</th>
        <th scope="col">Frist</th>
        <th scope="col">Aktion</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="toDo in toDo2" :key="toDo.id">
        <td>{{ toDo.titel }}</td>
        <td>{{ toDo.description }}</td>
        <td>{{ toDo.category }}</td>
        <td>{{ toDo.date }}</td>
        <td v-if="toDo.complete">
          <button type="button" class=" btn mx-1" @click="editDone(toDo)">🔄</button>
          <button type="button" class=" btn mx-1" @click="deleteToDo(toDo)">❌</button>
        </td>
        <td v-else class="">
          <button type="button" class="btn mx-1 text-warning" :class="toDo.priority ? 'bi-star-fill' : 'bi-star'" @click="editFavorite(toDo)"> </button>
          <button type="button" class=" btn mx-1" @click="editDone(toDo)">✔</button>
          <button type="button" class=" btn mx-1" @click="openTable(toDo)">✎</button>
          <button type="button" class=" btn mx-1" @click="deleteToDo(toDo)">❌</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ToDoListTable',
  props: {
    toDos: {
      type: Array,
      required: true
    },
    deleteToDo: Function,
    editTodo: Function,
    openTable: Function
  },
  data () {
    return {
      toDo2: this.toDos
    }
  },
  watch: {
    toDos: function (newV, oldV) {
      this.toDo2 = this.toDos
    }
  },
  methods: {
    editFavorite (toDo) {
      toDo.priority = !toDo.priority
      this.editTodo(toDo)
    },
    editDone (toDo) {
      toDo.complete = !toDo.complete
      this.editTodo(toDo)
    }
  }
}
</script>

<style scoped>

</style>
