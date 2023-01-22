<template>
	<v-card
		class="mx-auto"
		max-width="344"
	>
		<v-img
			:src="beer.image_url"
			height="200px"
			contain
		></v-img>

		<v-card-title>
			{{ beer.name }}
		</v-card-title>

		<v-card-subtitle>
			<v-row>
				<v-spacer></v-spacer>
				<div class="grey--text ms-4">
					{{ beer.abv }}% ABV
				</div>
			</v-row>

			<v-row
				class="mx-0"
			>
				{{ beer.tagline }}
			</v-row>

		</v-card-subtitle>

		<v-card-actions>
			<v-btn
			class="ml-2 mt-5"
			outlined
			rounded
			small
			>
				See Beer
			</v-btn>
			<v-spacer></v-spacer>

			<v-btn
				icon
				@click="show = !show"
			>
				<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>
		</v-card-actions>

		<v-expand-transition>
		<div v-show="show">
			<v-divider></v-divider>

			<v-card-text>
				<v-row>
					{{ beer.description }}
				</v-row>
				<v-row>
					<v-spacer></v-spacer>
					<div class="grey--text ms-4">
						Since {{ beer.first_brewed }}
					</div>
				</v-row>
			</v-card-text>
		</div>
		</v-expand-transition>
	</v-card>
</template>

<script>
export default {
	name: 'CardBeer',
	props: {
		beer: {
			typeof: Object,
		},
	},
	data: () => ({
      show: false,
	}),
}
</script>
