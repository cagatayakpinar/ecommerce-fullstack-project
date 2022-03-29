<template>
  <v-container>
    <v-footer padless>
      <v-col lg="12">
        <v-row justify="center">
          <v-col lg="4" class="text-center">
            <v-toolbar-title>seastones.com</v-toolbar-title>
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
            <v-subheader
              >seastones.com, Mudanya, Turkey. is part of seastones.com.
              Copyright © 2021-2022. All rights reserved.</v-subheader
            >
          </v-col>
        </v-row>
        <div class="mt-10" lg="4" justify="center">
          <v-divider></v-divider>
          <v-subheader>
            <strong> © Çağatay Akpınar</strong>
          </v-subheader>
        </div>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style scoped></style>
