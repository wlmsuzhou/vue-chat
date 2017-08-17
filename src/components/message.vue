<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['user', 'sessions', 'currentSessionId']),
      currentUser () {
        return this.user
      },
      session () {
        return this.sessions[this.currentSessionId - 1]
      }
    },
    filters: {
      time (date) {
        if (typeof date === 'string') {
          date = new Date()
        }
        return date.getHours() + ':' + date.getMinutes()
      }
    }
//    directives: {
//      'scrollBottom' () {
//        this.$nextTick(() => {
//          this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight
//        })
//      }
//    }
  }
</script>
<template>
  <div class="message">
    <ul v-if="session.messages">
      <li v-for="item in session.messages">
        <p class="time">
          <span>{{item.date | time}}</span>
        </p>
        <div class="main" :class="{self: item.self}">
          <img  v-if="item.self" class="avatar"  :alt="session.user.name" src="../assets/images/1.jpg">
          <img  v-if="!item.self" class="avatar"  :alt="session.user.name" src="../assets/images/2.png">
          <!--<img  v-else class="avatar" src="../assets/images2.png" alt="session.user.name">-->
          <div class="text">{{item.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
  .message {
    padding: 10px 15px;
    height:  ~'calc(100% - 160px)';
    overflow-y: scroll;
    li {
      margin-bottom: 15px;
      p.time {
        margin: 7px 0;
        text-align: center;
        span {
          display: inline-block;
          padding: 0 18px;
          font-size: 12px;
          color: #fff;
          border-radius: 2px;
          background-color: #dcdcdc;
        }
      }
    }
    .avatar {
      float: left;
      margin: 0 10px 0 0;
      border-radius: 3px;
      width: 30px;
      height: 30px;
    }
    .text {
      display: inline-block;
      position: relative;
      padding: 0 10px;
      max-width: ~'calc(100% - 40px)';
      min-height: 30px;
      line-height: 2.5;
      font-size: 12px;
      text-align: left;
      word-break: break-all;
      background-color: #fafafa;
      border-radius: 4px;
    }
    .self {
      text-align: right;
      .avatar {
        float: right;
        width: 30px;
        height: 30px;
        margin: 0 0 0 10px;
      }
      .text {
        background-color: #b2e281;
      }
    }
  }
</style>
