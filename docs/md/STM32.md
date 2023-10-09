![img](https://img-blog.csdnimg.cn/20200414130250813.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM4MTA2OTIz,size_16,color_FFFFFF,t_70)





![image-20230613145032841](https://img-blog.csdnimg.cn/dd8a01a1535b4a1c8b1f96804b979458.png)



~~~c
GPIO_InitTypeDef GPIO_InitStructure;

RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB, ENABLE);	// 使能 GPIOB 端口时钟
RCC_APB2PeriphClockCmd(RCC_APB2PERIPH_GPIOB | RCC_APB2Periph_GPIOE, ENABLE) // 使能 PE 时钟端口

GPIO_InitStructure.GPIO_Pin = GPIO_Pin_8;	// 使能 PB8 端口
GPIO_InitStructure.GPIO_Pin = GPIO_Pin_5;	// 使能 PB5 端口

GPIO_InitStructure.GPIO_Mode = GPIO_Mode_Out_PP;	// 推挽输出
GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;	// 速度为50MHz

GPIO_Init(GPIOB, &GPIO_InitStructure);	// 根据参数初始化 GPIOB.8

~~~





# 工程创建

## 点击项目选项新建工程

![image-20230617202420937](https://img-blog.csdnimg.cn/f019621f24c04727a3a06de7c34a9d48.png)

![image-20230617202450800](https://img-blog.csdnimg.cn/9bb3e6fb141a42fb9440f780a32a9601.png)





## 选择自己的芯片

![image-20230617202530023](https://img-blog.csdnimg.cn/b134ebb1030d4fa8831b54c19d43f4f3.png)



## 复制文件



把固件库的启动文件放到项目的 Start 目录下

![image-20230617203038871](https://img-blog.csdnimg.cn/bcb498f93a6f44c09622be1cc61df426.png)





![image-20230617203226738](https://img-blog.csdnimg.cn/bde6bc76e7244b548468b1ccea6b07ab.png)





![image-20230617203444355](https://img-blog.csdnimg.cn/95aaf3aad2b44208be3ee41a74f63de0.png)



## Start 目录内容

![image-20230617203649718](https://img-blog.csdnimg.cn/732e9b5b000048f3b5244a8fac0b2a39.png)



## 添加文件到工程

点击 Manager Project Items。启动文件要根据自己的芯片选择对应的，再把 start 目录下所有.c 和.h 文件添加进来。

![image-20230617215547331](https://img-blog.csdnimg.cn/8c6cb22225fd47f88e3044d2b635c473.png)

![image-20230617204226820](/Users/xxl/Library/Application Support/typora-user-images/image-20230617204226820.png)





## 添加 main 函数

![image-20230617204531619](https://img-blog.csdnimg.cn/b33458551e9f492394edc40678651c7f.png)



把 Start 目录包含进来

![image-20230617204734567](https://img-blog.csdnimg.cn/86eae126a3c94f6b929b68599c5a9f21.png)



编译测试。0报错，0警告，则说明建立的工程没问题

~~~c
#include "stm32f10x.h"                  // Device header

int main(void) {
	
	while (1) {
		
		
	}

}

~~~



![image-20230617205156975](https://img-blog.csdnimg.cn/360cb768500c476e9bd524efda19df48.png)





![image-20230617205425990](https://img-blog.csdnimg.cn/6bab283f67f444dfaf38ca4df2c0b17c.png)



把 inc 和 src 目录下所有文件添加到 Library 组

![image-20230617205818933](https://img-blog.csdnimg.cn/86b01622de69415ca519166fd92ce569.png)





![image-20230617205951113](https://img-blog.csdnimg.cn/bce507510b9b4104b551f5e9b334a102.png)

![image-20230617210100277](https://img-blog.csdnimg.cn/0495edc497874f5c91daf5cbc1362cd0.png)





USE_STDPERIPH_DRIVER

![image-20230617210259187](https://img-blog.csdnimg.cn/28c5dc604ba846a399a19d3593a83cdf.png)

![image-20230617210412733](https://img-blog.csdnimg.cn/a357720d029f4f1696433db5db9ad522.png)





点击编译，0 错误，0警告，搞定！











# Mac 环境配置

## STM32CubeMX



下载STM32CubeMX

https://www.st.com/en/development-tools/stm32cubemx.html#get-software

~~~shell
sudo java -jar XXXX/SetupSTM32CubeMX-6.0.1.exe
~~~





安装openocd

~~~shell
brew install open-ocd
~~~



ARM toolchain

~~~shell
brew tap ArmMbed/homebrew-formulae
~~~

~~~shell
brew install arm-none-eabi-gcc
~~~

~~~shell
arm-none-eabi-gcc -v
~~~



安装 stlink 驱动

~~~shell
brew install stlink
~~~



![image-20230618082718685](https://img-blog.csdnimg.cn/fd985df0813646dfb9fba06817abe21d.png)

![image-20230618083102716](https://img-blog.csdnimg.cn/aadd486c0ec54849ad841a6633ee0dbf.png)



## Parallels Desktop
