<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Breezzyio/saasUiSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  Breezzyio/saasUiSample,
  // }
});
</script>

<template>
  <div id="app">
    <main-icon :component="'iconTenants'"></main-icon>
  </div>
</template>
