<template>
  <div :style="pageContainer" id="wrapper">
    <md-app md-mode="fixed" class="app-container">
      <md-app-toolbar class="add-todo md-accent">
        <md-field>
          <md-input
            v-model="currentTodo"
            @keydown.enter="addTodo()"
            placeholder="Add a ToDo"
          ></md-input>
        </md-field>
      </md-app-toolbar>
      <md-app-content>
        <md-list class="todos">
          <md-list-item v-for="todo in todos" :key="todo.id">
            <span
              class="todo-item"
              :class="{ completed: todo.completed }"
              @dblclick="editTodo(todo)"
              v-if="!todo.edit"
            >
              {{ todo.label }}
            </span>
            <md-input
              v-else
              class="todo-edit"
              type="text"
              v-model="todo.label"
              @keyup.enter="editDone(todo)"
            >
            </md-input>

            <div class="todo-btns">
              <md-button
                class="completed-todo md-icon-button md-dense md-raised md-accent"
                @click="todoFinished(todo)"
              >
                <md-icon>done</md-icon>
              </md-button>
              <md-button
                class="remove-todo md-icon-button md-dense md-raised md-accent"
                @click="removeTodo(todo)"
              >
                <md-icon>delete</md-icon>
              </md-button>
            </div>
          </md-list-item>
        </md-list>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageContainer: {
        backgroundColor: "black",
        padding: "20px"
      },
      todos: [],
      currentTodo: "",
      editedTodo: null
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        edit: false
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.edit = true;
    },
    editDone(todo) {
      todo.edit = false;
    },
    todoFinished(todo) {
      todo.completed = true;
    }
  }
};
</script>

<style>
.completed {
  text-decoration: line-through;
  background-color: rgba(97, 97, 97, 0.4);
}

.app-container {
  max-width: 500px;
  min-width: 100px;
  text-align: center;
  margin: auto;
  height: 94vh;
  border-radius: 5px;
}
.add-todo {
  height: 100px;
}
.todo-btns {
  float: right;
  max-width: 15%;
}
.todo-item {
  max-width: 60%;
}
</style>
