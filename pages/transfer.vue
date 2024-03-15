<script setup lang="ts">
import {ArrowRightCircleIcon, GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";
import DefaultHeader from "~/components/headers/defaultHeader.vue";

definePageMeta({
  layout: 'deposit'
});
</script>

<template>
  <div class="flex items-center justify-between">
    <globe-europe-africa-icon class="h-12"/>
    <default-header/>
  </div>

  <div class="mt-24 flex flex-col items-center">

    <label for="price" class="flex text-sm font-medium leading-6 text-gray-900">Transaktion durchführen</label>

    <div class="relative mt-2 rounded-md shadow-sm flex items-center">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">@</span>
      </div>
      <input type="text" name="email" id="email"
             class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="email@example.com" aria-describedby="email-address"/>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <span class="text-gray-500 sm:text-sm" id="price-currency">E-Mail</span>
      </div>
    </div>

    <div class="relative mt-2 rounded-md shadow-sm flex items-center">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span class="text-gray-500 sm:text-sm">€</span>
      </div>
      <input type="text" name="price" id="price"
             class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="0,00" aria-describedby="price-currency"/>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
        <span class="text-gray-500 sm:text-sm" id="price-currency">EUR</span>
      </div>
    </div>

    <button type="submit" class="btn btn-secondary inset-y-0 right-0 flex items-center mt-3">
      <arrow-right-circle-icon class="h-10 w-24"/>
    </button>

  </div>
</template>