## Ubuntu配置

## 命令

### ls 命令

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

### echo 命令

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

### cd 命令

`Change Directory`

1. ~

   表示当前用户

### head 命令

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

### tail 命令

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

### ps 命令

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

### cp 命令

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

### rm 命令

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

### chmod

777 (111 111 111)

当前用户、当前用户组、其它用户。读、写、执行

### 解压命令

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

### SSH 免密登录

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

### 上传下载文件

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

## Linux 开发入门

### 开发环境搭建

#### gcc 安装

<br/>

#### ssh 服务安装

<br/>

### Linux 标准库函数

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
>    ```c
>    int open(const char *pathname, int flags, mode_t mode)
>    ```
>
>    flags:
>
>    * O_RDONLY: 只读
>    * O_WRONLY: 只写
>    * O_RDWR: 读、写
>    * O_CREAT: 若文件不存在，则创建它，需要使用 mode 选项。来指明新文件的访问权限
>    * O_APPEND: 追加写
>
>    mode:
>
>    * S_IRUSR、S_IWUSR、S_IXUSR 所有者的读、写、执行
>    * S_IRGRP、S_IWGRP、S_IXGRP 所属组的读、写、执行
>    * S_IROTH、S_IWOTH、S_IXOTH 其它用户的读、写、执行
> 2. 创建文件
>
>    ```c
>    int create(const char *pathname, mode_t mode)
>    ```





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
>



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
>   ~~~c
>   pid_t fork(void);
>   ~~~
>
>   pid_t:
>
>   * 大于 0 的数, 此时就是父进程
>   * 等于 0 的数, 此时就是子进程
>   * 小于 0 的数, 表示创建失败
>
>   
>
>3. 以异常方式结束进程
>
>   ~~~c
>   void abort(void);
>   ~~~
>
>4. 若测试的条件不成立则终止进程
>
>   ~~~c
>   #include <assert.h>
>   void assert(int expression); // expression 不成立才触发
>   ~~~
>
>5. 正常结束进程
>
>   ~~~c
>   void exit(int status);
>   ~~~
>
>6. 设置程序正常结束前调用的函数
>
>   ~~~c
>   int atexit(void(*func)(void));
>   ~~~
>
>   设置程序正常结束前调用的函数
>
>   ~~~c
>   int on_exit(void (*function)(int, void*), void *arg);
>   ~~~
>
>7. 结束进程执行
>
>   ~~~c
>   void _exit(int status); // 直接结束，不会触发其它的
>   ~~~
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







### 网络编程基础

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

























## WSL

### WSL微软官方教程

[适用于 Linux 的 Windows 子系统文档 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/)

<br/>

### 固定IP

```vbscript
Set ws = WScript.CreateObject("WScript.Shell")
ws.run "wsl -d CentOS7 -u root sudo service sshd start", vbhide
ws.run "wsl -d CentOS7 -u root ip addr add 172.28.131.101/20 broadcast 172.28.143.255 dev eth0 label eth0:1", vbhide
```

```powershell
netsh interface ip add address "vEthernet (WSL)" 172.28.131.102 255.255.240.0
```

<br/>

## clash配置

