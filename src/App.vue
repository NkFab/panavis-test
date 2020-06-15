<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  font-size: 62.5%;
  height: 100vh;
}
body {
  font-size: 1.5em; 
  line-height: 1.6;
  font-weight: 400;
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  color: #222;
}

@media (min-width: 550px) {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 4.2rem;
  }
  h3 {
    font-size: 3.6rem;
  }
  h4 {
    font-size: 3rem;
  }
  h5 {
    font-size: 2.4rem;
  }
  h6 {
    font-size: 1.5rem;
  }
}

p {
  margin-top: 0;
}
</style>
