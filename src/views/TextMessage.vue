<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="5">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<PhoneNumber ref="PhoneNumber" />
				</v-card>
			</v-col>
			<v-spacer></v-spacer>
			<v-col cols="12" md="7">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<v-form @submit.prevent="onSubmit" v-model="valid">
						<v-textarea color="teal-darken-3" label="Mensaje" rows="5" row-height="15" v-model="message"
							:rules="messageRules" :counter="255"></v-textarea>
						<div class="d-flex justify-end">
							<v-btn type="submit" class="mt-3" color="teal-darken-2" prepend-icon="mdi-send" :disabled="!valid">
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
import PhoneNumber from "@/components/PhoneNumber.vue";

export default {
	name: "TextMessage",
	components: {
		PhoneNumber
	},
	data: () => ({
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
	methods: {
		onSubmit() {
			let phoneNumber = this.$refs.PhoneNumber.phoneNumberSelected;
			let countryCode = this.$refs.PhoneNumber.countryCodeSelected.code;
			console.log(countryCode + phoneNumber + ' ' + this.message);
		}
	}
}
</script>
