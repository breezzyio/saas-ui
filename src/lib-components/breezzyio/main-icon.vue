<script>

import { defineComponent } from 'vue';

// import IconTenants from './icons/IconTenants.vue'
// import IconReviews from './icons/IconReviews.vue'
// import IconCompany from './icons/IconCompany.vue'


// export default {
//      name: 'main-icon',
//      props:['component'],
//      components: {
//           IconTenants,
//           IconReviews,
//           IconCompany
//      },
// }


export default /*#__PURE__*/defineComponent({
  name: 'Breezzyio/mainIcon', // vue component name
});


</script>


<template>
     <component v-bind:is="component" class="w-12 h-12 text-icongray flex-shrink-0"/>
</template>