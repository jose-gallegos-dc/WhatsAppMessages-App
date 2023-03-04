<template>
    <v-combobox v-model="selectedCode" v-model:search="phoneNumberSearch" :items="countryCodes" item-title="country"
        item-value="code" return-object label="Select an item.." hide-no-data hide-details>
    </v-combobox>
</template>

<!-- <v-autocomplete label="Phone number" v-model="phoneNumberSelected"
                                v-model:search="phoneNumberSearch" :items="phoneNumberItems" :loading="phoneNumberLoading"
                                hide-no-data hide-details multiple chips closable-chips /> -->
  
<script>
export default {
    data: () => ({
        
        selectedCode: [],
        phoneNumberSearch: null,
        countryCodes: [
            // {
            //     code: '93',
            //     country: 'Afghanistan',
            //     icon: 'mdi-flag'
            // },
            // {
            //     code: '355',
            //     country: 'Albania',
            //     icon: 'mdi-flag-triangle'
            // },
            // {
            //     code: '356',
            //     country: 'mexico',
            //     icon: 'mdi-flag-triangle'
            // },
        ],

        // countries: [
        //     {
        //         code: '93',
        //         country: 'test',
        //         icon: 'mdi-flag'
        //     },
        // ],

        countries: [
            {
                code: '93',
                country: 'test',
                icon: 'mdi-flag'
            },
            {
                code: '94',
                country: 'test2',
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
            // this.countryCodes = this.countries[0].filter(e => {
            //     return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            // })
            this.countries.forEach(function (elemento, indice, array) {
                console.log(elemento.code, indice);

            //     return this.countryCodes = [
            //     {
            //         code: '93',
            //         country: 'test',
            //         icon: 'mdi-flag'
            //     },
            // ];


                // return  

                // return (elemento || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
            })

            return this.countryCodes = this.countries;

            // console.log(v)
        }
    }
}
</script>