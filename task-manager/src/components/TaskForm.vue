<template>
  <div class="task-form">
    <h2>{{ isEditing ? "Chỉnh sửa công việc" : "Thêm công việc mới" }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="taskName">Tên công việc:</label>
        <input type="text" id="taskName" v-model="task.name" required />
      </div>
      <button type="submit">
        {{ isEditing ? "Lưu thay đổi" : "Thêm công việc" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    taskToEdit: {
      type: Object,
      default: () => ({
        id: null,
        name: "",
        completed: false,
      }),
    },
  },
  data() {
    return {
      task: { ...this.taskToEdit },
      isEditing: !!this.taskToEdit.id,
    };
  },
  methods: {
    handleSubmit() {
      if (this.isEditing) {
        this.$emit("edit-task", this.task);
      } else {
        const newTask = {
          ...this.task,
          id: Date.now(),
        };
        this.$emit("add-task", newTask);
      }
      this.resetForm();
    },
    resetForm() {
      this.task = {
        id: null,
        name: "",
        completed: false,
      };
      this.isEditing = false;
    },
  },
  watch: {
    taskToEdit: {
      handler(newTask) {
        this.task = { ...newTask };
        this.isEditing = !!newTask.id;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.task-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2c8c6b;
}
</style>
