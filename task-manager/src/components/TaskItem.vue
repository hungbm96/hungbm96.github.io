<template>
  <div class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-task', task.id)"
    />
    <span :class="{ completed: task.completed }">{{ task.name }}</span>
    <button @click="$emit('edit-task', task)">Chỉnh sửa</button>
    <button @click="$emit('delete-task', task.id)">Xóa</button>
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
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

span {
  flex-grow: 1;
}

span.completed {
  text-decoration: line-through;
  color: gray;
}

button {
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #2c8c6b;
}
</style>
