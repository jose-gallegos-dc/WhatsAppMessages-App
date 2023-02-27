<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="5">
                <v-card class="mx-auto" elevation="4">
                    <div class="ma-4">Mensaje de plantilla</div>
                    <v-autocomplete class="mx-4" v-model="template" :items="items" item-text="title" clearable
                        label="Plantillas disponibles"></v-autocomplete>
                    <v-autocomplete class="mx-4" v-model="to"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" clearable
                        label="Para"></v-autocomplete>
                </v-card>
            </v-col>
            <v-col cols="12" md="7">
                <v-card elevation="4">
                    <v-form @submit.prevent class="pa-4" v-model="valid">
                        <div class="d-flex flex-wrap ma-2 bg-surface-variant">
                            <div>Hola</div>
                            <v-text-field class="field-message flex-grow-1" label="1" variant="underlined"
                                type="text"></v-text-field>
                            <div class="flex-shrink-1 ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima fugiat iure blanditiis perspiciatis nam incidunt sed deserunt, doloremque earum quas odio eligendi veniam distinctio magnam saepe consectetur quae? Rem?</div>
                        </div>





                        <div class="d-flex justify-end">
                            <v-btn class="mt-3" type="submit" color="teal-darken-2" prepend-icon="mdi-send"
                                :disabled="!valid">
                                Enviar
                            </v-btn>
                        </div>
                    </v-form>

                    <p v-if="template">{{ items.find(item => item.value === template).title }}</p>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data: () => ({
        items: [
            {
                title: "Template1",
                value: "t1",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
                title: "Template2",
                value: "t2",
                description: "description 2",
            },
            {
                title: "Template3",
                value: "t3",
                description: "description 3",
            },
        ],
        template: null,
        to: null,
        valid: false,
    }),
};
</script>

<style>
.field-message {
    min-width: 6rem;
    max-width: 8rem;
}
</style>
  