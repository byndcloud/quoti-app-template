<template lang="pug">
v-footer.courses-footer(color="transparent")
  v-row(v-if="organization" justify="center")
    v-col(cols="auto" align-self="center")
      v-img.courses-footer__img(
        v-if="!$vuetify.theme.dark && organization.infos.images.banner"
        :src="organization.infos.images.banner"
        contain
      )
      v-img.courses-footer__img(
        v-if="$vuetify.theme.dark && organization.infos.images.bannerMono"
        :src="organization.infos.images.bannerMono"
        contain
      )
    v-col(cols="auto")
      v-row(no-gutters)
        v-col.pa-md-3.mt-2.mt-sm-auto(cols=12 sm=6 md=undefined)
          .courses-footer__org-name.mb-6 {{ organization.infos.name }}
          .courses-footer__info-text {{ organization.infos.infos.addressLine1 }}
          .courses-footer__info-text {{ organization.infos.infos.addressLine2 }}
          .courses-footer__info-text(v-if="showCNPJ") CNPJ: {{ organization.infos.infos.cnpj }}
        v-col.pa-md-3.mt-6.mt-sm-auto(cols=12 sm=6 md=undefined)
          SocialButtons.mb-3
          .courses-footer__info-text {{ organization.infos.infos.phone }}
          .courses-footer__info-text {{ organization.infos.infos.mail }}
          .courses-footer__info-text {{ organization.infos.infos.site }}
</template>

<script>
import { mapState } from "vuex";
import SocialButtons from "./SocialButtons";

export default {
  components: {
    SocialButtons,
  },
  computed: {
    ...mapState(["organization"]),
    showCNPJ() {
      return this.organization?.infos?.footerConfigs?.find(
        (c) => c.id === "show_cnpj"
      )?.value;
    },
  },
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.courses-footer {
  margin-top: 6rem;
  margin-bottom: 4rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  word-break: break-word;
}

.courses-footer__org-name {
  font-weight: 700;
  font-size: 1.125rem;
}
.courses-footer__info-text {
  font-size: 0.875rem;
}
</style>