[参考教程](https://blog.csdn.net/DPCFish/article/details/121663625)

[参考教程](https://zhuanlan.zhihu.com/p/451863859)

1. 下载软件

   ```shell
   wget https://gitee.com/wzqxxl/transit/attach_files/1047328/download/clash-linux-amd64-v1.10.0.gz
   ```
2. 配置订阅链接

   ```shell
   wget -O config.yaml 这里改成你的订阅链接
   ```

   ```shell
   wget -O Country.mmdb https://gitee.com/wzqxxl/transit/attach_files/1047342/download/Country.mmdb
   ```
3. 文件结构

![image-20220429150221411](https://img-blog.csdnimg.cn/e423988c682746cea936c691accae982.png)

4. 给clash赋予权限

   ```shell
   sudo chmod +x clash1.10.0
   ```
5. 运行

   ```shell
   ./clash1.10.0 -d .
   ```

   后台运行

   ```shell
   screen -S clash  /usr/local/src/clash/clash1.10.0 -d /usr/local/src/clash/
   ```

   `<br/><br/>`

## 更换源

备份原来的文件

```shell
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

1. 查看codename（该版本系统的代号）

   ```shell
   lsb_release -a
   ```

   ![20220703111614](https://img-blog.csdnimg.cn/f10402b865794107a817fee586887389.png)

**阿里源**

将 `$Codename` 替换为上面获取的 Codename 即可

```shell
sudo vim /etc/apt/sources.list
```

```shell
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
```

```shell
sudo apt update
```

<br/>

## 依赖项安装

```shell
sudo apt-get install -y  gcc  cmake  gdb net-tools openssl curl build-essential  libtool  ca-certificates  gnupg  lsb-release  git-core bison  libreadline6-dev zlib1g  zlib1g-dev  libssl-dev  libyaml-dev  libsqlite3-0 libsqlite3-dev  sqlite3  autoconf libc6-dev  libpcre3-dev  libcurl4-nss-dev  libxml2-dev libxslt-dev imagemagick libffi-dev firewalld
```

```shell
## sudo apt-get install -y python3-pip python3-dev python-dev
```

<br/>

## 安装proxychains

```shell
sudo apt-get install -y proxychains
```

1. 将 dns 这行注释掉

   ```shell
   vim /etc/proxychains.conf
   ```

   ![image-20220426130042979](https://img-blog.csdnimg.cn/eb445eabcdd84c5ea1490fc5ed9f04c9.png)

   <br/>
2. Clash（或者其它代理软件） 打开局域网连接

   ![image-20230102132046978](https://img-blog.csdnimg.cn/a7d36df1020a4c7e870146c8387987bd.png)

   <br/>
3. 设置代理列表，`类型 空格 IP 空格 端口`

   ![image-20220426130202733](https://img-blog.csdnimg.cn/99f4300c2f52466785ba4d6b40e0147c.png)

   ```shell
   http 192.168.1.206 7890
   https 192.168.1.206 7890
   socks5 192.168.1.206 7890
   ```
4. 使用

   只需要在命令前面加上 `proxychains`即可

   ```shell
   proxychains curl google.com
   ```

   ![image-20220426130404354](https://img-blog.csdnimg.cn/2b4c61b852b8464990b680f368e09457.png)

`<br/><br/>`

## 终端美化与加强

### 安装 zsh

1. 查看系统是否装了 zsh

   * 查看当前使用的 shell

     ```shell
     echo $SHELL
     ```

     ![image-20230508104432828](https://img-blog.csdnimg.cn/cf9594d2a47b4f78bb4d14440dd970e8.png)

     <br/>
   * 查看系统是否装了 zsh

     ```shell
     cat /etc/shells
     ```

     ![image-20230508104352410](https://img-blog.csdnimg.cn/43702e3175ef4114aac58c0680c08eba.png)

     <br/>
2. 安装 zsh（系统没有查到zsh，则安装)

   ```shell
   sudo apt-get install -y zsh
   ```
3. 切换 shell 为 zsh

   ```shell
   chsh -s /bin/zsh
   ```

   ```shell
   sudo chsh -s /bin/zsh
   ```
4. 重启Linux

   ```shell
   sudo reboot
   ```
5. 开机后，zsh 会要求用户选择启动项。

   输入 0 即可

   ![image-20230508105152947](https://img-blog.csdnimg.cn/a1b61e46c4c54d9c9d68949ce8d4396c.png)

   <br/>
6. 查看当前 shell , 如果显示 /bin/zsh ，则配置成功

   ```shell
   sudo echo $SHELL
   ```

   ![image-20230508105257255](https://img-blog.csdnimg.cn/699aabea1277499ca39f97bfd20494b6.png)

   <br/>
7. 安装 oh my zsh

   ```shell
   sh -c "$(wget https://gitee.com/wzqxxl/ohmyzsh/releases/download/%E6%96%87%E4%BB%B6/install.sh -O -)"
   ```
8. 到此就安装完成

   <img src="https://img-blog.csdnimg.cn/4bf8e37608bd461d868614f214d4fc0d.png" alt="image-20230101101103549" style="zoom: 67%;" />
9. 更换主题

[主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#pygmalion)

```shell
vim ~/.zshrc
```

修改 `ZSH_THEME`参数即可。之后执行即可更换主题：gnzh

```shell
source ~/.zshrc
```

![image-20220426130630207](https://img-blog.csdnimg.cn/8e36d716a98947b58079f92732c4baf8.png)

<br/>

使用 powerlevel10k 主题

~~~shell
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
~~~

~~~shell
ZSH_THEME="powerlevel10k/powerlevel10k"
~~~





### oh-my-zsh插件

#### 智能提示

```shell
git clone https://gitee.com/xs66/zsh-autosuggestions $ZSH/plugins/zsh-autosuggestions
```

<br/>

#### 语法高亮

```shell
git clone https://gitee.com/xs66/zsh-syntax-highlighting.git $ZSH/plugins/zsh-syntax-highlighting
```

<br/>

#### 载入配置

```shell
vim ~/.zshrc
```

```shell
plugins=(
   git
   extract
   cp
   safe-paste
   colored-man-pages
   
   zsh-syntax-highlighting
   zsh-autosuggestions
 )
```

<br/>

#### 使配置生效

```shell
source ~/.zshrc
```

`<br/><br/>`

## Vim

### 配置 Vim

```shell
sudo vim ~/.vimrc
```

参考配置文件：

```shell
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
```

<br/>

### 更改主题

1. 下载主题

   注：将路径改为自己的，例如，你可能是 `/usr/share/vim/vim9`，也可能是 `/usr/share/vim/vim8`

   ```shell
   sudo  wget -O /usr/share/vim/vim81/colors/tender.vim https://gitee.com/wzqxxl/transit/attach_files/1114920/download/tender.vim
   ```

   ```shell
   sudo  wget -O /usr/share/vim/vim80/colors/tender.vim https://gitee.com/wzqxxl/transit/attach_files/1114920/download/tender.vim
   ```

   * 注：MacOS下无法访问/usr/目录，则在根目录下文件夹 `~/.vim/colors`，将主题文件放在该目录下即可
   * -O 参数表示将下载内容保存到所指定的文件
   * 主题文件所在文件夹：`/usr/share/vim/vim82/colors`
2. 设置 `~/.vimrc` 配置主题

   ```shell
   sudo vim ~/.vimrc
   ```

   ```shell
   colorscheme tender "设置主题
   ```

   ![image-20230102111123266](https://img-blog.csdnimg.cn/9ff00e678df2407fad27c6d588dc0a63.png)
3. 更多主题

   [VIM 配色方案推荐](https://zhuanlan.zhihu.com/p/58188561)

<br/>

### vim-plug 插件管理 安装

GitHub 主页：https://github.com/junegunn/vim-plug

插件市场：https://vimawesome.com/

1. 下载 `vim-plug`

   ```shell
   curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
       https://gitee.com/wzqxxl/transit/attach_files/1114918/download/plug.vim
   ```
2. 编辑 `.vimrc`

   ```shell
   vim ~/.vimrc
   ```

   一些插件

   ```shell
   
   ```
3. 安装插件：

   ```shell
   vim
   ```

   * 如果配置了代理，安装了 `proxychains` ，则可以用下面这条命令

     ```shell
     proxychains vim
     ```

   按 `<kbd>`Shift`</kbd>` + `<kbd>`:`</kbd>` 进入命令模式，输入

   ```shell
   PlugInstall
   ```

   ![image-20230102112243637](https://img-blog.csdnimg.cn/a0759729358947288d1c6ac003e75f5d.png)

   `<font color="grey">`【注】由于插件是去 GitHub 下载，而国内网络无法连接，故需要靠科学上网`</font>`

<br/>

### 自动补全插件 coc 安装

GitHub 主页：https://github.com/neoclide/coc.nvim

编辑 `.vimrc`：

```shell
Plug 'neoclide/coc.nvim', {'branch': 'release'}
```

运行 `PlugInstall`

<br/>

### 自动补全插件 YCM 安装

```shell
cd ~/.vim/plugged/YouCompleteMe
```

```shell
python3 ./install.py --clangd-completer --force-sudo
```

配置 `vimrc`

```shell
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<c-b>"
let g:UltiSnipsJumpBackwardTrigger="<c-z>"
" If you want :UltiSnipsEdit to split your window.
let g:UltiSnipsEditSplit="vertical"
```

```shell
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
```

`<br/><br/>`

## 安装 Miniconda

[Index of miniconda 清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/?C=M&O=D)

`<br/><br/>`

## 安装 workon

`<br/><br/>`

## 编程环境

### Python

1. 下载

   ```shell
   wget https://www.python.org/ftp/python/3.7.16/Python-3.7.16.tar.xz
   ```
2. 解压

   ```shell
   tar -xvf Python-3.7.16.tar.xz
   ```
3. 配置安装路径

   ```shell
   ./configure prefix=/usr/local/src/Python
   ```
4. 编译和安装

   ```shell
   make && make install
   ```
5. 创建软链接

   ```shell
    sudo ln -s /usr/local/src/Python/bin/python3.7 /usr/bin/python
   ```

   ```shell
    sudo ln -s /usr/local/src/Python/bin/pip3 /usr/bin/pip
   ```

   <br/>

#### 更换 pip 源

```shell
vim ~/.pip/pip.conf
```

添加以下内容：

```shell
[global]
timeout = 6000
index-url = https://pypi.doubanio.com/simple
trusted-host = pypi.doubanio.com
```

<br/>

### PCRE 库

PCRE 库源码包下载地址: https://sourceforge.mirrorservice.org/p/pc/pcre/pcre/8.39/pcre-8.39.tar.gz

1. 下载

   ```shell
   wget https://sourceforge.mirrorservice.org/p/pc/pcre/pcre/8.39/pcre-8.39.tar.gz
   ```
2. 解压

   ```shell
   sudo tar -zxvf pcre-8.39.tar.gz
   ```
3. 配置

   ```shell
   sudo ./configure
   ```
4. 编译和安装

   ```shell
   sudo make && sudo make install
   ```

   <br/>

   ## zlib 库
5. 下载

   ```shell
   wget https://nchc.dl.sourceforge.net/project/libpng/zlib/1.2.11/zlib-1.2.11.tar.gz
   ```
6. 解压

   ```shell
   sudo tar -zxvf zlib-1.2.11.tar.gz
   ```
7. 配置

   ```shell
   sudo ./configure
   ```
8. 编译和安装

   ```shell
   sudo make && sudo make install
   ```

<br/>

### OpenSSL 开发库

1. 下载

   ```shell
   sudo wget https://www.openssl.org/source/openssl-1.1.1g.tar.gz
   ```
2. 解压

   ```shell
   sudo tar -zxvf openssl-1.1.1g.tar.gz
   ```
3. 配置

   ```shell
   sudo ./config
   ```
4. 编译和安装

   ```shell
   sudo make && sudo make install
   ```

   <br/>

### Nginx

[官网](http://nginx.org)

1. 下载

   ```shell
   sudo wget http://nginx.org/download/nginx-1.16.1.tar.gz
   ```
2. 解压

   ```shell
   sudo tar -zxvf nginx-1.16.1.tar.gz
   ```
3. 配置安装路径、模块

   ```shell
   sudo ./configure --prefix=/usr/local/src/nginx --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module
   ```
4. 编译

   ```shell
   sudo make && sudo make install
   ```
5. 创建软链接

   ```shell
   ln -s /usr/local/src/nginx/sbin/niginx /usr/bin/nginx
   ```

<br/>

### FastDFS

#### libfastcommon 的安装

> libfastcommon 为 FastDFS 操作的基础库，FastDFS 没有使用标准的库，而是封装了一套和
> FastDFS 相关的库。

[libfastcommon 源码](https://github.com/happyfish100/libfastcommon)

1. 下载

   ```shell
   wget https://gitee.com/wzqxxl/transit/releases/download/FastDFS/libfastcommon-1.0.43.tar.gz
   ```
2. 解压

   ```shell
   sudo tar -xzvf libfastcommon-1.0.43.tar.gz
   ```
3. 编译代码、安装

   ```shell
   sudo ./make.sh && sudo ./make.sh install
   ```
4. 动态库安装后的路径

   安装成功后，默认会复制到 /usr/lib64 下
5. 设置环境变量或者创建软链接

   ```shell
   export LD_LIBRARY_PATH=/usr/lib64/:$LD_LIBRARY_PATH
   ```

   ```shell
   sudo ln -s /usr/lib64/libfastcommon.so /usr/lib/libfastcommon.so
   ```

   <br/>

#### FastDFS 的安装

FastDFS 源代码下载地址：
https://code.google.com/archive/p/fastdfs/downloads
https://github.com/happyfish100/fastdfs.git
这里使用的是 V6.06 版本

1. 下载

   ```shell
   wget https://gitee.com/wzqxxl/transit/releases/download/FastDFS/fastdfs-6.06.tar.gz
   ```
2. 解压

   ```shell
   sudo tar -zxvf fastdfs-6.06.tar.gz
   ```
3. 编译、安装

   ```shell
   sudo ./make.sh && sudo ./make.sh install
   ```
4. 可执行程序默认会安装到/usr/bin 中：

   ![image-20230118100311642](https://img-blog.csdnimg.cn/1c64590bccae41b5a9b1b643f5a0f954.png)
5. 安装成功后，自动在 /etc/fdfs 中添加三个配置文件：

   ![image-20230118100707397](https://img-blog.csdnimg.cn/f1eabfb046a643dc8e7a955abdebf764.png)

<br/>

#### FastDFS 的配置

> 先配置 tracker，再添加一个 storage，每添加添加一个 storage，实际上是 storage 连接 tracker，tracker 必须存在，否则 storage 无法加进来，client 主要用于测试上传、下载文件。

<br/>

##### tracker 的配置

1. 拷贝配置文件

   ```shell
   sudo cp /etc/fdfs/tracker.conf.sample /etc/fdfs/tracker.conf
   ```
2. 修改 配置文件

   ```shell
   sudo vim /etc/fdfs/tracker.conf
   ```

   - tracker 所在服务器的 ip

   ![image-20230118101911902](https://img-blog.csdnimg.cn/ec6d2e7b45dc44339a4baac70e13d242.png)

   - tracker 日志存放的路径 (此路径必须已经存在，不然后面会报错)

   ![image-20230118102336469](https://img-blog.csdnimg.cn/2f584b20dfac4c3485e73dea4215d576.png)

<br/>

##### storage 的配置

1. 拷贝配置文件

   ```shell
   sudo cp /etc/fdfs/storage.conf.sample /etc/fdfs/storage.conf
   ```
2. 修改 配置文件

   ```shell
   sudo vim /etc/fdfs/storage.conf
   ```

   - storage 所在服务器 ip

     ![image-20230118102650673](https://img-blog.csdnimg.cn/cfb3d63c0ffc485f80583f6040be71f6.png)
   - storage 存放日志的路径 (此路径必须已经存在，不然后面会报错)

   ![image-20230118102816641](https://img-blog.csdnimg.cn/d861345036f04a69a187ebd34bcd811b.png)

   - 真正存储数据的路径

     ![image-20230118103010849](https://img-blog.csdnimg.cn/689358bc7cf940b5aef292fb7a7c3388.png)
   - 指定 tracker 服务器地址和端口。不能是 127.0.0.1

     ![image-20230118103203809](https://img-blog.csdnimg.cn/aec7d0fb987c4ffd99cc923b3a0e9f01.png)

<br/>

##### client 的配置

1. 拷贝配置文件

   ```shell
   sudo cp /etc/fdfs/client.conf.sample /etc/fdfs/client.conf
   ```
2. 修改 配置文件

   ```shell
   sudo vim /etc/fdfs/client.conf
   ```

   - base_path

     ![image-20230118103439830](https://img-blog.csdnimg.cn/2de086a583cf42c49b918dfc805626af.png)
   - tracker_server

     ![image-20230118103631065](https://img-blog.csdnimg.cn/fae1c31290eb4466ade049b618818ef4.png)

<br/>

##### 启动服务

1. 启动 tracker

   ```shell
   sudo /usr/local/src/file/fastdfs/fastdfs-6.06/tracker/fdfs_trackerd /etc/fdfs/tracker.conf
   ```

   ```shell
   ps -aux | grep fdfs
   ```
2. 启动 storage

   ```shell
   sudo /usr/local/src/file/fastdfs/fastdfs-6.06/storage/fdfs_storaged /etc/fdfs/storage.conf
   ```
3. 拷贝 fdfs_trackerd 和 fdfs_storaged 到 /usr/bin 目录

   ```shell
    sudo cp -rf /usr/local/src/file/fastdfs/fastdfs-6.06/tracker/fdfs_trackerd /usr/bin
   ```

   ```shell
    sudo cp -rf /usr/local/src/file/fastdfs/fastdfs-6.06/storage/fdfs_storaged /usr/bin
   ```

<br/>

#### FastDFS 客户端

##### 测试 storage 状态

storage server 的状态通常有七种

通过 fdfs_monitor 测试 storage 状态，正常状态必须是 ACTIVE，否则无法上传、下载文件：

```shell
fdfs_monitor /etc/fdfs/client.conf
```

![image-20230118105459010](https://img-blog.csdnimg.cn/f0d04b330bf54ea18fa6896c3eb61263.png)

<br/>

##### 上传、下载文件测试

在 **client 所在的机器**完成上传测试

```shell
fdfs_upload_file /etc/fdfs/client.conf test.txt
```

![image-20230118105653367](https://img-blog.csdnimg.cn/c89fc36d61f140bda543874aa6be0a93.png)

文件上传到 **storage 所在的服务器**：

![image-20230118105818059](https://img-blog.csdnimg.cn/dd270dcafd834fa9b418e7e5b9490c34.png)

在 client 所在的机器完成下载、删除测试：

下载：

```shell
fdfs_download_file /etc/fdfs/client.conf group1/M00/00/00/rBj_CGPHX-qAZ1itAAAADK8IOy0245.txt
```

![image-20230118110149824](https://img-blog.csdnimg.cn/f0504bdc05ed4d7c9274430c6881edb5.png)

删除：

```shell
fdfs_delete_file /etc/fdfs/client.conf group1/M00/00/00/rBj_CGPHX-qAZ1itAAAADK8IOy0245.txt
```

<br/>

#### 上传文件源码简析

FastDFS 源码中提供了 client 实现的相应源码 `fdfs_upload_file.c`：

![image-20230118110620976](https://img-blog.csdnimg.cn/cccc16deb38f4ecf8da96ea29386bcef.png)

<br/>

### FastCGI

#### spawn-fcgi

spawn-fcgi 源码包下载地址：http://redmine.lighttpd.net/projects/spawn-fcgi/wiki

1. 解压

   ```shell
   sudo tar -zxvf spawn-fcgi-1.6.4.tar.gz
   ```
2. 配置

   ```shell
   sudo ./configure
   ```
3. 编译安装

   ```shell
   sudo make && make install
   ```
4. 创建软连接

   ```shell
   sudo ln -s /usr/local/src/file/fastcgi/spawn-fcgi-1.6.4/src/spawn-fcgi /usr/bin/spawn-fcgi
   ```

   <br/>

### 软件开发套件 fcgi

> 使用 C/C++编写 FastCGI 应用程序，可以使用 FastCGI 软件开发套件或者其它开发框架，如 fcgi 。

fcgi 下载地址：wget https://fossies.org/linux/www/old/fcgi-2.4.0.tar.gz

1. 解压

   ```shell
   sudo tar -zxvf fcgi-2.4.1-SNAP-0910052249.tar.gz
   ```
2. 配置

   ```shell
   sudo ./configure
   ```
3. 编译安装

   ```shell
   sudo make && make install
   ```

   ```shell
   sudo ln -s /home/xxl/fastdfs/storage/fastdfs0/data /home/xxl/fastdfs/storage/fastdfs0/data/M00
   ```

   <br/>

### hiredis

> hiredis 是 Redis 数据库的一个 C 客户端库。

`<br/><br/>`

## 数据库

### mysql

#### 一、安装

1. 下载安装（这条命令会下载最新版）

   ```shell
   sudo apt-get install -y mysql-server
   ```

   ```shell
   sudo apt-get install -y mysql-client
   ```

   MySQL 开发包

   ```shell
   sudo apt-get install -y libmysqlclient-dev
   ```
2. 启动服务

   ```shell
   service mysql start
   
   # 或者
   
   systemctl start mysql
   ```
3. 查看初始密码：

   ```shell
   cat /etc/mysql/debian.cnf
   ```

   <img src="https://img-blog.csdnimg.cn/7a7ed04d0bd94447a6dd6e3ef8a6970d.png" alt="image-20230101141741644" style="zoom:80%;" />
4. 使用初始账号密码进行登录：

   ```shell
   mysql -udebian-sys-maint -p
   ```

   <img src="https://img-blog.csdnimg.cn/bdb439e8dc4547aaa9bbf2fbf5fe0048.png" alt="image-20230101141822979" style="zoom:80%;" />

<br/>

#### 二、更改 root 用户密码

更改 root 用户的密码（同时修改加密方式为：mysql_native_password）：

```shell
alter user "root"@localhost identified with mysql_native_password by "123";
```

或者：

```mysql
use mysql; 
update mysql.user set authentication_string=password('123') where user='root' and Host ='localhost'; 
update user set plugin="mysql_native_password"; 
flush privileges; 
```

若不需要修改加密方式，使用以下命令：

```shell
alter user "root"@localhost identified by "123";
```

<br/>

#### 三、配置允许远程访问

1. 修改用户权限

   * root 用户授权，`*.*` 表示所有数据库的所有表，前一个\*表示数据库名，后一个\*表示表名
   * `'root'@'%'` 表示被授权的用户

   ```sql
   use mysql;
   GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
   UPDATE mysql.user SET host='%' WHERE user='root';
   ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123';
   flush privileges;
   ```
2. 查看用户的 host 以及 plugin 信息

   * host 设置为 % 意思是允许所有远程主机连接 MySQL
   * 如果 authentication 为空说明该用户没有设置密码

   ```sql
   use mysql;
   select user, host, plugin, authentication_string from user;
   ```

   ![image-20230102003256033](https://img-blog.csdnimg.cn/50d76999d9ff47b8a1ad43b6d787796b.png)
3. 查看以下文件，将 bind-address 注释掉，这样就能允许远程主机访问 MySQL 了

   ```shell
   /etc/mysql/mysql.conf.d/mysqld.cnf
   /etc/mysql/my.cnf
   /etc/mysql/mysql.cnf
   ```

   ![image-20230102104926902](https://img-blog.csdnimg.cn/b18a0a40034a41b5a0e7a4b8b089937d.png)

<br/>

##### 开放端口

1. 使用 firewall-cmd 命令开放端口（若没安装则安装 `sudo apt install -y firewalld`）：

   ```shell
   firewall-cmd --zone=public --add-port=3306/tcp --permanent
   ```

   或者使用 iptables 命令

   ```shell
   iptables -I INPUT -p tcp --dport 3306 -j ACCEPT
   
   如果出错则用这个：iptables -I INPUT -p tcp -m tcp --dport 3306 -j ACCEPT
   ```

若还不行，配置文件 `mysql.cnf` 加上：

```shell
[mysqld]
default_authentication_plugin=mysql_native_password
```

<br/>

##### 远程访问命令

查看 Linux 主机的 IP 地址

```shell
ifconfig

## 或者

ip addr
```

连接命令

```shell
mysql -h  172.18.248.230 -P 3306 -u root -p123
```

<br/>

##### 连接成功

![image-20230102110027397](https://img-blog.csdnimg.cn/fb6f7df6f69441e5854c9587cdf92e4f.png)

![image-20230102110130489](https://img-blog.csdnimg.cn/5c4703494ce241a39dae66d32eb13195.png)

设置 MySQL 字符编码 utf-8，可以支持中文操作

```mysql
show variables like "char%";	# 先查看 MySQL 默认的字符编码
```

```mysql
set character_set_server=utf8;
```

修改表的字符编码

```mysql
alter table user default character set utf8;
```

修改属性表字符编码

```mysql
alter table user modify column name varchar(50) character set utf8;
```

<br/>

### Redis 6.0

#### 安装

[Redis 发行版下载地址](https://download.redis.io/releases)

1. 下载源码

   ```shell
   wget https://download.redis.io/releases/redis-6.0.0.tar.gz
   ```
2. 编译安装

   * PREFIX 表示安装地址

   ```shell
   sudo make && sudo make install PREFIX=/usr/local/src/redis/
   ```
3. 创建软链接

   ```shell
   sudo ln -s /usr/local/src/redis/bin/redis-cli /usr/bin/redis-cli
   ```

   ```shell
   sudo ln -s /usr/local/src/redis/bin/redis-server /usr/bin/redis-server
   ```
4. 创建配置文件 `vim redis.conf`：

   ```shell
   ## 把后台启动打开
   daemonize yes
   
   ## 把 bind 注释掉，打开则表示只有指定的网段才能访问 ip
   #bind 127.0.0.1 -::1
   
   ## 设置成 no 表示允许远程访问
   protected-mode no
   
   # 密码
   requirepass 123
   ```
5. 启动 redis 服务：

   ```shell
   redis-server /usr/local/src/redis/redis.conf
   ```
6. 验证 redis 服务：

   ```shell
   redis-cli
   auth 123 #密码验证
   ```

   ![image-20230101120755648](https://img-blog.csdnimg.cn/95dd708149a24ad9bd630890a6d309b8.png)

<br/>

#### 远程连接命令

```shell
redis-cli -h 172.28.131.101 -p 6379
```

<br/>

#### 设置开机自启动

1. 编写 `redisd`  （**通常都以d结尾表示是后台自启动服务**）

   ```shell
   vim redisd
   ```

   `redisd`内容如下：

   ```shell
   REDISPORT=6379
   EXEC=/usr/local/src/redis/bin/redis-server
   CLIEXEC=/usr/local/src/redis/bin/redis-cli
   PIDFILE=/var/run/redis_${REDISPORT}.pid
   CONF="/usr/local/src/redis/redis.conf"
   ```
2. 将 `redisd` 复制到 `/etc/init.d`

   ```shell
   cp redisd /etc/init.d
   ```
3. 让 `redisd` 取得执行权限

   ```shell
   sudo chmod +x /etc/init.d/redisd
   ```
4. 加载到系统自启动文件

   ```shell
   sudo update-rc.d redisd defaults
   ```
5. 开启 `redisd` 服务

   ```shell
   systemctl start redisd
   
   #或者使用service命令: 
   
   service redisd start
   ```
6. 查看 `redisd` 服务状态

   ```shell
   systemctl status redisd
   
   #或者使用service命令: 
   
   service redisd status
   ```

   显示 `<font color="green">`activate `</font>`，则说明启动成功。

   ![image-20230102102501869](https://img-blog.csdnimg.cn/e5ec77e130e449e1bd64a1be91adb5d6.png)

<br/>

#### Redis 的一些命令

<br/>

### MongoDB

[Install MongoDB Community Edition on Ubuntu — MongoDB Manual](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

启动失败，原因是权限不够

```shell
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
```

可查看 `/etc/mongodb.conf`

```shell
systemctl status mongod
```

```shell
db.createUser({user:"root", pwd:"123", roles:["userAdminAnyDatabase"]}) # 创建用户
```

```shell
db.auth("root", "123") # 登录验证
```

```shell
mongo 172.18.246.227/27017 -u root -p 123 # 远程连接
```

遇到依赖项的问题：

```shell
libssl1.1 (>=1.1.1) but 1.1.0g-2ubuntu4.1 is not installable
```

解决办法：

到这里下载[Index of /ubuntu](http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/) `libssl1.1_1.1.1-1ubuntu2.1~18.04.20_amd64.deb`

```shell
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1-1ubuntu2.1~18.04.20_amd64.deb
```

安装

```shell
dpkg -i libssl1.1_1.1.1-1ubuntu2.1~18.04.20_amd64.deb
```

<br/>

### PostgreSQL

<br/>

### SQLite3

`<br/><br/>`

## 容器

### docker

[Install on Ubuntu | Docker Documentation](https://docs.docker.com/desktop/install/ubuntu/)

<br/>

### Kubenates(k8s)
