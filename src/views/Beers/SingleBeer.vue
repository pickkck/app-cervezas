<template>
  <v-container>
    <div class="beer-list" v-if="!beer">
      <img src="@/assets/no-results.png" alt class="img-fluid img-no-results" />
      <h2>No results found</h2>
      <v-row justify="center" class="see-all-button">
        <v-btn color="primary" @click="$router.back()">
          Return
        </v-btn>
      </v-row>
    </div>
    <div v-if="beer" style="height: 100%">
      <v-breadcrumbs
        :items="items"
        divider="/"
      ></v-breadcrumbs>
      <v-card class="beer-card">
        <div class="beer-img-container">
          <v-img :src="beer.image_url" alt="image beer" contain height="200px" />
        </div>
          <v-tabs
            v-model="tab"
            background-color="orange darken-1 accent-4"
            show-arrows
            dark
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
              Description
            </v-tab>

            <v-tab href="#tab-2">
              Brewer Tip
            </v-tab>

            <v-tab href="#tab-3">
              Ingredients
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              value="tab-1"
            >
              <v-card style="padding-top: 15px;">
                <div class="card-beer-tag">{{ beer.tagline }}</div>
                <div class="card-beer-name">{{ beer.name }}</div>
                <v-card-text>
                  {{ beer.description }}
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item
              value="tab-2"
            >
              <v-card style="padding-top: 15px;">
                <div class="card-beer-tag">First Brewed - {{ beer.first_brewed }}</div>
                <v-card-text>
                  {{ beer.brewers_tips }}
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item
              value="tab-3"
            >
              <v-card style="padding-top: 15px; text-align: left;">
                <v-card-text>
                    <v-list disabled>
                      <v-header><b>Malth</b></v-header>
                      <v-list-item-group
                      >
                        <v-list-item v-for="(m, i) in beer.ingredients.malt" :key="i">
                          <v-list-item-content>
                            <v-list-item-subtitle>{{ m.name }}: {{ m.amount.value }} {{ m.amount.unit }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                    <v-list disabled>
                      <v-header><b>Hops</b></v-header>
                      <v-list-item-group
                      >
                        <v-list-item v-for="(hop, i) in beer.ingredients.hops" :key="i">
                          <v-list-item-content>
                            <v-list-item-subtitle>{{ hop.name }} {{ hop.amount.value }} {{ hop.amount.unit }} {{ hop.attribute }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  <div>
                    <b>Yeast: </b><span>{{ `${beer.ingredients.yeast}.` }}</span>
                  </div>
                  <div>
                    <b>Food Pairing: </b><span>{{ beer.food_pairing.join(', ') }}.</span>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>


        <div class="stats clearfix">
          <div class="stage-stat">
            <div class="stat-value">{{ beer.abv }}</div>
            <div class="stat">ABV</div>
          </div>

          <div class="stage-stat">
            <div class="stat-value">{{ beer.ibu }}</div>
            <div class="stat">IBU</div>
          </div>

          <div class="stage-stat no-border">
            <div class="stat-value">{{ beer.ph }}</div>
            <div class="stat">PH</div>
          </div>

        </div>

      </v-card>
    </div>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"SingleBeer",
  page: {
    title: 'Beer',
  },
    data: () => ({
      tab: null,
      items: [
        {
          text: 'All Beers',
          disabled: false,
          href: './',
        },
        {
          text: 'Single Beer',
          disabled: true,
        },
      ],
    }),
  computed: {
    ...mapState('beers', {
      beer: state => state.beer,
    }),
  },
  methods: {
    async getBeerByID() {
      await this.$store.dispatch('beers/fetchBeerByID', this.$route.params.id_beer)
    },
  },
  mounted() {
    this.getBeerByID()
  },
}
</script>
