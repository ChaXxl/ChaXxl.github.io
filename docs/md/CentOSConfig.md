# CentOS配置

<br/><br/>

## 一. Clash科学上网

GitHub官网：https://github.com/Dreamacro/clash

<br/><br/>

## 二. Python安装

官网：https://www.python.org/



1. 进入src目录，因为我们要将 python 安装在 src 目录，当然你也可以安装到其它地方

  ~~~shell
  cd /usr/local/src
  ~~~

2. 下载

   ~~~shell
    wget https://www.python.org/ftp/python/3.10.6/Python-3.10.6.tgz
   ~~~

3. 解压

   ```shell
   tar -zxvf Python-3.10.6.tgz
   ```

4. 进入解压后的文件夹

   ~~~shell
   cd Python-3.10.6
   ~~~

5. 生成makefile

   ~~~shell
   ./configure --prefix=/usr/local/src/python3.10
   ~~~

6. 编译

   ~~~shell
   make && make install
   ~~~

7. 创建软链接

   ~~~shell
    sudo ln -s /usr/local/src/python3.10/bin/python3.10 /usr/bin/python3
   ~~~

      ~~~shell
    sudo ln -s /usr/local/src/python3.10/bin/pip3 /usr/bin/pip3
      ~~~

<br/>

验证是否安装完成：

![image-20220429083730778](https://img-blog.csdnimg.cn/4891420d227246509757e0d2686295ef.png)

<br/><br/>

## 三. Vim安装

[Vim GitHub 主页](https://github.com/vim/vim)

`.vimrc`常用配置

~~~shell
set numbers " 显示行号
set ts=4	" 设置Tab键为4个空格
~~~

<br/>

### 1. vim-plug插件库

[vim-plug GitHub 主页](https://github.com/junegunn/vim-plug)

`.vimrc`

~~~shell
call plug#begin('~/.vim/plugged')

Plug 'junegunn/vim-easy-align'

Plug 'https://github.com/junegunn/vim-github-dashboard.git'

Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

Plug 'fatih/vim-go', { 'tag': '*' }

Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

Plug '~/my-prototype-plugin'


call plug#end()
~~~

<br/>

#### YCM自动补全

~~~shell
Plug 'Valloric/YouCompleteMe'
~~~

<br/>

#### NERDTree目录树

~~~shell

~~~

<br/><br/>

## 四. MySql

官网：https://www.mysql.com/

<br/><br/>

## 五. MongoDB

官网：https://www.mongodb.com/

<br/><br/>

## 六. Sqlite3

[Sqlite 官网](https://www.sqlite.org)



1. 下载

  ```shell
  wget https://www.sqlite.org/2021/sqlite-autoconf-3370000.tar.gz
  ```

2. 解压

  ```shell
  tar zxvf  sqlite-autoconf-3370000.tar.gz
  ```

3. 配置安装路径....

  ```shell
  ./configure prefix=/usr/local/src/sqlite3
  ```

4. 编译和安装

  ```shell
  make && make install
  ```

5. 创建软链接

  ```shell
  ln -s /usr/local/src/sqlite3/bin/sqlite3  /usr/bin/sqlite3
  ```

6. 检查是否安装好

  ```shell
  sqlite3 --version
  ```

<br/>

--------

Configure是一个可执行脚本，它有很多选项，在待安装的源码路径下使用命令./configure–help输出详细的选项列表。其中，prefix选项是配置安装的路径，如果不配置该选项，安装后

* 可执行文件默认放在 `/usr/local/bin`

* 库文件默认放在 `/usr/local/lib`

* 配置文件默认放在 `/usr/local/etc`

* 其它的资源文件放在 `/usr/local/share`

<br/><br/>

## 七. Nginx

[Nginx 官网](http://nginx.org)

1. 下载

   ~~~shell
   wget http://nginx.org/download/nginx-1.20.2.tar.gz
   ~~~

2. 解压

   ~~~shell
   tar -zxvf nginx-1.20.2.tar.gz
   ~~~

3. 配置安装路径和模块

   ~~~shell
   ./configure --prefix=/usr/local/src/nginx-1.20.0 --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module
   ~~~

4. 编译和安装

   ~~~shell
   make && make install
   ~~~

5. 创建软链接

   ~~~shell
   ln -s nginx-1.20.2/sbin/niginx /usr/bin/nginx
   ~~~

6. 查看版本

   ~~~shell
   nginx --version
   ~~~

<br/><br/>

## 八. Node

[Nodejs 中文官网](http://nodejs.cn/)

1. 下载

   ~~~shell
   wget https://npmmirror.com/mirrors/node/v16.13.2/node-v16.13.2-linux-x64.tar.xz
   ~~~

2. 解压

   ~~~shell
   tar -xvJf node-v16.13.2-linux-x64.tar.xz
   ~~~


<br/><br/>

## 九. Redis

[Redis 官网](https://redis.io/)

<br/><br/>

## 十. 终端美化

### 1. 安装 zsh

1. 安装 zsh

   ~~~shell
   yum install -y zsh
   ~~~

2. 查看当前 shell

   ~~~shell
   echo $SHELL # 查看看当前使用的 shell
   cat /etc/shells # 查看系统是否安装了zsh
   ~~~

3. 切换 shell 为 zsh

   ~~~shell
   chsh -s /bin/zsh
   ~~~

4. 重启

   ~~~shell
   reboot
   ~~~

<br/>

### 2. 安装 oh-my-zsh

1. 安装 oh-my-zsh

   ~~~shell
   sh -c "$(wget https://img-1307852539.cos.ap-guangzhou.myqcloud.com/temp/install.sh -O -)"
   ~~~

2. 更换主题

   主题列表：https://github.com/ohmyzsh/ohmyzsh/wiki/themes#pygmalion

   ~~~shell
   vim ~/.zshrc
   ~~~

   更改 ZSH_THEME="robbyrussell" 中双引号主题 `gnzh`

 <br/>

### 3. 安装插件

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

`vim ~/.zshrc`

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

<br/><br/>

## 十一. 安装 Chrome 并使用 selenium

1. 下载安装包

   ~~~shell
   wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
   ~~~

2. 安装

   ~~~shell
   yum install google-chrome-stable_current_x86_64.rpm
   ~~~

   版本

![20220711195833](https://img-blog.csdnimg.cn/eec347d670c943eea9090160b6d2e940.png)



3. 下载驱动

   [下载地址](http://chromedriver.storage.googleapis.com/index.html)

4. 解压

   ~~~shell
    unzip chromedriver_linux64.zip 
   ~~~

   





