<template>
	<v-card elevation="15" shaped>

		<v-card-title>Filter Beers</v-card-title>

		<v-divider class="mx-4"></v-divider>
		<v-card-text>
			<v-row justify="center">
				<span v-if="dates[0]">From {{ dates[0] | formatDate }} </span><span v-if="dates[1]">to {{ dates[1] | formatDate }}</span><span v-if="!dates[0]">Select a Date</span>
			</v-row>
			<v-row justify="center">
				<v-date-picker v-model="dates" type="month" range></v-date-picker>
			</v-row>
		</v-card-text>

		<v-card-actions>
			<v-btn color="primary" @click="filterBeers()">
				Apply Filters
			</v-btn>
			<v-spacer></v-spacer>
			<v-btn color="error" @click="resetFilters()">
				Reset Filters
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import moment from 'moment';
export default {
	name: 'FiltersBeers',
	data: () => ({
		dates: [],
	}),
	methods: {
		async filterBeers() {
			await this.$store.dispatch('beers/setPage', 1)
			await this.$store.dispatch('beers/setDates', this.dates.map((date) => moment(String(date)).format('MM-YYYY')))
			await this.$store.dispatch('beers/fetchBeers')
			await this.$store.dispatch('beers/setShowDialog', false);
		},
		async resetFilters() {
			this.dates = [];
			await this.$store.dispatch('beers/resetFilters')
			await this.$store.dispatch('beers/setPage', 1)
			await this.$store.dispatch('beers/fetchBeers')
			await this.$store.dispatch('beers/setShowDialog', false);
		},
	},
    computed: {
    },
	filters: {
		formatDate (date){
			if (date) {
				return moment(String(date)).format('MM/YYYY')
			}
		}
	}
}
</script>
