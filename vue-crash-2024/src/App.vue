<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
import { normalizeClass } from 'vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>