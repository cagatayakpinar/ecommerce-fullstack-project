<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center" justify-center>
        <v-subheader class="text-h4 justify-center">Categories</v-subheader>
        <p>
          You can see our categories in this area. You can have information
          about the current products in our store, then you can get detailed
          information about the products from the All Products section. You can
          also access detailed photos of the products.
        </p>
      </v-col>
      <v-col lg="12">
        <div class="text-center" justify-center>
          <v-chip
            class="mx-1"
            @click="activeCategories = 'motoryat'"
            link
            :color="activeCategories == 'motoryat' ? 'success' : ''"
            >Motoryat</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'yelkenli'"
            :color="activeCategories == 'yelkenli' ? 'success' : ''"
            link
            >Yelkenli</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'katamaran'"
            :color="activeCategories == 'katamaran' ? 'success' : ''"
            link
            >Katamaran</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'surat'"
            :color="activeCategories == 'surat' ? 'success' : ''"
            link
            >Sürat Teknesi</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'bot'"
            :color="activeCategories == 'bot' ? 'success' : ''"
            link
            >Bot</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'jetski'"
            :color="activeCategories == 'jetski' ? 'success' : ''"
            link
            >Jetski</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'sandal'"
            :color="activeCategories == 'sandal' ? 'success' : ''"
            link
            >Sandal</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'gezi'"
            :color="activeCategories == 'gezi' ? 'success' : ''"
            link
            >Gezi Teknesi</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'gulet'"
            :color="activeCategories == 'gulet' ? 'success' : ''"
            link
            >Gulet</v-chip
          >
          <v-chip
            class="mx-1"
            @click="activeCategories = 'balik'"
            :color="activeCategories == 'balik' ? 'success' : ''"
            link
            >Balıkçı Teknesi</v-chip
          >
        </div>
      </v-col>
      <slot v-if="activeCategories == 'motoryat'">
        <v-col
          lg="3"
          v-for="(motoryat, motoryatindex) in motoryat"
          :key="motoryatindex"
        >
          <v-card>
            <v-img
              :src="motoryat.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ motoryat.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'yelkenli'">
        <v-col
          lg="3"
          v-for="(yelkenli, yelkenliindex) in yelkenli"
          :key="yelkenliindex"
        >
          <v-card>
            <v-img
              :src="yelkenli.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ yelkenli.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'katamaran'">
        <v-col
          lg="3"
          v-for="(katamaran, katamaranindex) in katamaran"
          :key="katamaranindex"
        >
          <v-card>
            <v-img
              :src="katamaran.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ katamaran.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'surat'">
        <v-col lg="3" v-for="(surat, suratindex) in surat" :key="suratindex">
          <v-card>
            <v-img
              :src="surat.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ surat.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'bot'">
        <v-col lg="3" v-for="(bot, botindex) in bot" :key="botindex">
          <v-card>
            <v-img
              :src="bot.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ bot.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'jetski'">
        <v-col
          lg="3"
          v-for="(jetski, jetskiindex) in jetski"
          :key="jetskiindex"
        >
          <v-card>
            <v-img
              :src="jetski.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ jetski.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'sandal'">
        <v-col
          lg="3"
          v-for="(sandal, sandalindex) in sandal"
          :key="sandalindex"
        >
          <v-card>
            <v-img
              :src="sandal.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ sandal.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'gezi'">
        <v-col lg="3" v-for="(gezi, geziindex) in gezi" :key="geziindex">
          <v-card>
            <v-img
              :src="gezi.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ gezi.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'gulet'">
        <v-col lg="3" v-for="(gulet, guletindex) in gulet" :key="guletindex">
          <v-card>
            <v-img
              :src="gulet.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ gulet.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activeCategories == 'balik'">
        <v-col lg="3" v-for="(balik, balikindex) in balik" :key="balikindex">
          <v-card>
            <v-img
              :src="balik.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ balik.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      activeCategories: "motoryat",
      motoryat: [
        {
          title: "Bavaria Sport 44 HT Highline",
          image:
            "https://www.boat24.com/fotos/large/446436-7dc342206210d11853411f2d0ee6539d-x-3446953-f72b45d4f266c9c4cb2d8c170f5d6e2f.jpg",
        },
        {
          title: "Bavaria Sport 400",
          image: "https://www.yatvitrini.com/images/bavaria.jpg",
        },
      ],
      activeCategories: "yelkenli",
      yelkenli: [
        {
          title: "OCEANIS - Beneteau 40.1",
          image:
            "https://images.boatsgroup.com/resize/1/5/27/7370527_0_151220200114_16.jpg",
        },
        {
          title: "Jeanneau Sun Odyssey 49i",
          image:
            "https://app.jeanneau.com/static/media/image/legacy/sd/b7bb2c4d14ad6f8fdd3ef12a731d5bb2.jpg",
        },
      ],
      activeCategories: "katamaran",
      katamaran: [
        {
          title: "Fountaine Pajot ISLA 40",
          image:
            "https://www.catamarans-fountaine-pajot.com/wp-content/uploads/2020/10/isla-40-img-2-min.jpg",
        },
        {
          title: "Fountaine Pajot Elba 45",
          image:
            "https://www.catamarans-fountaine-pajot.com/wp-content/uploads/2020/02/elba-45-cruising-catamarans-fountaine-pajot5-min-1.jpg",
        },
      ],
      activeCategories: "surat",
      surat: [
        {
          title: "Karnic SL 702 Motor Boat",
          image:
            "https://www.boat24.com/fotos/xlarge/334972-06868d14c9342b467cc400f45aa20e2c-x-3580644-3195cea519d5afd2b61289fc27f9ce38.jpg",
        },
      ],
      activeCategories: "bot",
      bot: [
        {
          title: "Zodiac N-ZO 680",
          image:
            "https://panorama4piano.com/wp-content/uploads/2017/06/n-zo-760-10809-655x246.jpg",
        },
      ],
      activeCategories: "jetski",
      jetski: [
        {
          title: "Sea-Doo - SPARK Trixx",
          image:
            "https://www.sea-doo.com/content/dam/global/en/sea-doo/my22/lifestyle/SEA-MY22-SPARK-BLUEGREEN-90-ACTION-11603-RGB-WEB-ALT.jpg",
        },
      ],
      activeCategories: "sandal",
      sandal: [
        {
          title: "Barbaros 710",
          image:
            "http://www.barbaros-tekne.com.tr/tumResimler/b710pa/b710pa-52.jpg",
        },
        {
          title: "Barbaros 26 Sloep",
          image: "http://www.barbaros-tekne.com.tr/tumResimler/b26s/12.jpg",
        },
      ],
      activeCategories: "gezi",
      gezi: [
        {
          title: "Barbaros 43 Lobster",
          image:
            "https://www.motoryat.com/upload/productsImage/1200x900/b432.jpg",
        },
        {
          title: "Barbaros 30 Cruiser",
          image: "http://www.barbaros-tekne.com.tr/tumResimler/b26/26/3.jpg",
        },
      ],
      activeCategories: "gulet",
      gulet: [
        {
          title: "Cobra King Gulet",
          image:
            "https://www.goldenyachting.com/templates/goldenyachting/uploads/2019/12/28/goldenyachting_gulet-cobra-king-(1)-jpg-H95.jpg",
        },
        {
          title: "Big Boss Gulet",
          image:
            "https://www.goldenyachting.com/templates/goldenyachting/uploads/2020/01/02/goldenyachting_gulet-big-boss-(3)-jpg-MFx.jpg",
        },
      ],
      activeCategories: "balik",
      balik: [
        {
          title: "Marinboat 6.20 Samba Long",
          image:
            "https://st1.myideasoft.com/idea/er/38/myassets/products/007/6-20-samba-long.jpg?revision=1565369490",
        },
        {
          title: "Seagull 640 cc",
          image:
            "http://seagullyachts.com/wp-content/uploads/2021/09/640-4-1.jpg",
        },
      ],
    };
  },
};
</script>
