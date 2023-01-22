<template>
    <v-data-iterator 
      :items="beers" 
      hide-default-footer>

      <template v-slot:header>
        <SearchBeer />
      </template>

      <template v-slot:default>
        <div class="beer-list">
          <v-container>
            <v-row >
              <v-col
                v-for="beer in beers"
                :key="beer.id"
                cols="12"
                xs="12"
                sm="6"
                md="4"
                lg="3"
              >
                <CardBeer :beer="beer" />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </template>

      <template v-slot:no-data>
        <div class="beer-list">
          <img src="@/assets/no-results.png" alt class="img-fluid" width="100%" height="100%"/>
          <h2>No results found</h2>
        </div>
      </template>

      <template v-slot:footer>
        <PaginationBeers />
      </template>

    </v-data-iterator>
</template>
<script>
	import { mapState } from 'vuex'
	import SearchBeer from '@/components/SearchBeer.vue'
	import CardBeer from '@/components/CardBeer.vue'
	import PaginationBeers from '@/components/PaginationBeers.vue'

	export default {
		name: "TableBeers",
		components: {
			SearchBeer,
			CardBeer,
      PaginationBeers,
		},
		computed: {
			...mapState('beers', {
				beers: state => state.beers,
			}),
		},
		methods: {
			async getAllBeers() {
				await this.$store.dispatch('beers/fetchBeers')
			},
		},
		mounted() {
			this.getAllBeers()
		},
	}
</script>