<template>
  <div class="task-list">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :showCompleteButton="true"
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
  margin-top: 20px;
}
</style>
