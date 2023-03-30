<template>
   <div class="pa-5 bg-grey-lighten-4 rounded" id="templateMessage" ref="templateMessage"></div>
</template>
 
<script>
export default {
   name: "TemplateInputComponent",
   data: () => ({
      defaultText: `<div class="text-body-2 text-grey-darken-1 d-flex justify-center">No ha seleccionado una plantilla</div>`,
   }),
   mounted() {
      this.$refs.templateMessage.innerHTML = this.defaultText;
   },
   methods: {
      reset() {
         this.$refs.templateMessage.innerHTML = this.defaultText;
      },
      checkInputs() {
         const inputs = this.$refs.templateMessage.querySelectorAll('input');
         for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
               console.log(false);
               return false;
            }
         }
         console.log(true);
         return true;
      }
   },
   computed: {
      areInputsEmpty() {
         return !this.checkInputs();
      }
   },

}
</script>

<style>
.field-message {
   padding: 0rem 0.5rem;
   width: 8rem;
   border-bottom: -1px solid #00695C;
   box-shadow: inset 0 -1px 0 #546e7a;
   text-align: center;
   margin: 0 0.5rem;
}

.field-message:hover,
.field-message:focus {
   outline: none;
   border-bottom: -1px solid #00695C;
   box-shadow: inset 0 -2px 0 #00695C;
}
</style>
