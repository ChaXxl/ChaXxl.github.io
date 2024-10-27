

# Linux

## 一. 基础命令

### 1. ls 命令

1. -a

    列出所有

2. -l

    .

3. -h

    增加可读性

4. -R

    递归

5. -Q

    文件用双引号打印出来

### 2. echo 命令

1. 显示字符串

    ```shell
    echo Hello World
    echo "Hello World"
    ```

2. 显示转义字符。使用 `\`

    ```shell
    echo "\"Hello World!\""
    ```

3. 显示变量。使用 `$`

    ```shell
    echo $PATH
    ```

4. 显示换行/不换行。

    ```shell
    echo -e "Hello \n World"
    echo -e "Hello \c World" 不换行
    ```

5. 显示原样字符串

    ```shell
    echo '$PATH'=$PATH
    ```

6. 显示命令结果

    ```shell
    echo `date` `time`
    ```

### 3. cd 命令

`Change Directory`

1. ~

    表示当前用户

### 4. head 命令

1. -c n

    显示头部的指定 n 个字符

    ```shell
     head -c 2 hello.txt 
    ```

2. -n x

    显示头部的指定的 x 行

    ```shell
    head -n 2 hello.txt 
    ```

3. -v

    显示文件名

    ```shell
    head -v -n 2 hello.txt 
    ```

4. -q

    不显示文件名（默认就是带 -q）

### 5. tail 命令

1. -f

    可以不断地更新尾部内容

    ```shell
    tail -f hello.txt 
    ```

2. -n x

    显示尾部 x 行的内容

    ```shell
    tail -n 2 hello.txt
    ```

3. -c n

    显示头部的指定 n 个字符

    ```shell
    tail -c 20 hello.txt
    ```

### 6. ps 命令

1. -AL

    显示所有进程的详情和进程名称

    ```shell
    ps -AL
    ```

2. -aux

    显示所有进程和其启动命令

    ```shell
    ps -aux
    ```

    ![image-20231209143602908](https://img-blog.csdnimg.cn/direct/714e362a2a654d88b259c4fe97453d6a.png)

### 7. cp 命令

1. -a

    带属性复制。通常用在复制目录时，它保留链接、文件属性，并复制目录下的所有内容，其作用等于 dpR 参数组合。

    ```shell
    
    ```

2. -d

    复制时保留链接

    ```shell
    
    ```

3. -f

    强制覆盖。覆盖已经存在的目标文件而不给出提示

    ```shell
    
    ```

4. -p

    带权限复制。如修改时间、访问权限

    ```shell
    
    ```

5. -r

    文件夹复制

    ```shell
    
    ```

6. -l

    创建链接

    ```shell
    
    ```

### 8. rm 命令

1. -i

    删除确认

    ```shell
    
    ```

2. -f

    强制删除

    ```shell
    
    ```

3. -r

    目录删除

    ```shell
    
    ```

### 9. chmod

777 (111 111 111)

当前用户、当前用户组、其它用户。读、写、执行

### 10. 解压命令

```shell
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
```

`<br/><br/>`

### 11. SSH 免密登录

1. 首先在本机生成公钥和私钥

    ```shell
    ssh-kegen -t rsa
    ```

2. 在远程服务器上也生成公钥和私钥

    ```shell
    ssh-kegen -t rsa
    ```

3. 在服务器上, 将主机的公钥复制到 `~/.ssh/authorized_keys`文件中

`<br/><br/>`

### 12 上传下载文件

#### 上传

```shell
scp 文件路径 目的地用户名@目的地ip:目的地路径
```

```shell
scp     file    user@ip:/directory      ##上传文件
scp -r  dir user@ip:/directory          ##长传目录
```

<br/>

#### 下载

```shell
scp     user@ip:/filename   /direcotry  ##下载文件
scp -r  user@ip:/directory  /direcotry  ##下载目录
```

```shell
scp 远程服务器用户名@远程服务器ip:远程文件路径 本地存放路径
scp -r 远程服务器用户名@远程服务器ip:远程文件路径 本地存放路径
```

`<br/><br/>`

## 二. Linux 开发入门

### 1. 开发环境搭建

#### gcc 安装

<br/>

#### ssh 服务安装

<br/>

### 2. Linux 标准库函数

#### 字符串函数

```c
#include <ctype.h>
```

1. 测试字符是否为英文或数字

    ```c
    int isalnum(int c)
    ```

2. 测试字符是否是英文字母

    ```c
    int isalpha(int c)
    ```

3. 测试字符是否为 ASCII 码字符

    ```c
    int isascii(int c)
    ```

4. 测试字符是否为空格字符

    ```c
    int isblank(int c)
    ```

5. 测试字符是否为 ASCII 码的控制字符

    ```c
    int iscntrl(int c)
    ```

6. 测试字符是否为阿拉伯数字

    ```c
    int isdigit(int c)
    ```

7. 测试字符是否为可打印字符

    ```c
    int isgraph(int c)
    ```

8. 测试字符是否为小写英文字母

    ```c
    int islower(int c)
    ```

9. 测试字符是否为可打印字符

    ```c
    int isprint(int c)
    ```

10. 测试字符是否为空格字符

    ```c
    int isspace(int c)
    ```

11. 测试字符是否为标点符号或特殊符号

    ```c
    int ispunct(int c)
    ```

12. 测试字符是否为大写英文字母

    ```c
    int issuper(int c)
    ```

13. 测试字符是否为 16 进制数字

    ```c
    int isxdigit(int c)
    ```

<br/>

#### 数据转换函数

```C
#include <stdlib.h>
```

1. 将字符串转换为浮点型数

    ```c
    double atof(const char* str)
    ```

2. 将字符串转换为整型数

    ```c
    int atoi(const char* str)
    ```

3. 将字符串转换成长整型数

    ```c
    long int atol(const char* str)
    ```

4. 将字符串转换成 64 位整数(C++11)

    ```c
    long long int atoll(const char* str)
    ```

5. 将字符串转换成整数

    ```c
    long int strtol(const char* str, char ** endptr, int base)
    ```

    base 指进制: 2、8、10

    ```c
    strtoll("1234567891000", NULL, 10) // 示例 
    ```

    ```c
    char *pEnd;
    strtoll("123456789abc", pEnd, 10);	// pEnd 将指向 abc
    ```

6. 将字符串转换成先符号整数

    ```c
    unsigned long int strtoul(const char* str, char **endptr, int base)
    ```

7. 将字符串转换成长整数(C++11)

    ```c
    long long int strtoll(const char* str, char **endptr, int base)
    ```

8. 将字符串转换成无符号长整数(C++11)

    ```c
    unsigned long long int strtoull(const char*, char **endptr, int base)
    ```

9. 将字符串转换成浮点数(C++11)

    ```c
    float strtof(const char *str, char **endptr)
    ```

10. 将字符串转换成双精度数

    ```c
    double strtod(const char *str, char **endptr)
    ```

11. 将字符串转换成长双精度数(C++11)

    ```c
    long double strdold(const char *str, char **endptr)
    ```

    <br/>

12. 将浮点型数增加的成字符串

    ```c
    char *evt(double value, int ndigit, int *decpt, int *sign)
    ```

    Value: 输入要转换的数

    ndigit: 指的是全部的有效位数

    decpt: 返回小数点的下标

    sign: 返回符号。正数为0, 负数为1

    ```c
    int decpt, sign;
    char *res = evt(-123.456789, 9, &decpt, &sign);
    // res: 123456789。decpt: 3。sign: 1
    ```

13. 将浮点型数转换为字符串

    ```c
    char *fcvt(double value, int ndigit, int *decpt, int *sign)
    ```

    ndigit: 小数点之后的有效位

14. 将浮点型数转换为字符串

    ```c
    char *gcvt(double value, int ndigit, char *buf)
    ```

    buf 和返回值是一样的

    ```c
    char buf[1238];
    char *res = gcvt(0.123, 5, buf);	// res: 0.123
    char *res = gcvt(-0.456, 5, buf);	// res: -0.456
    ```

<br/>

#### 格式化输入输出函数

1. 格式化输出数据

    ```c
    int printf(const char *format);
    ```

2. 格式化输出数据(可变长)

    ```c
    int vprintf(const char *format, va_list arg);
    ```

    ```c
    #include <stdarg.h>
    
    void test(const char *format, ...) {
    	va_list ap;
        va_start(ap, format);
    
        vprintf(format, ap);
    
        va_end();
    }
    ```

3. 格式化字符串输入

    ```c
    int scanf(const char *format, ...)
    ```

    空格是默认的分隔符

4. 格式化字符串复制

    ```c
    int sprintf(char *str, const char *format, ...);
    int sprintf(char *str, size_t size, cosnt char *format, ...);
    ```

5. 格式化字符串输入

    ```c
    int sscanf(const char *str, cosnt char *format, ...);
    ```

6. 格式化字符串复制

    ```c
    int vsnprintf(char *s, size_t n, const char *format, va_list arg);
    int vsprintf(char *str, const char *format, va_list arg);
    ```

7. 格式化字符串输入

    ```c
    int vsscanf(const char *s, const char *format, va_list arg);
    ```

8. 格式化输出至文件

    ```c
    int vfprintf(FILE *stream, const char *format, va_lit arg);
    ```

9. 格式化文件字符串输入

    ```c
    int vfscanf(FILE *stream, const char *format, va_list arg);
    ```

10. 格式化输出数据至文件

    ```c
    int fprintf(FILE *stream, const char *format, ...);
    ```

<br/>

#### 权限控制函数

##### Linux 权限说明

出于在 Linux 一切皆文件，所以这些权限对进程、内存都是有效的

* 设置用户权限: S 提权和降权
* 设置组权限: s
* 仅所有者可删除权限: t
* 读取权限：r(Read)   4(100)
* 写入权限：w(Write)  2(010)
* 执行权限：x(Execute) 1(001)

所有者

所在组

其它组

```shell
drwxr-xr-x

