<template>
  <div class="w-screen border-1 border-solid border-b-gray-5">
    <div class="py-4px px-16px flex items-center justify-between">
      <div class="flex justify-center items-center">
        <img
          class="h-50px"
          src="@/assets/freeRoomsLogo.png"
          alt="freerooms logo"
        />
        <span class="text-3xl font-600 color-[var(--default-color)]">
          Freerooms
        </span>
      </div>
      <div class="space-x-2 mr-2">
        <ol-button
          v-for="btn in btnList"
          :key="btn.icon"
          :style="{
            backgroundColor: btn.active ? 'var(--default-color)' : '',
            color: btn.active ? '#fff' : 'var(--default-color)'
          }"
          class="border-1 rounded-md text-base p-2 color-[var(--default-color)] border-[var(--default-color)] hover:color-[var(--default-color)] hover:bg-[#ef6c002b]"
          :icon="`i-mi-${btn.icon}`"
          type="outline"
          @click="
            () => {
              if (btn.link) {
                navigateTo(btn.to!)
              }
            }
          "
        />
        <ol-button
          class="border-1 rounded-md text-base p-2 color-[var(--default-color)] border-[var(--default-color)] hover:color-[var(--default-color)] hover:bg-[#ef6c002b]"
          :style="{
            backgroundColor: isDark ? 'var(--default-color)' : '',
            color: isDark ? '#fff' : 'var(--default-color)'
          }"
          :icon="!isDark ? 'i-mi-moon' : 'i-mi-sun'"
          type="outline"
          @click="switchTheme"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OlButton } from 'onionl-ui'
import { useRouter } from 'vue-router'
import { reactive, ref, watch } from 'vue'

const isDark = ref(false)

const switchTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const router = useRouter()
const btnList = reactive([
  { icon: 'search', to: '/', link: true, active: false },
  { icon: 'grid', to: '/rooms', link: true, active: false },
  { icon: 'speakers', to: '/speakers', link: true, active: false },
  { icon: 'map', link: false, active: false }
])

watch(
  () => router.currentRoute.value.path,
  (path) => {
    btnList.forEach((btn) => {
      if (btn.link) btn.active = btn.to === path
    })
  },
  { immediate: true }
)

const navigateTo = (to: string) => {
  router.push(to)
}
</script>
