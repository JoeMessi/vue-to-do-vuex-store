<template>
  <div id="todos-list-container">
    <div>
       <TodoItem
          v-for="item in getItems"
          :key="item.id"
          v-bind:item="item"
       />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'TodosList',

  components: {
    TodoItem
  },

  computed: {
    getItems() {
      return this.$store.getters.getItems;
    }
  }

}
</script>

<style scoped>
#todos-list-container {
  box-shadow: 0px 0px 1px black;
}
</style>
