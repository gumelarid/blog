<template>
  <div>
    <nuxt-header />
    <nuxt-search />
    <nuxt-loading v-show="loading" />
    <nuxt-error v-show="error" />
    <div v-show="show">
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

  asyncData(context) {
    context.store.commit('setLoading', true)
    context.store.commit('setError', false)
    context.store.commit('setShow', false)
    return context.$axios
      .get('article/newarticle')
      .then((res) => {
        context.store.commit('setShow', true)
        context.store.commit('setLoading', false)
        context.store.commit('setNew', res.data.data)
        context.store.commit('setSearchTitle', 'New Article')
      })
      .catch((e) => {
        context.store.commit('setLoading', false)
        context.store.commit('setError', true)
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
    error() {
      return this.$store.state.error
    },
    loading() {
      return this.$store.state.loading
    },
    show() {
      return this.$store.state.show
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
