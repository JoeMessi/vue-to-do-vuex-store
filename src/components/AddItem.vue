<template>
  <div id="add-item-container">

    <input type="text" name="title" v-model="userInput" @keyup.enter="addItem(userInput)">
    <button @click="addItem(userInput)" type="submit">Add item</button>
  </div>

</template>

<script>
import { store } from '../store.js';
import uuid from 'uuid';

export default {
  name: 'addItem',

  data() {
    return {
      userInput: ''
    }
  },

  methods: {
    addItem(userInput) {

      if(userInput === '') return alert('Write something...');

      const newItem = {
        id: uuid.v4(),
        title: userInput,
        isChecked: false
      }

      this.$store.dispatch('addItem', newItem);
      this.userInput = '';
    }
  }

}
</script>

<style scoped>
div#add-item-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
}
input {
  width: 75%;
  font-weight: 400;
  box-shadow: 0px 0px 1px black;
  border: none;
  border-radius: .25rem 0 0 0.25rem;
  padding-left: 1rem;
  font-size: inherit;
}
button {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  width: 25%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  box-shadow: 0px 0px 1px black;
  border-radius: 0 .25rem .25rem 0;
  cursor: pointer;
}
</style>
