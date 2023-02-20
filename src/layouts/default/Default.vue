<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" @click="rail = false">
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" nav>
        John Leider
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item active-color="teal-darken-4" v-for="(item, j) in items" :key="j" :to="item.to">
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title class="text-uppercase font-weight-medium">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn block class="text-teal-darken-4">
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar color="teal-darken-1" density="compact">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>WhatsAppCA</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        to: "/",
        icon: "mdi-home",
        title: "Inicio",
      },
      {
        icon: "mdi-xml",
        title: "Test",
        to: "/test",
      },
    ],
  }),
}
</script>
