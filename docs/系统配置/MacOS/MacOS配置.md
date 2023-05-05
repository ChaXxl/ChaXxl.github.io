# MacOS配置









# 系统设置

### Finder访达显示隐藏文件

* 方法一：

  使用快捷键 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd>，即可显示

  

* 方法二：一步到位

  打开终端，依次输入以下命令

  ~~~shell
  defaults write com.apple.finder AppleShowAllFiles TRUE
  ~~~

  ~~~shell
  killall Finder
  ~~~

  







# 软件部分



## 像 Windows一样 Alt+Tab 切换窗口

### AltTab

> 





## 全局鼠标手势软件

### MacStroke

> 







## 鼠标平滑滚动

### Mac Mouse Fix

> 







## 电脑运行状态显示

### stats

> 







## 状态栏隐藏图标

### Hidden bar

> 





## 剪贴板管理

### Pastebot

* 收费情况：收费
* 软件大小：11 MB
* 下载地址：

> 



### ICopy

* 收费情况：免费
* 软件大小：21 MB
* 下载地址：APP Store 上即可下载

![image-20230502215947144](https://img-blog.csdnimg.cn/b58499972be2486092eddbd11d5c200c.png)





## 键盘按键重映射

### Karabiner-Elements





## 下载软件

### Neat DownloadManager（ndm）

[ndm 官网](http://www.neatdownloadmanager.com)



### Motrix

[Github 主页]()







## 数据库管理工具

### Navicat







## PDF 阅读工具

### SKim

> 软件介绍：
>
> ​	这是一个免费开源的 PDF 阅读器

* 收费情况：免费
* 软件大小：14 MB
* 下载地址：[Skim 官网](https://skim-app.sourceforge.io)









## QT





## SSH 远程连接工具

### Tabby

[Tabby Github 地址](https://github.com/Eugeny/tabby)







# brew

简介
Homebrew 是 mac 系统下一款自由及开放源代码的软件包管理系统，用以简化 macOS 系统上的软件安装过程。

Homebrew 主要有四个部分组成:

1. brew
2. homebrew-core
3. homebrew-bottles
4. homebrew-cask



安装

~~~shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
~~~



* 查看 brew.git 当前源

  ~~~shell
  cd "$(brew --repo)" && git remote -v
  ~~~

* 查看 homebrew-core.git 当前源

  ~~~shell
  cd "$(brew --repo homebrew/core)" && git remote -v
  ~~~

  



如果用的是 GitHub 安装的，需要更换源

* 修改 brew.git 为阿里源

  ~~~shell
  cd "$(brew --repo)" && git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git
  ~~~

* 修改 homebrew-core.git 为阿里源

  ~~~shell
  git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git
  ~~~

  若提示没有路径：

  ~~~shell
  sudo mkdir -p "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
  ~~~

* zsh 替换 brew bintray 镜像

  ~~~shell
  echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
  ~~~

  ~~~shell
  source ~/.zshrc
  ~~~

  

* 刷新源

  ~~~shell
  brew update
  ~~~

  





## brew 常用命令

* 查看brew版本

  ~~~shell
  brew -v
  ~~~

  

* 本地软件库列表

  ~~~shell
  brew list
  ~~~

  

* 更新brew版本：

  ~~~shell
  brew update
  ~~~

  

* 查看软件库版本

  ~~~shell
  brew list --versions
  ~~~

  

* 查找软件包

  ~~~shell
  brew search xxx （xxx为要查找软件的关键词）
  ~~~

  

* 安装软件包

  ~~~shell
  brew install xxx （xxx为软件包名称）
  ~~~

  

* 卸载软件包

  ~~~shell
  brew uninstall xxx
  ~~~

  

* 安装软件

  ~~~shell
  brew cask install xxx（xxx为软件名称）
  ~~~

  

* 卸载软件

  ~~~shell
  brew cask uninstall xxx
  ~~~

  

* 查找软件安装位置

  ~~~shell
  which xxx （xxx为软件名称）
  ~~~

  





# 使用 brew 安装包





## 安装 MySQL



1. 查找有哪些版本

   ```shell
   brew search mysql
   ```

   

2. 最新版

   ```shell
   brew install 
   ```

3. 指定版本，比如 5.7

   ```shell
   brew install mysql@5.7
   ```

4. MySQL 启动密码

   ~~~shell
   ~~~

5. 启动 MySQL

   ~~~shell
   brew services start mysql
   ~~~

   如果指定了安装版本，比如安装的是 5.7，则用：

   ~~~shell
   brew services start mysql@5.7
   ~~~

   







## 安装 Redis

1. 查找有哪些版本

   ~~~shell
   brew search redis
   ~~~

   

2. 最新版

   ~~~shell
   brew install redis
   ~~~

3. 指定版本，比如

   ```shell
   
   ```

   







## 安装 MongoDB 社区版

1. 添加

   ~~~shell
   brew tap mongodb/brew
   ~~~

2. 更新

   ~~~shell
   brew update
   ~~~

   

3. 查找有哪些版本

   ~~~shell
   brew search mongodb-community
   ~~~

   

4. 最新版

   ~~~shell
   brew install mongodb-community
   ~~~

5. 指定版本，比如 5.0

   ```shell
   brew install mongodb-community@5.0
   ```

6. 启动

   ~~~shell
   brew services start mongodb-community
   ~~~

   ![image-20230430170828999](https://img-blog.csdnimg.cn/8b26694640834c019340dd7ab91d896d.png)

   

   指定配置文件

   ~~~shell
   brew services start mongodb-community --config /usr/local/etc/mongod.conf
   ~~~

   

7. 停止

   ~~~shell
   brew services stop mongodb-community
   ~~~

8. 验证

   ~~~shell
   mongosh
   ~~~

   ![image-20230430170948407](https://img-blog.csdnimg.cn/39cb4c49a40344d2a236448fd6822349.png)







## 安装 nodejs

1. 查找有哪些版本

   ```shell
   brew search node
   ```

   

2. 最新版

   ```shell
   brew install node
   ```

3. 指定版本，比如 12

   ```shell
   brew install node@12
   ```

4. 安装完成

   ![image-20230430162434865](https://img-blog.csdnimg.cn/844ab1eceed0465e95e7f11a6816d63e.png)

5. 可验证一下

   ~~~shell
   node -v
   ~~~

   ~~~shell
   npm -v
   ~~~

   ![image-20230430162521524](https://img-blog.csdnimg.cn/42b1ff73a8674676856446602ec0dd04.png)



### 更换 npm 源为淘宝源

~~~shell
npm config set registry https://registry.npm.taobao.org
~~~

查看是否成功

~~~shell
npm config get registry
~~~

![image-20230430162715770](https://img-blog.csdnimg.cn/b79053c4e53f4699832705b263a5a479.png)







# Safari 插件

## AdBlocker





## LastPass





## Tampermonkey





# 字体

## Cascadia Code

[Github 主页](https://github.com/microsoft/cascadia-code)







# Mac 快捷键介绍