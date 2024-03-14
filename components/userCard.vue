<script setup lang="ts">
import {ArrowRightStartOnRectangleIcon} from "@heroicons/vue/24/outline";
import {ref} from 'vue';
import {getStats} from "~/middleware/getStats";

const stats = ref({username: '', balance: ''});

(async () => {
  try {
    const {username, balance} = await getStats();
    stats.value.username = username;
    stats.value.balance = balance;
  } catch (error) {
    console.error('Error fetching stats:', error);
  }
})();
</script>

<template>
  <div class="flex">
    <div class="flex items-center mr-8">
      Guthaben: {{ stats.balance }}€
    </div>

    <div class="flex justify-center ml-4">
      <div class="flex items-center mr-8">
        <a href="#" class="group block flex-shrink-0">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-9 w-9 rounded-full"
                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{ stats.username }}</p>
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
            </div>
          </div>
        </a>
      </div>

      <arrow-right-start-on-rectangle-icon class="btn btn-secondary flex ml-4 w-16">
      </arrow-right-start-on-rectangle-icon>
    </div>
  </div>
</template>
