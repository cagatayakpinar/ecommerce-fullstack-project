<template>
  <v-container class="my-15">
    <v-row justify="center">
      <v-col lg="12" class="text-center" justify-center>
        <v-subheader class="text-h4 justify-center">Contact</v-subheader>
        <p>
          If you have a question, comment or suggestion for us, please get in
          touch, we are always keen to hear from our visitors. We'll get back to
          you within two business days. Thank you. cagatay@seastones.com
          +(90)-111-11-11
        </p>
      </v-col>
      <v-col lg="6">
        <v-form ref="form">
          <v-text-field
            v-model="contactInformation.name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-textarea
            label="Message"
            v-model="contactInformation.message"
          ></v-textarea>
          <v-btn color="success" class="mr-4"> Send </v-btn>
        </v-form>
      </v-col>
      <v-col lg="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194971.94311531025!2d28.892205437304426!3d40.221593564363026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1582d8d45695%3A0x61a00555fc973392!2sBursa!5e0!3m2!1str!2str!4v1648390521239!5m2!1str!2str"
          width="800"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contactInformation: {},
    };
  },
};
</script>
