<script setup lang="ts">

import DefaultHeader from "~/components/headers/defaultHeader.vue";
import {GlobeEuropeAfricaIcon} from "@heroicons/vue/24/outline";

definePageMeta({
  layout: 'deposit'
});
</script>

<template>
  <div class="flex items-center justify-between">
    <globe-europe-africa-icon class="h-12"/>
    <default-header class="this on the right side(end)"/>
  </div>

  <!-- PayPal Logo -->
  <table border="0" cellpadding="10" cellspacing="0" align="center">
    <tbody>
    <tr>
      <td align="center"></td>
    </tr>
    <tr>
      <td align="center"><a
          href="https://ad.doubleclick.net/ddm/trackclk/N426203.3410571DEPAYPALLOGOCENTE/B21619412.227908863;dc_trk_aid=425874235;dc_trk_cid=105266791;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
          title="So funktioniert PayPal"
          onclick="javascript:window.open('https://ad.doubleclick.net/ddm/trackclk/N426203.3410571DEPAYPALLOGOCENTE/B21619412.227908863;dc_trk_aid=425874235;dc_trk_cid=105266791;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=715, height=539); return false;"><img
          src="https://www.paypalobjects.com/webstatic/de_DE/i/de-pp-logo-200px.png" border="0"
          alt="PayPal Logo"/></a>
      </td>
    </tr>
    </tbody>
  </table>
  <!-- PayPal Logo -->
</template>