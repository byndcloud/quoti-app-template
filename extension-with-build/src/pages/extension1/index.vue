<template lang="pug">
.course-overview
  qt-header(
    title="Demonstrando o uso do Quoti API"
    :items="getHeaderItems"
  )
  v-container.mt-10(:style="{ maxWidth: '960px' }")
    ListUser(:users="users", :QuotiFirestore="QuotiFirestore")
  Footer
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import ListUser from "@/components/extension1/ListUser.vue";

import registerVuexModules from "@/store";
export default {
  name: "productsMarketplaceOverview",
  components: {
    Footer,
    ListUser,
  },
  props: ["QuotiApi", "QuotiFirestore"],
  data: () => ({
    users: [],
  }),
  // criando store
  async beforeCreate() {
    registerVuexModules.call(this);
  },
  computed: {
    usersComputed: function () {
      return this?.users ? this.users : [];
    },
    getHeaderItems() {
      return [
        {
          icon: "mdi-home",
          exact: true,
          link: true,
          text: "Extensão 1",
          disabled: false,
          // to: { params: { extensionPath: "SomePath" } },
        },
      ];
    },
  },
  async created() {
    //usando API Quoti
    // Usando a API através de uma variável global
    const { data } = await this.$QuotiApi.axios.get("users/list", {
      limit: 5000,
    });
    // Usando a API através da variável passada para a extensão durante sua renderização
    // const data = await Quoti.userApi.list({
    //   limit: 5000
    // })
    this.users = data.results;
  },
};
</script>
