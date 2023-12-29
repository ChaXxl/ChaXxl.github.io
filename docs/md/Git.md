
## 一. Git

### 1. Git 简介

~~~shell
git是一个分布式版本控制软件
~~~

![image-20210620222131438](https://i.loli.net/2021/06/20/4PJpANjBo2ruV7L.png)

<br/>

### 2. 安装

到官网下载Git软件安装：https://git-scm.com/

<br/>



### 3. 仓库

> 1. 在当前目录新建一个 Git 代码库
>
>     ~~~shell
>     git init
>     ~~~
>
> 2. 新建一个目录，将其初始化为 Git 代码库
>
>     ~~~shell
>     git init [project-name]
>     ~~~
>
> 3. 下载一个项目和它的整个代码历史
>
>     ~~~shell
>     git clone [url]
>     ~~~

<br/>

<br/>



### 4. 配置 Git 账户

>1. 显示当前的 Git 配置
>
>    ~~~shell
>    git config --list
>    ~~~
>
>2. 编辑 Git 配置文件
>
>    ~~~shell
>    git config -e [--global]
>    ~~~
>
>3. 设置提交代码时的用户信息
>
>    ~~~shell
>    git config [--global] user.name "[name]"
>    git config [--global] user.email "[email address]"
>    ~~~

<br/><br/>



### 5. 增加/删除文件

> 1. 添加指定文件到暂存区
>
>     ~~~shell
>     git add [file1] [file2] ...
>     ~~~
>
>     
>
> 2. 添加指定目录到暂存区，包括子目录
>
>     ~~~shell
>     git add [dir]
>     ~~~
>
>     
>
> 3. 添加当前目录的所有文件到暂存区
>
>     ~~~shell
>     git add .
>     ~~~
>
>     
>
> 4. 添加每个变化前，都会要求确认, 对于同一个文件的多处变化，可以实现分次提交
>
>     ~~~shell
>     git add -p
>     ~~~
>
>     
>
> 5. 删除工作区文件，并且将这次删除放入暂存区
>
>     ~~~shell
>     git rm [file1] [file2] ...
>     ~~~
>
>     
>
> 6. 停止追踪指定文件，但该文件会保留在工作区
>
>     ~~~shell
>     git rm --cached [file]
>     ~~~
>
>     
>
> 7. 改名文件，并且将这个改名放入暂存区
>
>     ~~~shell
>     git mv [file-original] [file-renamed]
>     ~~~



<br/>

<br/>



### 6. 代码提交

> 1. 提交暂存区到仓库区 -m 备注信息
>
>     ~~~shell
>     git commit -m [message]
>     ~~~
>
> 2. 提交暂存区的指定文件到仓库区
>
>     ~~~shell
>     git commit [file1] [file2] ... -m [message]
>     ~~~
>
> 3. 提交工作区自上次 commit 之后的变化，直接到仓库区
>
>     ~~~shell
>     git commit -a
>     ~~~
>
> 4. 提交时显示所有 diff 信息
>
>     ~~~shell
>     git commit -v
>     ~~~
>
> 5. 使用一次新的 commit ，替代上一次提交，如果代码没有任何新变化，则用来改写上一次commit的提交信息
>
>     ~~~shell
>     git commit --amend -m [message]
>     ~~~
>
> 6. 重做上一次 commit ，并包括指定文件的新变化
>
>     ~~~shell
>     git commit --amend [file1] [file2] ...
>     ~~~

<br/>

<br/>



### 7. 分支

分支就像多个文件夹一样。

> 1. 列出所有本地分支
>
>     ~~~shell
>     git branch
>     ~~~
>
>     
>
> 2. 列出所有远程分支
>
>     ~~~shell
>     git branch -r
>     ~~~
>
>     
>
> 3. 列出所有本地分支和远程分支
>
>     ~~~shell
>     git branch -a
>     ~~~
>
>     
>
> 4. 新建一个分支，但依然停留在当前分支
>
>     ~~~shell
>     git branch [branch-name]
>     ~~~
>
>     
>
> 5. 新建一个分支，并切换到该分支
>
>     ~~~shell
>     git checkout -b [branch]
>     ~~~
>
>     
>
> 6. 新建一个分支，指向指定 commit
>
>     ~~~shell
>     git branch [branch] [commit]
>     ~~~
>
>     
>
> 7. 新建一个分支，与指定的远程分支建立追踪关系
>
>     ~~~shell
>     git branch --track [branch] [remote-branch]
>     ~~~
>
>     
>
> 8. 切换到指定分支，并更新工作区
>
>     ~~~shell
>     git checkout [branch-name]
>     ~~~
>
>     
>
> 9. 切换到上一个分支
>
>     ~~~shell
>     git checkout -
>     ~~~
>
>     
>
> 10. 建立追踪关系，在现有分支与指定的远程分支之间
>
>     ~~~shell
>     git branch --set-upstream [branch] [remote-branch]
>     ~~~
>
>     
>
> 11.  合并指定分支到当前分支
>
>     ~~~shell
>     git merge [branch]
>     ~~~
>
>     
>
> 12. 选择一个commit，合并进当前分支
>
>     ~~~shell
>     git cherry-pick [commit]
>     ~~~
>
>     
>
> 13. 删除分支
>
>     ~~~shell
>     git branch -d [branch-name]
>     ~~~
>
>     
>
> 14. 删除远程分支
>
>     ~~~shell
>     git push origin --delete [branch-name]
>     ~~~
>
>     ~~~shell
>     git branch -dr [remote/branch]
>     ~~~



<br/><br/>



### 8. 标签

> 1. 列出所有 tag
>
>     ~~~shell
>     git tag
>     ~~~
>
>     
>
> 2. 新建一个 tag 在当前 commit
>
>     ~~~shell
>     git tag [tag] [commit]
>     ~~~
>
>     
>
> 3. 删除本地 tag
>
>     ~~~shell
>     git tag -d [tag]
>     ~~~
>
>     
>
> 4. 删除远程 tag
>
>     ~~~shell
>     git push origin :refs/tags/[tagName]
>     ~~~
>
>     
>
> 5. 查看 tag 信息
>
>     ~~~shell
>     git show [tag]
>     ~~~
>
> 6. 提交指定 tag
>
>     ~~~shell
>     git push [remote] [tag]
>     ~~~
>
>     
>
> 7. 提交所有 tag
>
>     ~~~shell
>     git push [remote] --tags
>     ~~~
>
>     
>
> 8. 新建一个分支，指向某个 tag
>
>     ~~~shell
>     git checkout -b [branch] [tag]
>     ~~~



<br/><br/>



### 9. 查看信息

> 1. 显示有变更的文件
>
>     ~~~shell
>     git status
>     ~~~
>
>     
>
> 2. 显示当前分支的版本历史
>
>     ~~~shell
>     git log
>     ~~~
>
>     
>
> 3. 显示commit历史，以及每次 commit 发生变更的文件
>
>     ~~~shell
>     git log --stat
>     ~~~
>
>     
>
> 4. 搜索提交历史，根据关键词
>
>     ~~~shell
>     git log -S [keyword]
>     ~~~
>
>     
>
> 5. 显示某个 commit 之后的所有变动，每个 commit 占据一行
>
>     ~~~shell
>     git log [tag] HEAD --pretty=format:%s
>     ~~~
>
>     
>
> 6. 显示某个 commit 之后的所有变动，其"提交说明"必须符合搜索条件
>
>     ~~~shell
>     git log [tag] HEAD --grep feature
>     ~~~
>
>     
>
> 7. 显示某个文件的版本历史，包括文件改名
>
>     ~~~shell
>     git log --follow [file]
>         
>     git whatchanged [file]
>     ~~~
>
>     
>
> 8. 显示指定文件相关的每一次 diff
>
>     ~~~shell
>     git log -p [file]
>     ~~~
>
>     
>
> 9. 显示过去 5 次提交
>
>     ~~~shell
>     git log -5 --pretty --oneline
>     ~~~
>
>     
>
> 10. 显示所有提交过的用户，按提交次数排序
>
>     ~~~shell
>     git shortlog -sn
>     ~~~
>
>     
>
> 11. 显示指定文件是什么人在什么时间修改过
>
>     ~~~shell
>     git blame [file]
>     ~~~
>
>     
>
> 12. 显示暂存区和工作区的差异
>
>     ~~~shell
>     git diff
>     ~~~
>
>     
>
> 13. 显示暂存区和上一个 commit 的差异
>
>     ~~~shell
>     git diff --cached [file]
>     ~~~
>
>     
>
> 14. 显示工作区与当前分支最新 commit 之间的差异
>
>     ~~~shell
>     git diff HEAD
>     ~~~
>
>     
>
> 15. 显示两次提交之间的差异
>
>     ~~~shell
>     git diff [first-branch]...[second-branch]
>     ~~~
>
>     
>
> 16. 显示今天你写了多少行代码
>
>     ~~~shell
>     git diff --shortstat "@{0 day ago}"
>     ~~~
>
>     
>
> 17. 显示某次提交的元数据和内容变化
>
>     ~~~shell
>     git show [commit]
>     ~~~
>
>     
>
> 18. 显示某次提交发生变化的文件
>
>     ~~~shell
>     git show --name-only [commit]
>     ~~~
>
>     
>
> 19. 显示某次提交时，某个文件的内容
>
>     ~~~shell
>     git show [commit]:[filename]
>     ~~~
>
>     
>
> 20. 显示当前分支的最近几次提交
>
>     ~~~shell
>     git reflog
>     ~~~
>
>     



<br/>

<br/>



### 10. 远程同步

> 1. 下载远程仓库的所有变动
>     ~~~shell
>     git fetch [remote]
>     ~~~
>     <br/>
>
> 2. 显示所有远程仓库
>     ~~~shell
>     git remote -v
>     ~~~
>     <br/>
>
> 3. 显示某个远程仓库的信息
>     ~~~shell
>     git remote show [remote]
>     ~~~
>     <br/>
>
> 4. 增加一个新的远程仓库，并命名
>     ~~~shell
>     git remote add [shortname] [url]
>     ~~~
>     <br/>
>
> 5. 取回远程仓库的变化，并与本地分支合并
>     ~~~shell
>     git pull [remote] [branch]
>     ~~~
>     <br/>
>
> 6. 上传本地指定分支到远程仓库
>     ~~~shell
>     git push [remote] [branch]
>     ~~~
>     <br/>
>
> 7. 强行推送当前分支到远程仓库，即使有冲突
>     ~~~shell
>     git push [remote] --force
>     ~~~
>     <br/>
>
> 8. 推送所有分支到远程仓库
>     ~~~shell
>     git push [remote] --all



<br/>

<br/>



### 11. 撤销

> 1. 恢复暂存区的指定文件到工作区
>     ~~~shell
>     git checkout [file]
>     ~~~
>     <br/>
>
> 2. 恢复某个 commit 的指定文件到暂存区和工作区
>     ~~~shell
>     git checkout [commit] [file]
>     ~~~
>     <br/>
>
> 3. 恢复暂存区的所有文件到工作区
>     ~~~shell
>     git checkout .
>     ~~~
>     <br/>
>
> 4. 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
>     ~~~shell
>     git reset [file]
>     ~~~
>     <br/>
>
> 5. 重置暂存区与工作区，与上一次 commit 保持一致
>     ~~~shell
>     git reset --hard
>     ~~~
>     <br/>
>
> 6. 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变
>     ~~~shell
>     git reset [commit]
>     ~~~
>     <br/>
>
> 7. 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定commit一致
>     ~~~shell
>     git reset --hard [commit]
>     ~~~
>     <br/>
>
> 8. 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变
>     ~~~shell
>     git reset --keep [commit]
>     ~~~
>     <br/>
>
> 9. 新建一个 commit，用来撤销指定 commit，后者的所有变化都将被前者抵消，并且应用到当前分支
>
>     ~~~shell
>     git revert [commit]
>     ~~~
>     <br/>
>
> 10. 暂时将未提交的变化移除，稍后再移入
>
>     ~~~shell
>     git stash
>     git stash pop
>     ~~~
>



<br/>

<br/>



### 12. 其他

> 1. 生成一个可供发布的压缩包
>
> ```shell
> git archive
> ```

<br/>

<br/>



<br/>

<br/>














