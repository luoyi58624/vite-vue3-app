<script setup lang="ts">
import { ref } from "vue";

const count = ref(0)
</script>

<template>
  <button @click="count++">count: {{count}}</button>
  <div v-for="i in 10" :key="i">列表：{{i}}</div>
</template>

<style scoped>
</style>
