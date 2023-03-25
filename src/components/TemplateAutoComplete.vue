<template>
   <v-autocomplete label="Plantillas" :items="templateItems" v-model.lazy="templateSelected"
      v-model:search="templateSearch" :loading="templateLoading" hide-no-data clearable ></v-autocomplete>
</template>

<script>
export default {
   name: "TemplateAutocompleteComponent",
   data: () => ({
      templateItems: [],
      templateSelected: "",
      templateSearch: null,
      templateLoading: false,
      templates: [
         {
            title: "english",
            value: "t1",
            text: "Hi {{1}}, get an extra 10% off every order above {{2}}. for this date {{3}}",
         },
         {
            title: "hola",
            value: "t2",
            text: "Hola {{1}}, este es el dos {{2}}."
         },
         {
            title: "test",
            value: "t3",
            text: "test {{1}}, este es el dos {{2}}.",
         },
      ]
   }),
   watch: {
      templateSearch(val) {
         val && val !== this.templateSelected && this.templateSelections(val);
      },
   },
   methods: {
      templateSelections(v) {
         this.templateLoading = true;

         // Simulated ajax query
         setTimeout(() => {
            this.templateItems = this.templates.filter((item) => {
               const titleLowerCase = item.title.toLowerCase();
               return titleLowerCase.includes(v.toLowerCase());
            });
            this.templateLoading = false;
         }, 500);

      },
   },
}
</script>
