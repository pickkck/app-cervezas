<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="total_pages"
    ></v-pagination>
  </div>
</template>

<script>
  import {  mapGetters } from 'vuex'

  export default {
    name: 'PaginationBeers',
    data: () => ({
    }),
		computed: {
			...mapGetters('beers', {
				currentPage:  'getCurrentPage',
        getTotalPages: 'getTotalPages'
			}),
      page: {
        get (){
          return this.currentPage;
        },
        async set (value) {
          await this.$store.dispatch('beers/setPage', value);
          await this.$store.dispatch('beers/fetchBeers');
          this.scrollToTop();
        }
      },
      total_pages: {
        get (){
          return this.getTotalPages;
        },
      }
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
