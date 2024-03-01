<template>
  <nav class="flex flex-1 flex-col justify-center" aria-label="Sidebar">
    <ul role="list" class="-mx-2 space-y-1">
      <li v-for="item in navigation" :key="item.name">
        <a :href="item.href"
           :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold']">{{
            item.name
          }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navigation = [
  {name: 'Guthaben einzahlen', href: '/deposit', current: false},
  {name: 'Guthaben versenden', href: '/transaction', current: false},
  {name: 'Transaktionen einsehen', href: '/history', current: false},
  {name: 'Profil bearbeiten', href: '/user/settings', current: false},
  {name: 'PayPal Guthaben buchen', href: '/paypal', current: false},
]
</script>