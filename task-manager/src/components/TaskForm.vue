<template>
  <div class="task-form">
    <input type="text" v-model="taskCopy.name" placeholder="Input task name" />
    <button @click="saveTask">{{ buttonLabel }}</button>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  props: {
    task: {
      type: Object,
      default: () => ({ name: "", completed: false }),
    },
  },
  data() {
    return {
      taskCopy: { ...this.task },
    };
  },
  watch: {
    task(newTask) {
      this.taskCopy = { ...newTask };
    },
    "$route.params.id": {
      immediate: true,
      handler(id) {
        if (id) {
          const task =
            this.$parent.tasks &&
            this.$parent.tasks.find((task) => task.id === parseInt(id));
          if (task) {
            this.taskCopy = { ...task };
          }
        }
      },
    },
  },
  computed: {
    buttonLabel() {
      return this.taskCopy.id ? "Save change" : "Create";
    },
  },
  methods: {
    saveTask() {
      this.$emit("save-task", this.taskCopy);
      this.taskCopy = { name: "", completed: false };
    },
  },
};
</script>

<style scoped>
.task-form {
  margin-bottom: 20px;
}

input {
  padding: 5px;
  margin-right: 10px;
}

button {
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
