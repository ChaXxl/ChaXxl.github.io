# CentOS配置





# Clash科学上网

GitHub官网：https://github.com/Dreamacro/clash







# Python安装

官网：https://www.python.org/



进入src目录

~~~shell
cd /usr/local/src
~~~



1. 下载

   ~~~shell
    wget https://www.python.org/ftp/python/3.10.6/Python-3.10.6.tgz
   ~~~

2. 解压

   ```shell
   tar -zxvf Python-3.10.6.tgz
   ```

   

3. 进入解压后的文件夹

   ~~~shell
   cd Python-3.10.6
   ~~~

   

4. 生成makefile

   ~~~shell
   ./configure --prefix=/usr/local/src/python3.10
   ~~~

5. 编译

   ~~~shell
   make && make install
   ~~~

6. 创建软链接

   ~~~shell
    sudo ln -s /usr/local/src/python3.10/bin/python3.10 /usr/bin/python3
   ~~~

      ~~~shell
    sudo ln -s /usr/local/src/python3.10/bin/pip3 /usr/bin/pip3
      ~~~

验证是否安装完成：

![image-20220429083730778](https://img-blog.csdnimg.cn/4891420d227246509757e0d2686295ef.png)



# Vim安装

GitHub官网：https://github.com/vim/vim

`.vimrc`常用配置

~~~shell
set numbers " 显示行号
set ts=4	" 设置Tab键为4个空格

~~~







## vim-plug插件库

GitHub官网：https://github.com/junegunn/vim-plug

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





### YCM自动补全

~~~shell
Plug 'Valloric/YouCompleteMe'
~~~





### NERDTree目录树

~~~shell

~~~





# MySql

官网：https://www.mysql.com/





# MongoDB

官网：https://www.mongodb.com/





# Sqlite3

官网：https://www.sqlite.org



下载

```shell
wget https://www.sqlite.org/2021/sqlite-autoconf-3370000.tar.gz
```



解压

```shell
tar zxvf  sqlite-autoconf-3370000.tar.gz
```



配置安装路径....

```shell
./configure prefix=/usr/local/src/sqlite3
```



编译和安装

```shell
make && make install
```



创建软链接

```shell
ln -s /usr/local/src/sqlite3/bin/sqlite3  /usr/bin/sqlite3
```



检查是否安装好

```shell
sqlite3 --version
```





--------

<span style="font-size: 22px; color: grey; ">Configure是一个可执行脚本，它有很多选项，在待安装的源码路径下使用命令./configure–help输出详细的选项列表。
其中，prefix选项是配置安装的路径，如果不配置该选项，安装后</span>

* <span style="font-size: 22px; color: grey; ">可执行文件默认放在 `/usr/local/bin`</span>

* <span style="font-size: 22px; color: grey; ">库文件默认放在 `/usr/local/lib`</span>

* <span style="font-size: 22px; color: grey; ">配置文件默认放在 `/usr/local/etc`</span>

* <span style="font-size: 22px; color: grey; ">其它的资源文件放在 `/usr/local/share`</span>





# Nginx

官网：http://nginx.org

1. 下载

   ~~~shell
   wget http://nginx.org/download/nginx-1.20.2.tar.gz
   ~~~

2. 解压

   ~~~shell
   tar -zxvf nginx-1.20.2.tar.gz
   ~~~

3. 配置

   ~~~shell
   ./configure --prefix=/usr/local/src/nginx-1.20.0 --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module
   ~~~

4. 编译

   ~~~shell
   make && make install
   ~~~

5. 创建软链接

   ~~~shell
   ln -s nginx-1.20.2/sbin/niginx /usr/bin/nginx
   ~~~

   





# Node

中文官网：http://nodejs.cn/

1. 下载

   ~~~shell
   wget https://npmmirror.com/mirrors/node/v16.13.2/node-v16.13.2-linux-x64.tar.xz
   ~~~

2. 解压

   ~~~shell
   tar -xvJf node-v16.13.2-linux-x64.tar.xz
   ~~~

   





# Redis

官网：https://redis.io/





# 终端美化



## 安装zsh

~~~shell
yum install -y zsh
~~~



## 查看

~~~shell
echo $SHELL # 查看看当前使用的shell
cat /etc/shells # 查看系统是否安装了zsh
~~~



## 切换shell为zsh

~~~shell
chsh -s /bin/zsh
~~~



## 重启

~~~shell
reboot
~~~



## 安装oh-my-zsh

~~~shell
sh -c "$(wget https://img-1307852539.cos.ap-guangzhou.myqcloud.com/temp/install.sh -O -)"
~~~







## 更换主题

[主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#pygmalion)

更改ZSH_THEME="robbyrussell"中双引号主题  `gnzh`

~~~shell
vim ~/.zshrc
~~~



## 插件



### 智能提示

~~~shell
git clone https://gitee.com/xs66/zsh-autosuggestions $ZSH/plugins/zsh-autosuggestions
~~~





### 语法高亮

~~~shell
git clone https://gitee.com/xs66/zsh-syntax-highlighting.git $ZSH/plugins/zsh-syntax-highlighting
~~~





### 载入配置

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





# 安装Chrome并使用selenium

## 下载安装包

~~~shell
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
~~~



## 安装

~~~shell
yum install google-chrome-stable_current_x86_64.rpm
~~~

版本

![20220711195833](https://img-blog.csdnimg.cn/eec347d670c943eea9090160b6d2e940.png)



## 下载驱动

[下载地址](http://chromedriver.storage.googleapis.com/index.html)





解压

~~~shell
 unzip chromedriver_linux64.zip 
~~~





