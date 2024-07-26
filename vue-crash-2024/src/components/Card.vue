<script setup>
import { defineProps } from 'vue';

defineProps({
    bg: {
        type: String,
        default:'bg-gray-100',
    },
})
</script>

<template>
<!-- ` ` 안에 있는 것은 무엇이든 js로 인식한다. -->
<div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
</div>    
</template>