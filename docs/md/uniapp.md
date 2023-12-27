# uniapp



### 1. 网络请求

~~~vue
<template>
    <view>
    
    <button v-on:click="sendGet"></v-on:cli>>发送请求</button>
    
    </view>
</template>

<script>
    export default{
        methods: {
            sendGet(){
                uni.request({
                    url: "http://map.chachal.xyz/api/test",
                    success(res) {
                        console.log(res)
                    }
                })
            }
        }
    }
</script>

<style>
</style>

~~~

**# 微信小程序开发**

官方文档 : https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html

**##　<**font color**=****"lightblue"****>配置小程序</**font**>**

小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等

![image-20210508092214458](https://i.loli.net/2021/06/29/KpJuHBO9mVR3z74.png)

每一个小程序页面也可以使用同名 `.json` 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。



```json
例如：

{

  *"navigationBarBackgroundColor"*: "#ffffff",

  *"navigationBarTextStyle"*: "black",

  *"navigationBarTitleText"*: "微信接口功能演示",

  *"backgroundColor"*: "#eeeeee",

  *"backgroundTextStyle"*: "light"

}
```





js中数组push对象，前面的值总是被最后一次的值覆盖的问题 https://blog.csdn.net/xiaoye319/article/details/78416762/





