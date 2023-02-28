<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="5">
                <v-card class="mx-auto" elevation="4">
                    <div class="ma-4">Mensaje de plantilla</div>
                    <v-autocomplete class="mx-4" v-model="template" :items="items" item-text="title" clearable
                        label="Plantillas disponibles"></v-autocomplete>
                    <v-autocomplete class="mx-4" v-model="to" :items="[
                        'California',
                        'Colorado',
                        'Florida',
                        'Georgia',
                        'Texas',
                        'Wyoming',
                    ]" clearable label="Para"></v-autocomplete>
                </v-card>
            </v-col>
            <v-col cols="12" md="7">
                <v-card elevation="4">
                    <!-- <v-form @submit.prevent class="pa-4" v-model="valid">
                    
                        <div class="d-flex justify-end">
                            <v-btn class="mt-3" type="submit" color="teal-darken-2" prepend-icon="mdi-send"
                                :disabled="!valid">
                                Enviar
                            </v-btn>
                        </div>
                    </v-form> -->
                    <!-- 
 <div v-html="text" class="pa-2"></div> -->

                    <!-- <div class="pa-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            <input class="input-underline" type="text" /> 
            eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            <input class="input-underline" type="text" /> nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in <input class="input-underline" type="text" /> reprehenderit in
            voluptate velit esse cillum dolore eu
            <input class="input-underline" type="text" /> fugiat nulla pariatur.align-start
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </div> -->


                    <!-- <div class="ma-2">
                        <div class="d-flex align-items-center">
                            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                <v-text-field class="field-message d-inline-block" variant="underlined" />
                                Optio sint porro architecto ipsum amet doloremque alias voluptas at adipisci
                                <v-text-field class="field-message d-inline-block" variant="underlined" /> veritatis
                                consectetur exercitationem aliquam, veniam similique obcaecati, odio, vitae accusamus nobis!
                            </div>
                        </div>
                    </div> -->

                    <div class="pa-4">
                        <p class="mt-4"> 
                            Lorem ipsum dolor sit amet  consectetur adipisicing elit.
                        <div class="d-inline-block">
                            <v-text-field class="field-message " single-line="true" size="8" color="teal-darken-3" variant="underlined"/>
                        </div> 
                         Reiciendis possimus excepturi, accusamus laudantium beatae earum sit rerum voluptatum nostrum exercitationem,
                         <div class="d-inline-block">
                            <v-text-field  class="field-message" single-line="true" size="8" color="teal-darken-3" variant="underlined"/>
                        </div> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio quos sunt perferendis consequuntur totam necessitatibus enim fuga repellat? Sit obcaecati cupiditate illum alias quidem nostrum dolorem quisquam dolor aut!
                        </p>
                    </div>

                    




<!-- 

    

                    <div class="d-flex align-items-center">
                            <div class="d-flex align-items-center flex-wrap">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <div class="d-flex align-items-center">
                                    <v-text-field class="field-message d-inline-block" variant="underlined" />
                                </div>
                                Maecenas a libero eget quam finibus vestibulum.
                                <div class="d-flex align-items-center">
                                    <v-text-field class="field-message d-inline-block" variant="underlined" />
                                </div>
                            </div>
                        </div> -->




                    <p v-if="template">
                        {{ items.find((item) => item.value === template).title }}
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
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
        text: '',
    }),
};
</script>

<style>
.field-message {
    max-height: 5px;
}

/* .ml-n3 {
    margin-left: -1rem;
  }
  .mr-n5 {
    margin-right: -0.5rem;
  } */
/* .input-underline {
  border-bottom: 0.1rem solid #546e7a;
  padding: 0rem 0.5rem;
  width: 8rem;
  text-align: center;
 margin: 0 0.5rem; 
}
.input-underline:hover,
.input-underline:focus {
  outline: none;
  border-bottom: 0.1rem solid #00796b; 
  box-shadow: inset 0 -0.05rem 0 green;
} */
</style>
  