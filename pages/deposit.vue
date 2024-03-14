<script setup lang="ts">
import DefaultHeader from "~/components/headers/defaultHeader.vue";
import {PaperAirplaneIcon} from "@heroicons/vue/24/outline";
import {GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";

definePageMeta({
  layout: 'deposit'
});
</script>

<template>
  <div class="flex items-center justify-between">
    <globe-europe-africa-icon class="h-12"/>
    <default-header class="this on the right side(end)"/>
  </div>

  <div class="mt-40 flex flex-col items-center">
    <label for="price" class="flex text-sm font-medium leading-6 text-gray-900">Guthaben einzahlen</label>
    <div class="relative mt-2 rounded-md shadow-sm flex items-center">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">€</span>
      </div>
      <input type="text" name="price" id="price"
             class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="0.00" aria-describedby="price-currency"/>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-10">
        <span class="text-gray-500 sm:text-sm" id="price-currency">EUR</span>
      </div>
      <button type="submit" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <paper-airplane-icon class="h-5 w-5 text-black"/>
      </button>
    </div>
  </div>

</template>