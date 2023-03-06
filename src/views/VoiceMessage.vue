<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="5">
                <v-card>
                    <v-select v-model="select" :items="items" item-value="abbr" label="País" return-object
                        :item-title="(item) => `${item.country}, ${item.code}`">
                        <template v-slot:selection="{ item }">
                            <v-icon v-if="item.value">{{ item.value.icon }}</v-icon>
                        </template>
                    </v-select>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            select: { country: 'Afghanistan', code: '+93', icon: 'mdi-flag' },
            items: [
                { country: 'Afghanistan', code: '+93', icon: 'mdi-flag' },
                { country: 'Albania', code: '+355', icon: 'mdi-flag-triangle' },
            ],
        }
    },
}
</script>
  