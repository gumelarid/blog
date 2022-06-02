<template>
  <header class="container">
    <div class="header text-center mt-5">
      <h1>Creativibe</h1>
    </div>

    <div class="container naviga">
      <nuxt-nav />
    </div>
  </header>
</template>

<script>
import NuxtNav from './NuxtNav.vue'
export default {
  name: 'NuxtHeader',
  components: { NuxtNav },
}
</script>

<style>
.navigation {
  font-family: 'Poppins', sans-serif;
  font-weight: 200px;
  height: 80px;
}

.naviga {
  border-bottom: 2px solid black;
  margin-bottom: 30px;
}

.header {
  font-family: 'Poppins', sans-serif;
  font-weight: 700px;
}

.link {
  transition: 0.3s ease;
  color: #000000;
  font-size: 1em;
  text-decoration: none;
  padding: 5px 0;
  margin: 0 15px;
}

.link:hover {
  border-bottom: 2px solid #000000;
}

.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

.scrollmenu a {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 15px;
  height: 50px;
  text-decoration: none;
}

.scrollmenu a:hover {
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
