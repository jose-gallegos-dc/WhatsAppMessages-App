<template>
    <v-container>
        <v-card class="mx-auto" max-width="500" elevation="4">
            <v-form @submit.prevent class="pa-4" v-model="valid">
                <v-textarea label="Mensaje" color="teal-darken-3" rows="5" row-height="15" v-model="message"
                    :rules="messageRules" :counter="100"></v-textarea>
                <div class="d-flex justify-end">
                    <v-btn type="submit" class="mt-3" color="teal-darken-2" prepend-icon="mdi-send" :disabled="!valid">
                        Enviar
                    </v-btn>
                </div>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
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
}
</script>