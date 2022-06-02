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
        <button v-show="next" class="btn btn-md btn-primary" @click="nextPage">
          Next
        </button>
      </div>
    </div>

    <nuxt-footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NuxtHeader from '~/components/template/NuxtHeader.vue'
import NuxtFooter from '~/components/template/NuxtFooter.vue'
import NuxtContent from '~/components/NuxtContent.vue'
import NuxtSearch from '~/components/NuxtSearch.vue'
import NuxtError from '~/components/template/NuxtError.vue'
import NuxtLoading from '~/components/template/NuxtLoading.vue'
export default {
  name: 'BlogPage',
  components: {
    NuxtHeader,
    NuxtFooter,
    NuxtContent,
    NuxtSearch,
    NuxtError,
    NuxtLoading,
  },

  // asyncData(context) {
  //   console.log(context)
  //   context.store.commit('setLoading', true)
  //   context.store.commit('setError', false)
  //   context.store.commit('setShow', false)
  //   context.store.commit('setPage', 0)
  //   return context.$axios
  //     .get(`article?page=${context.store.state.page}&size=1`)
  //     .then((res) => {
  //       if (res.data.pagination.totalPages > 1) {
  //         context.store.commit('setPageNext', true)
  //       } else {
  //         context.store.commit('setPageNext', false)
  //       }

  //       context.store.commit('setArticle', res.data.data)
  //       context.store.commit('setSearchTitle', 'All Article')
  //       context.store.commit('setShow', true)
  //       context.store.commit('setLoading', false)
  //     })
  //     .catch((e) => {
  //       context.store.commit('setLoading', false)
  //       context.store.commit('setError', true)
  //     })
  // },

  data() {
    return {
      categorys: [
        {
          category_name: 'pemgrograman',
        },
        {
          category_name: 'tutorial',
        },
        {
          category_name: 'coding',
        },
      ],
      size: 6,
    }
  },

  async fetch() {
    this.$store.commit('setLoading', true)
    this.$store.commit('setError', false)
    this.$store.commit('setShow', false)
    this.$store.commit('setPage', 0)
    await this.$axios
      .get(`article?page=${this.pages}&size=${this.size}`)
      .then((res) => {
        if (res.data.pagination.totalPages > 1) {
          this.$store.commit('setPageNext', true)
        } else {
          this.$store.commit('setPageNext', false)
        }

        this.$store.commit('setArticle', res.data.data)
        this.$store.commit('setSearchTitle', 'All Article')
        this.$store.commit('setShow', true)
        this.$store.commit('setLoading', false)
      })
      .catch((err) => {
        console.log(err)
        this.$store.commit('setLoading', false)
        this.$store.commit('setError', true)
      })
  },

  head() {
    return {
      title: 'Creativibe Blog',
      meta: [
        {
          hid: 'Creativibe Blog',
          name: 'creativibe',
          content: 'Creativibe Blog',
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
    next() {
      return this.$store.state.showNext
    },
    pages() {
      return this.$store.state.page
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

  methods: {
    ...mapActions(['getAll']),
    nextPage() {
      let num = this.pages
      const data = {
        page: (num += 1),
        size: this.size,
      }
      this.$store.commit('setPage', num)
      this.getAll(data)
    },
  },
}
</script>

<style scoped>
.category {
  font-size: 0.8rem;
  overflow: auto;
  white-space: nowrap;
}

.category span {
  display: inline-block;
  color: rgb(51, 51, 51);
  text-align: center;
  padding: 5px;
  height: 30px;
  cursor: pointer;
  text-decoration: none;
}

.category a:hover {
  /* border-bottom: 2px solid rgb(236, 215, 255);
  color: rgb(236, 215, 255); */
  border-bottom: 1px solid rgb(27, 6, 46);
  color: rgb(108, 98, 116);
}

::-webkit-scrollbar {
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(72, 105, 105);
  border-radius: 2px;
  background-color: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(72, 105, 105);
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(72, 105, 105);
}
</style>
