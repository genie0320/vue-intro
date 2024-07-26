<!-- ■■■ A long version ■■■ -->
<!-- 
<script>
import { ref } from 'vue'

// composition API
export default {

  setup() {
    const name = ref('Genie Park');
    const status = ref('active');
    const tasks = ref(['task 01', 'task 02', 'task 03']);

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    }

    return {
      name,
      status,
      tasks,
      toggleStatus
    }
  }  
}
</script> 
-->

<!-- ■■■ A shorter version ■■■-->
<script setup>
import { ref } from 'vue'

// for composition API
const name = ref('Genie Park');
const status = ref('active');
const tasks = ref(['task 01', 'task 02', 'task 03']);

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}
</script>

<template>
  <h1>Hello! {{ name }} from Vue</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a v-bind:href="link">Click for Google</a> -->
  <!-- <a :href="link">Click for Google</a>  -->

  <hr>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>

</template>

<style scoped>
  h1 {
    color : yellow
  }
</style>