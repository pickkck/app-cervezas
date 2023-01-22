<template>
	<v-row>
		<v-col class="bloque-filtros" cols="12" sm="4" md="2" lg="2">
			Filtros
		</v-col>
		<v-col cols="12" xs="12" sm="8" md="10" lg="10">
			<TableBeers />
		</v-col>
	</v-row>
</template>
<script>
	import TableBeers from '@/components/TableBeers.vue'

	export default {
		name: "AllBeer",
		page: {
			title: 'All Beers',
		},
		components: {
			TableBeers,
		},
		computed: {

		},
		methods: {
		},
	}
</script>