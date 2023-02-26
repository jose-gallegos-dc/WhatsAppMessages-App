<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="mx-auto">
                    <v-list lines="three">
                        <v-list-subheader>Hola</v-list-subheader>
                        <v-list-item v-for="(item, i) in items" :key="i" :value="item.value" @click.stop="toggleSelectedItem(item)">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col>
                <h1>Seleccionaste</h1>
                <h3 v-if="selectedItem">{{ selectedItem.value }}</h3>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data: () => ({
        items: [
            {
                title: "template1",
                value: "t1",
                description: "description 1",
            },
            {
                title: "template2",
                value: "t2",
                description: "description 2",
            },
            {
                title: "template3",
                value: "t3",
                description: "description 3",
            },
        ],
        selectedItem: null,
    }),

    methods: {
        toggleSelectedItem(item) {
            if (this.selectedItem === item) {
                this.selectedItem = null;
            } else {
                this.selectedItem = item;
            }
        },
    },
};
</script>
  