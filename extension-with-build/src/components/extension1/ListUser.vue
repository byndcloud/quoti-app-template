<template lang="pug">
  v-row
    qt-global-dialog(
      v-model="dialog"
      headerTitle='Salvando uma anotação no Firestore e QuotiStore!'
      persistent
      :showRButton="true"
      :showLButton="true"
      :rButtonTitle="'Salvar anotação na Store'"
      :lButtonTitle="'Salvar anotação no firestore'"
      :rButtonLoading="loadings.store"
      :lButtonLoading="loadings.firestore"
      @clickRButton="saveNotesOnStore()"
      @clickLButton="saveNotesOnFirestore()"
      :max-width="'1000'"
    )
      template(#content)
        v-text-field(
          v-model="anotacao"
          label="Anotação"
          outlined)
        v-spacer
        span Ao clicar em Salvar anotação na Store seus dados serão mantidos até que o navegador atualize ou feche a página. Ao clicar em Salvar anotação no firestore seus dados serão mantidos em nosso firestore e será apagado apenas quando solicitado.

          
    v-col(cols="12")
      v-data-table(
        :headers="headers"
        :items="usersComputed"
        class="elevation-1")
          template(v-slot:item.anotacoes="{ item }")
            v-btn(@click="openDialog(item)" icon) Add anotação
    v-col.px-0(cols=12)
      v-btn.text-none(
        color="primary"
        text=""
        @click="goToExtension2()"
      ) Acesse a extensão 2 para ver as anotações salvas
        v-icon.ml-2(medium) open_in_new
    v-col(cols="12")
      v-alert(
        color="black"
        type="warning"
      )
        span Esse é um template exemplo de como podemos consultar dados de todos os usuários cadastrados na Organização usando a API Quoti. Consulte o código para saber mais.
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
    },
    QuotiFirestore: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    dialog: false,
    anotacao: "",
    userSelected: {},
    headers: [
      { text: "Usuário", align: "start", value: "name" },
      { text: "CPF", value: "cpf" },
      { text: "Type", value: "type" },
      { text: "Anotações", align: "center", value: "anotacoes" },
    ],
    loadings: {
      store: false,
      firestore: false,
    },
  }),
  computed: {
    ...mapState("notesForUsers", ["list"]),
    usersComputed: function () {
      return this?.users ? this.users : [];
    },
  },
  methods: {
    ...mapActions("notesForUsers", ["appendNote"]),
    async saveNotesOnFirestore() {
      try {
        this.loadings.firestore = true;
        const id = this.userSelected.id;
        const name = this.userSelected.name;
        this.QuotiFirestore.firestore.collection("Anotacoes").doc(`${id}`).set({
          anotacoes: this.anotacao,
        });
        this.$store.dispatch("snackbar/success", "Salvo com sucesso");
      } catch (error) {
        this.$store.dispatch(
          "snackbar/error",
          "Houve um erro na hora de salvar"
        );
      } finally {
        this.loadings.firestore = false;
      }
    },
    async saveNotesOnStore() {
      try {
        this.loadings.store = true;
        const id = this.userSelected.id;
        const name = this.userSelected.name;
        const note = { id, name, text: this.anotacao };
        this.appendNote(note);
        this.$store.dispatch("snackbar/success", "Salvo com sucesso");
      } catch (error) {
        this.$store.dispatch(
          "snackbar/error",
          "Houve um erro na hora de salvar"
        );
      } finally {
        this.loadings.store = false;
      }
    },
    openDialog(item) {
      this.anotacao = "";
      this.userSelected = item;
      this.dialog = true;
    },
    goToExtension2() {
      this.$router.push({
        params: {
          extensionPath: "extensaocombuild2",
        },
      });
    },
  },
};
</script>
