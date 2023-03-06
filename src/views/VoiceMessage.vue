<template>
  <v-combobox v-model="selectedCode" v-model:search="phoneNumberSearch" :items="countryCodes" item-title="searchText"
    item-value="code" return-object label="Select an item.." hide-no-data hide-details>
  </v-combobox>
</template>

<script>
export default {
  data: () => ({
    phoneNumberSearch: null,
    selectedCode: null,
    countryCodes: [],
    countries: [
      {
        code: '93',
        country: 'Afghanistan',
        icon: 'mdi-flag'
      },
      {
        code: '94',
        country: 'Test2',
        icon: 'mdi-flag'
      },
      {
        code: '95',
        country: 'Prueba',
        icon: 'mdi-flag'
      },
    ],
  }),

  watch: {
    phoneNumberSearch(val) {
      val && val !== this.phoneNumberSelected && this.test(val)
    },
  },
  methods: {
    test(v) {
      const searchLowerCase = v.toLowerCase();
      this.countryCodes = this.countries.filter((item) => {
        const countryLowerCase = item.country.toLowerCase();
        const codeLowerCase = item.code.toLowerCase();
        const searchText = `${countryLowerCase} (${codeLowerCase})`.toLowerCase();

        return searchText.includes(searchLowerCase);
      }).map((item) => {
        const country = item.country;
        const code = item.code;

        return {
          ...item,
          searchText: `${country} (${code})`
        };
      });
    }
  }
}
</script>