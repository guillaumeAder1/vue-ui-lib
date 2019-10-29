<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="open">Open popup</button>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Popup from '@/components/popup'
export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  methods: {
    open() {
      var ComponentClass = Vue.extend(Popup)
      var instance = new ComponentClass({
          propsData: { type: 'primary' }
      })
      instance.$mount() // pass nothing
      this.$el.appendChild(instance.$el)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
