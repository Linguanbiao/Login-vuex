<template>
  <div>
    <form class="formContainer">
      <div class="form-item">
        <label>账号:</label>
        <input type="text" v-model="loginId" />
      </div>
      <div class="form-item">
        <label>密码:</label>
        <input type="password" autocomplete="new-password" v-model="loginPwd" />
      </div>
      <div class="form-item">
        <label></label>
        <button @click="handleSubmit" :disabled="loading">
          {{ loading ? "loading..." : "登录" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  computed: {
    loading() {
      // 根据仓库里 loginUser 模块的 loading 状态为当前用户的登录状态
      return this.$store.state.loginUser.loading;
    },
  },
  methods: {
    async handleSubmit() {
      // 处理登录，更新状态和数据     仓库的异步事件 要使用 store.dispatch("模块/action" , payload)
      const resp = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (resp) {
        //成功登录, 改变路由地址
        console.log("登录成功");
        this.$router.push("/"); // 更改路由地址会切换组件，这里根据路由匹配规则切换到的是主页
      } else {
        window.alert("账号密码错误");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.formContainer {
  margin: 100px auto;
}
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  justify-content: flex-end;
  input {
    width: 200px;
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
  }
  button {
    height: 30px;
    width: 208px;
    color: #fff;
    text-align: center;
    background: rgba(0, 100, 0, 0.8);
    border: none;
    border-radius: 5px;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>
