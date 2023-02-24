<template>
    <v-container>
        <h1>Test</h1>
        <h2 class="text-purple-darken-4">My Address</h2>
        <v-card class="mx-auto" width="400">
            <!-- <template v-slot:title>
                This is a title
            </template>
            -->
            <v-card-text>
                This is content
            </v-card-text>

            <v-form fast-fail @submit.prevent class="pa-4 pt-2">
                <v-textarea label="Mensaje" color="teal-darken-4" auto-grow variant="outlined" rows="3" row-height="15"></v-textarea>
                <v-btn type="submit" class="pa-3" block>Submit</v-btn>
            </v-form>

        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        firstName: '',
    }),
}
</script>