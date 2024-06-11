<template>
  <div class="task-list">
    <h2>Task List</h2>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @edit-task="editTask"
      @delete-task="deleteTask"
      @toggle-task="toggleTask"
    />
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    editTask(task) {
      this.$emit("edit-task", task);
    },
    deleteTask(taskId) {
      this.$emit("delete-task", taskId);
    },
    toggleTask(taskId) {
      this.$emit("toggle-task", taskId);
    },
  },
};
</script>

<style scoped>
.task-list {
  margin-left: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.task-list h2 {
  text-align: center;
}
</style>
