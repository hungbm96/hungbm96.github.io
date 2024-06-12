import { createRouter, createWebHistory } from "vue-router";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";

const routes = [
  {
    path: "/",
    name: "TaskList",
    component: TaskList,
  },
  {
    path: "/add-task",
    name: "AddTask",
    component: TaskForm,
  },
  {
    path: "/edit-task/:id",
    name: "EditTask",
    component: TaskForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
