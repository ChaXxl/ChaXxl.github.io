# Ubuntu配置





# 解压命令

~~~shell
1、.tar 用 tar –xvf 解压
2、.gz 用 gzip -d或者gunzip 解压
3、.tar.gz 和.tgz 用 tar –xzf 解压
4、.bz2 用 bzip2 -d或者用bunzip2 解压
5、.tar.bz2用tar –xjf 解压
6、.Z 用 uncompress 解压
7、.tar.Z 用tar –xZf 解压
8、.rar 用 unrar e解压
9、.zip 用 unzip 解压
10、tar.xz tar -xvf 
~~~

<br/><br/>

# SSH 免密登录

1. 首先在本机生成公钥和私钥

   ~~~shell
   ssh-kegen -t rsa
   ~~~

2. 在远程服务器上也生成公钥和私钥

   ~~~shell
   ssh-kegen -t rsa
   ~~~

3. 在服务器上, 将主机的公钥复制到 `~/.ssh/authorized_keys`文件中

   

   





<br/><br/>

# 上传下载文件

## 上传

~~~shell
scp 文件路径 目的地用户名@目的地ip:目的地路径
~~~

~~~shell
scp     file    user@ip:/directory      ##上传文件
scp -r  dir user@ip:/directory          ##长传目录
~~~

<br/>

## 下载

~~~shell
scp     user@ip:/filename   /direcotry  ##下载文件
scp -r  user@ip:/directory  /direcotry  ##下载目录
~~~

~~~shell
scp 远程服务器用户名@远程服务器ip:远程文件路径 本地存放路径
scp -r 远程服务器用户名@远程服务器ip:远程文件路径 本地存放路径
~~~







<br/><br/>

# WSL

## WSL微软官方教程

[适用于 Linux 的 Windows 子系统文档 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/)



<br/>

## 固定IP

~~~vbscript
Set ws = WScript.CreateObject("WScript.Shell")
ws.run "wsl -d CentOS7 -u root sudo service sshd start", vbhide
ws.run "wsl -d CentOS7 -u root ip addr add 172.28.131.101/20 broadcast 172.28.143.255 dev eth0 label eth0:1", vbhide
~~~

~~~powershell
netsh interface ip add address "vEthernet (WSL)" 172.28.131.102 255.255.240.0
~~~

<br/>

# clash配置

