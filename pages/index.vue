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

      <div class="w-full mt-20">
        <transaction-log>
        </transaction-log>
      </div>

      <div class="flex justify-start mt-16">
        <contacts-preview>
        </contacts-preview>
      </div>

      <div class="w-full h-1/2 mt-4">
        <transfer-options>
        </transfer-options>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
</script>