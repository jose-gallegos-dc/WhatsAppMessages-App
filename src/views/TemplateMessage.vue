<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="5">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<PhoneNumber ref="PhoneNumberComponent" />
					<h1>Template</h1>
				</v-card>
			</v-col>
			<v-col cols="12" md="7">
				<v-card elevation="0" class="pa-4 border rounded-lg">
					<v-form @submit.prevent class="pt-5 pb-4 px-4" v-model="valid">

						<div class="text-justify pa-5 bg-grey-lighten-4 rounded">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							<input class="field-message" type="text" />
							eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							<input class="field-message" type="text" /> nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in <input class="field-message" type="text" /> reprehenderit in
							voluptate velit esse cillum dolore eu
							<input class="field-message" type="text" /> fugiat nulla pariatur.align-start
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</div>
						<div class="d-flex justify-end mt-3">
							<v-btn class="mt-3" type="submit" color="teal-darken-2" prepend-icon="mdi-send" :disabled="!valid">
								Enviar
							</v-btn>
						</div>
					</v-form>

					<p v-if="template">
						{{ items.find((item) => item.value === template).title }}
					</p>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
  
<script>
import PhoneNumber from '@/components/PhoneNumber.vue';

export default {
	name: 'TemplateMessage',
	components: {
		PhoneNumber
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
		template: null,
		to: null,
		valid: false,
	}),
};
</script>

<style>
.field-message {
	padding: 0rem 0.5rem;
	width: 8rem;
	border-bottom: -1px solid #00695C;
	box-shadow: inset 0 -1px 0 #546e7a;
	text-align: center;
	margin: 0 0.1rem;
}

.field-message:hover,
.field-message:focus {
	outline: none;
	border-bottom: -1px solid #00695C;
	box-shadow: inset 0 -2px 0 #00695C;
}
</style>
  