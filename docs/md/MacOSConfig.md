

## 一. MacOS 配置

:::tip

* 本网站提供的软件除免费版以外, 收费版均为破解, 其中破解流程都是一样的。
* 安装破解软件，需要关闭系统完整性保护机制，下面有教程

:::





### 1. 软件破解流程

#### 允许安装任何来源

在终端中输入命令：

~~~shell
sudo spctl --master-disable
~~~

勾选 《任何来源》

![7875bf5c54b5aa159d6cf7d436ec5b05.png](https://p1.xywm.ltd/2023/10/09/7875bf5c54b5aa159d6cf7d436ec5b05.png)

<br/>

#### 关闭系统完整性保护机制

:::info 系统完整性保护机制

简称 SIP（System Integrity Protection），目的是帮助普通用户避免恶意 app 通过用户授权的方式获得所有系统权限。通过 SIP，苹果实现了对第三方软件的限制，有一些操作永远不被允许，恶意软件无法通过用户授权的方式从而获得所有系统权限了。

但同时也影响到了一些我们安装破解软件，所以需要关掉它。

:::

<br/>

##### 检查是否启用了SIP系统完整性保护

* 方法一：

    ![image-20230507200753248](https://img-blog.csdnimg.cn/0e4b8a646517484fb386990560755503.png)

    <br/>

* 方法二：

    打开终端，输入以下命令

    ~~~shell
    csrutil status
    ~~~

    * 如果显示 enabled 说明是开启

    * 如果显示 disabled 说明是关闭。由于我的是黑苹果，所以显示 unknown 就是关闭状态

    ![image-20230507201024517](https://img-blog.csdnimg.cn/1ab6f6dfa60e4b2a858ee5bec79d30ed.png)

<br/>

#### 关闭 SIP 保护机制的方法

1. 重启，当黑屏后，按住 <kbd>Command</kbd>+<kbd>R</kbd>，稍待片刻，电脑会进入到恢复模式。

2. 选择实用工具中的终端

    <img src="https://img-blog.csdnimg.cn/6368699384f2442fb985fda81b6bb29d.png" style="zoom:67%;" />

3. 在终端中输入下面一行命令，然后按回车

    ~~~shell
    csrutil disable
    ~~~

    接着应该会显示一串英文显示说关闭成功

4. 最后重启即可，再通过前面的方法检查是否成功关闭

<br/>

#### 破解软件的安装

1. 双击打开安装包，再双击 Manual install 文件夹里面的 .dmg 文件安装即可。

   ![image-20230522192836152](https://img-blog.csdnimg.cn/00d7934bc7474f2db094d79bb5a914d4.png)

   <br/>

   注：如果出现损坏或者什么原因导致打不开软件，则双击打开 `Open Gatekeeper friendly`文件，一路按回车即可。

   ![image-20230522193309561](https://img-blog.csdnimg.cn/3cc14684cdb145e1ad5ab4584c154bb7.png)



<br/>

## 二. 系统设置

### 1. Finder 访达显示隐藏文件

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

  ![image-20230504091858377](https://img-blog.csdnimg.cn/88cc746ee1f44ee3a55e33de106deb5b.png)

如果要再次设置隐藏, 把 `TRUE` 改成 `FALSE` 即可

~~~shell
defaults write com.apple.finder AppleShowAllFiles FALSE
~~~

~~~shell
killall Finder
~~~

<br/>



### 后台项目已添加

![image-20240309085357664](/Users/xxl/Library/Application Support/typora-user-images/image-20240309085357664.png)

~~~shell
sfltool resetbtm
~~~





<br/>

## 三. 软件部分

### 1. 聊天社交

#### <img src="https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png" alt="img" style="zoom:15%;" />微信

* 下载地址（官网）：https://weixin.qq.com/

<br/>



#### <img src="https://t10.baidu.com/it/u=2364017865,3817073223&fm=179&app=42&f=JPEG?w=75&h=75&s=033468226CF857B16834F5BC0200C023" alt="img" style="zoom:50%;" />QQ

* 下载地址（官网）：https://im.qq.com/macqq/index.shtml

<br/>



#### <img src="https://t12.baidu.com/it/u=2122110178,729847657&fm=179&app=42&f=JPEG?w=75&h=75&s=C0F78D728F7653800B723149020050B0" alt="img" style="zoom:50%;" />企业微信

* 下载地址（官网）：https://work.weixin.qq.com/#indexDownload

<br/>



#### Discord

* 下载地址（官网）：https://discord.com/download

<br/>



#### Telegram

* 下载地址（官网）：https://telegram.org/

<br/>





### 2. 输入法

#### 百度输入法

* 下载地址（官网）：https://srf.baidu.com/input/mac.html

<br/>



#### 搜狗输入法

* 下载地址（官网）：https://shurufa.sogou.com/

<br/>



### 3. 网盘客户端

#### <img src="https://nd-static.bdstatic.com/m-static/wp-brand/img/wp-logo.44fb5c60.png" alt="img" style="zoom:33%;" />百度云盘

* 下载地址（官网）：https://pan.baidu.com/download#pan
<br/>



#### <img src="https://img.alicdn.com/imgextra/i3/O1CN01qcJZEf1VXF0KBzyNb_!!6000000002662-2-tps-384-92.png" alt="img" style="zoom:40%;" />阿里云盘
* 下载地址（官网）：https://www.alipan.com/
<br/>



#### 阿里云盘-小白羊

* 收费情况：免费开源
* Github 主页：https://github.com/gaozhangmin/aliyunpan
* 软件大小：97.2 MB
* 下载地址：
* 提取码：

<br/>



### 4. 笔记软件

#### Typora

* 版本：1.7.6
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-3f3Wh.html
* 提取码：tutu

<br/>



#### Obsidion

<br/>



### 5. Adobe

#### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/acrobat-reader.svg" style="height:30px;" /> Adobe Acrobat

* 版本：2023
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-RfvWh.html
* 提取码：tutu

<br/>



#### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/audition.svg" style="height:30px;" /> Adobe Audition( Au )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>



#### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/after-effects.svg" style="height:30px;" /> Adobe After Effects( Ae )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>



#### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/character-animator.svg" style="height:30px;" /> Adobe Character Animator( Ch )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>



#### <img src="https://www.adobe.com/content/dam/cc1/en/genuine/images/AFC/LR_icon.svg" style="height:30px;" /> Adobe LightRoom( Lr )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>



#### <img src="https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/pr_appicon.svg" style="height:30px;" />Adobe premiere Pro( Pr )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>



#### <img src="https://www.adobe.com/content/dam/cc/icons/illustrator.svg" style="height:30px;" /> Adobe Illustrator( Ai )

* 版本：2023
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-wLysh.html
* 提取码：eY3v

<br/>



#### <img src="https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg" style="height:30px;" /> Adobe Photoshop( Ps )

* 版本：2023
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-2fvWh.html
* 提取码：tutu

<br/>



### 6. Jetbrains

1. 下载破解文件：https://3.jetbra.in/

    ![image-20231227211729551](https://img-blog.csdnimg.cn/direct/01f8b2566f894db2bd96c1ce4a43f3a5.png)

2. 解压后放到固定的文件夹 (以后不要移动)

3. 用终端执行 `jetbra/scripts/install.sh` 脚本, 如:

    ~~~shell
    sudo /Users/xxl/jetbra/scripts/install.sh
    ~~~

4. 搞定。

    如果后面有弹窗提示要激活，则再执行一次脚本，若还不行则手动把对应的 .vmoptions 文件复制到对应 IDE 安装目录的 bin 文件夹:

    ![image-20231227212316858](https://img-blog.csdnimg.cn/direct/9a8decdab21e4f91861ab0a0f9debad0.png)

    ![image-20231227212526039](https://img-blog.csdnimg.cn/direct/a5295cb5f1fe4151ab4277854008a35c.png)

<br/>



####  <img src="https://img-blog.csdnimg.cn/34b1bbafd5a74779bd0a5e12c7b09fe7.png" alt="Clion" style="zoom:30%;" /> CLion

* 版本：专业版
* 下载地址（官网）：https://www.jetbrains.com/clion/download/#section=mac

<br/>



####  DataGrip

* 版本：专业版
* 下载地址（官网）：https://www.jetbrains.com/datagrip/download/#section=mac

<br/>



####  IntelliJ IDEA

* 版本：专业版
* 下载地址（官网）：https://www.jetbrains.com/idea/download/#section=mac

<br/>



####  <img src="https://img-blog.csdnimg.cn/e9dd401fae51435d81d0ed947e29945d.png" alt="Pycharm" style="zoom:30%;" /> PyCharm

* 版本：专业版
* 下载地址（官网）：https://www.jetbrains.com/pycharm/download/#section=mac

<br/>



####  <img src="https://img-blog.csdnimg.cn/278045f737854d4db126114a5d8a47c2.png" alt="Webstorm" style="zoom:30%;" /> WebStorm

* 版本：专业版
* 下载地址（官网）：https://www.jetbrains.com/webstorm/download/#section=mac

<br/>





### 7. 像 Windows一样 Alt+Tab 切换窗口

#### <img src="https://d33wubrfki0l68.cloudfront.net/a006a16dc9b4af9d985b410d7813d2bffe4d51d1/96112/public/android-chrome-256x256.png" alt="img" style="zoom:13%;" /> AltTab

::: note 软件介绍
Windows 按 <kbd>Alt</kbd>+<kbd>Tab</kbd> 可快速切换窗口，而且这个切换是可以预览的，相比于 Mac 的 <kbd>Command</kbd>+<kbd>Tab</kbd>，不知道好到哪里去。而 AltTab 这个软件正如其名，可以实现 Windows 那样的效果，效果如图：
:::

<img src="https://img-blog.csdnimg.cn/aeb91498e48e4735823d095b1fa045ae.png" alt="image-20230507152147787" style="zoom:77%;" />

* 收费情况：免费开源
* Github 主页：https://github.com/lwouis/alt-tab-macos
* 软件大小：9 MB
* 下载地址（官网）：https://alt-tab-macos.netlify.app

<br/>



### 8. 快速启动

#### <img src="https://avatars.githubusercontent.com/u/58117316?s=200&v=4" alt="img" style="zoom:20%;" />Raycast

* 收费情况：免费
* 软件大小：50.3 MB
* 下载地址（官网）：https://www.raycast.com

<br/>

#### utools





<br/>

#### Afred



<br/>

### 9. 点云常用软件

#### <img src="https://cloudcompare.org/images/cc_logo_v2_small.jpg" alt="img" style="zoom:30%;" /> CloudCompare

* 收费情况：免费开源
* Github 主页：https://github.com/CloudCompare/CloudCompare
* 软件大小：9 MB
* 下载地址（官网）：https://cloudcompare.org/

<br/>



#### <img src="https://www.meshlab.net/img/meshlabjsLogo.png" alt="img" style="zoom:20%;" /> Meshlab

* 收费情况：免费开源
* Github 主页：https://github.com/cnr-isti-vclab/meshlab
* 软件大小：9 MB
* 下载地址（官网）：https://www.meshlab.net/#download

<br/>



### 10. 截图软件

#### <img src="https://zh.snipaste.com/img/logo.svg" style="zoom: 5%;" /> Snipaste

:::info 软件介绍

功能比 iShot 少，仅支持截图和贴图

:::

* 收费情况：免费
* 软件大小：33.1 MB
* 下载地址（官网）：https://zh.snipaste.com/

<br/>



#### <img src="https://shottr.cc/assets/logo.png" style="zoom:30%;" />shottr

:::info 软件介绍

它又不只是一款截图软件，还支持滚动截长图、取色、量像素、OCR 等很多付费工具才提供的功能，并且完全免费，功能强大。

:::

* 收费情况：免费
* 软件大小：1.7 MB
* 下载地址（官网）：https://shottr.cc/



<br/>

#### <img src="https://bkimg.cdn.bcebos.com/pic/0ff41bd5ad6eddc451da4bfacd8fa1fd5266d016952f?x-bce-process=image/resize,m_lfit,w_536,limit_1" alt="iShot" style="zoom:15%;" /> iShot

:::info 软件介绍

支持长截图、截图带阴影、带壳截图、贴图、序号标注、录制

:::

* 收费情况：收费
* 软件大小：64.3 MB
* 下载地址（暂无破解版）：APP Store



<br/>

### 11. 视频播放器

#### <img src="https://iina.io/images/iina-icon-60.png" alt="iina-icon-60.png (60×60)" style="zoom:67%;" /> IINA

:::info 软件介绍

视频播放器

:::

* 收费情况：免费开源
* 软件大小：75.2 MB
* 下载地址（官网）：https://iina.io

<br/>



### 12 录屏软件

#### <img src="https://obsproject.com/assets/images/new_icon_small-r.png" alt="img" style="zoom:15%;" />obs

* 收费情况：免费开源
* 下载地址（官网）：https://www.obsproject.com

插件主题下载：https://www.obs.pub/

<br/>





<br/>

### 13. 全局鼠标手势软件

#### <img src="https://raw.githubusercontent.com/mtjo/MacStroke/release/logo.png" alt="img" style="zoom:37%;" /> MacStroke

:::info 软件介绍

鼠标手势

:::

* 收费情况：免费开源
* Github 主页：https://github.com/mtjo/MacStroke
* 软件大小：9 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-PDysh.html
* 提取码：JJXC

<br/>





### 14. DropOver

<br/>





### 15. 开发者工具

#### DevToysMac

:::info 软件介绍

为开发者提供了多种实用工具，包括转换、编码解码、格式化、生成器、校验和检查等功能。

![](https://user-images.githubusercontent.com/20896810/154781951-f4c6fa80-2fcc-40fe-a94b-fccfc0f2ccf1.png)

:::

* 收费情况：免费开源
* Github 主页：https://github.com/mtjo/MacStroke
* 软件大小：40 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-PDysh.html
* 提取码：tutu

也可以通过 Homebrew 安装：

~~~shell
brew install --cask devtoys
~~~

<br/>



### 16. 虚拟音频

#### BlackHole

:::info 软件介绍

BlackHole 是一种现代 macOS 虚拟音频环回驱动程序，允许应用程序以零额外延迟将音频传递到其他应用程序。

:::

* 
* 收费情况：免费开源
* Github 主页：https://github.com/ObuchiYuki/DevToysMac
* 软件大小：
* 版本：
* 下载地址（123盘）：https://www.123pan.com/s/KYxeVv-0m3Wh.html
* 提取码：tutu



<br/>



### 17. 电脑音频推送到手机

#### SoundWire

:::info 软件介绍

电脑音频推送到手机

:::

* 收费情况：免费
* 软件大小：9 MB
* 目前没有 Mac 端



<br/>

#### AudioRelay

:::info 软件介绍

电脑音频推送到手机

:::

* 软件大小：

* 下载地址（官网）：https://audiorelay.net/downloads




<br/>

### 18. BetterAndBetter

:::info

一款集合众多优秀功能的Mac手势神器，为触控板、鼠标赋予上百种动作手势，滑动、轻点、点按多种组合，可以帮助用户自定义的设置mac触控板所支持的手势操作，并且还支持单个应用的手势操作。BetterAndBetter全面加强鼠标操作，支持滚轮（中键）、右键等最多8键位鼠标的按键绘图、组合按键。

:::

https://wwa.lanzoui.com/macBAB



<br/>

### 19. Mounty

:::info

Mounty是Mac OS平台上的一款NTFS格式读写工具，软件虽小但是功能挺实用的，其主要功能类似Paragon NTFS for mac。当你插入 NTFS 硬盘后会提示是否创新加载成读写模式。大多数情况下 Mac OS X 是默认没有开启 NTFS 的写入模式。所以这样你就不在需要安装其它软件就可以对 Windows 的 NTFS 硬盘进行复制文件操作。

:::

https://wwa.lanzoui.com/Mounty

<br/>



### 20. 超级右键

* 收费情况：收费
* 软件大小：381.7 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-bjVsh.html
* 提取码：61T6



<br/>



### 21. CrossOver

:::info

使用 *CrossOver* 在 Mac 和 Linux 运行您的 Windows 软件，从此摆脱双启动的繁琐和虚拟机的卡顿。

:::

* 收费情况：收费
* 软件大小：10.5 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-pAVsh.html
* 提取码：3Ld8

<br/>



### 22. 鼠标平滑滚动

#### <img src="https://mousefix.org/resources/app_icon_round.png" alt="app_icon_round.png (1024×1024) (mousefix.org)" style="zoom:5%;" /> Mac Mouse Fix

:::info 软件介绍

让鼠标的滚动更加滑溜

:::

* 收费情况：免费开源
* Github 主页：https://github.com/noah-nuebling/mac-mouse-fix
* 软件大小：6 MB
* 版本：
* 下载地址（官网）：https://mousefix.org/

<br/><br/>



### 23. 隐藏鼠标

#### Mouse Hider for Mac

* 收费情况：收费
* 软件大小：555.1 KB
* 下载地址（破解版）：



<br/>

#### Cursorcerer

~~~shell
brew install --cask cursorcerer
~~~





<br/><br/>

### 24. 电脑运行状态显示

#### <img src="https://bjango.com/images/mac/istatmenus6/icon-istatmenus6.png" alt="img" style="zoom:15%;" /> iStat Menus

:::info 软件介绍

推荐这个，状态栏能显示彩色图标和文字

:::

![image-20230507203437792](https://img-blog.csdnimg.cn/45396d7374334ad1bc16f088ad3bc115.png)

* 收费情况：收费
* 软件大小：27.5 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-tDysh.html
* 提取码：RSTK

<br/>





#### <img src="https://github.com/exelban/stats/raw/master/Stats/Supporting%20Files/Assets.xcassets/AppIcon.appiconset/icon_256x256.png" alt="img" style="zoom:20%;" /> Stats For Mac

:::info 软件介绍

我不喜欢用

:::

* 收费情况：免费开源
* Github 主页：https://github.com/exelban/stats
* 软件大小：11.2 MB
* 版本：
* 下载地址：https://www.123pan.com/s/KYxeVv-eDysh.html
* 提取码：2Bam

<br/>





#### <img src="https://user-images.githubusercontent.com/14722250/93017676-1a009c00-f5fd-11ea-9b8e-c69c2cd4fa89.png" style="zoom:40%;" /> eul

![image-20230507203937663](https://img-blog.csdnimg.cn/723cb69dbdae40b9b91ca37325beb0ad.png)

* 收费情况：免费开源
* GitHub 主页：https://github.com/gao-sun/eul
* 软件大小：1.3 MB
* 下载地址：APP Store

<br/>



####  <img src="https://img.macoshome.com/2022/12/iStatisticas-150x150.png" alt="iStatistica Pro 5.0 状态栏系统信息监控软件" style="zoom:30%;" /> iStatistica Pro

* 收费情况：收费
* 软件大小：17.2 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-zDysh.html
* 提取码：eki2

<br/>





### 25. 卸载软件

#### App Cleaner & Uninstaller





<br/>

#### APP Clearner





<br/>

### 26. 清理软件

#### <img src="https://pc1.gtimg.com/guanjia/images/b3/1c/b31c43975f3335e21138fc6556f15e8d.png" alt="img" style="zoom:60%;" /> Tencent-Lemon

:::info 软件介绍

腾讯柠檬清理是针对 macOS 系统专属制定的清理工具。主要功能包括重复文件和相似照片的识别、软件的定制化垃圾扫描、可视化的全盘空间分析、内存释放、浏览器隐私清理以及设备实时状态的监控等。重点聚焦清理功能，对上百款软件提供定制化的清理方案，提供专业的清理建议，帮助用户轻松完成一键式清理。

:::

![image-20230507204408029](https://img-blog.csdnimg.cn/3cc40f423ca34f008e6cd7af81e7a92a.png)

* 收费情况：免费开源
* GitHub 主页：https://github.com/Tencent/lemon-cleaner
* 管网：https://lemon.qq.com/
* 软件大小：33.7 MB
* 下载地址（APP Store）：[点击跳转至 APP Store](https://apps.apple.com/cn/app/%E8%85%BE%E8%AE%AF%E6%9F%A0%E6%AA%AC%E6%B8%85%E7%90%86-lemon-cleaner/id1449962996?mt=12)

<br/>





### 27. 状态栏隐藏图标

#### iBar

:::info 软件介绍

像 Windows 右下角的隐藏一样，把不常用的拖进去隐藏

:::

* 收费情况：免费
* 软件大小： MB
* 下载地址（APP Store）：[点击跳转至 APP Store](https://apps.apple.com/cn/app/ibar-%E5%BC%BA%E5%A4%A7%E7%9A%84%E8%8F%9C%E5%8D%95%E6%A0%8F%E5%9B%BE%E6%A0%87%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/id6443843900?mt=12)





<br/>

#### <img src="https://pic1.zhimg.com/v2-7ebf4e968b195fd01e648e9480bea7f9_720w.jpg?source=172ae18b" alt="mac隐藏菜单栏图标工具：Hidden Bar" style="zoom:8%;" /> Hidden bar

:::info 软件介绍

像 Windows 右下角的隐藏一样，把不常用的拖进去隐藏

:::

![image-20230507204752807](https://img-blog.csdnimg.cn/63fb702c64a141b9b701f7d18d28852d.png)

* 收费情况：免费开源
* GitHub 主页：https://github.com/dwarvesf/hidden
* 软件大小：7.4 MB
* 下载地址：APP Store

<br/>



### 28. 数据恢复软件

#### Disk Drill

* 收费情况：收费
* 软件大小：66.2 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-gHVsh.html
* 提取码：ep8R

<br/>





### 29. 剪贴板管理

#### <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/72/94/79/7294791c-064c-03cb-585e-0e094032886d/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/230x0w.webp" alt="img" style="zoom:20%;" /> Pastebot

:::info 软件介绍

推荐，比较好用的剪贴板管理工具

:::

* 收费情况：收费
* 软件大小：11 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-LDysh.html
* 提取码：vaDb

<br/>





#### <img src="https://bkimg.cdn.bcebos.com/pic/cefc1e178a82b9014a902ba27ed8be773912b31b415e?x-bce-process=image/resize,m_lfit,w_536,limit_1" alt="iCopy" style="zoom:10%;" /> ICopy

:::info 软件介绍

像 Windows 右下角的隐藏一样，把不常用的拖进去隐藏

:::

![image-20230502215947144](https://img-blog.csdnimg.cn/b58499972be2486092eddbd11d5c200c.png)

* 收费情况：免费
* 软件大小：21 MB
* 下载地址：APP Store

<br/>





### 30. 解压缩软件

#### <img src="https://i1.hdslb.com/bfs/archive/f841124e306e9cebf9afc6a1ed6547c34d1802e8.png" alt="img" style="zoom:5%;" />Bandizip

* 软件大小：34.6 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-WfvWh.html
* 提取码：tutu





<br/>

### 31. 键盘按键重映射

#### <img src="https://karabiner-elements.pqrs.org/favicons/apple-touch-icon-180x180.png" alt="img" style="zoom:25%;" /> Karabiner-Elements



<br/>



### 32. 思维导图

#### <img src="https://xmind.cn/webapp-icon/icon_72.png" alt="img" style="zoom:50%;" /> XMind

* 收费情况：收费
* 软件大小：220.1 MB
* 版本：
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-v1Vsh.html
* 提取码：y2Ou

<br/>



### 33. 下载软件

#### <img src="https://s.motrix.app/images/app-icon-square.png" alt="img" style="zoom:20%;" /> Motrix

Github 主页：https://github.com/agalwood/Motrix

<br/>





#### <img src="https://img.wmzhe.top/uploadimg/mac/cb/cb8a/cb8a8adb9f3e0f2de8563929e924ccf9.png" alt="img" style="zoom:80%;" /> Neat DownloadManager（ndm)

ndm 官网：http://www.neatdownloadmanager.com

<br/>





### 34. 科学上网

全平台翻墙客户端

https://binghe.gitbook.io/fq/

<br/>



#### <img src="https://raw.githubusercontent.com/Dreamacro/clash/master/docs/logo.png" alt="img" style="zoom:10%;" />clashX

* 收费情况：免费开源
* GitHub 主页：https://github.com/yichengchen/clashX
* 软件大小：7.4 MB
* 下载地址（Github Release）：https://github.com/yichengchen/clashX/releases/tag/1.118.0
* 下载地址（123云盘）：https://www.123pan.com/s/KYxeVv-sfvWh.html
* 提取码：tutu

<br/>



#### Clash Verge



<br/>



#### V2rayU



<br/>



#### SingBox



<br/>



#### 机场

1. [飞鸟云](https://feiniaoyun.top/)
2. [林云](https://c.linyun.org/)
3. [快银](https://kuaiyin.info/)
4. [RabbitPro](https://rabbitpro.net/)
5. [双流]()
6. [一元机场](https://xn--4gq62f52gdss.com/#/register?code=CMt0vYXk)
7. [EFCloud](https://www.efcloud.bio/#/login)
8. [SScurl](https://sscurl.com/#/login)
9. [POCONET](https://poconet.club/#/login)
10. [KN Fast](https://knfast.com/#/landing)
11. [冲浪云](https://surfcloud.club/#/login)





### 35. 护眼软件

#### <img src="https://justgetflux.com/flux-icon-sm.png" alt="img" style="zoom: 67%;" /> f.lux

https://justgetflux.com

<br/>



### 36. Office 2021

* 软件大小：1.8 GB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-XfvWh.html
* 提取码：tutu



<br/>



### 37. 词典软件

#### <img src="https://www.mdict.cn/wp/wp-content/uploads/2016/06/logo.png" alt="MDict" style="zoom:80%;" /> Mditc

:::info 软件介绍



:::

* 收费情况：收费
* 软件大小：6.1 MB
* 下载地址（破解版）：

<br/>





#### 欧陆词典

* 收费情况：收费
* 软件大小： MB
* 下载地址（官网）：https://www.eudic.net/v4/en/app/download



<br/>



#### 网易有道词典



<br/>

### 38. PDF 阅读工具

#### <img src="https://skim-app.sourceforge.io/images/skimIcon.png" alt="Skim icon" style="zoom:40%;" /> SKim

:::info 软件介绍

这是一个免费开源的 PDF 阅读器

:::

* 收费情况：免费开源
* sourceforge 主页：https://sourceforge.net/projects/skim-app/
* 软件大小：14 MB
* 下载地址（官网）：https://skim-app.sourceforge.io

<br/>





### 39. PDF标记软件

#### <img src="https://xournalpp.github.io/img/favicon.ico" alt="logo" style="zoom:18%;" /> Xournal++

* 收费情况：免费开源
* github 主页：https://github.com/xournalpp/xournalpp
* 软件大小：25.7 MB
* 下载地址（官网）：https://xournalpp.github.io/installation/



<br/>



### 40. 数据库管理工具

#### <img src="https://www.navicat.com.cn/images/02.Product_00_AllProducts_MySQL.svg" style="zoom:33%;" /> Navicat

* 收费情况：收费
* 软件大小：123 MB
* 版本：
* 下载地址（破解版）：
* 提取码：tutu

<br/>



#### <img src="https://dbeaver.io/wp-content/uploads/2015/09/beaver-head.png" alt="img" style="zoom:40%;" />Dbeaver

* 收费情况：免费开源
* github 主页：https://github.com/dbeaver/dbeaver
* 软件大小：123 MB
* 下载地址（官网）：https://dbeaver.io/download/

<br/>



### 41. <img src="https://bkimg.cdn.bcebos.com/pic/77c6a7efce1b9d16b3b39b56ffdeb48f8c546494?x-bce-process=image/resize,m_lfit,w_536,limit_1" alt="Qt" style="zoom:12%;" /> QT

使用 brew 安装

官网下载：https://download.qt.io/archive/qt/

[Mac 上 Qt6 加速下载](https://blog.csdn.net/u012101384/article/details/128494854)

<br/>





### 42. SSH 远程连接工具

#### WindTerm

* 收费情况：免费开源
* github 主页：https://github.com/kingToolbox/WindTerm
* 软件大小：23.4 MB
* 下载地址（Github Release）：https://github.com/kingToolbox/WindTerm/releases

<br/>



#### <img src="https://static.oschina.net/uploads/logo/tabby_uMU2B.png" alt="img" style="zoom:40%;" /> Tabby

[Tabby Github 地址](https://github.com/Eugeny/tabby)





<br/>

### 43. 控制安卓手机

#### ![scrcpy](https://github.com/Genymobile/scrcpy/raw/master/app/data/icon.svg) scrcpy

[scrcpy](#安装 scrcpy)





<br/>

<br/>



### 44. 文件传输

#### Landrop



<br/>



#### 闪电滕







<br/>

### 45. 虚拟机

#### Parreles Desktop

* 收费情况：收费
* 软件大小：291.16 MB
* 版本：19.0.0
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-vcVsh.html
* 提取码：tutu



<br/>





#### VMware Fusion

* 收费情况：收费
* 软件大小：621 MB
* 版本：12.2.3
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-hf3Wh.html
* 提取码：tutu

激活 Key:

> ZF3R0-FHED2-M80TY-8QYGC-NPKYF
>
> YF390-0HF8P-M81RQ-2DXQE-M2UT6
>
> ZF71R-DMX85-08DQY-8YMNC-PPHV8



<br/>

<br/>





### 46. 黑萍果工具

#### OpenCore Configuration

* 版本：0.9.0

* 下载地址：https://www.123pan.com/s/KYxeVv-thVsh.html
* 提取码：gpDe

<br/>



#### Hackintool

* 版本：3.6.1

* 下载地址：https://www.123pan.com/s/KYxeVv-ihVsh.html
* 提取码：4yxc





<br/>

<br/>





### 47. 抓包软件

#### Charles



<br/>

#### Wireshark



<br/>

## 四. <img src="https://static.oschina.net/uploads/logo/homebrew_sTU9q.png" alt="img" style="zoom: 50%;" /> brew

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

  <br/>

### 1. brew 常用命令

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


<br/>

## 五. 使用 brew 安装第三方包

### 1. 安装 Miniconda

~~~shell
brew install cask miniconda
~~~

<br/>

### 2. 安装 MySQL



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

6. 其中，配置文件保存于：

   ~~~shell
   /usr/local/etc
   ~~~



若报错，则 把 `homebrew.mxcl.mysql@5.7.plist` 这个文件复制到 `/home/你的用户名/Library/LaunchAgents` 

~~~shell
sudo cp /usr/local/Cellar/mysql@5.7/5.7.42/homebrew.mxcl.mysql@5.7.plist /home/你的用户名/Library/LaunchAgents
~~~



再给予所有权限

~~~shell
sudo chmod 777 /home/你的用户名/Library/LaunchAgents/homebrew.mxcl.mysql@5.7.plist
~~~

<br/>

### 3. 安装 Redis

1. 查找有哪些版本

   ~~~shell
   brew search redis
   ~~~

2. 最新版

   ~~~shell
   brew install redis
   ~~~

3. 指定版本，比如 redis 6.2

   ```shell
   brew install redis@6.2
   ```

4. 其中，配置文件保存于：

   ~~~shell
   /usr/local/etc
   ~~~


<br/>

### 4. 安装 MongoDB 社区版

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

   <br/>

7. 停止

   ~~~shell
   brew services stop mongodb-community
   ~~~

8. 验证

   ~~~shell
   mongosh
   ~~~

   ![image-20230430170948407](https://img-blog.csdnimg.cn/39cb4c49a40344d2a236448fd6822349.png)

   

   <br/>

9. 其中，配置文件保存于：

   ~~~shell
   /usr/local/etc
   ~~~


<br/>

### 5. 安装 nodejs

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

<br/>

#### 更换 npm 源为淘宝源

~~~shell
npm config set registry https://registry.npm.taobao.org
~~~

查看是否成功

~~~shell
npm config get registry
~~~

![image-20230430162715770](https://img-blog.csdnimg.cn/b79053c4e53f4699832705b263a5a479.png)





#### npm 安装包

全局：

~~~shell
npm install -g xxxx
~~~

当前位置：

~~~shell
npm install -D xxxx
~~~

将 node 的 bin 目录添加到环境变量

我命令行用的是 zsh，所以修改`vim ~/.zshrc`，如果用的是 bash，则修改`~/.bashrc`

~~~shell
export PATH="/usr/local/Cellar/node/20.0.0/bin/":PATH
~~~

~~~shell
source ~/.zshrc
或
source ~/.bashrc
~~~

之后重启命令行。如果遇到权限问题，执行：

~~~shell
sudo chmod a+rwx /usr/local/Cellar/node/20.0.0/lib/node_modules/
~~~

~~~shell
sudo chmod a+rwx /usr/local/Cellar/node/20.0.0/bin
~~~





<br/>

### 6. 安装 docker

将 docker 安装到应用程序中：

![image-20230504141550051](https://img-blog.csdnimg.cn/4ab19cdc337f40cea04b989e7a9cf884.png)



~~~sh
brew install --cask --appdir=/Applications docker
~~~

<br/>

### 7. 安装 Golang

~~~sh
brew install golang
~~~

<br/>

### 8. 安装 scrcpy

> 使用的开源工具 scrcpy 同时支持有线和无线控制安卓设备

* 收费情况：开源免费

* 开源地址：[scrcpy Github 主页](https://github.com/Genymobile/scrcpy)

  

1. 安装

   ~~~shell
   brew install scrcpy
   ~~~

2. 安装 adb 并添加到环境变量

   ~~~shell
   brew install android-platform-tools
   ~~~

3. 运行

   ~~~shell
   scrcpy
   ~~~



其它参数：

1. 音频

   ~~~shell
   scrcpy --no-audio
   ~~~

2. 黑屏

   ~~~shell
   scrcpy --turn-screen-off
   ~~~

<br/>

### 9. 安装 Qt

1. 安装

   被安装在`/usr/local/Cellar/qt`目录。

   ~~~shell
   brew install qt
   ~~~

   

   被安装在`/usr/local/Caskroom/qt-creator`目录。

   ~~~shell
   brew install --cask qt-creator
   ~~~

2. 配置

   通过 brew 安装的 Qt 和 Qt Creator 是分开的，需要在 Qt Creator 中设置一下 Qt 的路径。

   ![img](https://upload-images.jianshu.io/upload_images/2918620-f78aec24f791331b.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

   路径选择：`/usr/local/Cellar/qt/6.0.2/bin/qmake`
   
   
   
   设定 Qt 版本
   
   ![image-20230521110131754](https://img-blog.csdnimg.cn/fdd062bb3c4b41709df9c28f18bd8e3f.png)



<br/>

<br/>

## 六. 终端配置

### 1. 终端使用代理

~~~shell
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
~~~



### 2. 安装 zsh

1. 查看系统是否装了 zsh

   * 查看当前使用的 shell

     ~~~shell
     echo $SHELL
     ~~~

     ![image-20230508104432828](https://img-blog.csdnimg.cn/cf9594d2a47b4f78bb4d14440dd970e8.png)

     <br/>

   * 查看系统是否装了 zsh

     ~~~shell
     cat /etc/shells
     ~~~

     ![image-20230508104352410](https://img-blog.csdnimg.cn/43702e3175ef4114aac58c0680c08eba.png)

     <br/>

2. 安装 zsh（系统没有查到zsh，则安装)

   ~~~shell
   sudo apt-get install -y zsh
   ~~~

3. 切换 shell 为 zsh

   ~~~shell
   chsh -s /bin/zsh
   ~~~

   ~~~shell
   sudo chsh -s /bin/zsh
   ~~~

4. 重启Linux

   ~~~shell
   sudo reboot
   ~~~

5. 开机后，zsh 会要求用户选择启动项。

   输入 0 即可

   ![image-20230508105152947](https://img-blog.csdnimg.cn/a1b61e46c4c54d9c9d68949ce8d4396c.png)

   <br/>

6. 查看当前 shell , 如果显示 /bin/zsh ，则配置成功

   ~~~shell
   sudo echo $SHELL
   ~~~

   ![image-20230508105257255](https://img-blog.csdnimg.cn/699aabea1277499ca39f97bfd20494b6.png)

   <br/>

7. 安装 oh my zsh

   ~~~shell
   sh -c "$(wget https://gitee.com/wzqxxl/ohmyzsh/releases/download/%E6%96%87%E4%BB%B6/install.sh -O -)"
   ~~~

8. 到此就安装完成

   <img src="https://img-blog.csdnimg.cn/4bf8e37608bd461d868614f214d4fc0d.png" alt="image-20230101101103549" style="zoom: 67%;" />

9. 更换主题

[主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#pygmalion)

~~~~shell
vim ~/.zshrc
~~~~

修改 `ZSH_THEME`参数即可。之后执行即可更换主题：gnzh

~~~shell
source ~/.zshrc
~~~

![image-20220426130630207](https://img-blog.csdnimg.cn/8e36d716a98947b58079f92732c4baf8.png)



<br/>

### 3. oh-my-zsh插件



#### 智能提示

~~~shell
git clone https://gitee.com/xs66/zsh-autosuggestions $ZSH/plugins/zsh-autosuggestions
~~~

<br/>

#### 语法高亮

~~~shell
git clone https://gitee.com/xs66/zsh-syntax-highlighting.git $ZSH/plugins/zsh-syntax-highlighting
~~~

<br/>

#### 载入配置

~~~shell 
vim ~/.zshrc
~~~

~~~shell
plugins=(
   git
   extract
   cp
   safe-paste
   colored-man-pages
   
   zsh-syntax-highlighting
   zsh-autosuggestions
 )
~~~

<br/>

#### 使配置生效

~~~shell
source ~/.zshrc
~~~

<br/><br/>

## 七. Vim

### 1. 配置 Vim

~~~shell
sudo vim ~/.vimrc
~~~

参考配置文件：

~~~shell
set number "设置行号
syntax on "高亮

colorscheme tender "设置主题---主题文件夹：/usr/share/vim/vim82/colors

set mouse=a "鼠标模式

set encoding=utf-8 "编码设置
set noswapfile
set laststatus=2 "总是显示状态行

set autoindent "自动缩进
set shiftwidth=4 "缩进长度是4

set softtabstop=-1 "Backspace键来一次删除4个空格

set showmatch "高亮显示匹配的括号

set hlsearch "高亮显示所有搜索到的内容

set incsearch "光标立刻跳转到搜索到内容

set noeb "去掉输入错误时的提示声音

set backspace=indent,eol,start "让Backspace键可以往前删除字符

set statusline=%F%r\ [HEX=%B][%l,%v,%P]\ %{strftime(\"%H:%M\")} "设置状态行显示的内容
" %F: 显示当前文件的完整路径.
" %r: 如果readonly,会显示[RO]
" %B: 显示光标下字符的编码值,十六进制.
" %l:光标所在的行号. %v:光标所在的虚拟列号.
" %P: 显示当前内容在整个文件中的百分比.
" %H和%M是strftime()函数的参数,获取时间.

" 快捷输入--自动完成括号和引号
inoremap ' ''<ESC>i
inoremap " ""<ESC>i
inoremap ( ()<ESC>i
inoremap [ []<ESC>i
inoremap { {}<ESC>i
~~~

<br/>

### 2. 更改主题

1. 下载主题

   注：将路径改为自己的，例如，你可能是 `/usr/share/vim/vim9`，也可能是 `/usr/share/vim/vim8`

   ~~~shell
   sudo  wget -O /usr/share/vim/vim81/colors/tender.vim https://gitee.com/wzqxxl/transit/attach_files/1114920/download/tender.vim
   ~~~

   * 注：MacOS下无法访问/usr/目录，则在根目录下文件夹 `~/.vim/colors`，将主题文件放在该目录下即可

   * -O 参数表示将下载内容保存到所指定的文件

   * 主题文件所在文件夹：`/usr/share/vim/vim82/colors`

   

2. 设置 `~/.vimrc` 配置主题

   ~~~shell
   sudo vim ~/.vimrc
   ~~~

   ~~~shell
   colorscheme tender "设置主题
   ~~~

   ![image-20230102111123266](https://img-blog.csdnimg.cn/9ff00e678df2407fad27c6d588dc0a63.png)



3. 更多主题

   [VIM 配色方案推荐](https://zhuanlan.zhihu.com/p/58188561)



<br/>

### 3. vim-plug 插件管理 安装

GitHub 主页：https://github.com/junegunn/vim-plug

插件市场：https://vimawesome.com/

1. 下载 `vim-plug`

   ~~~shell
   curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
       https://gitee.com/wzqxxl/transit/attach_files/1114918/download/plug.vim
   ~~~

2. 编辑 `.vimrc`

   ~~~shell
   vim ~/.vimrc
   ~~~

   一些插件

   ~~~shell
   
   ~~~


3. 安装插件：

   ~~~shell
   vim
   ~~~

   * 如果配置了代理，安装了 `proxychains` ，则可以用下面这条命令

     ~~~shell
     proxychains vim
     ~~~

   按 <kbd>Shift</kbd> + <kbd>:</kbd> 进入命令模式，输入

   ~~~shell
   PlugInstall
   ~~~

   ![image-20230102112243637](https://img-blog.csdnimg.cn/a0759729358947288d1c6ac003e75f5d.png)

   

   <font color="grey">【注】由于插件是去 GitHub 下载，而国内网络无法连接，故需要靠科学上网</font>



<br/>



<br/>

<br/>

## 八. Safari 插件

### 1. AdBlocker



<br/>

### 2. LastPass



<br/>

### 3. Tampermonkey



<br/>

<br/>

## 九. 字体

### 1. Cascadia Code

[Github 主页](https://github.com/microsoft/cascadia-code)





<br/>

<br/>

## 十. Mac 快捷键介绍



## 十一. 参考

https://www.sorrycc.com/posts/macbook-pro-configuration-from-zero





## 十二. 黑莱果

kext驱动更新插件：https://github.com/MacThings/kextupdater
