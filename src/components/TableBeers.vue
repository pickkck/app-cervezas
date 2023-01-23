<template>
  <v-data-iterator :items="beers" hide-default-footer>

    <template v-slot:header>
      <SearchBeer />
    </template>

    <template v-slot:default>
      <div class="beer-list">
        <v-container>
          <v-row>
            <v-col v-for="beer in beers" :key="beer.id" cols="12" xs="12" sm="6" md="4" lg="3">
              <CardBeer :beer="beer" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>

    <template v-slot:no-data>
      <div class="beer-list">
        <img src="@/assets/no-results.png" alt class="img-fluid img-no-results" />
        <h2>No results found</h2>
        <v-row justify="center" class="see-all-button">
          <v-btn color="primary" @click="resetFilters()">
            See All Beers
          </v-btn>
        </v-row>
      </div>
    </template>

    <template v-slot:footer>
      <v-divider class="mx-4" style="padding-bottom: 15px;"></v-divider>
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
    async resetFilters() {
      this.dates = [];
      await this.$store.dispatch('beers/resetFilters')
      await this.$store.dispatch('beers/setPage', 1)
      await this.$store.dispatch('beers/fetchBeers')
      await this.$store.dispatch('beers/setShowDialog', false);
    },
  },
  mounted() {
    this.getAllBeers()
  },
}
</script>