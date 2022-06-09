<template>
  <div class="userName">
    <span v-if="status === 'loading'">loading...</span>
    <template v-else-if="status === 'login'">
      <!-- 这里面两部分的显示状态是一致的，因此用 template 包一下， template 不会生成任何的dom -->
      <router-link to="/user">当前登录用户: {{ user.name }}</router-link>
      <a href="" @click.prevent="handleClick">退出</a>
    </template>
    <router-link to="/login" v-else>Login</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"; // mapState 和 mapGetters 都是一个对象，方便我们使用仓库里的数据

export default {
  computed: {
    // loading() {
    //   return this.$store.state.loginUser.loading;
    // },
    // user() {
    //   if (this.$store.state.loginUser.user) {
    //     return this.$store.state.loginUser.user.name;
    //   }
    //   return null;
    // },

    /**
     * 上面两种写法也是对的，这里使用一种简单的方法，vuex 提供了简便的辅助函数 mapState mapGetters ，函数返回的是一个对象
     */
    ...mapState("loginUser", ["user"]), //loginUser 模块的 user
    ...mapGetters("loginUser", ["status"]),
  },
  methods: {
    async handleClick() {
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login"); //退出后返回登录页
    },
  },
};
</script>

<style lang="less" scoped>
.userName {
  display: inline-block;
  a {
    margin-right: 15px;
    text-decoration: none;
  }
  span {
    margin-right: 15px;
  }
}
</style>
