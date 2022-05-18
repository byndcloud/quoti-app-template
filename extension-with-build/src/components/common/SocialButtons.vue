<template lang="pug">
div
  v-btn(
    v-if="organization.infos.infos.whatsappUrl"
    icon
    aria-label="Whatsapp page"
    @click="$openUrl(organization.infos.infos.whatsappUrl)"
  )
    v-icon mdi-whatsapp
  v-btn(
    v-if="organization.infos.infos.facebookUrl"
    icon
    aria-label="Facebook page"
    @click="$openUrl(organization.infos.infos.facebookUrl)"
  )
    v-icon mdi-facebook
  v-btn(
    v-if="organization.infos.infos.instagramUrl"
    icon
    aria-label="Instagram page"
    @click="$openUrl(organization.infos.infos.instagramUrl)"
  )
    v-icon mdi-instagram
  v-btn(
    v-if="organization.infos.infos.linkedinUrl"
    icon
    aria-label="Linkedin page"
    @click="$openUrl(organization.infos.infos.linkedinUrl)"
  )
    v-icon mdi-linkedin
</template>

<script>
import { mapState } from "vuex";

export default {
  props: [],
  components: {},
  computed: {
    ...mapState(["organization"]),
  },
  data: () => ({}),
};
</script>

<style scoped></style>
