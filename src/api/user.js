// 延迟函数
function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve() // 多少秒以后 promise 由 pending 状态切换到 fulfilled 状态
        }, duration)
    })
}


//封装一些发送 ajax 请求的函数
export async function login(loginId, loginPwd) {
    //模拟服务器场景，等待 1s 服务器响应，并判断，如果正确返回一个 json 对象缓存到浏览器中
    await delay(1000);
    if (loginId === "admin" && loginPwd === '123123') {
        const user = {
            loginId,
            name: '管理员'
        }
        // 使用 localStorage.setItem() 以键值对的方式缓存到本地， 永久性的存储 
        localStorage.setItem("user", JSON.stringify(user))
        return user;
    }
    return null
}

export async function loginOut() {
    //退出登录并清除缓存
    await delay(1000);
    localStorage.removeItem("user");
}

export async function whoAmI() {
    // 根据缓存存储的键值对获取信息， 用户恢复登录状态
    await delay(100)
    const user = localStorage.getItem("user");
    if (user) {
        return user
    }
    return null

}