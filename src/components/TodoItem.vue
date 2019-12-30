<template>
  <div>
    <i @click="checkItem" v-bind:class="item.isChecked ? 'fas fa-check-square' : 'fas fa-check'"></i>
    <p v-bind:class="{'is-checked':item.isChecked}">{{ item.title }}</p>
    <button @click="deleteItem(item.id)">x</button>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',

  props: ['item'],

  methods: {

    deleteItem(itemId) {
      this.$store.dispatch('deleteItem', itemId);
    },

    checkItem() {
      this.item.isChecked = !this.item.isChecked;
    }
  }

}
</script>

<style scoped>

div {
  border-bottom: 1px solid #e9e9e9;
}

.is-checked {
  text-decoration: line-through;
  color: #ff00007a;
}

p {
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
}

div {
  display: flex;
  align-items: center;
  background: white;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
}

button {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
}

i {
  cursor: pointer;
}
</style>
