<template>
  <div id="container">
    <div class="title">{{title}}</div>
    <hr>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    title: String
  }
};
</script>

<style scoped>
.title {
  text-transform: uppercase;
  color: #222;
}

@media (min-width: 576px) {
  #container {
    width: 80%;
    height: 100vh;

    background: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}

@media (min-width: 768px) {
  #container {
    padding: 3%;
    width: 85vw;
    height: 100vh;
    margin: 10px 0 0 15px;
    overflow-x: hidden;

    background: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}

@media (min-width: 992px) {
  #container {
    padding: 3%;
    width: 35vw;
    height: 700px;
    margin: 5% 0 0 30%;

    background: #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}

@media (min-width: 1200px) {
}
</style>
