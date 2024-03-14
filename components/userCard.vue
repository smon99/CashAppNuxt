<script setup lang="ts">
import {ArrowRightStartOnRectangleIcon} from "@heroicons/vue/24/outline";
import {UserCircleIcon} from "@heroicons/vue/24/outline";
import {ref} from 'vue';
import {getStats} from "~/middleware/getStats";
import performLogout from "~/composables/user/performLogout";

const stats = ref({username: '', balance: ''});

(async () => {
  const {username, balance} = await getStats();
  stats.value.username = username;
  stats.value.balance = balance;
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
              <UserCircleIcon class="inline-block h-9 w-9 rounded-full text-gray-500"/>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{ stats.username }}</p>
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
            </div>
          </div>
        </a>
      </div>
      <ArrowRightStartOnRectangleIcon class="btn btn-secondary flex ml-4 w-16" @click="performLogout"/>
    </div>
  </div>
</template>

