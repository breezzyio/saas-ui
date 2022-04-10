<script>

import { defineComponent } from 'vue';

import iconTenants from './icons/icon-tenants.vue'
import iconReviews from './icons/icon-reviews.vue'
import iconCompany from './icons/icon-company.vue'


export default /*#__PURE__*/defineComponent({
     name: 'mainIcon', // vue component name
     props:['component'],
     components: {
          iconTenants,
          iconReviews,
          iconCompany
     },
});

</script>


<template>
     <component v-bind:is="component" class="w-12 h-12 text-icongray flex-shrink-0"/>
</template>