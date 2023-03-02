<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="5">
                <v-card elevation="4" class="pa-4">
                    <v-autocomplete label="Select" v-model="selectedItems" v-model:search="search" :loading="loading"
                        hide-no-data hide-details :items="items" multiple chips closable-chips />
                </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="7">
                <v-card elevation="4" class="pa-4">
                    <v-form @submit.prevent v-model="valid">
                        <v-textarea label="Mensaje" color="teal-darken-3" rows="5" row-height="15"
                            v-model="message" :rules="messageRules" :counter="100"></v-textarea>
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
        loading: false,
        search: null,
        selectedItems: [],
        items: [],
        states: [
            'Alabama',
            'Alaska',
            'American Samoa',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Federated States of Micronesia',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Marshall Islands',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Northern Mariana Islands',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Palau',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virgin Island',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ],
        message: '',
        valid: false,
        messageRules: [
            value => {
                if (value) return true;
                return 'El mensaje es requerido';
            },
            value => {
                if (value?.length <= 100) return true;
                return 'El mensaje debe tener menos de 100 caracteres.';
            },
            value => {
                if (value && value.trim().length > 0) return true;
                return 'El mensaje no puede tener solo espacios en blanco.';
            }
        ],
    }),
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val)
        },
    },
    methods: {
        querySelections(v) {
            this.loading = true
            // Simulated ajax query
            setTimeout(() => {
                this.items = this.states.filter(e => {
                    return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
            }, 500)
        },
    },
}
</script>
