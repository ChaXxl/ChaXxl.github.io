## 下载STM32CubeMX

https://www.st.com/en/development-tools/stm32cubemx.html#get-software



~~~shell
sudo java -jar XXXX/SetupSTM32CubeMX-6.0.1.exe
~~~





### 1. OpenOCD

~~~shell
brew install open-ocd
~~~



### 2. ARM toolchain

~~~shell
brew tap ArmMbed/homebrew-formulae
~~~

~~~shell
brew install arm-none-eabi-gcc
~~~

~~~shell
arm-none-eabi-gcc -v
~~~



### 3. 配置CLion