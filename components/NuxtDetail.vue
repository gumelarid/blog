<template>
  <div class="card p-3">
    <div class="article-main">
      <div class="title">
        <h3>{{ data.title_article }}</h3>
        <div class="sub-title d-flex">
          <div class="category-tag flex-fill">
            <span> Category : </span>
            <nuxt-link :to="{ path: `/category/${data.slug_category}` }"
              ><small class="text-muted">{{ data.category }}</small></nuxt-link
            >
          </div>

          <div class="date-tag flex-fill">
            <span> Date : </span>
            <a href=""
              ><small class="text-muted">{{ data.createdAt }}</small></a
            >
          </div>

          <div class="user-tag flex-fill">
            <span> By : </span>
            <a href=""
              ><small class="text-muted">{{ data.user }}</small></a
            >
          </div>
        </div>
      </div>

      <div class="content row">
        <div class="col-md-12">
          <div class="card">
            <img :src="data.thumbnail" class="card-img-top" alt="thumbnail" />
            <div class="card-body">
              <div
                id="description"
                class="card-text"
                v-html="data.description"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtDetail',
  props: ['data'],
  data() {
    return {
      detail: {
        title_article: 'okey',
        slug_category: 'okasd',
        category: 'coba',
        createdAt: '30-04-1996',
        user: 'galuh',
        description: 'lorem impus dolar',
      },
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');

* {
  box-sizing: border-box;
  font-family: 'Heebo';
}

div.card-body div#description.card-text img {
  width: 300px;
}

.article-main .title {
  font-size: 1rem;
  margin-bottom: 30px;
}

.title h3 {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.title .sub-title {
  padding: 15px 0;
  font-size: 0.9rem;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.sub-title span {
  font-weight: bold;
}

.sub-title .text-muted {
  font-weight: bold;
}

.context .card-text {
  font-weight: 400;
}

.content img.size-full {
  flex-shrink: 0;
  width: 100%;
}

/* MEDIA QUERIES */

@media screen and (max-width: 450px) {
  .title h3 {
    font-size: 1rem;
  }
  .title .sub-title {
    padding: 10;
    font-size: 0.9rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
  }

  .sub-title span {
    font-size: 0.9rem;
    font-weight: 300;
  }

  .sub-title .text-muted {
    font-size: 0.9rem;
    font-weight: 200;
  }

  .context .card-text {
    font-size: 0.9rem;
    font-weight: 300;
  }
}
</style>
