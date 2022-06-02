<template>
  <section class="card p-2">
    <div class="follow mb-3">
      <h3>Share Link</h3>
      <a
        class="sosial-icon"
        :href="'https://www.facebook.com/sharer/sharer.php?u=' + shareLink + ''"
      >
        <b-icon
          icon="facebook"
          class="rounded bg-primary p-1"
          font-scale="3"
          variant="light"
        >
        </b-icon>
      </a>
      <a
        class="sosial-icon"
        :href="'https://twitter.com/intent/tweet?url=' + shareLink + '&text='"
      >
        <b-icon
          icon="twitter"
          class="rounded bg-info p-1"
          font-scale="3"
          variant="light"
        >
        </b-icon
      ></a>
      <a
        class="sosial-icon"
        :href="
          'https://www.linkedin.com/shareArticle?mini=true&url=' +
          shareLink +
          ''
        "
      >
        <b-icon
          icon="linkedin"
          class="rounded bg-success p-1"
          font-scale="3"
          variant="light"
        >
        </b-icon
      ></a>
    </div>
    <div class="list-group category mb-3">
      <h3>Category</h3>
      <a v-for="categorys in category" :key="categorys.key" href="#">
        <div class="btn btn-default">
          <nuxt-link :to="{ path: `/category/${categorys.slug_category}` }"
            ><small class="text-muted">{{
              categorys.category
            }}</small></nuxt-link
          >
        </div>
      </a>
    </div>
    <div class="list-group populer">
      <h3>Article Populer</h3>
      <a
        v-for="pop in populer"
        :key="pop.key"
        href="#"
        class="list-group-item list-group-item-action"
      >
        <div class="d-flex w-100 justify-content-between">
          <nuxt-link :to="{ path: `/blog/${pop.slug_article}` }">
            {{ pop.title_article }}
          </nuxt-link>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NuxtSidebar',

  data() {
    return {
      category: [
        {
          slug_category: 'okey',
          category: 'category',
        },
      ],
      populer: [
        {
          slug_article: 'adsdas',
          title_article: 'dasdas',
        },
      ],
      shareLink: '',
    }
  },

  async fetch() {
    await this.$axios.get('nav').then((res) => {
      this.populer = res.data.data.populer
      this.category = res.data.data.category
    })

    this.shareLink = window.location.href
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');
* {
  box-sizing: border-box;
  font-family: 'Heebo';
}

.follow {
  background-color: aqua;
  text-align: center;
  border-top: 2px solid rgb(224, 215, 215);
  padding: 30px 20px;
  border-radius: 20px;
  margin: 15px 0 30px 0;
}

.populer {
  margin: 15px 0 30px 0;
  font-size: 0.9rem;
  font-weight: bold;
}

.category {
  font-size: 0.9rem;
  font-weight: bold;
}

h3 {
  font-weight: bold;
  font-size: 1.2rem;
}

.category .text-muted {
  font-weight: bold;
  font-size: 0.9rem;
}

/* MEDIA QUERIES */

@media screen and (max-width: 450px) {
  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
