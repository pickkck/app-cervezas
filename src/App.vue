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
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
		v-model="drawer"
		right
		absolute
		bottom
		temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
		<router-view />
    </v-main>
  </v-app>
</template>

<script>
import appConfig from "@/app.config"

export default {
	name: 'App',
	page: {
		titleTemplate(title){
			title = typeof title === "function" ? title(this.$store) : title;
			return title ? `${title} | ${appConfig.title}` : `${appConfig.title}`;
		}
	},
	components: {
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
