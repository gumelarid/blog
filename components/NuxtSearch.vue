<template>
  <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="search">
          <form @submit.prevent="search">
            <b-icon class="icon" icon="search"></b-icon>
            <input
              v-model="searchKeyword"
              type="text"
              class="form-control"
              placeholder="Search Now....."
            />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NuxtSearch',

  data() {
    return {
      searchKeyword: '',
    }
  },

  computed: {
    pages() {
      return this.$store.state.page
    },
  },

  methods: {
    ...mapActions(['searchData', 'getDefault']),
    search() {
      if (this.searchKeyword === '') {
        this.$store.commit('setPage', 0)
        const data = {
          page: 0,
          size: 6,
        }
        this.getDefault(data)
        this.$nuxt.$options.router.push('/blog')
      } else {
        this.$store.commit('setPageNext', false)
        this.searchData(this.searchKeyword)
      }
      this.searchKeyword = ''
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

.placeholder {
  font-family: 'Poppins', sans-serif;
}

.height {
  font-family: 'Poppins', sans-serif;
  height: 100px;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
}

.search input {
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .icon {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: blue;
}

.search button:hover {
  background: rgb(1, 1, 133);
}

/* MEDIA QUERIES */

@media screen and (max-width: 450px) {
  .placeholder h1 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .search input {
    height: 50px;
    border: 2px solid #d6d4d4;
  }

  .search .icon {
    position: absolute;
    top: 15px;
    left: 16px;
  }

  .search button {
    height: 40px;
    width: 90px;
  }
}
</style>
