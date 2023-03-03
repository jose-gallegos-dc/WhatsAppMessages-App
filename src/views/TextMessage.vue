<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="5">
                <v-card elevation="0" class="pa-4 border rounded-lg">
                    <v-row>
                        <v-col cols="3">
                            <v-autocomplete :items="codeCountryItems" hide-no-data hide-details />
                        </v-col>
                        <v-col cols="9">
                            <v-autocomplete label="Phone number" v-model="phoneNumberSelected" v-model:search="phoneNumberSearch" :items="phoneNumberItems"
                                :loading="phoneNumberLoading" hide-no-data hide-details  multiple chips closable-chips />
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
        countryCodes: [
            {
                'code' : '+93',
                'country' : 'Afghanistan'
            },
            {
                'code' : '+355',
                'country' : 'Albania'
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
        countryCodeSearch(val) {
            val && val !== this.countryCodeSelected && this.countryCodeSelections(val)
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
        countryCodeSelections(v) {
            this.countryCodeLoading = true
            // Simulated ajax query
            setTimeout(() => {
                this.countryCodeItems = this.countryCodes.filter(e => {
                    return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.countryCodeLoading = false
            }, 500)
        },
    },
}
</script>
