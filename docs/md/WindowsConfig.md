# Windows 配置







<br/>

# 一、科学上网



## 机场

[RabbitPro](https://rabbitpro.net/auth/login)



[牧牛云](https://muniucloud.page/user)







[飞鸟云](https://feiniaoyun.tk/#/register)



<br/>

## 自建VPS

服务器：VLUT





<br/>

## 代理软件

[Clash](https://github.com/Dreamacro/clash/releases)



Clash.NET



SSR



洋葱浏览器



<br/><br/>

# 四、编程环境

## Python

conda 修改镜像源

`.condarc`

```shell
show_channel_urls: true
channel_alias: http://mirrors.tuna.tsinghua.edu.cn/anaconda
default_channels:
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
channels:
  - defaults
ssl_verify: true
```

```python
conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/win-64/
conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/win-64/
conda config --set show_channel_urls yes
```

在 PowerShell 中使用 conda：

```powershell
conda init powershell
```



避免PowerShell默认激活base环境

重新打开PowerShell默认是加载好了base环境的，如果不想一开始就加载可使用如下代码：

```
conda config --set auto_activate_base False
```

如果再想设置回来，则执行如下代码：

```
conda config --set auto_activate_base True
```



<br/>

### Python、pip多版本共存

[Python各版本最新版下载地址](https://www.python.org/downloads/)

![image-20220101115445813](https://s2.loli.net/2022/01/01/27uqj9gXhGYDmls.png)



下载Python3.10.1.exe

![image-20220101115506443](https://s2.loli.net/2022/01/01/M7oylNLrphJ6Zbx.png)



将Python.exe该名为Python3.10.exe

![图6.png](https://s2.loli.net/2022/01/01/EwaLZ2KSX6nY8v1.png)



配置pip，重新安装就行了

```shell
python3.10 -m pip install --upgrade pip --force-reinstall
```

![image-20220101115231183](https://s2.loli.net/2022/01/01/PXCIQd2Fg5ycBr8.png)



使用

```
pip3.10 install ***

pip3.10 list
```

![image-20220101115204041](https://s2.loli.net/2022/01/01/8QUpHLrOC7diTFm.png)

![image-20220101115314421](https://s2.loli.net/2022/01/01/G3qOTdhgsnuztc9.png)



更改源：

直接在user目录中创建一个pip目录，如：C:\Users\xx\pip，在pip 目录下新建文件pip.ini，内容如下

或者按照网友的建议：win+R 打开用户目录%HOMEPATH%，在此目录下创建 pip 文件夹，在 pip 目录下创建 pip.ini 文件, 内容如下

```python
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```

<br/>

### CUDA工具包

https://developer.nvidia.cn/zh-cn/cuda-toolkit



<br/>

### cuDNN

https://developer.nvidia.com/rdp/cudnn-download



<br/>

### pytorch 安装

[参考教程](https://blog.csdn.net/weixin_44842318/article/details/127487476)

https://pytorch.org/

[离线包下载地址](https://download.pytorch.org/whl/torch_stable.html)





```python
import torch

print(torch.__version__)  # 查看版本

print(torch.cuda.is_available())  # 查看 GPU 是否可用

print(torch.cuda.device_count())  # 查看 GPU 个数

print(torch.backends.cudnn.version())  # 查看对应 CUDA 的版本号
print(torch.version.cuda)
```



<br/>

## MingW、Make、GCC、G++







<br/>

## Java

![img](https://img-blog.csdnimg.cn/20190601181336234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDE3MTUy,size_16,color_FFFFFF,t_70)



![img](https://img-blog.csdnimg.cn/20190601181602403.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDE3MTUy,size_16,color_FFFFFF,t_70)

```java
.;%Java_Home%\bin;%Java_Home%\lib\dt.jar;%Java_Home%\lib\tools.jar
```

![img](https://img-blog.csdnimg.cn/20190601181933699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyMDE3MTUy,size_16,color_FFFFFF,t_70)





<br/>

## CMake







<br/>

## node.js





<br/>

## Git





<br/><br/>

# 数据库

## MySQL







<br/>

## Redis







<br/>

## PostgreSQL









<br/>

<br/>

# wget配置



[下载地址](https://eternallybored.org/misc/wget/)



![image-20220101120152481](https://s2.loli.net/2022/01/01/KYAvINCHqBrFkS9.png)



将wget所在路径加入环境变量

![image-20220101120438165](https://s2.loli.net/2022/01/01/c9qpzAVv7CeomMr.png)



输入`wget --version`测试

![image-20220101120312781](https://s2.loli.net/2022/01/01/dGD8wNr1LmPI5fT.png)



使用

```shell
wget 具体的下载地址
```

比如：

```shell
 wget https://www.python.org/ftp/python/3.10.0/python-3.10.0-amd64.exe
```

![image-20220101120622849](https://s2.loli.net/2022/01/01/WkB3LsCD6i1STHl.png)



下载成功

![image-20220101120634989](https://s2.loli.net/2022/01/01/67LEw3GPRZvcKTx.png)





<br/><br/>

# 美化部分



## 桌面背景



静态壁纸



动态壁纸





<br/>

## 主题

暗色



明色





<br/>

## 字体

苹方





<br/>

## 光标



样式



尾翼





<br/>

## 任务栏居中透明





<br/>

## 桌面小部件

雨滴





<br/><br/>

# 软件部分



## 写代码软件 / IDE

### Pycharm

[Pycharm](https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=windows)

<br/>



### CLion

[CLion](https://www.jetbrains.com/clion/download/download-thanks.html?platform=windows)



<br/>

### IDEA

[IDEA](https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows)



<br/>

### WebStorm



<br/>

### Visual Studio

[Visual Studio](https://visualstudio.microsoft.com/zh-hans/)



#### 配置默认终端

```json
"terminal.integrated.profiles.windows": {
    "pwsh": {
        "path": "C:\\software\\PowerShell\\7\\pwsh.exe",
        "icon": "terminal-powershell"
    }
},

"terminal.integrated.defaultProfile.windows": "pwsh" // 默认终端
```

<br/>

#### 插件

##### Moegi Theme



<br/>

##### Power Mode

```json
"powermode.presets": "particles",
"powermode.enabled": true,
"powermode.combo.counterEnabled": "hide",
"powermode.shake.enabled": false,
"powermode.combo.location": "off",
```



<br/>

### live server

> 浏览器跟随vscode代码的编辑实时刷新



新建完HTML页面之后，我们就可以鼠标右键单击选择：Open with Live Server



设置vscode编辑代码时自动保存，文件 => 首选项 =>  设置 => Auto Save选择afterDelay，Auto Save Delay 填写自动保存的时间间隔，我设置的是1000毫秒，也就是1秒



<br/>

### Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/)



<br/>

### Qt Creator

[Qt Creator](https://www.qt.io/zh-cn/)



<br/>

### HBulder

[HBulder](https://www.dcloud.io/hbuilderx.html)



<br/>

## 开发工具

### Beyond Compare



<br/>

### IDA_Pro



<br/>

## 笔记软件

### typora

[typora](https://www.typora.io/#windows)

<br/>

#### 图床配置

##### SMMS

```json
{
  "picBed": {
    "current": "smms", //代表当前的默认上传图床为 SM.MS
    "smms": {
      "token": "这里是你的 SM.MS 账号的 API Token"
    }
  },
  "picgoPlugins": {}
}
```



安装重命名插件 sper-prefix

```shell
cd C:\Users\73446\AppData\Roaming\Typora\picgo\win64

.\picgo.exe install super-prefix
```



<br/>

##### 七牛云

```json
"qiniu": { // 七牛云存储
    "accessKey": "mkpn9ikOgL18e8gma8IyYMDuWQdOiZ9P9PMm0hX-",
    "secretKey": "Oqh98xDXKVqDJb1FQhUpkKa5ThB5JnUBOHjdI7W3",
    "bucket": "imagebedxxl", // 存储空间名
    "url": "https://imgbed.chachal.xyz", // 自定义域名
    "area":  "z2", // 存储区域编号
    "options": "", // 网址后缀，比如？imgslim
    "path": "img/" // 自定义存储路径，比如 img/
}
```



<br/>

##### 腾讯云COS

```json
"tcyun":{ // 腾讯云COS云存储
        "secretId": "AKIDJVUFm6C2e3GF1ZtzqSpywgCTVHo56i7Y",
    "secretKey": "KPGsGTREm46sPghT2NTKzQcZHo68uQhi",
    "appId":"1307852539",
    "bucket": "img-1307852539", // 存储桶名称
    "area":  "ap-guangzhou", // 存储区域
    "version": "v5", // 版本,有v4和v5
    "path": "img/" // 自定义存储路径，比如 img/
}
```

<br/>

##### 合并配置

```json
{
  "picBed": {
    "current": "qiniu",
    "uploader": "qiniu",
    "qiniu": { // 七牛云存储
      "accessKey": "mkpn9ikOgL18e8gma8IyYMDuWQdOiZ9P9PMm0hX-",
      "secretKey": "Oqh98xDXKVqDJb1FQhUpkKa5ThB5JnUBOHjdI7W3",
      "bucket": "imagebedxxl", // 存储空间名
      "url": "https://imgbed.chachal.xyz", // 自定义域名
      "area":  "z2", // 存储区域编号
      "options": "", // 网址后缀，比如？imgslim
      "path": "img/" // 自定义存储路径，比如 img/
    },
    "tcyun":{ // 腾讯云COS云存储
    "secretId": "AKIDJVUFm6C2e3GF1ZtzqSpywgCTVHo56i7Y",
    "secretKey": "KPGsGTREm46sPghT2NTKzQcZHo68uQhi",
    "appId":"1307852539",
    "bucket": "img-1307852539", // 存储桶名称
    "area":  "ap-guangzhou", // 存储区域
    "version": "v5", // 版本,有v4和v5
    "path": "img/" // 自定义存储路径，比如 img/
}
  },
  "picgoPlugins": {
      "picgo-plugin-super-prefix": true
  },
  "picgo-plugin-super-prefix": {
    "fileFormat": "YYYYMMDDHHmmss" // 重命名
  } //super-prefix插件配置
}
```

<br/>

### Notion



<br/>

### 有道云笔记

[有道云笔记](https://note.youdao.com/download.html)



<br/>

### Obsidian

[Obsidian](https://obsidian.md/)





<br/>

## 抓包工具

### Charles

[Charles](https://www.charlesproxy.com/latest-release/download.do)

破解地址：https://www.zzzmode.com/mytools/charles/

生成jar文件后，放到charles安装目录的lib目录下





<br/>

### Wireshark





## 浏览器

### Edge



<br/>

### Cent Brower

[Cent Brower](https://www.centbrowser.cn/)



<br/>

### Google Chrome

[Google Chrome](https://www.google.cn/chrome/)



<br/>











### 百度搜索过滤 CSDN 的下载

#### 一、前言-吐槽

最烦 C某N 的下载了，看到一次我就血压高。我直接在百度搜索把它给**屏蔽**！

![image-20230105110328001](https://img-blog.csdnimg.cn/af690cba8c8a4a3493cd5234e10b6e9c.png)



<br/>

#### 二、安装油猴插件

[点击下载 Tampermonkey](https://chrome.zzzmh.cn/info/dhdgffkkebhmkfjojejmpbldmpobfkfo)





<br/>

#### 三、下载  AC-baidu-重定向优化 脚本

[点击下载](https://greasyfork.org/zh-CN/scripts/14178)



<br/>

#### 四、配置拦截域名

1. 点击 **自定义**，即 AC-baidu 脚本的设置。
2. 点击 **DIY**。

![image-20230105112037181](https://img-blog.csdnimg.cn/2144dec4b5d44dc7a2e5c4496f5ab4fe.png)



3. 填上拦截域名
   点击添加，再点击保存，搞定。
   
   ```shell
   https://download.csdn.net
   ```
   
   ![image-20230105112117557](https://img-blog.csdnimg.cn/6370ccce4d80435eb3f540d838ae1a56.png)
   

<br/>

#### 五、拦截效果

拦截前：

![image-20230105111204861](https://img-blog.csdnimg.cn/f0fa145c13904f918bafdf4f5a403fec.png)



拦截后：

![image-20230105112330646](https://img-blog.csdnimg.cn/46f4009175764dcface957e0086fd6fc.png)



<br/>

## 安全/杀毒软件

### 火绒

[火绒](https://www.huorong.cn/)



<br/>

## 卸载软件

### Ashampoo Uninstaller v11.00.16 Portable



<br/>

### Geek

[Geek](https://geekuninstaller.com/download)



<br/>

### IOBit Uninstaller

[IOBit Uninstaller](https://www.iobit.com/en/index.php?s)





<br/>

## 聊天软件

### 微信

[微信](https://pc.weixin.qq.com/)



<br/>

### QQ

[QQ](https://im.qq.com/index)



<br/>

### Telegram

[Telegram](https://desktop.telegram.org/)



<br/>

### Discord

[Discord](https://discord.onl/)



<br/>

## 网盘

### 百度网盘

[百度网盘](https://pan.baidu.com/download#win)



<br/>

### 阿里网盘

[阿里网盘](https://yunpan.aliyun.com/downloads/apps/desktop/aDrive.exe)



<br/>

### 阿里网盘小白羊版



<br/>

### 城通网盘

[城通网盘](https://imgstatic.ctfile.com/upload/apps/ctfile.exe)



<br/>

### 天翼云网盘

[天翼云网盘](https://cloud.189.cn/web/static/download-client/index.html)



<br/>

### 蓝凑云

[蓝凑云](https://www.lanzou.com/)



<br/>

## 下载工具

### IDM



<br/>

### Motrix

[Motrix](https://motrix.app/)



<br/>

### 迅雷

[迅雷](https://www.xunlei.com/)





<br/>

## 解压缩软件

### Bandizip

[Bandizip](http://www.bandisoft.com/)



<br/>

### 7z

[7z](https://sparanoid.com/lab/7z/)



<br/>

## 截图软件

### Snipaste

[Snipaste](https://www.snipaste.com/)



<br/>

### QQ截图独立版



<br/>

### ShareX

[ShareX](https://getsharex.com/)





<br/>

## 视频播放软件

### PotPlayer

[PotPlayer](http://potplayer.daum.net/)



<br/>

## 图片查看器

### Honey View

[Honey View](http://www.bandisoft.com/)



<br/>

## 图片压缩

### 图压

[图压](https://tuya.xinxiao.tech/)



<br/>

## 文本编辑器

### Notepad3

[Notepad3](https://www.rizonesoft.com/downloads/notepad3/)



<br/>

### Sublime Text

[Sublime Text](http://www.sublimetext.com/3)



<br/>

### Vim

[Vim](https://github.com/vim/vim-win32-installer/releases/tag/v8.2.3977)









<br/>

## PDF标记软件(支持手写笔)

### Xournal++

[Xournal++](https://xournalpp.github.io/installation/)



<br/>

### Drawboard



<br/>

## 阅读软件

### BookxNote Pro

[BookxNote Pro](http://www.bookxnote.com/)



<br/>

## PDF阅读器

### SumatraPDF

[SumatraPDF](http://www.pdfyuedu.com/)



<br/>

### 极速PDF阅读器

[极速PDF阅读器](https://jisupdf.com/)



<br/>

## 效率工具

### Listary



<br/>

### utools

[utools](http://www.u.tools/)



<br/>

### Everything

[Everything](https://www.voidtools.com/zh-cn/)



<br/>

### Wox

[Wox](http://www.wox.one/)



<br/>

## 查看电脑硬件信息软件

[Windows超级管理器](https://www.collithel.com/windows_super_manager/)



[GPU_Z](https://www.techpowerup.com/gpuz/)



[CPU_Z](https://www.cpuid.com/softwares/cpu-z.html)



[图吧工具箱](http://www.tbtool.cn/)



AiDa64



[AfterBurner](https://cn.msi.com/Landing/afterburner/graphics-cards)



<br/>

## 激活软件





<br/>

## 远程连接软件

### AnLink

[AnLink](https://cn.anlinksoft.com/)



<br/>

### scrcpy

[scrcpy 投屏控制器](http://download.jamcz.com/d/29434354-43505884-32e560?45536779)



<br/>

### 向日葵

[向日葵](https://sunlogin.oray.com/download)



<br/>

[TeamViewer](https://www.teamviewer.cn/cn/)



<br/>

[RustDesk](https://rustdesk.com/zh/)



<br/>

[AnyDesk](https://anydesk.com/zhs)



XShell



Xftp



[FinalShell](https://www.hostbuf.com/t/988.html)



[PuTty](https://www.chiark.greenend.org.uk/~sgtatham/putty/)



<br/>

## 录屏软件

### OBS

[OBS](https://obsproject.com/)



<br/>

### Bandicam



<br/>

### EV录屏

[EV录屏](https://www.ieway.cn/)





<br/>

## 护眼软件

### Iris





## Adobe软件



### PS



<br/>

### PR



<br/>

### AI



<br/>

### Acrobat







<br/>

## GIS软件

### ArcGIS Pro 2.8



<br/>

### ArcGIS



<br/>

### QGis

[QGis](https://qgis.org/en/site/index.html)



<br/>

### ENVI







## 字典软件

### Mdict

[Mdict](https://www.mdict.cn/wp/?page_id=5227&lang=zh)



<br/>

### 有道词典

[有道词典](http://cidian.youdao.com/)





<br/>

## 三维软件



### C4D



<br/>

### blender

[blender](https://www.blender.org/)



<br/>

## 字幕制作软件

### Arctime Pro

[Arctime Pro](https://arctime.org/download.html)





<br/><br/>

# 小技巧

## OneDrive 设置同步任意文件夹

原理：使用 `mklink`命令。

`mklink` 介绍：

1. `mklink` 指令可以创建文件夹的链接（类似快捷方式）

2. `mklink` 指令属于 Windows 中 cmd 的内置指令，所以不能在 PowerShell 中使用。

3. 链接的两端，只要有任一端有变动，另一边会做出相同的操作。比如这边删除了一个文件，那么那边也会删除，这边做出修改，那边也同时修改，即绑定的这两个文件夹是同步的。
   命令示例：
   
   ```shell
   mklink /d "C:\文件夹B" "D:\文件夹A" #指C盘的文件夹B 指向 D盘的文件夹A
   ```
   
   ![image-20230101160729532](https://img-blog.csdnimg.cn/abcb79aacc3d4a02becf8c7adec9670e.png)
   
   
   
   

我们是要 OneDrive 同步其它文件夹，因此可以写（文件夹B不需要自己建，它会自动创建）：

该命令意思就是：OneDrive里面的文件夹B 同步 另一个地方文件夹A 的内容

```shell
mklink /d "C:\Users\73446\OneDrive\文件夹B" "C:\Users\73446\Documents\文件夹A"
```



<br/>

## 使用 PowerShell 命令操作环境变量

[参考微软官方文档](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.3)

> PowerShell 提供了几种不同的方法来使用和管理环境变量。
> 
> - 变量语法
> - 环境提供程序和项 cmdlet
> - .NET System.Environment 类

其中，方法一和方法二设置的环境变量是临时的，重启系统后会失效。



<br/>

### 显示环境变量的值

1. 方法一：变量语法
   
   ```PowerShell
   $Env:<variable-name>
   ```
   
   ![image-20230302104200143](https://img-blog.csdnimg.cn/7efd658c39d24b5cade39ed6e9edf27c.png)
   
   

2. 方法二：环境提供程序和项 cmdlet
   
   ```powershell
   Get-Item -Path Env:\<variable-name>
   ```
   
   ![image-20230302104302748](https://img-blog.csdnimg.cn/044e9f2f4b59438a8808a005f7eff736.png)
   
   

3. 方法三：.NET System.Environment 类
   GetEnvironmentVariable 有两个参数，第一个是变量名，第二个是指定范围（用户变量、系统变量），默认是用户变量。
   **若要查看或设置系统变量，需要以管理员身份运行 PowerShell。**
   
   ```powershell
   [Environment]::GetEnvironmentVariable('<variable-name>')
   [Environment]::GetEnvironmentVariable('<variable-name>', 'User')
   [Environment]::GetEnvironmentVariable('<variable-name>', 'Machine') # 需要以管理员身份运行 PowerShell
   ```
   
   ![image-20230302105014885](https://img-blog.csdnimg.cn/81dee7b4f27c4eb387d21eaef9309c7e.png)
   
   
   
   
   
   <br/>
   
   

### 创建和更新环境变量的值

1. 方法一：变量语法
   
   ```powershell
   $Env:<variable-name> = "<new-value>"
   ```
   
   

2. 方法二：环境提供程序和项 cmdlet
   
   ```powershell
   New-Item -Path Env:\Foo -Value 'Bar'
   # 或者 
   Set-Item -Path Env:\Foo2 -Value 'BAR'
   ```
   
   

3. **方法三：.NET System.Environment 类**
   
   ```powershell
   [Environment]::SetEnvironmentVariable('<variable-name>','<new-value>')
   [Environment]::SetEnvironmentVariable("PATH", $Env:Path + ";<new-value>", "Machine") # 添加到系统变量的 PATH
   ```
   
   ![image-20230302105434105](https://img-blog.csdnimg.cn/002ed4947ce643369a9befe6e026884e.png)
   

<br/>

### 删除环境变量

由于环境变量不能为空字符串，因此将环境变量设置为 `$null` 或空字符串会将其删除。

1. 方法一：变量语法
   
   ```powershell
   $Env:<variable-name> = ''
   ```
   
   

2. 方法二：环境提供程序和项 cmdlet
   
   ```powershell
   Remove-Item -Path Env:\<variable-name> -Verbose
   ```
   
   

1. 方法三：.NET System.Environment 类
   
   ```powershell
   [Environment]::SetEnvironmentVariable('<variable-name>','')
   ```
   
   
   
   
   
   <br/><br/>
   
   

# Windows Terminal

https://github.com/microsoft/terminal



<br/>

## Powershell 7

https://github.com/PowerShell/PowerShell





```powershell
Install-Module oh-my-posh -Scope CurrentUser -SkipPublisherCheck
Install-Module posh-git -Scope CurrentUser
Install-Module -Name PSReadLine -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck
```

https://ohmyposh.dev/docs



设置profile

```powershell
notepad.exe $PROFILE
```

内容：

```SHELL
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme robbyrussel
```

<br/>

### 安装文件图标库

```
Install-Module -Name Terminal-Icons -Repository PSGallery
```

<br/>

### 使用图标

```
Import-Module -Name Terminal-Icons
```

<br/>

### 命令行自动补全和提示

```
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
```

<br/>

### 智能提示

https://zhuanlan.zhihu.com/p/421568420



`$profile`

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Import-Module PSReadLine
Import-Module Terminal-Icons

Set-PSReadLineOption -PredictionSource History
Set-PoshPrompt -Theme atomic
```





<br/>

## 安装Nerd字体

[下载地址](https://www.nerdfonts.com/font-downloads)

随便挑一个下载安装就行

![image-20220108161127313](https://s2.loli.net/2022/01/08/Un4OrK539acJXlA.png)



之后在Windows Terminal里设置字体

![image-20220108161216890](https://s2.loli.net/2022/01/08/eAL6qh3vF7TNPDo.png)





<br/>

## 配置服务器SSH连接

参考教程：https://www.jianshu.com/p/b7a105a67253/

方法一：

![image-20220111113326596](https://s2.loli.net/2022/01/11/xiw4XcAQHZ6UYPj.png)

```shell
ssh root@2.23.456.896
```



方法二：

在Terminal里面输入，生成密钥

```shell
ssh-keygen
```

复制id_rsa.pub里面的内容



服务器这边：

把内容粘贴进去

```shell
vim tmp.pub
```



创建.ssh文件夹并赋予权限700

```shell
mkdir .ssh && chmod 700 .ssh
```



创建authorized_keys文件并赋予权限600

```shell
touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
```



把tmp.pub文件的内容合并到authorized_keys

```shell
cat tmp.pub >> .ssh/authorized_keys
```



删除临时文件tmp.pub

```shell
rm tmp.pub
```



提示说要不要删除，输入yes即可。



<br/>

## 终端代理

> clash 打开 TUN 隧道模式即可



<br/>

参考教程：https://www.cnblogs.com/xch-jiang/p/14324636.html

### PowerShell

```shell
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"
```

<br/>

### cmd

```shell
set http_proxy=http://127.0.0.1:1080
set https_proxy=http://127.0.0.1:1080
```



![image-20220111120210051](https://s2.loli.net/2022/01/11/7XspScmhRzEqjIH.png)



<br/>

## Vim插件安装

官方：插件管理：[vim-plug](https://github.com/junegunn/vim-plug)

https://www.cnblogs.com/ICeVe/p/14347561.html



安装目录下，_vimrc即为Linux下的.vimrc配置文件

![image-20220111124504122](https://s2.loli.net/2022/01/11/d3Y5xaZyiKPWXnq.png)



下载plug.vim，放到安装目录下的autoload文件夹

![image-20220111124725710](https://s2.loli.net/2022/01/11/VfZHUb6myqclt8e.png)



配置`_vimrc`

![image-20220111125129743](https://s2.loli.net/2022/01/11/hz1IuXVnEbcsfPp.png)



加速

```shell
"在 调用 call plug#begin('~/.config/nvim/plugged') 之前 设置plug_url_format即可
let g:plug_url_format='https://git::@hub.fastgit.org/%s.git'
```



YCM插件安装



需要安装cmake

需要安装go

https://www.jianshu.com/p/f4aa211c7a74



[安装gopls](https://www.cnblogs.com/9527l/p/13470075.html)



下载clanga-

https://github.com/ycm-core/llvm/releases
