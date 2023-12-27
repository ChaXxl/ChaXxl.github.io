
## 一. Git

### 1. Git 简介

~~~shell
git是一个分布式版本控制软件
~~~

<br/>

### 2. 安装

到官网下载Git软件安装：https://git-scm.com/

<br/>

### 3. Git 软件操作

显示当前路径：

~~~shell
pwd
~~~

<br/>

进入目录，生成版本库：

~~~shell
git inti
~~~

<br/>

master分支放最新的代码



~~~shell
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
~~~



![image-20210620220849304](https://i.loli.net/2021/06/20/lW9ioPUL457ZDEd.png)

![image-20210620220651833](https://i.loli.net/2021/06/20/eqxWL2s8nMSd1Ir.png)

<br/>

利用git init在文件夹内新建一个空白的仓库，或者叫版本库

~~~shell
git init
~~~



![image-20210620221258289](https://i.loli.net/2021/06/20/y3IBfqM2TzWXeH1.png)

![image-20210620222131438](https://i.loli.net/2021/06/20/4PJpANjBo2ruV7L.png)



<br/>

将暂存区的文件提交到分支：（m表示message，代表描述）

~~~shell
git commit -m '第一次提交'
~~~

<br/>

分支操作

创建分支：

~~~shell
git branch 分支名
~~~

查看分支：

~~~shell
git branch
~~~

切换分支：

~~~shell
git checkout 分支名
~~~

创建+切换分支：

~~~shell
git checkout -b 分支名
~~~

合并某分支到当前分支：

~~~shell
git merge 分支名
~~~

删除某分支：

~~~shell
git branch -d 分支名
~~~

![image-20210620220106512](https://i.loli.net/2021/06/20/v6bI3XaKpiOsRFc.png)

![image-20210620220134753](https://i.loli.net/2021/06/20/Wvf3bKuCmgezlxA.png)

在这获取项目地址，一般用ssh，比较安全。

![image-20210620220443484](https://i.loli.net/2021/06/20/WyaHGp5kh69OPKB.png)

远程库和本地库的连接

~~~shell
git remote add origin 地址
~~~

 git解除与远程分支的关联

```shell
git remote remove origin
```

更新本地库，即将远程库的文件拉到本地

~~~shell
git pull --rebase origin master
~~~



![image-20210620223155087](https://i.loli.net/2021/06/20/T5GwVxOQ1K9yre4.png)

将本地库更新到远程库

~~~shell
git push -u origin master
~~~
