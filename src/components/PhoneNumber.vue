<template>
	<v-row>
		<v-col cols="4" class="pr-1">
			<v-select color="teal-darken-3" v-model="countryCodeSelected" :items="countryCodeItems" item-value="code"
				label="País" return-object :item-title="(item) => `${item.country}  (${item.code})`">
				<template v-slot:selection="{ item }">
					<v-icon v-if="item.value">{{ item.value.icon }}</v-icon>
				</template>
			</v-select>
		</v-col>
		<v-col cols="8" class="pl-1">
			<v-autocomplete color="teal-darken-3" label="Número de teléfono" v-on:keypress="NumbersOnly"
				v-model.lazy="phoneNumberSelected" v-model:search="phoneNumberSearch" :items="phoneNumberItems"
				:loading="phoneNumberLoading" hide-no-data clearable @change="onPhoneNumberChange"
				:hint="isOriginalPhoneNumber" persistent-hint />
		</v-col>
	</v-row>
</template>
  
<script>
export default {
	name: "PhoneNumberComponent",
	data: () => ({
		isOriginalPhoneNumber: "",
		countryCodeSelected: { country: "Afghanistan", code: "+93", icon: "fi fi-af" },
		countryCodeItems: [
			{ country: "Afghanistan", code: "+93", icon: "fi fi-af" },
			{ country: "Albania", code: "+355", icon: "fi fi-al" },
		],
		phoneNumberSelected: "",
		phoneNumberSearch: null,
		phoneNumberItems: [],
		phoneNumberLoading: false,
		phoneNumbers: [
			"9612491813",
			"9611234567",
			"9611234568",
			"9611234569",
			"9611234560",
			"9611234565",
		],
		originalPhoneNumbers: [],
	}),
	watch: {
		phoneNumberSearch(val) {
			val && val !== this.phoneNumberSelected && this.phoneNumberSelections(val);
		},
	},
	created() {
		this.originalPhoneNumbers = this.phoneNumbers.slice();
	},
	methods: {
		NumbersOnly(evt) {
			evt = (evt) ? evt : window.event;
			let charCode = (evt.which) ? evt.which : evt.keyCode;
			if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
				evt.preventDefault();
			} else {
				return true;
			}
		},
		phoneNumberSelections(v) {
			this.phoneNumberLoading = true;

			// Simulated ajax query
			setTimeout(() => {
				// Check if the value is already in the list
				const valueExists = this.phoneNumbers.some((phoneNumber) => {
					return phoneNumber === v;
				});

				if (!valueExists && v !== "") {
					// Add the new value to the list
					this.phoneNumbers.push(v);
				}

				// Filter the list of phone numbers
				this.phoneNumberItems = this.phoneNumbers.filter((e) => {
					return (e || "").indexOf(v || "") > -1;
				});

				this.phoneNumberLoading = false;
			}, 500);
		},
		onPhoneNumberChange() {
			if (this.originalPhoneNumbers.includes(this.phoneNumberSelected)) {
				this.isOriginalPhoneNumber = "";
				console.log("Número seleccionado válido");
			} else {
				this.isOriginalPhoneNumber = "Teléfono no registrado.";
				console.log("Número seleccionado inválido");
			}
		},
	},
};
</script>