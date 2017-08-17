<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['sessions', 'currentSessionId', 'filterKey']),
      listSessions () {
        let result = this.sessions.filter(session => session.user.name.includes(this.filterKey))
        return result
      },
      listCurrentId () {
        return this.currentSessionId
      }
    },
    methods: {
      selectSession (id) {
        // console.log(this.listSessions[id - 1].user.img)
        this.$store.dispatch('selectSession', id)
      }
    }
  }
</script>
<template>
  <div class="list">
      <ul>
        <li v-for="item in listSessions" :class="{active: item.id === listCurrentId}" @click="selectSession(item.id)">
          <img class="avatar" src="../assets/images/2.png" alt="">
          <p class="name">{{item.user.name}}</p>
        </li>
      </ul>
  </div>
</template>
<style scoped lang="less">
  .list {
    li {
      padding: 8px 15px;
      cursor: pointer;
      border-bottom: 1px solid #292C33;
      box-sizing: border-box;
      transition: background-color .1s;

      &:hover {
        background-color: rgba(255,255,255,0.03);
      }
      &.active {
        background-color: rgba(255,255,255,0.1);
      }
      .avatar{
        width: 30px;
        height: 30px;
        vertical-align: middle;
        border-radius: 2px;
      }
      p {
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 10px;
      }
    }
  }
</style>
