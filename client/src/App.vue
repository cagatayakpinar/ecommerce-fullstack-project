<template>
  <v-app>
    <Navbar/>
    <v-main > 
      <v-app id="home"><Home/></v-app>
      <v-app id="about"><About/></v-app>
      <v-app id="categories"><Categories/></v-app>
      <v-app id="project"><ProductsAll :products="products" /></v-app>
      <v-app id="contact"><Contact/></v-app>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import About from './components/About';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductsAll from './components/ProductsAll';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: "App",
  components: {
  Navbar, 
  Home, 
  About, 
  Categories, 
  ProductsAll, 
  Contact, 
  Footer
  },
  data:()=>({
    products:[],
  }),

  created(){
    axios.get('http://localhost:8080/products').then(res=>{
    this.products = res.data;
    })
  },
};

</script>

