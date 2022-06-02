<template>
  <div>
    <nuxt-header />
    <nuxt-search />
    <nuxt-loading v-if="$fetchState.pending" />
    <nuxt-error v-else-if="$fetchState.error" />
    <div v-else>
      <div class="text-center my-4">
        <h3>{{ title }}</h3>
      </div>
      <nuxt-content :data="articles" />
      <div class="text-center my-5">
        <nuxt-link id="more" to="/blog" class="btn btn-md btn-default"
          >More Article</nuxt-link
        >
      </div>
    </div>

    <nuxt-footer />
  </div>
</template>

<script>
import NuxtError from '~/components/template/NuxtError.vue'
import NuxtContent from '~/components/NuxtContent.vue'
import NuxtSearch from '~/components/NuxtSearch.vue'
import NuxtFooter from '~/components/template/NuxtFooter.vue'
import NuxtHeader from '~/components/template/NuxtHeader.vue'
import NuxtLoading from '~/components/template/NuxtLoading.vue'
export default {
  name: 'IndexPage',
  components: {
    NuxtHeader,
    NuxtFooter,
    NuxtSearch,
    NuxtContent,
    NuxtError,
    NuxtLoading,
  },

  async fetch() {
    await this.$axios.get('article/newarticle').then((res) => {
      this.$store.commit('setNew', res.data.data)
      this.$store.commit('setSearchTitle', 'New Article')
    })
  },

  head() {
    return {
      title: 'Creativibe Home',
      meta: [
        {
          hid: 'Creativibe Home',
          name: 'creativibe',
          content: 'Creativibe Home',
        },
      ],
    }
  },

  computed: {
    articles() {
      return this.$store.state.articles
    },
    title() {
      return this.$store.state.title
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
* {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1rem;
}

#more {
  border: 1px solid fuchsia;
}

#more:hover {
  border: 1px solid blue;
  background-color: blue;
  color: white;
}

body {
  background-color: #fff;
}
</style>
