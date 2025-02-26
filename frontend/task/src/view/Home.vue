<template>
  <div class="flex flex-col justify-center items-center">
    <div class="hover:cursor-pointer" @click="isOpen = !isOpen">
      <img
        v-if="isOpen"
        class="w-150px"
        src="@/assets/freeRoomsLogo.png"
        alt="freerooms logo"
      />
      <img
        v-else
        class="w-150px"
        src="@/assets/freeroomsDoorClosed.png"
        alt="freerooms logo"
      />
    </div>
    <ol-typing-text
      class="font-700 text-4xl mt-2 dark:text-white"
      text="Unlock spaces, own your time, with Freerooms"
      :duration="10"
    />
  </div>
</template>

<script lang="ts" setup>
import { OlTypingText } from 'onionl-ui'
import { ref } from 'vue'

const isOpen = ref(true)
</script>
