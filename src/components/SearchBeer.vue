<template>
  <v-toolbar dark color="blue darken-3" class="mb-1">
    <v-text-field 
      v-model="search"
      clearable 
      flat 
      solo-inverted 
      hide-details
      prepend-inner-icon="mdi-magnify" 
      label="Search Beer">
    </v-text-field>
  </v-toolbar>
</template>

<script>
  import {  mapGetters } from 'vuex'
  
  export default {
    name: 'SearchBeer',

    data: () => ({
    }),
		computed: {
			...mapGetters('beers', {
				currentSearch:  'getCurrentSearch',
			}),
      search: {
        get (){
          return this.currentSearch;
        },
        async set (value) {
          await this.$store.dispatch('beers/setSearch', value);
          await this.$store.dispatch('beers/setPage', 1);
          await this.$store.dispatch('beers/fetchBeers');
          this.scrollToTop();
        }
      },
		},
    methods: { 
      scrollToTop() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }
</script>
