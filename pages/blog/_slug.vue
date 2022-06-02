<template>
  <div>
    <nuxt-header />
    <main class="container">
      <div class="row my-3">
        <nuxt-loading v-if="$fetchState.pending" />
        <nuxt-error v-else-if="$fetchState.error" />
        <article v-else class="col-md-8">
          <nuxt-detail :data="detail" />
          <nuxt-comment />
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
import NuxtDetail from '~/components/NuxtDetail.vue'
import NuxtFooter from '~/components/template/NuxtFooter.vue'
import NuxtError from '~/components/template/NuxtError.vue'
import NuxtLoading from '~/components/template/NuxtLoading.vue'
import NuxtComment from '~/components/template/NuxtComment.vue'
export default {
  name: 'BlogDetail',
  components: {
    NuxtHeader,
    NuxtDetail,
    NuxtFooter,
    NuxtSidebar,
    NuxtError,
    NuxtLoading,
    NuxtComment,
  },

  data() {
    return {
      detail: {},
    }
  },
  async fetch() {
    await this.$axios.get(`article/${this.$route.params.slug}`).then((res) => {
      this.detail = res.data.data
    })
  },
  head() {
    return {
      title: this.detail.title_article,
      meta: [
        {
          hid: this.detail.meta_description,
          name: 'creativibe',
          content: this.detail.meta_description,
        },
      ],
    }
  },
}
</script>
