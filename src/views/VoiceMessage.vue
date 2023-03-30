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
						<v-file-input accept="audio/*" label="File input" prepend-icon="mdi-microphone"
							:rules="rules"></v-file-input>
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
	name: "VoiceMessage",
	components: {
		PhoneNumber
	},
	data: () => ({
		valid: false,
		rules: [
			value => !!value || 'El archivo es requerido',
			value => (value && value[0].name.endsWith('.mp3') || value[0].name.endsWith('.wav')) || 'El archivo debe ser de tipo de audio'
		]


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
