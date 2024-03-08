<template>
  <div class="w-full min-h-screen h-screen bg-[url('https://steamuserimages-a.akamaihd.net/ugc/1630857407149878134/A4F2E1291F417D9A6633224A7D43EA5695A7ED9A/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true')]">
    <div class="bg-[rgba(87,124,212,0.25)] backdrop-blur-sm w-full h-full flex justify-center items-center">
      <div class="rounded-3xl p-12 bg-gray-300 w-1/4 h-5/8">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>