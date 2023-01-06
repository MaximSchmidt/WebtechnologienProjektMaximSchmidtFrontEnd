<template>
    <div class="offcanvas-header">
      <h5 v-if="tableData.id" class="offcanvas-title text-white"> Aufgabe bearbeiten</h5>
      <h5 v-else class="offcanvas-title text-white"> Neue Aufgabe</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="row row-cols-lg-auto needs-validation g-3 align-items-center" id="todo-list-create-form" novalidate>
        <div class="col-9 text-white">
          <label for="title">Title</label>
          <div class="input-group">
            <input type="text" class="form-control"  placeholder="Gib einen Titel ein" id="title" v-model="title" required>
            <div class="invalid-feedback">
              Gib einen Titel ein
            </div>
          </div>
        </div>
        <div class="col-9 text-white">
          <label for="title">Beschreibung</label>
          <div class="input-group">
            <input type="text" class="form-control"  placeholder="Gib eine Beschreibung ein" id="description" v-model="description" required>
            <div class="invalid-feedback">
              Gib eine Beschreibung ein
            </div>
          </div>
        </div>
        <div class="col-9 text-white">
          <label for="title">Keywords</label>
          <div class="input-group">
            <input type="text" class="form-control"  placeholder="Gib Keywords ein" id="category" v-model="category" required>
            <div class="invalid-feedback">
              Gib Keywords ein
            </div>
          </div>
        </div>
        <div class="col-9 text-white">
          <label for="title">Datum</label>
          <div class="input-group">
            <input type="text" class="form-control"  placeholder="z.B. '2022-12-13' " id="date" v-model="date" required>
            <div class="invalid-feedback">
              Gib ein Datum ein
            </div>
          </div>
        </div>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-success" @click="closeTable">Schließen</button>
          <button type="button" class="btn btn-danger" @click="saveData">Speichern</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'ToDoListCreateForm',
  props: {
    tableData: Object,
    editTodo: Function,
    closeTable: Function
  },
  data () {
    return {
      title: '',
      description: '',
      category: '',
      date: '',
      response: {}
    }
  },
  methods: {
    saveData () {
      if (this.title !== '' && this.category !== '' && this.date !== '') {
        this.response = {}
        if (this.tableData.id) {
          this.response = this.tableData
        } else {
          this.response.priority = false
          this.response.complete = false
        }
        this.response.titel = this.title
        this.response.description = this.description
        this.response.category = this.category
        this.response.date = this.date
        this.editTodo(this.response)
      }
    }
  },
  mounted () {
    if (this.tableData) {
      this.title = this.tableData.titel
      this.description = this.tableData.description
      this.category = this.tableData.category
      this.date = this.tableData.date
    }
  }
}
</script>

<style scoped>

</style>
