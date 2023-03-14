<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="5">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<PhoneNumber ref="PhoneNumberComponent" />
					<TemplateAutoComplete />
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
		items: [
			{
				title: "Template1",
				value: "t1",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
		valid: false,
		templateMessage: {
			"type": "body",
			"text": "Hi {{1}}, get an extra 10% off every order above {{2}}. for this date {{3}}",
		},
	}),
	methods: {
		cargar() {
			const templateInput = this.$refs.TemplateInput.$refs.templateMessage;
			templateInput.innerHTML = this.templateMessage.text.replace(/\{\{(\d+)\}\}/g, (match, p1) => {
				const id = `input_${p1}`;
				return `<input id="${id}" class="field-message font-weight-medium" />`;
			});
		},
	},
	mounted() {
		this.cargar();
	}
};
</script>