<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="5">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<PhoneNumber ref="PhoneNumberComponent" />
					<TemplateAutoComplete ref="TemplateAutocompleteComponent" />
				</v-card>
			</v-col>
			<v-col cols="12" md="7">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<v-form @submit.prevent class="pt-5 pb-4 px-4" v-model="valid">
						<TemplateInput ref="TemplateInput" />
						<div class="d-flex justify-end mt-3">
							<v-btn class="mt-3" type="submit" color="teal-darken-2" prepend-icon="mdi-send" :disabled="!valid">
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
import TemplateInput from "@/components/TemplateInput.vue";
import TemplateAutoComplete from "@/components/TemplateAutoComplete.vue";

export default {
	name: "TemplateMessage",
	components: {
		PhoneNumber,
		TemplateInput,
		TemplateAutoComplete,
	},
	data: () => ({
		valid: false,
		selectedTemplate: null,
	}),
	watch: {
		selectedTemplate(value) {
			const selectedTemplate = this.$refs.TemplateAutocompleteComponent.templates.find(template => template.value === value);
			console.log("Plantilla seleccionada: ", selectedTemplate.text);
			this.cargar(selectedTemplate.text);
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs.TemplateAutocompleteComponent.$watch("templateSelected", (value) => {
				this.selectedTemplate = value;
			});
		});
	},
	methods: {
		cargar(textTemplate) {
			const templateInput = this.$refs.TemplateInput.$refs.templateMessage;
			templateInput.innerHTML = textTemplate.replace(/\{\{(\d+)\}\}/g, (match, p1) => {
				const id = `input_${p1}`;
				return `<input id="${id}" class="field-message font-weight-medium" />`;
			});
		},
	},
};
</script>