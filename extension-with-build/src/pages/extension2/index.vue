<template lang="pug">
.course-overview
  qt-header(
    title="Demonstrando o uso do Quoti Firestore e do Quoti Store"
    :items="getHeaderItems"
  )
  v-container.mt-10(:style="{ maxWidth: '960px' }")
    ListNotes(:itemFirebase="itemFirebase", :QuotiFirestore="QuotiFirestore")
  Footer
</template>

<script>
import Footer from "@/components/common/Footer.vue";
import ListNotes from "@/components/extension2/ListNotes.vue";
import { mapState, mapActions } from "vuex";
import registerVuexModules from "@/store";
export default {
  name: "productsMarketplaceOverview",
  components: {
    Footer,
    ListNotes,
  },
  props: ["QuotiFirestore"],
  data: () => ({
    users: [],
    itemFirebase: [],
  }),
  // criando store
  async beforeCreate() {
    registerVuexModules.call(this);
  },
  computed: {
    usersComputed: function () {
      return this?.users ? this.users : [];
    },
    ...mapState("notes", ["list"]),
    getHeaderItems() {
      return [
        {
          icon: "mdi-home",
          exact: true,
          link: true,
          text: "Extensão 1",
          disabled: false,
          to: { params: { extensionPath: "extensaocombuild1" } },
        },
        { text: "Extensão 2" },
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

    //usando o Firebase Quoti
    const resultFirebase = await this.QuotiFirestore.firestore
      .collection("Anotacoes")
      .get();
    this.itemFirebase = resultFirebase.docs.map((doc) => {
      let name = this.users.find((element) => element.id == doc.id).name;
      return { name: name, anotacoes: doc.data().anotacoes, id: doc.id };
    });
  },
  async activated() {
    await this.getProduct();
  },
  methods: {
    openDialog(item) {
      this.anotacao = "";
      this.userSelected = item;
      this.dialog = true;
    },
  },
};
</script>
