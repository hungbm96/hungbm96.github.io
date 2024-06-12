<template>
  <div id="app">
    <nav>
      <router-link to="/">Task List</router-link>
      <router-link to="/add-task">Create/Edit Task</router-link>
    </nav>
    <div v-if="isTaskListPage" class="filters">
      <button @click="status = 'all'" :class="{ active: status === 'all' }">
        All
      </button>
      <button
        @click="status = 'incomplete'"
        :class="{ active: status === 'incomplete' }"
      >
        Incomplete
      </button>
      <button
        @click="status = 'completed'"
        :class="{ active: status === 'completed' }"
      >
        Completed
      </button>
    </div>
    <router-view
      @save-task="saveTask"
      @edit-task="startEditTask"
      @delete-task="deleteTask"
      @toggle-task="toggleTask"
      :tasks="filteredTasks"
      :task="editingTask"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tasks: [],
      editingTask: null,
      status: "all", // Trạng thái bộ lọc hiện tại
    };
  },
  computed: {
    filteredTasks() {
      if (this.status === "completed") {
        return this.tasks.filter((task) => task.completed);
      } else if (this.status === "incomplete") {
        return this.tasks.filter((task) => !task.completed);
      } else {
        return this.tasks;
      }
    },
    isTaskListPage() {
      return this.$route.name === "TaskList";
    },
  },
  methods: {
    startEditTask(task) {
      this.editingTask = { ...task };
      this.$router.push({ name: "EditTask", params: { id: task.id } });
    },
    saveTask(task) {
      if (task.id) {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks.splice(index, 1, task); // Thay thế phần tử trong mảng
        }
      } else {
        task.id = Date.now();
        this.tasks.push(task);
      }
      this.editingTask = null;
      this.$router.push("/");
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    toggleTask(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
};
</script>

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #35495e;
}

.filters {
  margin-bottom: 20px;
}

.filters button {
  padding: 5px 10px;
  margin-right: 10px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}

.filters button.active {
  background-color: #35495e;
}

.filters button:hover {
  background-color: #2c8c6b;
}
</style>
