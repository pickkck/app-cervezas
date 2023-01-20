<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/usf-duff-brewery-logo-b.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Cervezas App</h1>
      </div>
    </v-app-bar>

    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
  },

  computed: {
    ...mapState('beers', {
      beers: state => state.beers,
    }),
  },

  data: () => ({
    //
  }),
  methods: {
    async getBeers() {
      await this.$store.dispatch('beers/getAllBeers');
      console.log(this.beers);
    },
  },
  async mounted() {
    await this.getBeers();
  },
};
</script>
