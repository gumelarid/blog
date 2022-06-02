<template>
  <footer class="footer-07">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <p class="menu">
            <nuxt-link :to="{ path: '/blog' }">Home</nuxt-link>
            <nuxt-link
              v-for="pages in page"
              :key="pages.key"
              :to="{ path: `/page/${pages.slug_page}` }"
              >{{ pages.title_page }}</nuxt-link
            >
          </p>
          <ul class="ftco-footer-social p-0">
            <a class="sosial-icon" href="">
              <b-icon
                icon="facebook"
                class="rounded-circle bg-primary p-1"
                font-scale="3"
                variant="light"
              >
              </b-icon>
            </a>
            <a class="sosial-icon" href="">
              <b-icon
                icon="twitter"
                class="rounded-circle bg-info p-1"
                font-scale="3"
                variant="light"
              >
              </b-icon
            ></a>
            <a class="sosial-icon" href="">
              <b-icon
                icon="youtube"
                class="rounded-circle bg-danger p-1"
                font-scale="3"
                variant="light"
              >
              </b-icon
            ></a>
            <a class="sosial-icon" href="">
              <b-icon
                icon="instagram"
                class="rounded-circle bg-success p-1"
                font-scale="3"
                variant="light"
              >
              </b-icon
            ></a>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <p class="copyright">
            Copyright &copy;

            {{ new Date().getFullYear() }}
            All rights reserved | This made with
            <i class="ion-ios-heart" aria-hidden="true"></i> by
            <a href="https://github.com/gumelarid" target="_blank">GumelarId</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NUxtFooter',

  data() {
    return {
      page: {},
    }
  },

  async fetch() {
    await this.$axios.get('page').then((res) => {
      this.page = res.data.data
    })
  },
}
</script>

<style scoped>
footer {
  padding: 2em 0;
}

.footer-07 {
  background: #121212;
}
.footer-07 a {
  color: #a3de83;
}
.footer-07 p {
  color: rgba(255, 255, 255, 0.3);
}
.footer-07 .footer-heading {
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 30px;
}
.footer-07 .footer-heading .logo {
  color: #fff;
}
.footer-07 .menu {
  margin-bottom: 30px;
}
.footer-07 .menu a {
  color: rgba(255, 255, 255, 0.6);
  margin: 0 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.footer-07 .ftco-footer-social li a {
  background: transparent;
  border: 1px solid #a3de83;
}

.ftco-footer-social li {
  list-style: none;
  margin: 0 10px 0 0;
  display: inline-block;
}
.ftco-footer-social li a {
  height: 40px;
  width: 40px;
  display: block;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  position: relative;
}
.ftco-footer-social li a span {
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.ftco-footer-social li a:hover {
  color: #fff;
}
</style>
