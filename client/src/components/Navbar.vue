<template>
  <v-app-bar
    style="padding: 0px 90px"
    app
    color="white"
    light
    elevation="6"
    elevate-on-scroll
  >
    <v-btn icon>
      <v-toolbar-title text @click="scroll('home')"
        >seastones.com</v-toolbar-title
      >
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('categories')">Categories</v-btn>
    <v-btn text @click="scroll('project')">Products</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>

    <v-list class="d-flex align-center">
      <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.route">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>

      <v-btn outlined color="blue">Sıgn Up</v-btn>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.v-toolbar__title {
  font-size: 30px;
  color: rgb(37, 150, 190);

  font-family: Arial, sans-serif;
}
</style>
