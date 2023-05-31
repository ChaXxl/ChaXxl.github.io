

# Cmake

## 常用内置变量

* `CMAKE_SOURCE_DIR`：当前 CMakeLists.txt 文件所在的文件夹路径
* `CMAKE_BINARY_DIR`：对应 cmake 的 build 的目录，主要是运行时生成的文件目录
* `CMAKE_CURRENT_SOURCE_DIR`:一般来说，一个工程会有多个 CMakeLists.txt 文件，对应当前文件目录
* `CMAKE_CURRENT_BINARY_DIR`：对应 build 里的目录
* `CMAKE_ANDROID_ARCH_ABI`：当前 Android abi 架构目录

<br/>

## 基础设置

### 设置工程名

~~~cmake
project("Demo")
~~~

<br/>

### 最低支持的版本

~~~cmake
cmake_minimum_required(VERSION 3.10.2)
~~~

<br/>

### 生成静态库和动态库

* SHARED：表示生成动态库（.so）
* STATIC：表示生成静态库（.a）

~~~cmake
add_library(nativeLib SHARED nativeLib.cpp)
~~~

<br/>

### 批量导入源码文件

~~~cmake
file(GLOB ALL_FILE *.cpp *.c)
~~~

或者

~~~cmake
aux_source_directory(. ALL_FILE)
add_library(nativeLib SHARED ${ALL_FILE})
~~~

<br/>

### 添加一个子目录并构建该子目录

`sub/CMakeLists.txt`

~~~cmake
cmake_minimum_required(VERSION 3.10.2)
project(sub)
add_library(sub test.cpp)

~~~

<br/>

`CMakeLists.txt`

~~~cmake
cmake_minimum_required(VERSION 3.10.2)
project(test)

add_subdirectory(sub)
~~~

<br/>

## 普通变量

### 定义

声明变量，CMake 中所有变量都是 string 类型

~~~cmake
set(变量名, 变量值)
~~~

<br/>

### 示例

把 var 赋值为 666

~~~cmake
set(var 66)
~~~

<br/>

### 引用

~~~cmake
message("var = ${var}")
~~~

<br/>

### 移除

移除之后，就不能再使用了

~~~cmake
unset(var)
~~~

<br/>

## 列表变量

### 定义

~~~cmake
set(列表名 值1 值2 值3)
~~~

~~~cmake
set(列表名 "值1;值2;值3")
~~~

<br/>

### 示例

~~~cmake
set(list_var 1 2 3 4 5 6)
~~~

~~~cmake
set(list_var "1;2;3;4;5;6")
~~~



<br/>

## 条件判断





<br/>

## 循环





<br/>

## 函数定义







<br/>

## 构建单个源文件

项目只有一个源文件，结构如下，我们一般会新建一个目录存储 cmake 运行的产物，这里我新建了一个 build 目录。

> ├── CMakeLists.txt
> ├── build
> └── main.cc

<br/>

`main.cc` 的内容如下

~~~c
#include <stdlib.h>
#include <stdio.h>

int power(int num1, int num2) {
    return num1 * num2;
}

int main(int argc, char *argv[]) {
    if (argc < 3) {
        printf("Illegal parameters");
        return 1;
    }
    
    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);
    int result = power(num1, num2);
   
    printf("\n%d x %d = %d", num1, num2, result);
    putchar(20);

    return 0;
}
~~~

<br/>

`CMakeLists.txt` 的内容如下：

~~~cmake
# Cmake的最低版本号的要求
cmake_minimum_required (VERSION 3.26)

# 项目信息---项目文件夹名称
project (project1)

# 指定生成目标---rrrr 是等会要生成的可运行程序名称
add_executable(rrrr main.cc)
~~~

在 build 目录下执行

~~~shell
cmake .. 
~~~

<br/>

然后执行 make 命令就可以得到 rrrr 的可执行文件。

~~~shell
make
~~~

<br/>

## 同一个目录，多个源文件

将 main.cc 的 power 函数抽取出来放到 MathFunctions.cc 中，项目结构如下：

> ├── CMakeLists.txt
> ├── MathFunctions.cc
> ├── MathFunctions.h
> ├── build
> └── main.cc



