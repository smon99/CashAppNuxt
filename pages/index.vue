<script setup lang="ts">
import {permanentAuth} from "~/middleware/permanentAuth";

permanentAuth();
</script>

<template>
  <div class="w-full h-full grid grid-cols-2 justify-items-start items-end">

    <div class="w-full h-7/8 mb-2.5">
      <logo-box>
      </logo-box>
    </div>

    <div class="w-full h-full">
      <div class="flex justify-end">
        <user-card>
        </user-card>
      </div>

      <div class="w-full mt-24">
        <transaction-log>
        </transaction-log>
      </div>

      <div class="w-full h-1/2 mt-12">
        <transfer-options>
        </transfer-options>
      </div>
    </div>

  </div>

</template>