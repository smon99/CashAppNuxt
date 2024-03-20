<script setup lang="ts">
import {permanentAuth} from "~/middleware/permanentAuth";

permanentAuth();
</script>

<template>


  <div class="w-full h-full grid grid-cols-2 justify-items-start items-end">
    <div class="w-full h-full flex flex-col justify-between items-start">
      <logo-box class="mt-4 mr-2">
      </logo-box>

      <logo-cloud class="mb-4">
      </logo-cloud>
    </div>

    <div class="w-full h-full">
      <div class="flex justify-end">
        <user-card>
        </user-card>
      </div>

      <div class="w-full mt-20">
        <transaction-log>
        </transaction-log>
      </div>

      <div class="w-full h-1/2 mt-20">
        <transfer-options>
        </transfer-options>
      </div>
    </div>

  </div>

</template>