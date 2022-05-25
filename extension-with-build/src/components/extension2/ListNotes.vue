<template lang="pug">
  v-row
    v-col(cols="12")
      h3.mb-5 Anotações salvas na Store
      v-data-table(
        v-if="itemStoreComputed.length > 0"
        :headers="headers"
        :items="itemStoreComputed"
        class="elevation-1")
          template(v-slot:item.delete="{ item }")
              v-btn(:loading="isDeleting[item.id]"  @click="deleteFromStore(item)" icon) Apagar
      span(v-else) Voce ainda não possui anotações salvas. Volte para a extensão 1 para criar novas anotações

    v-col(cols="12")
      h3.mb-5 Anotações salvas no Firestore
      v-data-table(
        v-if="itemFirebaseComputed.length > 0"
        :headers="headers"
        :items="itemFirebaseComputed"
        class="elevation-1")
          template(v-slot:item.delete="{ item }")
              v-btn(:loading="isDeleting[item.id]"  @click="deleteFromFirestore(item)" icon) Apagar
      span(v-else) Voce ainda não possui anotações salvas. Volte para a extensão 1 para criar novas anotações
    
    

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
    itemFirebase: {
      type: Array,
      default: () => [],
    },
    QuotiFirestore: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    isDeleting: {},
    headers: [
      { text: "Usuário", align: "start", value: "name" },
      { text: "Anotações", align: "center", value: "anotacoes" },
      { text: "Excluir", align: "right", value: "delete" },
    ],
  }),
  computed: {
    ...mapState("notesForUsers", ["list"]),
    itemStoreComputed() {
      return (
        this.list?.map((item) => ({
          name: item.name,
          anotacoes: item.text,
          id: item.id,
        })) || []
      );
    },
    itemFirebaseComputed: function () {
      return this.itemFirebase;
    },
  },
  methods: {
    ...mapActions("notesForUsers", ["deleteNote"]),
    async deleteFromStore(item) {
      this.deleteNote(item.id);
    },
    async deleteFromFirestore(item) {
      this.$set(this.isDeleting, item.id, true);
      await this.QuotiFirestore.firestore
        .collection("Anotacoes")
        .doc(`${item.id}`)
        .delete();
      const index = this.itemFirebase.findIndex((element) => {
        return element.id == item.id;
      });
      if (index > -1) {
        this.itemFirebase.splice(index, 1);
      }
      this.$set(this.isDeleting, item.id, false);
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
