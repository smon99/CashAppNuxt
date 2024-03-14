<script>
import {HomeIcon} from "@heroicons/vue/24/outline";
import {defineComponent} from "vue";

export default defineComponent({
  components: {HomeIcon}
})

</script>

<template>
  <router-link to="/" class="btn btn-secondary w-16">
    <home-icon/>
  </router-link>
</template>