<template>
	<div id="app-loader" v-if="is_loading">
    <img src="@/assets/loader.gif" alt class="img-fluid" width="100%" height="100%"/>
  </div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: "LoaderBeer",
		components: {
		},
		computed: {
			...mapState('beers', {
				is_loading: state => state.is_loading,
			}),
		},
	}
</script>