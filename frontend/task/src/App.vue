<template>
  <div class="overflow-x-hidden w-screen h-screen">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
</script>

<style></style>
