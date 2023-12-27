# docker

:::info 镜像和容器的区别

1. 镜像是包含了各种环境或者服务的一个模板，而容器是镜像的一个实例；

2. 镜像是我们写的代码、是文件、是静态的、是不能运行的；而容器则是运行这个代码发起的进程、是动态的，本质是一个进程。

:::



![](https://img-blog.csdnimg.cn/img_convert/dc1e809f20b5fc7df0f8cb793a7e0196.png)

<br/>

1. 查看版本

   ~~~shell
   docker --version
   ~~~

   ~~~shell
   docker-compose --version
   ~~~

   ~~~shell
   docker-machine --version
   ~~~

2. 查看 docker 系统信息

   ~~~shell
   docker info
   ~~~

3. 帮助命令

   ~~~shell
   docker help
   ~~~

4. 查看 CPU 概况

   ~~~shell
   docker stats
   ~~~

   <br/>

### 1. docker 镜像相关的基本命令

1. 查看镜像可用版本，以 nginx 为例

   ~~~shell
   docker search nginx
   ~~~

2. 下载一个镜像，以 nginx 最新版为例

   ~~~shell
   docker pull nginx:lates
   ~~~

3. 运行一个 nginx 服务器

   ~~~shell
   docker run -d -p 81:80 --name webserver nginx
   ~~~

   可选项：

   * `--name webserver`: 容器名称，用来区分容器
   * `-p 81:80`：端口进行映射，将本地的 81 端口映射到容器内部的 80 端口
   * `-v ~/nginx/html:/usr/share/nginx/html 数据卷挂载/ro/rw`：将主机项目中的目录挂载到容器的目录下，默认 rw 智能在宿主机外改变，容器内部不能改变
   * `-d`：设置容器在后台一直运行
   * `-it`：使用交互方式运行，进入容器查看内容
   * `-p`：随机端口
   * `-e`：环境配置设置

   注意：后台启动运行，必须要又一个前台进程，docker 发现没有应用，就会自动停止

   重点：数据卷挂载分为 具名/指定路径挂载，容器数据卷挂载可以实现数据共享，容器的持久化和同步操作，可以使用 docker volumn 查看卷的情况，可以使用 volumnes-from 实现多个容器之间的数据共享

   <br/>

4. 停止 nginx 服务

   ~~~shell
   docker stop webserver #（webserver 是容器ID）
   ~~~

5. 删除 nginx 服务

   ~~~shell
   docker rm webserver
   ~~~

6. 启动、重启 nginx 服务

   ~~~shell
   docker start webserver
   ~~~

   ~~~shell
   docker restart webserver
   ~~~

7. 列出所有镜像

   ~~~shell
   docker image ls
   ~~~

   可选项：

   * `-a`：列出所有镜像
   * `-q`：只显示镜像的 ID

   注意：镜像 ID 是唯一标识符，一个镜像可以对应多个标签

   <br/>

8. 查看镜像、容器、数据卷所占用的空间

   ~~~shell
   docker system off
   ~~~

9. 删除镜像

   * 指定镜像

     ~~~shell
     docker rmi [镜像名称/镜像ID/镜像摘要]
     ~~~
     
   * 多个镜像

     ~~~shell
     docker rmi 镜像ID 镜像ID 镜像ID
     ~~~
     
   * 全部镜像

     ~~~shell
     docker rim $(docker images -aq)
     ~~~

10. 删除所有仓库名为 redis 的镜像

    ~~~shell
    docker rmi $(docker images ls -q redis)
    ~~~

11. 查看镜像运行记录

    ~~~shell
    docker history 镜像ID
    ~~~

    <br/>

### 2. docker 容器相关的基本命令

1. 列出容器

   ~~~shell
   docker ps
   ~~~

   可选项：

   * `-a`：显示所有的容器，包括未运行的
   * `-i`：显示最近创建的容器
   * `-q`：只显示容器的编号

   <br/>

2. 进入容器

   ~~~shell
   docker exec -it 容器名称 /bin/bash
   ~~~

   ~~~shell
   docker attach 容器ID
   ~~~

   区别：

   docker exec 进入容器后开启一个新的终端，可以在里面操作；

   docker attach 进入容器正在执行的终端

   <br/>

3. 退出容器

   * 容器停止，退回主机

     ~~~shell
     exit
     ~~~

   * 容器不停止退出

     <kbd>Ctrl</kbd> + <kbd>p</kbd> + <kbd>q</kbd>
     
     <br/>

4. 删除容器

   * 指定容器

     ~~~shell
     docker rm 容器ID
     ~~~

   * 多个容器

     ~~~shell
     docker rm 容器ID 容器ID 容器ID
     ~~~

   * 所有容器

     ~~~shell
     docker rm $(docker ps -aq) docker ps -a -q | xargs docker rm
     ~~~

   * 注意：不能删除正在运行的容器，要删除正在运行的容器需要加 `-f` 参数

     ~~~shell
     docker rm -f 容器ID
     ~~~

5. 启动、重启容器

   ~~~shell
   docker start 容器ID
   ~~~

   ~~~shell
   docker restart 容器ID
   ~~~

6. 停止、强制停止容器

   ~~~shell
   docker stop 容器ID
   ~~~

   ~~~shell
   docker kill 容器ID
   ~~~

7. 查看容器日志

   ~~~shell
   docker logs -f -t --tail 100 容器ID
   ~~~

   --tail 后面必须加参数条数

8. 查看容器中的进程信息

   ~~~shell
   docker top 容器ID
   ~~~

9. 查看容器的元数据（重要命令）

   ~~~shell
   docker inspect 容器ID
   ~~~

10. 从容器上拷贝数据到主机上

    ~~~shell
    docker cp 容器ID:容器内路径 主机路径
    ~~~

    <br/>

### 3. Dockerfile 的命令

~~~dockerfile
FROM 基础镜像，一切从这里开始

MAINTAINER 镜像的作者 姓名<邮箱>

RUN 镜像构建需要运行的命令

ADD 步骤，添加内容

WORKDIR 镜像的工作目录

VOLUME 挂载的目录

EXPOST 端口配置

CMD 指定容器启动要运行的命令，只有最后一行会生效，可被替代

ENTRYPOINT 指定这个容器启动要运行的命令，可以追加命令

ONBUILD 当构建一个被继承的 Dockerfile 时会运行

COPY 类似 ADD 将我们文件拷贝到镜像中

ENV 构建的时候设置环境变量
~~~



