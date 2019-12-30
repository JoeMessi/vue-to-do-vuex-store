<template>
  <div id="app">
    <div></div>

    <div id="center-col">
      <Header />
      <AddItem />
      <TodosList />
    </div>

    <div></div>
  </div>
</template>

<script>

import Header from './components/Header';
import TodosList from './components/TodosList';
import AddItem from './components/AddItem';

export default {
  name: 'app',

  components: {
    Header,
    TodosList,
    AddItem
  }

}
</script>

<style>
body {
  background: rgb(127,255,212);
  background: linear-gradient(125deg, rgba(127,255,212,1) 4%, rgba(117,182,251,1) 80%);
  font-family: "Roboto";
  height: 100vh;
}

div#app {
  display: grid;
  grid-template-columns: 30% 40% 30%;
}

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199px) {

  div#app {
    grid-template-columns: 25% 50% 25%;
  }

}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991px) {

  div#app {
    grid-template-columns: 20% 60% 20%;
  }

}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767px) {

  div#app {
    grid-template-columns: 15% 70% 15%;
  }

}


/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {

  div#app {
    grid-template-columns: 10% 80% 10%;
  }

}
</style>
