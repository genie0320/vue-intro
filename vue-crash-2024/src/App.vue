<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import { normalizeClass } from 'vue';
</script>

<template>
  <Navbar />
  <Hero title = 'This is title' subTitle="Test is sub"/>
</template>