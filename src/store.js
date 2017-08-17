import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const now = new Date()
const store = new Vuex.Store({
  state: {
    // 当前用户
    user: {
      name: 'wlm',
      img: 'dist/images/1.jpg'
    },
    // 会话列表
    sessions: [
      {
        id: 1,
        user: {
          name: '示例介绍',
          img: '../assets/images/2.png'
        },
        messages: [
          {
            content: '这是一个vue+vuex+webpack构建的chat demo',
            date: now
          },
          {
            content: '随便说说',
            date: now
          }
        ]
      },
      {
        id: 2,
        user: {
          name: 'webpack',
          img: '../assets/images/3.jpg'
        },
        messages: []
      }
    ],
    // 当前会话
    currentSessionId: 1,
    // 过滤只包含这个key的会话
    filterKey: ''
  },
  getters: {
    user: state => {
      return state.user
    },
    sessions: state => {
      return state.sessions
    },
    currentSessionId: state => {
      return state.currentSessionId
    },
    filterKey: state => {
      return state.filterKey
    }
  },
  mutations: {
    INIT_DATA (state) {
      let data = localStorage.getItem('vue-chat-session')
      if (data) {
        state.sessions = JSON.parse(data)
      }
    },
    // 发送消息
    SEND_MESSAGE ({sessions, currentSessionId}, content) {
      let session = sessions.find(item => item.id === currentSessionId)
      session.messages.push({
        content: content,
        date: new Date(),
        self: true
      })
    },
    // 选择会话
    SELECT_SESSION (state, id) {
      state.currentSessionId = id
    },
    // 搜索会话
    SET_FILTER_KEY (state, value) {
      state.filterKey = value
    }
  },
  actions: {
    initData ({commit}) {
      commit('INIT_DATA')
    },
    sendMessage ({commit}, content) {
      commit('SEND_MESSAGE', content)
    },
    selectSession ({commit}, id) {
      commit('SELECT_SESSION', id)
    },
    search ({commit}, value) {
      commit('SET_FILTER_KEY', value)
    }
  }
})

store.watch(
  (state) => state.sessions,
  (val) => {
    console.log('CHANGE:', val)
  },
  {
    deep: true
  }
)

export default store
// export const actions = {
//   initData: ({dispatch}) => dispatch('INIT_DATA'),
//   sendMessage: ({dispatch}, content) => dispatch('SEND_MESSAGE', content),
//   selectSession: ({dispatch}, id) => dispatch('SELECT_SESSION', id),
//   search: ({dispatch}, value) => dispatch('SET_FILTER_KEY', value)
// }