[参考教程](https://blog.csdn.net/DPCFish/article/details/121663625)

[参考教程](https://zhuanlan.zhihu.com/p/451863859)



1. 下载软件

   ~~~shell
   wget https://gitee.com/wzqxxl/transit/attach_files/1047328/download/clash-linux-amd64-v1.10.0.gz
   ~~~

2. 配置订阅链接

   ~~~shell
   wget -O config.yaml 这里改成你的订阅链接
   ~~~

   ~~~shell
   wget -O Country.mmdb https://gitee.com/wzqxxl/transit/attach_files/1047342/download/Country.mmdb
   ~~~

3. 文件结构

  ![image-20220429150221411](https://img-blog.csdnimg.cn/e423988c682746cea936c691accae982.png)



4. 给clash赋予权限

   ~~~shell
   sudo chmod +x clash1.10.0
   ~~~

5. 运行

   ~~~shell
   ./clash1.10.0 -d .
   ~~~

   后台运行

   ~~~shell
   screen -S clash  /usr/local/src/clash/clash1.10.0 -d /usr/local/src/clash/
   ~~~

   <br/><br/>

# 更换源

备份原来的文件

~~~shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
~~~

1. 查看codename（该版本系统的代号）

   ~~~shell
   lsb_release -a
   ~~~

   ![20220703111614](https://img-blog.csdnimg.cn/f10402b865794107a817fee586887389.png)



**阿里源**

将 `$Codename` 替换为上面获取的 Codename 即可

~~~shell
sudo vim /etc/apt/sources.list
~~~

~~~shell
deb http://mirrors.aliyun.com/ubuntu/ $Codename main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-backports main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-proposed main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-security main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-updates main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-backports main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-proposed main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-security main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-updates main multiverse restricted universe
~~~

~~~shell
sudo apt update
~~~



<br/>

# 依赖项安装

~~~shell
sudo apt-get install -y  gcc  cmake  gdb net-tools openssl curl build-essential  libtool  ca-certificates  gnupg  lsb-release  git-core bison  libreadline6-dev zlib1g  zlib1g-dev  libssl-dev  libyaml-dev  libsqlite3-0 libsqlite3-dev  sqlite3  autoconf libc6-dev  libpcre3-dev  libcurl4-nss-dev  libxml2-dev libxslt-dev imagemagick libffi-dev firewalld
~~~

~~~shell
# sudo apt-get install -y python3-pip python3-dev python-dev
~~~

<br/>

# 安装proxychains

~~~shell
sudo apt-get install -y proxychains
~~~

1. 将 dns 这行注释掉

   ~~~shell
   vim /etc/proxychains.conf
   ~~~

   ![image-20220426130042979](https://img-blog.csdnimg.cn/eb445eabcdd84c5ea1490fc5ed9f04c9.png)

   <br/>

2. Clash（或者其它代理软件） 打开局域网连接

   ![image-20230102132046978](https://img-blog.csdnimg.cn/a7d36df1020a4c7e870146c8387987bd.png)

   <br/>

3. 设置代理列表，`类型 空格 IP 空格 端口`

   ![image-20220426130202733](https://img-blog.csdnimg.cn/99f4300c2f52466785ba4d6b40e0147c.png)

   ~~~shell
   http 192.168.1.206 7890
   https 192.168.1.206 7890
   socks5 192.168.1.206 7890
   ~~~

3. 使用

   只需要在命令前面加上`proxychains`即可

   ~~~shell
   proxychains curl google.com
   ~~~

   ![image-20220426130404354](https://img-blog.csdnimg.cn/2b4c61b852b8464990b680f368e09457.png)

<br/><br/>

# 终端美化与加强

## 安装 zsh

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

## oh-my-zsh插件



### 智能提示

~~~shell
git clone https://gitee.com/xs66/zsh-autosuggestions $ZSH/plugins/zsh-autosuggestions
~~~

<br/>

### 语法高亮

~~~shell
git clone https://gitee.com/xs66/zsh-syntax-highlighting.git $ZSH/plugins/zsh-syntax-highlighting
~~~

<br/>

### 载入配置

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

### 使配置生效

~~~shell
source ~/.zshrc
~~~

<br/><br/>

# Vim

## 配置 Vim

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

## 更改主题

1. 下载主题

   注：将路径改为自己的，例如，你可能是 `/usr/share/vim/vim9`，也可能是 `/usr/share/vim/vim8`

   ~~~shell
   sudo  wget -O /usr/share/vim/vim81/colors/tender.vim https://gitee.com/wzqxxl/transit/attach_files/1114920/download/tender.vim
   ~~~
   ~~~shell
   sudo  wget -O /usr/share/vim/vim80/colors/tender.vim https://gitee.com/wzqxxl/transit/attach_files/1114920/download/tender.vim
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

## vim-plug 插件管理 安装

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

## 自动补全插件 coc 安装

GitHub 主页：https://github.com/neoclide/coc.nvim

编辑 `.vimrc`：

~~~shell
Plug 'neoclide/coc.nvim', {'branch': 'release'}
~~~

运行`PlugInstall`

<br/>

## 自动补全插件 YCM 安装

~~~shell
cd ~/.vim/plugged/YouCompleteMe
~~~

~~~shell
python3 ./install.py --clangd-completer --force-sudo
~~~

配置 `vimrc`

~~~shell
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"
" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"
~~~

~~~shell
" 自动补全配置
set completeopt=longest,menu    "让Vim的补全菜单行为与一般IDE一致(参考VimTip1228)
autocmd InsertLeave * if pumvisible() == 0|pclose|endif "离开插入模式后自动关闭预览窗口
inoremap <expr> <CR>       pumvisible() ? "\<C-y>" : "\<CR>"    "回车即选中当前项
"上下左右键的行为 会显示其他信息
inoremap <expr> <Down>     pumvisible() ? "\<C-n>" : "\<Down>"
inoremap <expr> <Up>       pumvisible() ? "\<C-p>" : "\<Up>"
inoremap <expr> <PageDown> pumvisible() ? "\<PageDown>\<C-p>\<C-n>" : "\<PageDown>"
inoremap <expr> <PageUp>   pumvisible() ? "\<PageUp>\<C-p>\<C-n>" : "\<PageUp>"

"youcompleteme  默认tab  s-tab 和自动补全冲突
"let g:ycm_key_list_select_completion=['<c-n>']
let g:ycm_key_list_select_completion = ['<Down>']
"let g:ycm_key_list_previous_completion=['<c-p>']
let g:ycm_key_list_previous_completion = ['<Up>']
let g:ycm_confirm_extra_conf=0 "关闭加载.ycm_extra_conf.py提示

let g:ycm_collect_identifiers_from_tags_files=1 " 开启 YCM 基于标签引擎
let g:ycm_min_num_of_chars_for_completion=2 " 从第2个键入字符就开始罗列匹配项
let g:ycm_cache_omnifunc=0  " 禁止缓存匹配项,每次都重新生成匹配项
let g:ycm_seed_identifiers_with_syntax=1    " 语法关键字补全
nnoremap <F5> :YcmForceCompileAndDiagnostics<CR>    "force recomile with syntastic
"nnoremap <leader>lo :lopen<CR> "open locationlist
"nnoremap <leader>lc :lclose<CR>    "close locationlist
inoremap <leader><leader> <C-x><C-o>
"在注释输入中也能补全
let g:ycm_complete_in_comments = 1
"在字符串输入中也能补全
let g:ycm_complete_in_strings = 1
"注释和字符串中的文字也会被收入补全
let g:ycm_collect_identifiers_from_comments_and_strings = 0

nnoremap <leader>jd :YcmCompleter GoToDefinitionElseDeclaration<CR> " 
~~~

<br/><br/>

# 安装 Miniconda

[Index of miniconda 清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/?C=M&O=D)



<br/><br/>

# 安装 workon

<br/><br/>

# 编程环境

## Python

1. 下载

   ~~~shell
   wget https://www.python.org/ftp/python/3.7.16/Python-3.7.16.tar.xz
   ~~~

2. 解压

   ~~~shell
   tar -xvf Python-3.7.16.tar.xz
   ~~~

3. 配置安装路径

   ~~~shell
   ./configure prefix=/usr/local/src/Python
   ~~~

4. 编译和安装

   ~~~shell
   make && make install
   ~~~
5. 创建软链接

   ~~~shell
    sudo ln -s /usr/local/src/Python/bin/python3.7 /usr/bin/python
   ~~~

   ~~~shell
    sudo ln -s /usr/local/src/Python/bin/pip3 /usr/bin/pip
   ~~~

   <br/>

### 更换 pip 源

~~~shell
vim ~/.pip/pip.conf
~~~

添加以下内容：

~~~shell
[global]
timeout = 6000
index-url = https://pypi.doubanio.com/simple
trusted-host = pypi.doubanio.com
~~~

<br/>

##  PCRE 库

PCRE 库源码包下载地址: https://sourceforge.mirrorservice.org/p/pc/pcre/pcre/8.39/pcre-8.39.tar.gz



1. 下载

   ~~~shell
   wget https://sourceforge.mirrorservice.org/p/pc/pcre/pcre/8.39/pcre-8.39.tar.gz
   ~~~

2. 解压

   ~~~shell
   sudo tar -zxvf pcre-8.39.tar.gz
   ~~~

3. 配置

   ~~~shell
   sudo ./configure
   ~~~

4. 编译和安装

   ~~~shell
   sudo make && make install
   ~~~

   <br/>

   ## zlib 库

1. 下载

   ~~~shell
   wget https://nchc.dl.sourceforge.net/project/libpng/zlib/1.2.11/zlib-1.2.11.tar.gz
   ~~~

2. 解压

   ~~~shell
   sudo tar -zxvf zlib-1.2.11.tar.gz
   ~~~

3. 配置

   ~~~shell
   sudo ./configure
   ~~~

4. 编译和安装

   ~~~shell
   sudo make && make install
   ~~~

   

<br/>

## OpenSSL 开发库

1. 下载

   ~~~shell
   sudo wget https://www.openssl.org/source/openssl-1.1.1g.tar.gz
   ~~~

2. 解压

   ~~~shell
   sudo tar -zxvf openssl-1.1.1g.tar.gz
   ~~~

3. 配置

   ~~~shell
   sudo ./config
   ~~~

4. 编译和安装

   ~~~shell
   sudo make && make install
   ~~~

   <br/>

## Nginx

[官网](http://nginx.org)

1. 下载

   ~~~shell
   sudo wget http://nginx.org/download/nginx-1.16.1.tar.gz
   ~~~

2. 解压

   ~~~shell
   sudo tar -zxvf nginx-1.16.1.tar.gz
   ~~~

3. 配置安装路径、模块

   ~~~shell
   sudo ./configure --prefix=/usr/local/src/nginx --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module
   ~~~

4. 编译

   ~~~shell
   sudo make && make install
   ~~~

5. 创建软链接

   ~~~shell
   ln -s /usr/local/src/nginx/sbin/niginx /usr/bin/nginx
   ~~~





<br/>


## FastDFS



### libfastcommon 的安装

> libfastcommon 为 FastDFS 操作的基础库，FastDFS 没有使用标准的库，而是封装了一套和
> FastDFS 相关的库。

[libfastcommon 源码](https://github.com/happyfish100/libfastcommon)

1. 下载

   ~~~shell
   wget https://gitee.com/wzqxxl/transit/releases/download/FastDFS/libfastcommon-1.0.43.tar.gz
   ~~~

2. 解压

   ~~~shell
   sudo tar -xzvf libfastcommon-1.0.43.tar.gz
   ~~~

3. 编译代码、安装

   ~~~shell
   sudo ./make.sh && ./make.sh install
   ~~~

4. 动态库安装后的路径

   安装成功后，默认会复制到 /usr/lib64 下

5. 设置环境变量或者创建软链接

   ~~~shell
   export LD_LIBRARY_PATH=/usr/lib64/:$LD_LIBRARY_PATH
   ~~~

   ~~~shell
   sudo ln -s /usr/lib64/libfastcommon.so /usr/lib/libfastcommon.so
   ~~~

   <br/>

### FastDFS 的安装

FastDFS 源代码下载地址：
https://code.google.com/archive/p/fastdfs/downloads
https://github.com/happyfish100/fastdfs.git
这里使用的是 V6.06 版本



1. 下载

   ~~~shell
   wget https://gitee.com/wzqxxl/transit/releases/download/FastDFS/fastdfs-6.06.tar.gz
   ~~~

   

2. 解压

   ~~~shell
   sudo tar -zxvf fastdfs-6.06.tar.gz
   ~~~

3. 编译、安装

   ~~~shell
   sudo ./make.sh && sudo ./make.sh install
   ~~~

4. 可执行程序默认会安装到/usr/bin 中：

   ![image-20230118100311642](https://img-blog.csdnimg.cn/1c64590bccae41b5a9b1b643f5a0f954.png)

   

5. 安装成功后，自动在 /etc/fdfs 中添加三个配置文件：

   ![image-20230118100707397](https://img-blog.csdnimg.cn/f1eabfb046a643dc8e7a955abdebf764.png)

<br/>

### FastDFS 的配置

> 先配置 tracker，再添加一个 storage，每添加添加一个 storage，实际上是 storage 连接 tracker，tracker 必须存在，否则 storage 无法加进来，client 主要用于测试上传、下载文件。

<br/>

#### tracker 的配置

1. 拷贝配置文件

   ~~~shell
   sudo cp /etc/fdfs/tracker.conf.sample /etc/fdfs/tracker.conf
   ~~~

2. 修改 配置文件

   ~~~shell
   sudo vim /etc/fdfs/tracker.conf
   ~~~

   - tracker 所在服务器的 ip

   ![image-20230118101911902](https://img-blog.csdnimg.cn/ec6d2e7b45dc44339a4baac70e13d242.png)

   

   -  tracker 日志存放的路径 (此路径必须已经存在，不然后面会报错)

     ![image-20230118102336469](https://img-blog.csdnimg.cn/2f584b20dfac4c3485e73dea4215d576.png)

   

<br/>

#### storage 的配置

1. 拷贝配置文件

   ~~~shell
   sudo cp /etc/fdfs/storage.conf.sample /etc/fdfs/storage.conf
   ~~~

2. 修改 配置文件

   ~~~shell
   sudo vim /etc/fdfs/storage.conf
   ~~~

   - storage 所在服务器 ip

     ![image-20230118102650673](https://img-blog.csdnimg.cn/cfb3d63c0ffc485f80583f6040be71f6.png)

     

   -  storage 存放日志的路径 (此路径必须已经存在，不然后面会报错)

     ![image-20230118102816641](https://img-blog.csdnimg.cn/d861345036f04a69a187ebd34bcd811b.png)

     

   - 真正存储数据的路径

     ![image-20230118103010849](https://img-blog.csdnimg.cn/689358bc7cf940b5aef292fb7a7c3388.png)

     

   - 指定 tracker 服务器地址和端口。不能是 127.0.0.1

     ![image-20230118103203809](https://img-blog.csdnimg.cn/aec7d0fb987c4ffd99cc923b3a0e9f01.png)



<br/>

#### client 的配置

1. 拷贝配置文件

   ~~~shell
   sudo cp /etc/fdfs/client.conf.sample /etc/fdfs/client.conf
   ~~~

2. 修改 配置文件

   ~~~shell
   sudo vim /etc/fdfs/client.conf
   ~~~

   - base_path

     ![image-20230118103439830](https://img-blog.csdnimg.cn/2de086a583cf42c49b918dfc805626af.png)

     

   - tracker_server

     ![image-20230118103631065](https://img-blog.csdnimg.cn/fae1c31290eb4466ade049b618818ef4.png)

     

<br/>

#### 启动服务

1. 启动 tracker

   ~~~shell
   sudo /usr/local/src/file/fastdfs/fastdfs-6.06/tracker/fdfs_trackerd /etc/fdfs/tracker.conf
   ~~~

   ~~~shell
   ps -aux | grep fdfs
   ~~~

2. 启动 storage

   ~~~shell
   sudo /usr/local/src/file/fastdfs/fastdfs-6.06/storage/fdfs_storaged /etc/fdfs/storage.conf
   ~~~

3. 拷贝 fdfs_trackerd 和 fdfs_storaged 到 /usr/bin 目录

   ~~~shell
    sudo cp -rf /usr/local/src/file/fastdfs/fastdfs-6.06/tracker/fdfs_trackerd /usr/bin
   ~~~

   ~~~shell
    sudo cp -rf /usr/local/src/file/fastdfs/fastdfs-6.06/storage/fdfs_storaged /usr/bin
   ~~~

   

<br/>

### FastDFS 客户端

#### 测试 storage 状态

storage server 的状态通常有七种



通过 fdfs_monitor 测试 storage 状态，正常状态必须是 ACTIVE，否则无法上传、下载文件：

~~~shell
fdfs_monitor /etc/fdfs/client.conf
~~~

![image-20230118105459010](https://img-blog.csdnimg.cn/f0d04b330bf54ea18fa6896c3eb61263.png)



<br/>

#### 上传、下载文件测试

在 **client 所在的机器**完成上传测试

~~~shell
fdfs_upload_file /etc/fdfs/client.conf test.txt
~~~

![image-20230118105653367](https://img-blog.csdnimg.cn/c89fc36d61f140bda543874aa6be0a93.png)



文件上传到 **storage 所在的服务器**：

![image-20230118105818059](https://img-blog.csdnimg.cn/dd270dcafd834fa9b418e7e5b9490c34.png)



在 client 所在的机器完成下载、删除测试：



下载：

~~~shell
fdfs_download_file /etc/fdfs/client.conf group1/M00/00/00/rBj_CGPHX-qAZ1itAAAADK8IOy0245.txt
~~~

![image-20230118110149824](https://img-blog.csdnimg.cn/f0504bdc05ed4d7c9274430c6881edb5.png)



删除：

~~~shell
fdfs_delete_file /etc/fdfs/client.conf group1/M00/00/00/rBj_CGPHX-qAZ1itAAAADK8IOy0245.txt
~~~

<br/>

### 上传文件源码简析

FastDFS 源码中提供了 client 实现的相应源码 `fdfs_upload_file.c`：

![image-20230118110620976](https://img-blog.csdnimg.cn/cccc16deb38f4ecf8da96ea29386bcef.png)





<br/>

## FastCGI



### spawn-fcgi

spawn-fcgi 源码包下载地址：http://redmine.lighttpd.net/projects/spawn-fcgi/wiki

1. 解压

   ~~~shell
   sudo tar -zxvf spawn-fcgi-1.6.4.tar.gz
   ~~~

2. 配置

   ~~~shell
   sudo ./configure
   ~~~

3. 编译安装

   ~~~shell
   sudo make && make install
   ~~~

4. 创建软连接

   ~~~shell
   sudo ln -s /usr/local/src/file/fastcgi/spawn-fcgi-1.6.4/src/spawn-fcgi /usr/bin/spawn-fcgi
   ~~~

   <br/>

## 软件开发套件 fcgi

> 使用 C/C++编写 FastCGI 应用程序，可以使用 FastCGI 软件开发套件或者其它开发框架，如 fcgi 。

fcgi 下载地址：wget https://fossies.org/linux/www/old/fcgi-2.4.0.tar.gz

1. 解压

   ~~~shell
   sudo tar -zxvf fcgi-2.4.1-SNAP-0910052249.tar.gz
   ~~~

2. 配置

   ~~~shell
   sudo ./configure
   ~~~

3. 编译安装

   ~~~shell
   sudo make && make install
   ~~~

   ~~~shell
   sudo ln -s /home/xxl/fastdfs/storage/fastdfs0/data /home/xxl/fastdfs/storage/fastdfs0/data/M00
   ~~~

   <br/>

## hiredis

> hiredis 是 Redis 数据库的一个 C 客户端库。









<br/><br/>

# 数据库

## mysql

### 一、安装

1. 下载安装（这条命令会下载最新版）

   ~~~shell
   sudo apt-get install -y mysql-server
   ~~~

   ~~~shell
   sudo apt-get install -y mysql-client
   ~~~

   MySQL 开发包

   ~~~shell
   sudo apt-get install -y libmysqlclient-dev
   ~~~

   

2. 启动服务

   ~~~shell
   service mysql start
   
   # 或者
   
   systemctl start mysql
   ~~~

3. 查看初始密码：

   ~~~shell
   cat /etc/mysql/debian.cnf
   ~~~

   <img src="https://img-blog.csdnimg.cn/7a7ed04d0bd94447a6dd6e3ef8a6970d.png" alt="image-20230101141741644" style="zoom:80%;" />



4. 使用初始账号密码进行登录：

   ~~~shell
   mysql -udebian-sys-maint -p
   ~~~

   <img src="https://img-blog.csdnimg.cn/bdb439e8dc4547aaa9bbf2fbf5fe0048.png" alt="image-20230101141822979" style="zoom:80%;" />

<br/>

### 二、更改 root 用户密码

更改 root 用户的密码（同时修改加密方式为：mysql_native_password）：

~~~shell
alter user "root"@localhost identified with mysql_native_password by "123";
~~~

或者：

~~~mysql
use mysql; 
update mysql.user set authentication_string=password('123') where user='root' and Host ='localhost'; 
update user set plugin="mysql_native_password"; 
flush privileges; 
~~~



若不需要修改加密方式，使用以下命令：

~~~shell
alter user "root"@localhost identified by "123";
~~~

<br/>

### 三、配置允许远程访问

1. 修改用户权限

   * root 用户授权，`*.*` 表示所有数据库的所有表，前一个\*表示数据库名，后一个\*表示表名
   * `'root'@'%'` 表示被授权的用户

   ~~~sql
   use mysql;
   GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
   UPDATE mysql.user SET host='%' WHERE user='root';
   ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123';
   flush privileges;
   ~~~

2. 查看用户的 host 以及 plugin 信息

   * host 设置为 % 意思是允许所有远程主机连接 MySQL

   * 如果 authentication 为空说明该用户没有设置密码

   ~~~sql
   use mysql;
   select user, host, plugin, authentication_string from user;
   ~~~

   ![image-20230102003256033](https://img-blog.csdnimg.cn/50d76999d9ff47b8a1ad43b6d787796b.png)

   

2. 查看以下文件，将 bind-address 注释掉，这样就能允许远程主机访问 MySQL 了

   ~~~shell
   /etc/mysql/mysql.conf.d/mysqld.cnf
   /etc/mysql/my.cnf
   /etc/mysql/mysql.cnf
   ~~~

   ![image-20230102104926902](https://img-blog.csdnimg.cn/b18a0a40034a41b5a0e7a4b8b089937d.png)

<br/>

#### 开放端口

1. 使用 firewall-cmd 命令开放端口（若没安装则安装 `sudo apt install -y firewalld`）：

   ~~~shell
   firewall-cmd --zone=public --add-port=3306/tcp --permanent
   ~~~

   或者使用 iptables 命令

   ~~~shell
   iptables -I INPUT -p tcp --dport 3306 -j ACCEPT
   
   如果出错则用这个：iptables -I INPUT -p tcp -m tcp --dport 3306 -j ACCEPT
   ~~~

   

若还不行，配置文件 `mysql.cnf` 加上：

~~~shell
[mysqld]
default_authentication_plugin=mysql_native_password
~~~

<br/>

#### 远程访问命令

查看 Linux 主机的 IP 地址

~~~shell
ifconfig

# 或者

ip addr
~~~

连接命令

~~~shell
mysql -h  172.18.248.230 -P 3306 -u root -p123
~~~

<br/>

#### 连接成功

![image-20230102110027397](https://img-blog.csdnimg.cn/fb6f7df6f69441e5854c9587cdf92e4f.png)



![image-20230102110130489](https://img-blog.csdnimg.cn/5c4703494ce241a39dae66d32eb13195.png)



设置 MySQL 字符编码 utf-8，可以支持中文操作

~~~mysql
show variables like "char%";	# 先查看 MySQL 默认的字符编码
~~~

~~~mysql
set character_set_server=utf8;
~~~

修改表的字符编码

~~~mysql
alter table user default character set utf8;
~~~

修改属性表字符编码

~~~mysql
alter table user modify column name varchar(50) character set utf8;
~~~





<br/>

## Redis 6.0

### 安装

[Redis 发行版下载地址](https://download.redis.io/releases)

1. 下载源码

   ~~~shell
   wget https://download.redis.io/releases/redis-6.0.0.tar.gz
   ~~~

2. 编译安装

   * PREFIX 表示安装地址

   ~~~shell
   make && make install PREFIX=/usr/local/src/redis/
   ~~~

3. 创建软链接

   ~~~shell
   sudo ln -s /usr/local/src/redis/bin/redis-cli /usr/bin/redis-cli
   ~~~

   ~~~shell
   sudo ln -s /usr/local/src/redis/bin/redis-server /usr/bin/redis-server
   ~~~

4. 创建配置文件 `vim redis.conf`：

   ~~~shell
   ## 把后台启动打开
   daemonize yes
   
   ## 把 bind 注释掉，打开则表示只有指定的网段才能访问 ip
   #bind 127.0.0.1 -::1
   
   ## 设置成 no 表示允许远程访问
   protected-mode no
   
   # 密码
   requirepass 123
   ~~~

5. 启动 redis 服务：

   ~~~shell
   redis-server /usr/local/src/redis/redis.conf
   ~~~

6. 验证 redis 服务：

   ~~~shell
   redis-cli
   auth 123 #密码验证
   ~~~

   ![image-20230101120755648](https://img-blog.csdnimg.cn/95dd708149a24ad9bd630890a6d309b8.png)

<br/>

### 远程连接命令

~~~shell
redis-cli -h 172.28.131.101 -p 6379
~~~

<br/>

### 设置开机自启动

1. 编写 `redisd`  （**通常都以d结尾表示是后台自启动服务**）

   ~~~shell
   vim redisd
   ~~~

   `redisd`内容如下：

   ~~~shell
   REDISPORT=6379
   EXEC=/usr/local/src/redis/bin/redis-server
   CLIEXEC=/usr/local/src/redis/bin/redis-cli
   PIDFILE=/var/run/redis_${REDISPORT}.pid
   CONF="/usr/local/src/redis/redis.conf"
   ~~~

2. 将 `redisd` 复制到 `/etc/init.d`

   ~~~shell
   cp redisd /etc/init.d
   ~~~

3. 让 `redisd` 取得执行权限

   ~~~shell
   sudo chmod +x /etc/init.d/redisd
   ~~~

4. 加载到系统自启动文件

   ~~~shell
   sudo update-rc.d redisd defaults
   ~~~

5. 开启 `redisd` 服务

   ~~~shell
   systemctl start redisd
   
   #或者使用service命令: 
   
   service redisd start
   ~~~

6. 查看 `redisd` 服务状态

   ~~~shell
   systemctl status redisd
   
   #或者使用service命令: 
   
   service redisd status
   ~~~

   显示 <font color="green">activate </font>，则说明启动成功。

   ![image-20230102102501869](https://img-blog.csdnimg.cn/e5ec77e130e449e1bd64a1be91adb5d6.png)





<br/>

### Redis 的一些命令

<br/>

## MongoDB

[Install MongoDB Community Edition on Ubuntu — MongoDB Manual](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

启动失败，原因是权限不够

~~~shell
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
~~~

可查看`/etc/mongodb.conf`

~~~shell
systemctl status mongod
~~~

~~~shell
db.createUser({user:"root", pwd:"123", roles:["userAdminAnyDatabase"]}) # 创建用户
~~~

~~~shell
db.auth("root", "123") # 登录验证
~~~

~~~shell
mongo 172.18.246.227/27017 -u root -p 123 # 远程连接
~~~





遇到依赖项的问题：

~~~shell
libssl1.1 (>=1.1.1) but 1.1.0g-2ubuntu4.1 is not installable
~~~

解决办法：

到这里下载[Index of /ubuntu](http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/)`libssl1.1_1.1.1-1ubuntu2.1~18.04.20_amd64.deb`

~~~shell
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1-1ubuntu2.1~18.04.20_amd64.deb
~~~

安装

~~~shell
dpkg -i libssl1.1_1.1.1-1ubuntu2.1~18.04.20_amd64.deb
~~~



<br/>

## PostgreSQL





<br/>

## SQLite3

<br/><br/>



# 容器

## docker

[Install on Ubuntu | Docker Documentation](https://docs.docker.com/desktop/install/ubuntu/)



<br/>

## Kubenates(k8s)
