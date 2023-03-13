<template>
   <div class="text-justify pa-5 bg-grey-lighten-4 rounded" id="templateMessage" ref="templateMessage"></div>
   <!-- <v-btn v-on:click="cargar()">Cargar</v-btn> -->
</template>
 
<script>
export default {
   name: "TemplateMessageInputComponent",
   // data: () => ({
   //    templatenew: {
   //       "type": "body",
   //       "text": "Hi {{1}}, get an extra 10% off every order above {{2}}.",
   //    },
   // }),
   // methods: {
   //    cargar() {
   //       const template = this.$refs.template;
   //       template.innerHTML = this.templatenew.text.replace(/\{\{(\d+)\}\}/g, (match, p1) => {
   //          const id = `input_${p1}`;
   //          return `<input id="${id}" class="field-message" />`;
   //       });
   //    },
   // }
}
</script>

<style>
.field-message {
   padding: 0rem 0.5rem;
   width: 8rem;
   border-bottom: -1px solid #00695C;
   box-shadow: inset 0 -1px 0 #546e7a;
   text-align: center;
   margin: 0 0.5rem;
}

.field-message:hover,
.field-message:focus {
   outline: none;
   border-bottom: -1px solid #00695C;
   box-shadow: inset 0 -2px 0 #00695C;
}
</style>


  <!-- <div class="text-justify pa-5 bg-grey-lighten-4 rounded">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      <input class="field-message font-weight-medium" type="text" />
      eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      <input class="field-message font-weight-medium" type="text" /> nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in <input class="field-message font-weight-medium" type="text" /> reprehenderit in
      voluptate velit esse cillum dolore eu
      <input class="field-message font-weight-medium" type="text" /> fugiat nulla pariatur.align-start
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
   </div> -->