<template>
  <v-container class="pt-15">
    <v-row>
      <v-col lg="6">
        <h2 class="intro-text">
          Welcome to the Luxury Experience with the seastones.com
        </h2>
        <p class="description">
          You can have the boat of your dreams by taking advantage of the
          special experiences of seastones.com. You can review our products on
          seastones to see these unique products.
        </p>
        <v-form>
          <v-text-field label="Search" dense />
        </v-form>
        <v-btn color="yellow" class="black--text" rounded>
          <v-icon>mdi-magnify</v-icon> SEARCH IN CATEGORIES
        </v-btn>
      </v-col>
      <v-col lg="6">
        <img width="100%" src="./../assets/yatch.jpg" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h2.intro-text {
  font-size: 60px;
  font-weight: bold;
  font-family: Arial;
  color: #444;
}
p.description {
  font-size: 25px;
  font-family: Arial;
  margin: 35px 0px;
  color: #444444ba;
}
.pt-15 {
  background-color: #f8f9f9;
}
</style>
