<template>
  <CenteredSection name="">
    <Banner></Banner>
    <CaseStudies></CaseStudies>
  </CenteredSection>
  <DownloadBanner @showEbookForm="showEbookForm = true"></DownloadBanner>
  <Assets @showEbookForm="showEbookForm = true"></Assets>
  <Products></Products>

  <ModalDownload
    v-if="showEbookDownload"
    @close="showEbookDownload = false"
  ></ModalDownload>
  <ModalForm v-if="showEbookForm" @close="showEbookForm = false"></ModalForm>
</template>

<script>
export default {
  data() {
    return {
      showEbookForm: false,
      showEbookDownload: false,
    }
  },

  mounted() {
    if (this.$route.query.ebook == 'true') {
      this.showEbookDownload = true
    }

    if (this.$route.query.downloadebook == 'true') {
      this.showEbookForm = true
    }
  },
}
</script>
