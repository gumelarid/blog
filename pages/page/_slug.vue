<template>
  <div>
    <nuxt-header />
    <main class="container">
      <div class="row my-3">
        <nuxt-loading v-if="$fetchState.pending" />
        <nuxt-error v-else-if="$fetchState.error" />
        <article v-else class="col-md-8">
          <nuxt-detail-page :data="detail" />
        </article>
        <div class="col-md-4">
          <nuxt-sidebar />
        </div>
      </div>
    </main>
    <nuxt-footer />
  </div>
</template>

<script>
import NuxtHeader from '~/components/template/NuxtHeader.vue'
import NuxtSidebar from '~/components/template/NuxtSidebar.vue'
import NuxtDetailPage from '~/components/NuxtDetailPage.vue'
import NuxtFooter from '~/components/template/NuxtFooter.vue'
import NuxtError from '~/components/template/NuxtError.vue'
import NuxtLoading from '~/components/template/NuxtLoading.vue'
export default {
  name: 'BlogDetail',
  components: {
    NuxtHeader,
    NuxtDetailPage,
    NuxtFooter,
    NuxtSidebar,
    NuxtError,
    NuxtLoading,
  },

  data() {
    return {
      detail: {},
    }
  },
  async fetch() {
    await this.$axios.get(`page/${this.$route.params.slug}`).then((res) => {
      this.detail = res.data.data
    })
  },

  head() {
    return {
      title: this.detail.title_page,
      meta: [
        {
          hid: this.detail.title_page,
          name: 'Creativibe',
          content: this.detail.title_page,
        },
      ],
    }
  },
}
</script>
