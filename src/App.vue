<template>
  <div id="app">
    <div class="slidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <input-message></input-message>
    </div>
  </div>
</template>

<script>
//  import { actions } from './store'
  import Card from '@/components/card'
  import List from '@/components/list'
  import Message from '@/components/message'
  import InputMessage from '@/components/inputMessage'
  export default {
    name: 'app',
    components: { Card, List, Message, InputMessage },
//    vuex: {
//      actions: actions
//    },
    created () {
      this.$store.dispatch('initData')
    }
  }
</script>

<style lang="less" scoped>
  body {
    background-image: url('assets/images/bg.jpg');
  }
#app {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  overflow: hidden;
  border-radius: 3px;

  .slidebar, .main {
    height: 100%;
  }
  .slidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background: #eee;
  }
}
</style>
