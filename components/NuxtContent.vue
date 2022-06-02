<template>
  <div>
    <div class="container">
      <div class="row">
        <div v-for="article in data" :key="article.key" class="col-md-4">
          <div class="card">
            <div class="card-header">
              <img :src="article.thumbnail" alt="rover" />
            </div>
            <div class="card-body">
              <span class="tag tag-teal">
                <nuxt-link
                  class="tag tag-teal"
                  :to="/category/ + article.slug_category"
                  >{{ article.category }}</nuxt-link
                >
              </span>
              <h4>
                <nuxt-link :to="/blog/ + article.slug_article">{{
                  article.title_article
                }}</nuxt-link>
              </h4>
              <div class="user">
                <img :src="article.profile" alt="user" />
                <div class="user-info">
                  <h5>{{ article.user }}</h5>
                  <small>{{ article.createdAt }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtContent',
  props: ['data'],
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* .container {
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
} */
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  /* width: 260px; */
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>
