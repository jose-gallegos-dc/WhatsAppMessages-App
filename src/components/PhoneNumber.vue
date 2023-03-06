<template>
    <v-row>
        <v-col cols="4" class="pr-1">
            <v-select color="teal-darken-3" v-model="countryCodeSelected" :items="countryCodeItems" item-value="code" label="País" return-object
                :item-title="(item) => `${item.country}  (${item.code})`">
                <template v-slot:selection="{ item }">
                    <v-icon v-if="item.value">{{ item.value.icon }}</v-icon>
                </template>
            </v-select>
        </v-col>
        <v-col cols="8" class="pl-1">
            <v-autocomplete class="no-stepper" color="teal-darken-3" type="number" label="Número de teléfono" v-model="phoneNumberSelected"
                v-model:search="phoneNumberSearch" :items="phoneNumberItems" :loading="phoneNumberLoading" hide-no-data
                hide-details clearable />
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    data: () => ({
        countryCodeSelected: { country: 'Afghanistan', code: '+93', icon: 'fi fi-af' },
        countryCodeItems: [
            { country: 'Afghanistan', code: '+93', icon: 'fi fi-af' },
            { country: 'Albania', code: '+355', icon: 'fi fi-al' },
        ],
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
                    return (e || '').indexOf(v || '') > -1
                })
                this.phoneNumberLoading = false
            }, 500)
        },
    }
}
</script>

<style>
.no-stepper ::-webkit-outer-spin-button,
.no-stepper ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
  