<template>
   <div class="text-justify pa-5 bg-grey-lighten-4 rounded" id="templateMessage" ref="templateMessage"></div>
</template>
 
<script>
export default {
   name: "TemplateInputComponent",
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
