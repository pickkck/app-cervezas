<template>
	<v-row>
		<v-col class="bloque-filtros" cols="12" sm="4" md="4" lg="3">
			<v-container>
				<FiltersBeers />
			</v-container>
		</v-col>
		<v-col cols="12" xs="12" sm="8" md="8" lg="9">
			<TableBeers />
		</v-col>
		<v-dialog
			v-model="fab"
			persistent
			>
			<template v-slot:activator="{ on, attrs }">
				<v-btn class="btn-filters" v-model="fab" color="blue darken-2" dark fab v-bind="attrs" v-on="on"> 
					<v-icon>
						mdi-tune
					</v-icon>
				</v-btn>
			</template>
			<div>
				<FiltersBeers />
			</div>
		</v-dialog>
	</v-row>
</template>
<script>
import {  mapGetters } from 'vuex'
import TableBeers from '@/components/TableBeers.vue'
import FiltersBeers from '@/components/FiltersBeers.vue'

export default {
	name: "AllBeer",
	page: {
		title: 'All Beers',
	},
	components: {
		TableBeers,
		FiltersBeers,
	},
	computed: {
		...mapGetters('beers', {
			showDialog:  'getShowDialog',
		}),
		fab: {
			get (){
				return this.showDialog;
			},
			async set (value) {
				await this.$store.dispatch('beers/setShowDialog', value);
			}
		},
	},
	methods: {
	},
}
</script>