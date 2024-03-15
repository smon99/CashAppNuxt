<script setup lang="ts">
import {ClockIcon, CreditCardIcon, EnvelopeIcon, BanknotesIcon} from "@heroicons/vue/24/outline";

</script>
<template>
  <div class="flex flex-col w-full h-full justify-center items-center">
    <a href="/transfer"
       class="flex h-16 w-3/4 rounded-3xl bg-[#38b6ff] px-3.5 py-6 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 justify-between items-center">
      Guthaben versenden
      <envelope-icon class="h-8"/>
    </a>
    <br>
    <a href="/deposit"
       class="flex h-16 w-3/4 rounded-3xl bg-[#38b6ff] px-3.5 py-6 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 justify-between items-center mt-4">
      Guthaben einzahlen
      <banknotes-icon class="h-8"/>
    </a>
    <br>
    <a href="/paypal"
       class="flex h-16 w-3/4 rounded-3xl bg-[#38b6ff] px-3.5 py-6 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 justify-between items-center mt-4">
      Guthaben mit PayPal aufladen
      <credit-card-icon class="h-8"/>
    </a>
    <br>
    <a href="/history"
       class="flex h-16 w-3/4 rounded-3xl bg-[#38b6ff] px-3.5 py-6 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 justify-between items-center gap-4 mt-4">
      Transaktionen einsehen
      <clock-icon class="h-8"/>
    </a>
  </div>
</template>