d: 表示这是个目录
rwx: 所有者的权限
r-x: 所在组的权限
r-x: 其它组的权限
```

```c
#include <unistd.h>
#include <sys/types.h>
```

1. 取得有效的用户识别码

    ```c
    uid_t geteuid(void);
    ```

    * `真实的用户 r`：当下程序所拥有的用户状态
    * 有效的用户 e：程序启动时所拥有的用户状态

    

    * 0: root

    * 1000~10000(不包含10000):system、数据库、服务 tty 保留的用户

    * 10000及以上: 其它用户

        Android 每个应用会分配一个用户（系统应用例外）

2. 取得真实的用户识别码

    ```c
    uid_t getuid(void);
    ```

3. 取得真实的组织识别码

    ```c
    gid_t getgid(void);
    ```

4. 设置真实的用户识别码

    ```c
    int setuid(uid_t uid);
    ```

5. 设置有效的用户识别码

    ```c
    int seteuid(uid_t uid);
    ```

6. 设置真实及有效的用户识别码

    ```c
    int setreuid(uid_t uid, uid_t euid);
    ```

7. 设置真实及有效的组识别码

    ```c
    int setregid(gid_t rgid, gid_t egid);
    ```

8. 设置有效的组识别码

    ```c
    int setegid(gid_t egid);
    ```

9. 设置真实的组识别码

    ```c
    int setgid(gid_t gid);
    ```

10. 创建会话 ID (只能是子进程调用):

    ```c
    pid_t setsid(void);
    ```

<br/>

#### I/O 函数

> ```c
> #include <sys/types.h>
> #include <sys/stat.h>
> #include <fcntl.h>
> ```
>
> 1. 打开文件
>
>     ```c
>     int open(const char *pathname, int flags, mode_t mode)
>     ```
>
>     flags:
>
>     * O_RDONLY: 只读
>     * O_WRONLY: 只写
>     * O_RDWR: 读、写
>     * O_CREAT: 若文件不存在，则创建它，需要使用 mode 选项。来指明新文件的访问权限
>     * O_APPEND: 追加写
>
>     mode:
>
>     * S_IRUSR、S_IWUSR、S_IXUSR 所有者的读、写、执行
>     * S_IRGRP、S_IWGRP、S_IXGRP 所属组的读、写、执行
>     * S_IROTH、S_IWOTH、S_IXOTH 其它用户的读、写、执行
>
> 2. 创建文件
>
>     ```c
>     int create(const char *pathname, mode_t mode)
>     ```





> ~~~c
> #include <unistd.h>
> ~~~
>
> 1. 从打开的文件读取文件数据
>
>     ~~~c
>     ssize_t read(int fd, void *buf, size_t count)
>     ~~~
>
> 2. 从打开的文件写入文件数据
>
>     ~~~c
>     ssize_t write(int fd, const void *buf, size_t count)
>     ~~~
>
> 3. 关闭文件
>
>     ~~~c
>     int close(int fd)
>     ~~~
>
> 4. 复制文件描述符
>
>     ~~~c
>     int dup(int oldfd)
>     ~~~
>
> 5. 复制文件描述符到新的文件描述符中去
>
>     ~~~c
>     int dup2(int oldfd, int newfd)
>     ~~~
>
> 6. 文件控制
>
>     ~~~c
>     int fcntl(int fd, int cmd, .../* arg */)
>     ~~~
>
> 7. 文件数据同步(将缓存中的数据写入到磁盘)
>
>     ~~~c
>     int fsync(ind fd)
>     ~~~



> ==文件读写位置修改==
>
> ~~~c
> #include <sys/types.h>
> #include <unistd.h>
> 
> off_t lseek(int fd, off_t offset, int whence)
> ~~~
>
> whence:
>
> * SEEK_SET: 参数 offset 即为新的读写位置
>
> * SEEK_CUR: 以目前的读写位置往后增加 offset 个位移量
>
> * SEEK_END 将读写位置指向文件尾后再增加 offset 个位移量。
>
>     当 whence 值为 SEEK_CUR 或 SEEK_END 时，offset 可以为负值



~~~c
#include<stdlib.h>

// 创建临时文件--文件是临时的，不保证数据长期有效
int mkstemp(char *template);
// template: 前缀XXXXXX
~~~

> ==文件锁操作==
>
> ~~~c
> int flock(int fd, int operation)
> ~~~
>
> operation:
>
> * LOCK_SH: 建立共享锁定。多个进程可同时对同一个文件作共享锁定
> * LOCK_EX: 建立互斥锁定。一个文件同时只有一个互斥锁定
> * LOCK_UN: 解除文件锁定状态。文件被关闭时自动解锁
> * LOCK_NB: NoneBlock 无法建立锁定时，此操作可不被阻断，马上返回进程。通常与 LOCK_SH 或 LOCK_EX 做 OR(|) 组合





> ==文件控制 (打开、关闭、读取、写入、控制)==
>
> ~~~c
> #include <fcntl.h>
> ~~~
>
> ~~~c
> int fcntl(int fd, int cmd, ... /* arg */)
> ~~~
>
> ~~~c
> int fcntl(int fd, int cmd)
> ~~~
>
> ~~~c
> int fcntl(int fd, int cmd, long arg)
> ~~~
>
> ~~~c
> int fcntl(int fd, int cmd, struct flock *lock) // ==> F_GETLK F_SETLK
> ~~~
>
> cmd:
>
> * F_DUPDF: 用来查找大于或等于参数 arg 的最小且仍未使用的文件描述符，并且复制参数 fd 的文件描述符。执行成功则返回新复制的文件描述符。新描述符与 fd 共享同一文件表项，但是新描述符有它自己的一套文件描述符标志，其中 FD_CLOEXEC 文件描述符标志被清除
> * F_GETDF: 取得 close-on-exec 标志。若此标志的 FD_CLOEXEC 位为 0，代表在调用 exec() 相关函数时文件将不会关闭
> * F_GETFL: FL(Flags) 取得文件描述符状态标志，此标志为 open() 的参数 flags。
> * F_SETFL: 设置文件描述符状态标志，参数 arg 为新标志，但只允许 O_APPEND、O_NONBLOCK、O_ASYNC 位的改变，其它位的改变将不受影响
> * F_GETLK: LK(Lock) 取得文件锁定的状态
> * F_SETLK: 设置文件锁定的状态。此时 flock 结构的 l_type 值必须是 F_RDLCK、F_WRLCK 或 F_UNLCK。如果无法建立锁定，则返回 -1，错误代码为 EACCES 或 EAGAIN
> * F_SETLKW(wait)、F_SETLK 作用相同，但是无法建立锁定时，此调用会一直等到锁定动作成功为止。若在等待锁定的过程中被信号中断时，会立即返回 -1，错误代码为 EINTR







`<br/>`

#### 进程控制函数



>1. 执行文件
>
>    ~~~c
>    #include <unistd.h>
>    
>    int execl(const char *path, const char *arg, ...);
>    int execlp(const char *file, const char *arg, ...);
>    int execle(const char *path, const char *arg, ..., char *const evnp[]);
>    int execvp(const char *file, char * const argv[]);
>    int execve(const char *filename, char *const argv[], char * const envp[]) //内核级别调用
>    ~~~
>
>    * l: 进程执行的参数, 以可变参数的形式给出, 这些参数以 NULL 为最后一个参数
>    * p: exec 会将当前的 PATH 作为一个参考环境变量, 比如 file 不用写绝对路径,可以用相对路径
>    * e: 进程函数会需要用户来设置这个环境变量 evnp
>    * v: 进程函数会用参数数组来传递 argv, 数组最后一个成员需要是 NULL
>
>2. 建立一个新进程
>
>  ~~~c
>pid_t fork(void);
>  ~~~
>
>  pid_t:
>
>  * 大于 0 的数, 此时就是父进程
>  * 等于 0 的数, 此时就是子进程
>  * 小于 0 的数, 表示创建失败
>
>
>
>3. 以异常方式结束进程
>
>  ~~~c
>void abort(void);
>  ~~~
>
>4. 若测试的条件不成立则终止进程
>
>  ~~~c
>#include <assert.h>
>void assert(int expression); // expression 不成立才触发
>  ~~~
>
>5. 正常结束进程
>
>  ~~~c
>void exit(int status);
>  ~~~
>
>6. 设置程序正常结束前调用的函数
>
>  ~~~c
>int atexit(void(*func)(void));
>  ~~~
>
>  设置程序正常结束前调用的函数
>
>  ~~~c
>int on_exit(void (*function)(int, void*), void *arg);
>  ~~~
>
>7. 结束进程执行
>
>  ~~~c
>void _exit(int status); // 直接结束，不会触发其它的
>  ~~~
>
>



> ~~~c
> #include <setjmp.h>
> 
> jmp_buf jmpbuf;	// 建议设置成全局变量
> ~~~
>
> 1. 保存目前堆栈环境
>
>     ~~~c
>     int setjmp(jmp_buf environment);
>     ~~~
>
>     jmp_buf: 存储的是寄储器信息
>
> 2. 跳转到原先 setjmp 保存的堆栈环境
>
>     ~~~c
>     void longjmp(jmp_buf environment, int value);
>     ~~~
>
> 3. 改变进程优先顺序: 跳转到原先 sigsetjmp 保存的堆栈环境
>
>     ~~~c
>     void siglongjmp(sigjmp_buf env, int val);
>     ~~~
>
>     sigjmp_buf 除了缓存寄存器，还会缓存上下文（堆栈、当前的寄存器、当前的状态、下一条指令位置...）
>
> 4. 保存目前堆栈环境
>
>     ~~~c
>     int sigsetjmp(sigjmp_buf env, int savemask);
>     ~~~
>
> 作用是可以实现异常捕获、逆向中拿到上下文进行修改某些东西





> 1. 取得进程组识别码
>
>     ~~~c
>     pid_t getpgid(pid_t pid);
>     ~~~
>
> 2. 取得当前进程组识别码
>
>     ~~~c
>     pid_t getpgrp(void);
>     ~~~
>
> 3. 取得进程识别码
>
>     ~~~c
>     pid_t getpid(void);
>     ~~~
>
> 4. 取得父进程的进程识别码
>
>     ~~~c
>     pid_t getppid(void);
>     ~~~
>
> 5. 取得程序进程执行优先权
>
>     ~~~c
>     #include <sys/resource.h>
>                 
>     int getpriority(int which, int who);
>     ~~~
>
> 





> 1. 设置进程组识别码
>
>     ~~~c
>     int setpgid(pid_t pid, pid_t pgid);
>     ~~~
>
> 2. 设置进程组识别码
>
>     ~~~c
>     int setpgrp(void);
>     ~~~
>
> 3. 设置程序进程执行优先权
>
>     ~~~c
>     int setpriority(int which, int who, int prio);
>     ~~~
>
> 4. 改变进程优先级
>
>     ~~~c
>     int nice(int inc);
>     ~~~
>
> 注：修改优先级需要权限，一般是有效用户的权限（即启动程序的那个用户）



> 1. 执行 shell 命令
>
>     ~~~c
>     #include <stdlib.h>
>     
>     int system(char *command);
>     ~~~
>
> 2. 等待**子**进程中断或结束, 一般和 fork 配套使用
>
>     ~~~c
>     #include <sys/types.h>
>     #include <sys/wait.h>
>                 
>     int wait(int *status);
>                 
>     pid_t waitpid(pit_t pid, int *status, int options);
>     ~~~
>
>     status:
>
>     * WIFEXITED: if exited
>
>     * WIFSIGNALED
>
>     * WIFSTOPPED
>
> 
>
>     * WEXITSTATUS
>                 
>     * WTERMSIG
>                 
>     * WSTOPSIG
>                 
>     options:
>                 
>     * WNOHANG: no hang 非阻塞
>     * WUNTRACED: under traced 被调试
>     * WCONTINUED: continued 发生了信号导致进程暂停





<br/>

#### 文件和目录函数

> ==文件操作函数==
>
> 1. 打开文件
>
>     ~~~c
>     FILE *fopen(const char *path, const char *mode); // 不能指定权限
>     ~~~
>
>     mode:
>
>     * r: 读
>     * w: 写
>     * r+ 、w+: 可读可写
>     * +: 创建
>     * a: 追加
>     * b: 二进制
>     * t: 文本 (默认的)
>
> 
>
> 2. 关闭文件
>
>     ~~~c
>     fclose(FILE *fp);
>     ~~~



> 1. 打开文件-文件输入输出重定向
>
>     ~~~c
>     FILE *freopen(const char *filename, const char *mode, FILE *stream);
>     ~~~
>
>     ~~~c
>     // 示例: 把控制台输出导到文件中
>                 
>     FILE *pFile = freopen("./test.txt", "a+", stdout);
>                 
>     std::cout << std::endl;
>     std::cout << __FILE__ << ":" << __LINE__ << " " << __FUNCTION__ << std::endl;
>                 
>     if (nullptr != pFile) fclose(pFile);
>     ~~~
>
> 
>
> 2. 将文件描述词转为文件指针
>
>     用 open 函数打开的时候, 得到一个 fd, 可以把文件描述符转换为 FILE *
>
>     ~~~c
>     FILE *fdopen(int fildes, const char *mode);
>     ~~~
>
> 3. 返回文件流所使用的文件描述词
>
>     文件指针转换为文件描述符 (fd: file describtion)
>
>     ~~~c
>     int fileno(FILE *stream);
>     ~~~



> 1. 从文件流读取数据
>
>     ~~~c
>     size_t fread(void *buffer, size_t size, size_t count, FILE *stream);
>     ~~~
>
> 1. 由文件中读取一字符串
>
>     ~~~c
>     int fgetc(FILE *stream);
>     ~~~
>
> 1. 由文件中读取一字符串
>
>     ~~~c
>     char *fgets(char *str, int n, FILE *stream); // 文件必须以 t 模式打开
>     ~~~
>
> 1. 将数据写至文件流
>
>     ~~~c
>     size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
>     ~~~
>
> 1. 更新缓冲区
>
>     ~~~c
>     int fflush(FILE *stream);
>     ~~~
>
> 



> 1. 将一指定字符写入文件流中
>
>     ~~~c
>     int fputc(int c, FILE *fp);
>     ~~~
>
> 2. 将一指定的字符串写入文件内
>
>     ~~~c
>     int fputs(const char *str, FILE *stream);
>     ~~~
>
> 3. 将数据写入至文件流
>
>     ~~~c
>     size_t fwrite(const char *ptr, size_t size, size_t nmemb, FILE *stream);
>     ~~~
>
> 4. 更新缓冲区
>
>     ~~~c
>     int fflush(FILE *stream);
>     ~~~
>
> 





<br/>

#### printf 函数 format 详解









<br/>

#### scanf 函数 format 详解







### 3. 网络编程基础

#### 网络的基本概念

##### 网络的物理结构





<br/>

##### 网络中的地址





<br/>

##### 网络的中的端口





<br/>

##### 什么是协议



<br/>

##### TCP协议基础











<br/>

#### 套接字介绍



<br/>

#### 套接字的创建





<br/>

#### 地址和端口的设置





<br/>

#### 绑定地址和端口





<br/>

#### 监听和接受连接





<br/>

#### 数据的读取和发送



<br/>

#### 连接服务器



<br/>

#### 接收和发送数据



<br/>

#### 关闭连接







#### 错误处理

<br/>

<br/>

<br/>

<br/>





