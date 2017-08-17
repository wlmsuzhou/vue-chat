<script>
  import { mapGetters } from 'vuex'
  export default {
//    vuex: {
//      actions: actions,
//      getters: {
//        user: ({ user }) => user,
//        filterKey: ({ filterKey }) => filterKey
//      },
    computed: {
      ...mapGetters(['user', 'currentSessionId']),
      cardUser: function () {
        return this.user
      }
    },
    methods: {
      onKeyup (e) {
        console.log(e.target.value)
        this.$store.dispatch('search', e.target.value)
      }
    }
  }
</script>
<template>
  <div class="card">
    <header>
      <img src="../assets/images/1.jpg" :alt="user.name" class="avatar">
      <p class="name">{{user.name}}</p>
    </header>
    <footer>
      <input type="text" class="search" placeholder="search content..." @keyup="onKeyup">
    </footer>
  </div>
</template>
<style scoped lang="less">
  .card {
    padding: 12px;
    border-bottom: solid 1px #24272c;
    footer {
      margin-top: 10px;
      .search {
        padding: 0 10px;
        width: 100%;
        font-size: 12px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: 1px solid #3a3a3a;
        outline: none;
        background-color: #26292e;
      }
    }
    header {
      .avatar {
        vertical-align: middle;
        height: 40px;
        width: 40px;
      }
      .name {
        vertical-align: middle;
        display: inline-block;
        margin-left: 10px;
        font-size: 1.1rem;
      }
    }
  }
</style>
