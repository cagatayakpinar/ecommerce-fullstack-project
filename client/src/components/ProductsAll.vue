<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center" justify-center>
        <v-subheader class="text-h4 justify-center">All Products</v-subheader>
        <p>
          In this area, you can examine all our products in detail. For detailed
          information about our products, you can send us an e-mail, call us or
          visit our showroom.
        </p>
      </v-col>

      <v-col lg="4" v-for="product in products" :key="product">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" src="../assets/boat.jpg"></v-img>

          <v-card-title>{{ product.product_name }}</v-card-title>

          <v-card-text>
            <div>
              {{
                product.product_desc.length > 39
                  ? product.product_desc.slice(0, 200) + "..."
                  : product.product_desc
              }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="success" rounded> Details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductsAll",
  props: ["products"],
};
</script>
