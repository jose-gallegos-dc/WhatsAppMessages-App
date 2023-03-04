<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="5">
                <v-card elevation="0" class="pa-4 border rounded-lg">
                    <v-row>
                        <v-col cols="4">
                            <!-- <v-autocomplete :items="countryCodes" item-title="country" item-value="code"
                                v-model="selectedCode" label="Country Code" /> -->

                            <!-- <v-combobox v-model="selectedCode" :items="countryCodes" item-title="country" item-value="code"
                                return-object :item="item => ({ icon: item.icon, text: item.country })" autocomplete
                                :menu-props="{ auto: true }">
                                <template v-slot:selection="{ item }">
                                    <v-icon v-if="item">{{ item.icon }}</v-icon>
                                </template>
                            </v-combobox> -->


                            <!-- <v-combobox v-model="selectedCode" :items="countryCodes" item-title="code" item-value="code"
                                return-object :item="item => ({ icon: item.icon, text: item.country, code: item.code })"
                                autocomplete>
                                <template v-slot:selection="{ item }">
                                    <v-icon v-if="item.value">{{ item.value.icon }}</v-icon>
                                </template>
                                <template v-slot:item="{ item }">
                                    <v-list-item @click="selectedCode = item">
                                        <div>{{ item.value.country }} - {{ item.value.code }}</div>
                                    </v-list-item>
                                </template>
                            </v-combobox> -->

                            <!-- <v-combobox v-model="selectedCode" :items="countryCodes" item-title="country" item-value="code"
                                return-object label="Select an item.." :custom-filter="filterCountries">
                            </v-combobox> -->

                            <v-combobox v-model="selectedCode" :items="countryCodes" item-title="country" item-value="code"
                                :return-object="true" label="Select an item.." :custom-filter="(search, item) => {
                                    console.log(countryCodes);
                                    return item.country.toLowerCase().includes(search.toLowerCase()) || item.code.includes(search);
                                }">
                            </v-combobox>











                            <!-- <v-text-field v-model="search" label="Buscar país" /> -->


                            <!-- <v-autocomplete v-model="countryCodeSelected" v-model:search="countryCodeSearch" :items="countryCodeItems" :loading="countryCodeLoading" hide-no-data hide-details /> -->
                        </v-col>
                        <v-col cols="8">
                            <v-autocomplete label="Phone number" v-model="phoneNumberSelected"
                                v-model:search="phoneNumberSearch" :items="phoneNumberItems" :loading="phoneNumberLoading"
                                hide-no-data hide-details multiple chips closable-chips />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="7">
                <v-card elevation="0" class="pa-4 border rounded-lg">
                    <v-form @submit.prevent v-model="valid">
                        <v-textarea label="Mensaje" color="teal-darken-3" rows="5" row-height="15" v-model="message"
                            :rules="messageRules" :counter="255"></v-textarea>
                        <div class="d-flex justify-end">
                            <v-btn type="submit" class="mt-3" color="teal-darken-2" prepend-icon="mdi-send"
                                :disabled="!valid">
                                Enviar
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        phoneNumberSelected: [],
        phoneNumberSearch: null,
        phoneNumberItems: [],
        phoneNumberLoading: false,
        phoneNumbers: [
            '9612491813',
            '9611234567',
            '9611234568',
            '9611234569',
            '9611234560',
            '9611234565',
        ],
        countryCodeSelected: [],
        countryCodeSearch: null,
        countryCodeItems: [],
        countryCodeLoading: false,

        selectedCode: null,
        countryCodes: [
            {
                code: '93',
                country: 'Afghanistan',
                icon: 'mdi-flag'
            },
            {
                code: '355',
                country: 'Albania',
                icon: 'mdi-flag-triangle'
            },
        ],

        message: '',
        valid: false,
        messageRules: [
            value => {
                if (value) return true;
                return 'El mensaje es requerido.';
            },
            value => {
                if (value?.length <= 255) return true;
                return 'El mensaje debe tener menos de 255 caracteres.';
            },
            value => {
                if (value && value.trim().length > 0) return true;
                return 'El mensaje no puede tener solo espacios en blanco.';
            }
        ],
    }),
    watch: {
        phoneNumberSearch(val) {
            val && val !== this.phoneNumberSelected && this.phoneNumberSelections(val)
        },

    },
    methods: {
        phoneNumberSelections(v) {
            this.phoneNumberLoading = true
            // Simulated ajax query
            setTimeout(() => {
                this.phoneNumberItems = this.phoneNumbers.filter(e => {
                    return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.phoneNumberLoading = false
            }, 500)
        },


        filterCountries(search, item) {
            const lowerSearch = search.toLowerCase();
            const lowerCountry = item.value.country.toLowerCase();
            const code = item.value.code;
            return (
                lowerCountry.includes(lowerSearch) ||
                code.includes(lowerSearch)
            );
        }




    }
}
</script>
