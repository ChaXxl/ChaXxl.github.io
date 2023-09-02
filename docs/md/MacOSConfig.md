# MacOS 配置

:::tip

* 本网站提供的软件除免费版以外, 收费版均为破解, 其中破解流程都是一样的。
* 安装破解软件，需要关闭系统完整性保护机制，下面有教程
* 软件大小指的是安装包的大小

:::



破解流程：

1. 双击打开安装包，再双击 Manual install 文件夹里面的 .dmg 文件安装即可。

   ![image-20230522192836152](https://img-blog.csdnimg.cn/00d7934bc7474f2db094d79bb5a914d4.png)

   <br/>

   注：如果出现损坏或者什么原因导致打不开软件，则双击打开 `Open Gatekeeper friendly`文件，一路按回车即可。

   ![image-20230522193309561](https://img-blog.csdnimg.cn/3cc14684cdb145e1ad5ab4584c154bb7.png)

<br/>

# 关闭系统完整性保护机制

:::info 系统完整性保护机制

简称 SIP（System Integrity Protection），目的是帮助普通用户避免恶意 app 通过用户授权的方式获得所有系统权限。通过 SIP，苹果实现了对第三方软件的限制，有一些操作永远不被允许，恶意软件无法通过用户授权的方式从而获得所有系统权限了。

但同时也影响到了一些我们安装破解软件，所以需要关掉它。

:::

<br/>

## 检查是否启用了SIP系统完整性保护

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

## 关闭 SIP 保护机制的方法

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

# 系统设置

## Finder 访达显示隐藏文件

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

<br/>

# 软件部分

## Adobe

### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/acrobat-reader.svg" style="height:40px;" /> Adobe Acrobat

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/audition.svg" style="height:50px;" /> Adobe Audition( Au )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/after-effects.svg" style="height:50px;" /> Adobe After Effects( Ae )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

### <img src="https://www.adobe.com/content/dam/shared/images/product-icons/svg/character-animator.svg" style="height:50px;" /> Adobe Character Animator( Ch )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

### <img src="https://www.adobe.com/content/dam/cc1/en/genuine/images/AFC/LR_icon.svg" style="height:50px;" /> Adobe LightRoom( Lr )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

### <img src="https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/pr_appicon.svg" style="height:50px;" />Adobe premiere Pro( Pr )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

### <img src="https://www.adobe.com/content/dam/cc/icons/illustrator.svg" style="height:50px;" /> Adobe Illustrator( Ai )

* 版本：2023
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-wLysh.html
* 提取码：eY3v

<br/>

### <img src="https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg" style="height:50px;" /> Adobe Photoshop( Ps )

* 版本：2023
* 下载地址（破解版）：
* 提取码：

<br/>

## Jetbrains

###  <img src="https://img-blog.csdnimg.cn/34b1bbafd5a74779bd0a5e12c7b09fe7.png" alt="Clion" style="zoom:30%;" /> CLion

* 版本：专业版 2023.1.2
* 下载地址（官网）：https://www.jetbrains.com/clion/download/#section=mac

<br/>

###  DataGrip

* 版本：专业版 2023.1.1
* 下载地址（官网）：https://www.jetbrains.com/datagrip/download/#section=mac

<br/>

###  IntelliJ IDEA

* 版本：专业版 2023.1.1
* 下载地址（官网）：https://www.jetbrains.com/idea/download/#section=mac

<br/>

###  <img src="https://img-blog.csdnimg.cn/e9dd401fae51435d81d0ed947e29945d.png" alt="Pycharm" style="zoom:30%;" /> PyCharm

* 版本：专业版 2023.1.1
* 下载地址（官网）：https://www.jetbrains.com/pycharm/download/#section=mac

<br/>

###  <img src="https://img-blog.csdnimg.cn/278045f737854d4db126114a5d8a47c2.png" alt="Webstorm" style="zoom:30%;" /> WebStorm

* 版本：专业版 2023.1.1
* 下载地址（官网）：https://www.jetbrains.com/webstorm/download/#section=mac

<br/>

## 像 Windows一样 Alt+Tab 切换窗口

### <img src="https://d33wubrfki0l68.cloudfront.net/a006a16dc9b4af9d985b410d7813d2bffe4d51d1/96112/public/android-chrome-256x256.png" alt="img" style="zoom:13%;" /> AltTab

::: note 软件介绍
Windows 按 <kbd>Alt</kbd>+<kbd>Tab</kbd> 可快速切换窗口，而且这个切换是可以预览的，相比于 Mac 的 <kbd>Command</kbd>+<kbd>Tab</kbd>，不知道好到哪里去。而 AltTab 这个软件正如其名，可以实现 Windows 那样的效果，效果如图：
:::

<img src="https://img-blog.csdnimg.cn/aeb91498e48e4735823d095b1fa045ae.png" alt="image-20230507152147787" style="zoom:77%;" />

* 收费情况：免费开源
* Github 主页：https://github.com/lwouis/alt-tab-macos
* 软件大小：9 MB
* 下载地址（官网）：https://alt-tab-macos.netlify.app

<br/>

## 快速启动

### Raycast

* 收费情况：免费
* 软件大小：50.3 MB
* 下载地址（官网）：https://www.raycast.com

<br/>

### utools





<br/>

### Afred



<br/>

## 点云常用软件

### <img src="https://cloudcompare.org/images/cc_logo_v2_small.jpg" alt="img" style="zoom:30%;" /> CloudCompare

* 收费情况：免费开源
* Github 主页：https://github.com/CloudCompare/CloudCompare
* 软件大小：9 MB
* 下载地址（官网）：https://cloudcompare.org/

<br/>

### <img src="https://www.meshlab.net/img/meshlabjsLogo.png" alt="img" style="zoom:20%;" /> Meshlab

* 收费情况：免费开源
* Github 主页：https://github.com/cnr-isti-vclab/meshlab
* 软件大小：9 MB
* 下载地址（官网）：https://www.meshlab.net/#download

<br/>

## 截图软件

### <img src="https://bkimg.cdn.bcebos.com/pic/0ff41bd5ad6eddc451da4bfacd8fa1fd5266d016952f?x-bce-process=image/resize,m_lfit,w_536,limit_1" alt="iShot" style="zoom:15%;" /> iShot

:::note 软件介绍

支持长截图、截图带阴影、带壳截图、贴图、序号标注、录制

:::

* 收费情况：收费
* 软件大小：64.3 MB
* 下载地址（暂无破解版）：APP Store

<br/>

### <img src="https://zh.snipaste.com/img/logo.svg" style="zoom: 5%;" /> Snipaste

:::note 软件介绍

功能比 iShot 少，仅支持截图和贴图

:::

* 收费情况：免费
* 软件大小：33.1 MB
* 下载地址（官网）：https://zh.snipaste.com/

<br/>

## 视频播放器

### <img src="https://iina.io/images/iina-icon-60.png" alt="iina-icon-60.png (60×60)" style="zoom:67%;" /> IINA

:::note 软件介绍

视频播放器

:::

* 收费情况：免费开源
* 软件大小：75.2 MB
* 下载地址（官网）：https://iina.io

<br/>

## 录屏软件

### obs



插件主题下载：https://www.obs.pub



<br/>





<br/>

## 全局鼠标手势软件

### <img src="https://raw.githubusercontent.com/mtjo/MacStroke/release/logo.png" alt="img" style="zoom:37%;" /> MacStroke

:::note 软件介绍

鼠标手势

:::

* 收费情况：免费开源
* Github 主页：https://github.com/mtjo/MacStroke
* 软件大小：9 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-PDysh.html
* 提取码：JJXC

<br/>

## DropOver

<br/>



## 电脑音频推送到手机

### SoundWire

:::note 软件介绍

电脑音频推送到手机

:::

* 收费情况：免费
* 软件大小：9 MB
* 目前没有 Mac 端



### AudioRelay

:::note 软件介绍

电脑音频推送到手机

:::

* 收费情况：免费

* Github 主页：https://github.com/mtjo/MacStroke

* 软件大小：

* 下载地址（管网）：https://audiorelay.net/downloads

  

## BetterAndBetter

:::info

一款集合众多优秀功能的Mac手势神器，为触控板、鼠标赋予上百种动作手势，滑动、轻点、点按多种组合，可以帮助用户自定义的设置mac触控板所支持的手势操作，并且还支持单个应用的手势操作。BetterAndBetter全面加强鼠标操作，支持滚轮（中键）、右键等最多8键位鼠标的按键绘图、组合按键。

:::

https://wwa.lanzoui.com/macBAB



## Mounty

:::info

Mounty是Mac OS平台上的一款NTFS格式读写工具，软件虽小但是功能挺实用的，其主要功能类似Paragon NTFS for mac。当你插入 NTFS 硬盘后会提示是否创新加载成读写模式。大多数情况下 Mac OS X 是默认没有开启 NTFS 的写入模式。所以这样你就不在需要安装其它软件就可以对 Windows 的 NTFS 硬盘进行复制文件操作。

:::

https://wwa.lanzoui.com/Mounty



## 超级右键

* 收费情况：收费
* 软件大小：381.7 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-bjVsh.html
* 提取码：61T6

## CrossOver

* 收费情况：收费
* 软件大小：10.5 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-pAVsh.html
* 提取码：3Ld8

<br/>

## 鼠标平滑滚动

### <img src="https://mousefix.org/resources/app_icon_round.png" alt="app_icon_round.png (1024×1024) (mousefix.org)" style="zoom:5%;" /> Mac Mouse Fix

:::note 软件介绍

让鼠标的滚动更加滑溜

:::

* 收费情况：免费开源
* Github 主页：https://github.com/noah-nuebling/mac-mouse-fix
* 软件大小：6 MB
* 下载地址（官网）：https://mousefix.org/

<br/><br/>



## 隐藏鼠标

### Mouse Hider for Mac

* 收费情况：收费
* 软件大小：555.1 KB
* 下载地址（破解版）：



<br/>

### Cursorcerer

~~~shell
brew install --cask cursorcerer
~~~





<br/><br/>

## 电脑运行状态显示

### <img src="https://bjango.com/images/mac/istatmenus6/icon-istatmenus6.png" alt="img" style="zoom:15%;" /> iStat Menus

:::note 软件介绍

推荐这个，状态栏能显示彩色图标和文字

:::

![image-20230507203437792](https://img-blog.csdnimg.cn/45396d7374334ad1bc16f088ad3bc115.png)

* 收费情况：收费
* 软件大小：27.5 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-tDysh.html
* 提取码：RSTK

<br/>

### <img src="https://github.com/exelban/stats/raw/master/Stats/Supporting%20Files/Assets.xcassets/AppIcon.appiconset/icon_256x256.png" alt="img" style="zoom:20%;" /> Stats For Mac

:::note 软件介绍

我不喜欢用

:::

* 收费情况：免费开源
* Github 主页：https://github.com/exelban/stats
* 软件大小：11.2 MB
* 下载地址：https://www.123pan.com/s/KYxeVv-eDysh.html
* 提取码：2Bam

<br/>

### <img src="https://user-images.githubusercontent.com/14722250/93017676-1a009c00-f5fd-11ea-9b8e-c69c2cd4fa89.png" style="zoom:40%;" /> eul

![image-20230507203937663](https://img-blog.csdnimg.cn/723cb69dbdae40b9b91ca37325beb0ad.png)

* 收费情况：免费开源
* GitHub 主页：https://github.com/gao-sun/eul
* 软件大小：1.3 MB
* 下载地址：APP Store

<br/>

###  <img src="https://img.macoshome.com/2022/12/iStatisticas-150x150.png" alt="iStatistica Pro 5.0 状态栏系统信息监控软件" style="zoom:30%;" /> iStatistica Pro

* 收费情况：收费
* 软件大小：17.2 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-zDysh.html
* 提取码：eki2

<br/>

## 卸载软件

### App Cleaner & Uninstaller





<br/>

### APP Clearner





<br/>

## 清理软件

### <img src="https://pc1.gtimg.com/guanjia/images/b3/1c/b31c43975f3335e21138fc6556f15e8d.png" alt="img" style="zoom:60%;" /> Tencent-Lemon

:::info 软件介绍

腾讯柠檬清理是针对 macOS 系统专属制定的清理工具。主要功能包括重复文件和相似照片的识别、软件的定制化垃圾扫描、可视化的全盘空间分析、内存释放、浏览器隐私清理以及设备实时状态的监控等。重点聚焦清理功能，对上百款软件提供定制化的清理方案，提供专业的清理建议，帮助用户轻松完成一键式清理。

:::

![image-20230507204408029](https://img-blog.csdnimg.cn/3cc40f423ca34f008e6cd7af81e7a92a.png)

* 收费情况：免费开源
* GitHub 主页：https://github.com/Tencent/lemon-cleaner
* 软件大小：33.7 MB
* 下载地址：APP Store

<br/>

## 状态栏隐藏图标

### <img src="https://pic1.zhimg.com/v2-7ebf4e968b195fd01e648e9480bea7f9_720w.jpg?source=172ae18b" alt="mac隐藏菜单栏图标工具：Hidden Bar" style="zoom:8%;" /> Hidden bar

:::info 软件介绍

像 Windows 右下角的隐藏一样，把不常用的拖进去隐藏

:::

![image-20230507204752807](https://img-blog.csdnimg.cn/63fb702c64a141b9b701f7d18d28852d.png)

* 收费情况：免费开源
* GitHub 主页：https://github.com/dwarvesf/hidden
* 软件大小：7.4 MB
* 下载地址：APP Store

<br/>

## 数据恢复软件

### Disk Drill

* 收费情况：收费
* 软件大小：66.2 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-gHVsh.html
* 提取码：ep8R

<br/>

## 剪贴板管理

### <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/72/94/79/7294791c-064c-03cb-585e-0e094032886d/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/230x0w.webp" alt="img" style="zoom:20%;" /> Pastebot

:::info 软件介绍

推荐，比较好用的剪贴板管理工具

:::

* 收费情况：收费
* 软件大小：11 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-LDysh.html
* 提取码：vaDb

<br/>

### <img src="https://bkimg.cdn.bcebos.com/pic/cefc1e178a82b9014a902ba27ed8be773912b31b415e?x-bce-process=image/resize,m_lfit,w_536,limit_1" alt="iCopy" style="zoom:10%;" /> ICopy

:::info 软件介绍

像 Windows 右下角的隐藏一样，把不常用的拖进去隐藏

:::

![image-20230502215947144](https://img-blog.csdnimg.cn/b58499972be2486092eddbd11d5c200c.png)

* 收费情况：免费
* 软件大小：21 MB
* 下载地址：APP Store

<br/>

## 键盘按键重映射

### <img src="https://karabiner-elements.pqrs.org/favicons/apple-touch-icon-180x180.png" alt="img" style="zoom:25%;" /> Karabiner-Elements



<br/>



## 思维导图

### <img src="https://xmind.cn/webapp-icon/icon_72.png" alt="img" style="zoom:50%;" /> XMind

* 收费情况：收费
* 软件大小：220.1 MB
* 下载地址（破解版）：https://www.123pan.com/s/KYxeVv-v1Vsh.html
* 提取码：y2Ou

## 下载软件

### <img src="https://s.motrix.app/images/app-icon-square.png" alt="img" style="zoom:20%;" /> Motrix

Github 主页：https://github.com/agalwood/Motrix

<br/>

### <img src="https://img.wmzhe.top/uploadimg/mac/cb/cb8a/cb8a8adb9f3e0f2de8563929e924ccf9.png" alt="img" style="zoom:80%;" /> Neat DownloadManager（ndm)

ndm 官网：http://www.neatdownloadmanager.com

<br/>

## 科学上网

全平台翻墙客户端

https://binghe.gitbook.io/fq/

<br/>

## 护眼软件

### <img src="https://justgetflux.com/flux-icon-sm.png" alt="img" style="zoom: 67%;" /> f.lux

https://justgetflux.com

<br/>

## 词典软件

### <img src="https://www.mdict.cn/wp/wp-content/uploads/2016/06/logo.png" alt="MDict" style="zoom:80%;" /> Mditc

:::info 软件介绍



:::

* 收费情况：收费
* 软件大小：6.1 MB
* 下载地址（破解版）：

<br/>

### 欧陆词典



<br/>

## PDF 阅读工具

### <img src="https://skim-app.sourceforge.io/images/skimIcon.png" alt="Skim icon" style="zoom:40%;" /> SKim

:::info 软件介绍

这是一个免费开源的 PDF 阅读器

:::

* 收费情况：免费开源
* sourceforge 主页：https://sourceforge.net/projects/skim-app/
* 软件大小：14 MB
* 下载地址（官网）：https://skim-app.sourceforge.io

<br/>





## PDF标记软件

### <img src="https://xournalpp.github.io/img/favicon.ico" alt="logo" style="zoom:18%;" /> Xournal++







## 数据库管理工具

### <img src="https://www.navicat.com.cn/images/02.Product_00_AllProducts_MySQL.svg" style="zoom:33%;" /> Navicat



<br/>

## <img src="https://bkimg.cdn.bcebos.com/pic/77c6a7efce1b9d16b3b39b56ffdeb48f8c546494?x-bce-process=image/resize,m_lfit,w_536,limit_1" alt="Qt" style="zoom:12%;" /> QT

使用 brew 安装

官网下载：https://download.qt.io/archive/qt/

[Mac 上 Qt6 加速下载](https://blog.csdn.net/u012101384/article/details/128494854)

<br/>

## SSH 远程连接工具

### <img src="https://static.oschina.net/uploads/logo/tabby_uMU2B.png" alt="img" style="zoom:40%;" /> Tabby

[Tabby Github 地址](https://github.com/Eugeny/tabby)





<br/>

## 控制安卓手机

### ![scrcpy](https://github.com/Genymobile/scrcpy/raw/master/app/data/icon.svg) scrcpy

[scrcpy](#安装 scrcpy)





<br/>

<br/>

## 文件传输

### Landrop

<br/>

<br/>

## 虚拟机

### Parreles Desktop

https://www.123pan.com/s/KYxeVv-vcVsh.html

tutu

<br/>

### VMware Fusion1



<br/>

<br/>

## 黑萍果工具

### OpenCore Configuration

* 版本：0.9.0

* 下载地址：https://www.123pan.com/s/KYxeVv-thVsh.html
* 提取码：gpDe

<br/>

### Hackintool

* 版本：3.6.1

* 下载地址：https://www.123pan.com/s/KYxeVv-ihVsh.html
* 提取码：4yxc





<br/>

<br/>

## 抓包软件

### Charles



<br/>

### Wireshark



<br/>

# <img src="https://static.oschina.net/uploads/logo/homebrew_sTU9q.png" alt="img" style="zoom: 50%;" /> brew

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


<br/>

# 使用 brew 安装第三方包

## 安装 Miniconda

~~~shell
brew install cask miniconda
~~~

<br/>

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

## 安装 Redis

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

<br/>

### 更换 npm 源为淘宝源

~~~shell
npm config set registry https://registry.npm.taobao.org
~~~

查看是否成功

~~~shell
npm config get registry
~~~

![image-20230430162715770](https://img-blog.csdnimg.cn/b79053c4e53f4699832705b263a5a479.png)





### npm 安装包

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

## 安装 docker

将 docker 安装到应用程序中：

![image-20230504141550051](https://img-blog.csdnimg.cn/4ab19cdc337f40cea04b989e7a9cf884.png)



~~~sh
brew install --cask --appdir=/Applications docker
~~~

<br/>

## 安装 Golang

~~~sh
brew install golang
~~~

<br/>

## 安装 scrcpy

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

## 安装 Qt

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

# 终端配置

终端使用代理

~~~shell
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
~~~



<br/>

<br/>

# Safari 插件

## AdBlocker



<br/>

## LastPass



<br/>

## Tampermonkey



<br/>

<br/>

# 字体

## Cascadia Code

[Github 主页](https://github.com/microsoft/cascadia-code)





<br/>

<br/>

# Mac 快捷键介绍



# 参考

https://www.sorrycc.com/posts/macbook-pro-configuration-from-zero
