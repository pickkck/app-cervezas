<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
		<router-link to="/">
			<v-img
				alt="Vuetify Logo"
				class="shrink mr-2"
				contain
				src="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/usf-duff-brewery-logo-b.png"
				transition="scale-transition"
				width="40"
			/>
        </router-link>
        

        <h1>Beers App</h1>
      </div>
    </v-app-bar>
    <v-main>
		<router-view />
    </v-main>
	<LoaderBeer />
  </v-app>
</template>

<script>
import appConfig from "@/app.config"
import LoaderBeer from '@/components/LoaderBeer.vue'

export default {
	name: 'App',
	page: {
		titleTemplate(title){
			title = typeof title === "function" ? title(this.$store) : title;
			return title ? `${title} | ${appConfig.title}` : `${appConfig.title}`;
		}
	},
	components: {
		LoaderBeer
	},
	data: () => ({
		drawer: false,
		group: null,
	}),
	methods: {
	},
	watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
