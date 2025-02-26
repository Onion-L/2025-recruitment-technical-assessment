<template>
  <div class="flex flex-col gap-3 px-3">
    <div class="flex justify-between items-center mt-4">
      <div class="space-x-2">
        <ol-button
          icon="i-mi-filter-1"
          class="px-8 py-2 text-base font-600 border-2"
          type="outline"
          >Filter</ol-button
        >
        <ol-button
          icon="i-mi-sort"
          class="px-8 py-2 text-base font-600 border-2"
          type="outline"
          >Sort</ol-button
        >
      </div>

      <ol-input
        class="w-3xl border-1 focus:border-2 focus:shadow-none focus:ring-none"
        prefix="i-mi-search"
        placeholder="Search for a building..."
      />
      <div class="space-x-2">
        <ol-button
          icon="i-mi-calendar"
          class="border-gray color-gray dark:border-white dark:color-white px-8 py-2 text-base font-600 border-2"
          type="outline"
          >Calendar</ol-button
        >
        <ol-button
          icon="i-mi-compass"
          class="border-gray color-gray dark:border-white dark:color-white px-8 py-2 text-base font-600 border-2"
          type="outline"
          >Time</ol-button
        >
      </div>
    </div>
    <div class="w-full h-full grid grid-cols-4 gap-4">
      <div
        class="group hover:cursor-pointer relative h-385px rounded-md overflow-hidden"
        v-for="building in data"
        :key="building.name"
      >
        <img
          class="object-cover h-full w-full"
          :src="building.building_file"
          :alt="building.name"
        />
        <div
          class="absolute inset-0 bg-[var(--default-color)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        ></div>
        <div
          class="absolute py-10px px-15px top-0 m-2 right-0 p-2 rounded-md bg-white dark:bg-black flex justify-center items-center gap-1"
        >
          <div
            :style="{
              backgroundColor:
                building.rooms_available > 5
                  ? 'green'
                  : building.rooms_available > 0
                  ? 'var(--default-color)'
                  : '#ef5350'
            }"
            class="w-10px h-10px rounded-circle"
          ></div>
          <span class="text-12px dark:text-white">{{
            roomAvailabilityText(building.rooms_available)
          }}</span>
        </div>
        <div
          class="w-83% flex justify-between items-center m-10px px-20px rounded-md bg-[var(--default-color)] absolute bottom-0"
        >
          <p class="color-white">{{ building.name }}</p>
          <div class="color-white flex justify-center items-center gap-1">
            <span>0</span>
            <svg
              t="1740533790423"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2166"
              width="18"
              height="18"
            >
              <path
                d="M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z"
                p-id="2167"
                fill="#efb336"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { OlButton, OlInput } from 'onionl-ui'

const roomAvailabilityText = (rooms_available: number) => {
  return `${rooms_available} ${
    rooms_available > 1 ? 'rooms' : 'room'
  } available`
}

const data = [
  {
    name: 'AGSM',
    rooms_available: 9,
    building_file: '/src/assets/agsm.webp'
  },
  {
    name: 'Ainsworth Building',
    rooms_available: 16,
    building_file: '/src/assets/ainsworth.webp'
  },
  {
    name: 'Anita B Lawrence Centre',
    rooms_available: 44,
    building_file: '/src/assets/anitab.webp'
  },
  {
    name: 'Biological Sciences',
    rooms_available: 6,
    building_file: '/src/assets/biologicalScience.webp'
  },
  {
    name: 'Biological Science (West)',
    rooms_available: 8,
    building_file: '/src/assets/biologicalScienceWest.webp'
  },
  {
    name: 'Blockhouse',
    rooms_available: 42,
    building_file: '/src/assets/blockhouse.webp'
  },
  {
    name: 'Business School',
    rooms_available: 18,
    building_file: '/src/assets/businessSchool.webp'
  },
  {
    name: 'Civil Engineering Building',
    rooms_available: 8,
    building_file: '/src/assets/civilBuilding.webp'
  },
  {
    name: 'Colombo Building',
    rooms_available: 5,
    building_file: '/src/assets/colombo.webp'
  },
  {
    name: 'Computer Science & Eng (K17)',
    rooms_available: 7,
    building_file: '/src/assets/cseBuilding.webp'
  }
]
</script>
