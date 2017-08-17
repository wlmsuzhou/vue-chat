<script>
  export default {
    data () {
      return {
        content: ''
      }
    },
    methods: {
      onKeyup (e) {
        if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
          this.$store.dispatch('sendMessage', this.content)
          this.content = ''
        }
      }
    }
  }
</script>
<template>
  <div class="dialog">
    <textarea placeholder="按enter键发送" v-model="content" @keyup="onKeyup"></textarea>
  </div>
</template>

<style lang="less">
  .dialog {
    position: absolute;
    background-color: #fff;
    border-top: solid 1px #ddd;
    width: 100%;
    height: 160px;
    bottom: 0;
    left: 0;
    textarea {
      height: 100%;
      padding: 10px;
      width: 100%;
      border: none;
      outline: none;
      resize: none;
      font-family: 'Micrsofot Yahei';
    }
  }
</style>
