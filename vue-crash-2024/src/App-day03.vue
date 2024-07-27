<script setup>
import { ref, onMounted } from 'vue'

// for composition API
const name = ref('Genie Park');
const status = ref('active');
const tasks = ref(['task 01', 'task 02', 'task 03']);
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log('Error fetching tasks')
  }
})
</script>

<template>
  <h1>Hello! {{ name }} from Vue</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form action="" @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="createTask" name="new-Task" v-model='newTask'>
  </form>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

  <!-- <a :href="link">Click for Google</a>  -->

  <hr>
  <button @click="toggleStatus">Change Status</button>

</template>

<style scoped>
  h1 {
    color : yellow
  }
</style>