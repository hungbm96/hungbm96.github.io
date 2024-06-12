<template>
  <div class="task-item">
    <input type="checkbox" :checked="task.completed" @change="toggleTask" />
    <span :class="{ completed: task.completed }">{{ task.name }}</span>
    <button @click="editTask">Edit</button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
    showCompleteButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggleTask() {
      this.$emit("toggle-task", this.task.id);
    },
    editTask() {
      this.$emit("edit-task", this.task);
    },
    deleteTask() {
      this.$emit("delete-task", this.task.id);
    },
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.task-item input[type="checkbox"] {
  margin-right: 10px;
}

.task-item span.completed {
  text-decoration: line-through;
}

.task-item button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}

.task-item button:hover {
  background-color: #2c8c6b;
}
</style>