可以通过在 add_executable 命令中增加 MathFunctions.cc ，效果如下 

~~~cmake
add_executable(rrrr main.cc MathFunctions.cc)
~~~

<br/>

但是如果有很多文件的情况下，一个文件一个文件的添加很麻烦，cmake 提供了 aux_source_directory 命令，该命令会查找指定目录下所有的源文件，然后将结果存到指定的变量名。CMakeLists.txt 文件内容如下

~~~cmake
# CMake 最低版本号要求
cmake_minimum_required (VERSION 3.26)

# 项目信息
project (project1)

# 查找目录下的所有源文件，并将名称保存到 DIR_SRCS 变量
aux_source_directory(. DIR_SRCS)

# 指定生成目标
add_executable(rrrr ${DIR_SRCS})
~~~

<br/>

## 多个目录多个源文件

现在我们将 MathFounction.h 和 MathFounction.cpp 移动到 math 目录下，项目结构如下：

> ├── CMakeLists.txt
> ├── build
> ├── main.cc
> └── math
> ├── CMakeLists.txt
> ├── MathFunctions.cc
> └── MathFunctions.h

<br/>

这种情况我们需要在 project1 目录下和 math 目录下各自编写一个 CmakeLists.txt 文件，我们可以将 math 目录里面的文件编译成静态库再由 main 函数调用。 



`math/CMakeLists.txt`

~~~cmake
# 查找当前目录下的所有源文件, 并将名称保存到 DIR_LIB_SRCS 变量
aux_source_directory(. DIR_LIB_SRCS)

# 指定生成 MathFunctions 链接库  将src目录中源文件编译为静态链接库
add_library (MathFunctions ${DIR_LIB_SRCS})
~~~

<br/>

`CMakeLists.txt`

~~~cmake
# 最低版本要求
cmake_minimum_required(VERSION 3.26)  

# 项目信息
project(project1)

set(CMAKE_INCLUDE_CURRENT_DIR ON)

# 是否使用自己的 MathFunctions 库
option(USE_MYMATH
    "Use provided math implementation" ON
)

# 加入一个配置头文件，用于处理 CMake 对源码的设置
configure_file(
    "${PROJECT_SOURCE_DIR}/config.h.in"
    "${PROJECT_SOURCE_DIR}/config.h"
)

# 是否加入 MathFunctions 库
if(USE_MYMATH)
    include_directories("${PROJECT_SOURCE_DIR}/math")
    
    # 指明本项目包含一个子目录 math，这样，math 目录下的 CMakeLists.txt 文件和源代码也会被使用
    add_subdirectory(math)
    
    set(EXTRA_LIBS ${EXTRA_LIBS} MathFunctions)
endif(USE_MYMATH)

# 查找当前目录下的所有源文件，并将名称保存到 DIR_SRCS 变量
aux_source_directory(. DIR_SRCS)

# 指定生成目标
# target_link_libraries 指明可执行文件需要链接一个名为 MathFunctions 的链接库。
add_executable(rrrr ${DIR_SRCS})
target_link_libraries(rrrr ${EXTRA_LIBS})
~~~

* option 命令添加了一个 USE_MYMATH 选项，并且默认值为 ON。之后根据 USE_MYMATH 变量的值决定是否使用我门自己编写的 MathFounctions 库。

* configure_file 命令用于加入一个配置文件 config.h，这个文件由 CMake从config.h.in 生成，这样的机制可以通过预定义一些参数和变量来控制代码的生成，config.h.in 内容如下：

  ~~~c
  #cmakedefine USE_MYMATH
  ~~~

  <br/>

然后需要更改 main.cc 文件让其根据 USE_MYMATH 的值确定是否调用标准库，内容如下：

`main.cc`

~~~c
#include <stdlib.h>
#include <stdio.h>
#include <config.h>

#ifndef USE_MYMATH
    #include <MathFunctions.h>
#else
    #include <math.h>
#endif


int main(int argc, char *argv[]) {
    if (argc < 3) {
        printf("Illegal parameters");
        return 1;
    }
    
    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);
    int result = power(num1, num2);
   
    printf("\n%d x %d = %d\n\n", num1, num2, result);
    putchar(20);


    return 0;
}
~~~

