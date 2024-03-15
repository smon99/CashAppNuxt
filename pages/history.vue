<script setup lang="ts">
import {defineAsyncComponent, ref} from 'vue';
import {getTransactions} from "~/middleware/getTransactions";
import {onMounted} from 'vue';
import DefaultHeader from "~/components/headers/defaultHeader.vue";
import {CurrencyEuroIcon} from "@heroicons/vue/24/outline";

const transactions = ref([]);

onMounted(async () => {
  const {username, balance, transactions: fetchedTransactions} = await getTransactions();
  transactions.value = fetchedTransactions;

});

definePageMeta({
  layout: 'history'
});
</script>

<template>
  <default-header/>

  <div class="flex justify-center mt-24">
    <div class="w-2/3">
      <div v-if="transactions.length > 0">
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="transaction in transactions" :key="transaction.transactionID" class="py-4">
            <div class="flex items-center gap-x-3">
              <CurrencyEuroIcon class="h-6 w-6 flex-none text-gray-800"/>
              <h3 class="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">Transaction ID:
                {{ transaction.transactionID }}</h3>
              <time :datetime="transaction.createdAt.date" class="flex-none text-xs text-gray-500">
                {{ transaction.createdAt.date }}
              </time>
            </div>
            <p class="mt-3 truncate text-sm text-gray-500">
              Value: {{ transaction.value.toFixed(2) }} | Purpose: {{ transaction.purpose }}
            </p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="text-center">No transactions available</p>
      </div>
    </div>
  </div>
</template>



