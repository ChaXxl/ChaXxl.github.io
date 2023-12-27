
##  Java

![image-20210628112913721](https://i.loli.net/2021/06/28/vf2sc9wuIgEGAj8.png)

JVM：Java Virtual Machine java虚拟机，相当于翻译官，保证了java的跨平台

JRE: Jvava Runtime Enviroment，是java程序的运行时环境，包含JVM和运行时所需的核心类库

JDK:Java Development Kit，是java程序开发工具包，包含JRE和开发人员使用的工具，工具有编译工具(javac.exe)和运行工具(java.exe)

### java安装目录

![image-20210628113406347](https://i.loli.net/2021/06/28/x1wRWT4KsiDVH6j.png)

![image-20210628113431182](https://i.loli.net/2021/06/28/XxdNwDYO3nBMIJ9.png)

### Hello World案例

编译：`javac 文件名.java`

~~~shell
javac hello.java
~~~

运行： `java 类名`

~~~shell
java hello
~~~

输出语句：

~~~java
System.out.println("content") //输出内容并换行
System.out.print("content") //输出内容不换行
~~~





### 数据类型

![image-20210628170547090](https://i.loli.net/2021/06/28/GsfPz5vKFaWj4XV.png)

#### 数据类型内存占用及取值范围

![image-20210628214536647](https://i.loli.net/2021/06/28/7gh3NnLZ5Tt41ec.png)

~~~java
public class 变量 {
    public static void main(String[] args){
        byte b = 10; 
        short s = 100;
        int i = 1000;
        double d = 13.14;
        char c = 'a';
        boolean bl = true;
        long l = 1000000000000L; //long类型
        float f = 13.14f; // 防止类型不兼容，加f
    }
}
~~~

### 标识符

* 由数字、字母、下划线和美元符号组成
* 不能以数字开头
* 不能是关键字
* 区分大小写

#### 常见命名约定

**小驼峰命名法：**<font color=red>方法、变量</font>

* 标识符是一个单词的时候，首字母小写  `name`
* 标识符由多个字母组成的时候，第一个单词字母小写，其它单词首字母大写 `firstName`

**大驼峰命名法：**<font color=red>类</font>

* 标识符是一个单词的时候，首字母大写  `Name`
* 标识符由多个字母组成的时候，每个单词的首字母大写 FfirstName`



#### 自动类型转换

把一个表示数据范围小的数值或者变量赋值给另一个表示数据范围大的变量

![img](https://i.loli.net/2021/06/28/ChFN7PEd2XDRvsk.png)

#### 强制类型转换

~~~java
int k = (int)88.88 //有数据丢失
~~~

### 算术运算符

![image-20210628223927949](https://i.loli.net/2021/06/28/V5Rt9NGqdrgAp3h.png)

整数与整数相除只能得到整数，要想得到小数，要有double或者float类型参与



字符串的 “+” 操作

~~~java
//字符串的 + 操作
System.out.println(666 + "string"); //输出666string
System.out.println("string" + 666); //输出string666

System.out.println(1 + 9  + "string"); //输出10string
System.out.println("string" + 1 + 9); //输出string19
~~~



~~~java
short s = 10;
s += 20; 不等于 s = s + 20;
// 因为20是int类型，s是short类型，那么 s + 20 的结果为int类型，不能用short类型的s去接收
//可以改为：
s = (short)(s + 20);
~~~



### 多路逻辑运算符&&、逻辑运算符&的区别

![image-20210628231305514](https://i.loli.net/2021/06/28/VEIg5Yrnv19N3Bw.png)

~~~java
int i = 1 ;
int j = 1 ;
System.out.println(i++ > 100 & j++ > 100); //false & falase
System.out.println("i = " + i); //输出2
System.out.println("j = " + j); //输出2
~~~



&&：当判断第一个条件不成立时，第二个条件不会运行

~~~java
int i = 1 ;
int j = 1 ;
System.out.println(i++ > 100 && j++ > 100); //false & falase
System.out.println("i = " + i); //输出2
System.out.println("j = " + j); //输出1
~~~

注意事项：

![image-20210628231322746](https://i.loli.net/2021/06/29/fcSn1b62iYEaysd.png)

### 数据输入-Scanner

① 导包

~~~java
import java.util.Scanner; //导包动作必须出现在类定义的上边
~~~

② 创建对象

~~~java
Scanner sc = new Scanner(System.in); //sc是变量名
~~~

③ 接收数据

~~~java
int i = sc.nextInt(); 
~~~

示例：

~~~java
import java.util.Scanner;
public class input{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("please input a number:");
        int i = sc.nextInt();
        System.out.println("The input number is:"+i);
    }
}
~~~



#### 随机数

① 导包

~~~java
import java.util.Random;
~~~

② 创建对象

~~~java
Random r = new Random();
~~~

③ 获取随机数

```java
int num = r.nextInt(10); //获取的数据范围[0,10)
```

示例：

~~~java
import java.util.Random;
public class random{
    public static void main(String[] args) {
        Random r = new Random();
        for(int i = 0; i < 10 ; i ++){
            int num = r.nextInt(10);
            System.out.println(num);
        }
    }
}
~~~

如果要生成 1-10的随机数，则

~~~java
int num = r.nextInt(10) + 1;
~~~

### 数组

定义：

**推荐使用格式一**

~~~java
//格式一： 定一了一个int类型的数组，数组名是arr
int[] arr
//格式二：定义了一个int类型的变量，变量名是arr数组
int arr[]
~~~

#### 数组-动态初始化

~~~java
int len = 10;
int[] arr = new int[len];
~~~

#### 数组-静态初始化

初始化时指定每个数组元素的初始值，右系统决定数组长度

~~~java
int[] arr = new []{1, 2, 3, 4, 5, 6}
int[] arr = {1, 2, 3, 4, 5, 6} //简化格式
~~~

### 方法（函数）

~~~java
public static void 方法名(){
    
}
~~~

可以进行方法重载，机函数名一定相同，但是函数类型和形参类型或者数目一定不一样。**与返回值无关**

~~~java
public static int sum(int num1,int num2){
    return num1 + num2;
}

public static double sum(double num1,double num2){
    return num1 + num2;
}

public static int sum(int num1,int num2,int num3){
    return num1 + num2 + num3;
}
~~~



### 类

是java程序的基本组成单位。

先新建一个Phone类，里面定义品牌和价格，以及成员函数打电话和发短信

![image-20210629224848874](https://i.loli.net/2021/06/29/FPzRkmHAi5w6Vs7.png)

Phone类的代码：

~~~java
package 类;

public class Phone {
    String brand;
    int price;

    public void call(){
        System.out.println("打电话");
    }
    public void sendMessage(){
        System.out.println("发短信");
    }
}


~~~

新建一个ClassDemo.java

~~~java
package 类;

public class ClassDemo1 {
    public static void main(String[] args) {
        Phone p = new Phone();
        p.call(); //调用成员函数
        p.price = 1999; //调用成员变量
        System.out.println(p.price);
    }
}

~~~

### String类

字符串比较：

== 是比较字符串的地址

如果要比较字符串内容，则用

~~~java
public boolean equals(Object anobject);
String s1 = "abc";
String s2 = "abc";
System.out.println(s1.equals(s2)); //输出true
~~~

### 遍历字符串

~~~java
String str;
str.charAt(i);  //获取字符串第i个位置的字符
str.length(); //获取字符串长度
~~~

遍历示例：

~~~java
String str = "xxl666655";
System.out.println(str.charAt(0));
 for (int i =0 ; i <str.length();i++){
     System.out.print(str.charAt(i));
 }
~~~

#### 统计字符个数

~~~java
String s = "Accaab233";
 int count_A = 0, count_a =0, count_n=0;
 for (int i =0;i<s.length();i++){
     if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z'){
         count_A++;
     }
     else if (s.charAt(i) >= 'a' && s.charAt(i) <= 'z'){
         count_a++;
     }
     else if (s.charAt(i) >= '0' && s.charAt(i) <= '9'){
         count_n++;
     }
 }
 System.out.println("大写字符个数为："+ count_A);
 System.out.println("小写字符个数为："+ count_a);
 System.out.println("数字字符个数为："+ count_n);
~~~

#### 拼接字符串

~~~java
public static String arryToString(int[] arr){
    String s = "";
    s += "[";
    for (int i = 0; i< arr.length;i++){
        if(i == arr.length-1){
            s += arr[i];
        }else {
            s += arr[i] + ",";
        }
    }
    s +="]";
    return s;
}
~~~

#### 字符串反转

~~~java
public static String reverse(String str){
    String s = new String();
    for (int i=str.length()-1; i >= 0;i--){
        s += str.charAt(i);
    }
    return s;
}
~~~

### StringBuilder

![image-20210630105048900](https://i.loli.net/2021/06/30/5U2iCBn6RgVk7qK.png)

如果对字符串进行拼接操作，每次拼接，都会构建一个新的String对象，既耗时，又浪费内存空间，而这种操作还不可避免。

所以这时候就需要StringBuilder类来解决这个问题。



#### 介绍

StringBuilder是一个可变的字符串类，我们可以把它看成是一个容器，可变指的是StringBuilder对象中的内容是可变的。

在拼接的时候是不会创建一个新的对象的。



#### 添加

~~~~java
利用append()
StringBuilder sb = new StringBuilder("hello");
sb.append(123);
sb.append("world");
~~~~

链式编程：可以一直append

~~~java
sb.append(123).append(456).append("helloworld");
~~~



#### 反转

~~~java
StringBuilder sb = new StringBuilder("hello");
sb.reverse();
System.out.println(sb); //输出：olleh
~~~



### StringBuilder和String互相转换

#### StringBuilder转为String

通过toString()就可以实现

~~~java
StringBuilder sb = new StringBuilder("hello");
sb.toString();
~~~



#### String转为StringBuilder

通过构造方法就可以实现
public StringBuilder(String s);

~~~java
String s = "hello";
StringBuilder sb = new StringBuilder(s);
~~~



#### 升级版字符串拼接

~~~java
public static String arryToString(int[] arr){
    StringBuilder sb = new StringBuilder();
    sb.append("[");
    for (int i = 0 ; i < arr.length; i++){
        if(i == arr.length -1){
            sb.append(arr[i]);
        }else {
            sb.append(arr[i]).append(", ");
        }
    }
    sb.append("]");
    return sb.toString();
}
~~~



#### 升级版字符串反转

~~~java
public static String reverse(String str){
    return new StringBuilder(str).reverse().toString();
}
~~~



### 集合ArrayList

使用前要导包：<kbd>java.util </kbd>

特点：提供一种存储空间可变的存储模型，存储的数据容量可以发生改变

~~~java
ArrayList<E>  //E表示要存储的数据类型
~~~

* 可调整大小的数组实现
* \<E\>是一种特殊的数据类型，泛型

~~~java
ArrayList<String>;
ArrayList<Student>;
~~~

#### 构造方法和添加方法

![image-20210630124335047](https://i.loli.net/2021/06/30/PxTOekg9HfKqj16.png)

~~~java
ArrayList<String> array = new ArrayList<String>();

ArrayList<String> array = new ArrayList();
// 这两种写法都可以
public boolean add(E e)//将指定元素追加到此集合的末尾
public void add(int index, E element); //在此集合中的指定位置插入指定的元素
~~~



#### ArrayList常用方法

![image-20210630160158756](https://i.loli.net/2021/06/30/DTXaIWufQw7mVYE.png)

~~~java
ArrayList<String> array = new ArrayList();
array.add("hello");
array.add("world");
array.add(1,"java");
System.out.println("集合的长度："+array.size());  //输出3


array.remove("hello");  // remove指定元素
array.remove(1);  //按索引删除

array.set(1,"javaee"); // 修改元素

System.out.println(array.get(0)); // 获取元素
~~~



~~~java
System.exit(0);  //退出JVM
~~~



### 继承

继承格式：

~~~java
public class 子类名 extends 父类名{}
~~~

范例：

~~~java
public class Student extends Basic{}
~~~



#### super关键字

![image-20210630214245265](https://i.loli.net/2021/06/30/eZqXt1DGgxWjObY.png)

<font color="red">this</font>关键字用来访问本类中的成员变量

而<font color="red">supe</font>r关键字则用来访问**父类**的成员变量

~~~java
public class Fu{
    public int age = 20 ;
}
public class Zi extends{
    private int age = 30;
    public void show(){
        int age = 10;
          System.out.println(age); //输出该函数内的age:10
          System.out.println(this.age); //输出该类内的age:30
          System.out.println(super.age); //输出该父类的age:20
    }
}
~~~



### 继承中构造方法的访问特点

子类中所有的构造方法默认都会访问父类中无参的构造方法

* 因为子类会继承父类中的数据，可能还会使用父类的数据。所以，子类初始化前，一定要先完成父类数据的初始化
* 每一个子类构造方法的第一条语句默认都是： <font color="red">super();</font>



如果父类中没有无参构造方法，只有带参构造方法，应该这样做：

* 通过使用super关键字去显示的调用父类的带参构造方法(不推荐)

~~~java
public void show(int i){
    super(int i);
    ....
}
~~~

* 在父类中自己提供一个无参构造方法

  **<font color="red">推荐：自己给出无参构造方法</font>**

### 方法重写

![image-20210630220537191](https://i.loli.net/2021/06/30/jnFpB3DgRe8APc5.png)

父类：

~~~java
public class Phone {
    public void call(String name){
        System.out.println("给" + name + "打电话");
    }
}
~~~

子类：

~~~java
public class NewPhone extends Phone {
    @Override  //是一个注解，如果该方法不能重写，则会报错
    public void call(String name){
        System.out.println("开启视频功能");
       super.call(name);
    }
}
~~~



### java继承的问题

![image-20210630222311958](https://i.loli.net/2021/06/30/Q1YiKJnhcPMyVLz.png)

* java不能多继承

~~~java
public class Son extends Mother,Father { //该写法是错误的
    
}
~~~

* java支持多层继承，也就是爷爷类，爸爸类，儿子类，那儿子类就拥有爷爷类的所有特性

### 包

其实就是文件夹，方便对类进行管理

在Intel IDEA创建包：

![image-20210630225742432](https://i.loli.net/2021/06/30/WHoPEUTFcz5MpVf.png)

包的格式定义：

格式： <font color="red">package 包名 (多级包 用 . 分开)</font>

范例： <font color="red">package com.xxl</font>

![image-20210630230134109](https://i.loli.net/2021/06/30/f5IcTw6LUmzH9jp.png)



#### 手动建包

1. 在F盘，创建java文件

![image-20210630230433020](https://i.loli.net/2021/06/30/vX4uhxDlq7w8R9g.png)



2. 创建包和内容

~~~java
package com.xxl; //包
public class hello{
    public static void main(String[] args) {
        System.out.println("hello");
    }
}
~~~

3. 建立文件夹

![image-20210630230707200](https://i.loli.net/2021/06/30/5ErbWyVIHF6MwLG.png)

4. 把java文件移动到xxl文件夹下
5. 编译

~~~shell
javac hello.java
~~~

6. 运行

~~~shell
java com.xxl.hello
~~~

![image-20210630231008016](https://i.loli.net/2021/06/30/HkYxh5Oz73oa1SM.png)

#### 自动建包

~~~shell
java -d . hello.java //它会自动建立文件夹
~~~

运行还是一样的：

~~~java
java com.xxl.hello
~~~

### 导包

```java
import 包.包.类名
import 继承.test1.猫和狗.Animal;

public class 导包 {
    public static void main(String[] args){
     Animal a = new Animal();
    }
}
```

### 修饰符

#### 权限修饰符

~~~java
public class Fu {
    private void show1(){
        System.out.println("private");
    }
    void show2(){ 
        System.out.println("默认修饰符");
    }
    protected void show3(){
        System.out.println("protected");
    }
    public void show4(){
        System.out.println("public");
    }
}
~~~

![image-20210701092153145](https://i.loli.net/2021/07/01/YahjwW74tM6L2n5.png)

#### 状态修饰符

##### final关键字

<font color="red">final</font>:关键字是最终的意思，可以修饰成员方法、成员变量、类

 :package:  **被final修饰的方法**，不可以被重写，因为它是最终的。

~~~java
public class Fu {
     public final void method(){
        System.out.println("父类 method");
    }
}
~~~

:package: **被final修饰的成员变量**，不能被更改，因为它是最终的，也就是常量

```java
public class Zi extends Fu {
    public final int age = 10;
    public void show(){
        age = 8; // 这里会报错，因为被final修饰的变量不能被更改
        System.out.println("年龄 ： " + age);
    }
}
```

:package: **被final修饰的类**，不能被继承，因为它是最终的，不能有子类

~~~java
public final class Fu {
     public final void method(){
        System.out.println("父类 method");
    }
}
~~~

##### final修饰局部变量

![image-20210701095507593](https://i.loli.net/2021/07/01/b5wLrpsaiukcm2A.png)

###### final修饰基本类型变量

~~~java
final int age = 10;
age = 100; //会报错，不能被修改
System.out.println(age);
~~~

###### final修饰引用类型变量

~~~java
final Student s = new Student(); //s存储的是该类的地址，加了final相当于是常量指针，内容可以变，地址不能变
s.age = 100; //因此不会报错
System.out.println(s.age);
~~~

#### static关键字

<font color=red>static</font> 关键字是静态的意思，可以修饰成员方法、成员变量。表示在类里是共享的，存储在堆区

```java
Zi z = new Zi();
z.name = "张三"; //在z对象创建的name
Zi z2 = new Zi();
System.out.println(z2.name); //z2是可以访问的，也就是共享
```

但不对推荐用`对象.`的方式进行赋值，推荐用以下的方法

```java
Zi.name = "张三"; //建议通过类名进行访问
Zi z = new Zi();
Zi z2 = new Zi();
System.out.println(z2.name);
```

##### static访问特点

**<font color=red>静态成员方法只能访问静态成员</font>**

非静态的啥都能访问



### 多态

同一个对象，在不同时刻表现出来的不同形态

多态的前提的体现：

* 有继承/实现关系
* 有方法重写
* 有父类引用指向子类对象

#### 多态中成员访问特点

~~~java
Animal a = new Cat();
~~~

![image-20210701144256071](https://i.loli.net/2021/07/01/Il2boOY5RQqZ7tx.png)

成员变量：编译看左边，执行看左边。左边定义了才有

成员方法：编译看左边，执行看右边



#### 多态中的转型



* 向上转型 ：从子到父、父类引用指向子类对象

~~~java
Animal a = new Cat();
~~~

* 向下转型：从父到子、父类引用转为子类对象

~~~java
Animal a = new Cat();
Cat c = (Cat)a; //把a强转为子类对象
~~~



### 抽象类

就是一个类的方法只给出声明，不写实现，不是具体的，是抽象的，因此不能创建对象。

类和方法都用<kbd>abstract</kbd>关键字进行修饰

~~~java
public abstract class Animal{
    public abstract void eat();
}
Animal a = new Animal(); //会报错，抽象类不是具体的，不能创建对象
~~~

****

**一个抽象类可以没有抽象方法，但是有抽象方法的类一定要是抽象类**

创建抽象类一般通过子类，要继承。但是子类必须要重写抽象类的所有抽象方法或者本身也是抽象类



### 接口

新建Java Class时选择Interface

![image-20210701173614022](https://i.loli.net/2021/07/01/AuFWlb9g1ScGs8J.png)



接口Jummping.java：

~~~java
public interface Jumpping{
    public abstract void jump();
}
~~~

类Cat.java：  类实现接口用<kbd>implements</kbd>关键字。意思为：实现

~~~java
public class implements Jumpping{  //利用implements关键字，不能用extends继承
    @Override
    public void jump(){
        System.out.println("猫可以跳高了");
    }
}
~~~

接口是个抽象的内容，不能被实例化。实例化需要使用多态的形式

~~~java
Jumpping j  = new Cat();
j.jump();
~~~



#### 接口的成员特点

* 成员变量
  *    只能是常量  也就是被final修饰
  *     默认修饰符 `public static final`
* 构造方法
  *     接口没有构造方法，因为接口主要是对行为进行抽象，是没有具体存在
  *     一个类如果没有父类，默认继承自Object类
* 成员方法
  *    只能是抽象方法
  *    默认修饰符`public abstract`



### 类和接口的关系

~~~java
public class Intertemp extends Object implements Inter1, Inter2, Inter3{
     // 可以继承多个接口，还能再继承一个类
}
~~~



### 抽象类和接口的区别

![image-20210701214447115](https://i.loli.net/2021/07/01/TEvztlWbmF3Infc.png)

**抽象类是对事物的抽象，而接口是对行为的抽象**



### 类名作为形参和返回值

* 方法的形参是类名，其实需要的是该类的对象
* 方法的返回值是类名，其实返回的是该类的对象



### 抽象类名作为形参和返回值

由于抽象类不能实例化，因此也要利用多态类来实现，然后子类再重写抽象类的方法。

* 方法的形参是抽象类名，其实需要的是该抽象类的子类对象
* 方法的返回值是抽象类名，其实返回的是该类的子类对象



### 接口名作为形参和返回值

由于接口也是不能实例化，也需要借助子类来创建

* 方法的形参是接口名，其实需要的是该接口的实现类对象
* 方法的返回值是接口名，其实返回的是该接口的实现类对象



### 内部类

就是在一个类中定义一个类。比如在类A的内部定义一个类B，类B就被称为内部类

```java
public class Outer { //外部类
    public class Inner{ //内部类
        
    }
}
```

特点：

* 内部类可以直接访问外部类的成员，包括私有
* 外部类要访问内部类的成员，必须参加对象

~~~java
public class Outer {
    public String outer_name ;
    private int outer_age;
    Inner b = new Inner(); //外部类访问内部类要创建对象
    public void show_outer(){
        b.inner_age = 100;
        b.inner_name = "李四";
    }
    public class Inner{
        public String inner_name;
        private int inner_age;
        public void show(){
            outer_age = 10; //内部类可直接访问外部类的所以成员和方法
            outer_name = "张三";
        }
    }
}
~~~



#### 成员内部类

在类的成员位置

外界创建对象的格式： `外部类名.内部类名 对象名 = new 外部类名().new 内部类名();`

~~~java
 A.B ab = new A().new B();
~~~

如果把内部类的修饰符改为private，那么就不能用这种写法

虽然在外界不能这样写，但是在外部类却可以通过创建内部类对象来进行访问

~~~java
public class Outer {
    public String outer_name ;
    private int outer_age;
    Inner b = new Inner(); //外部类访问内部类要创建对象
    public void show_outer(){
        b.inner_age = 100;
        b.inner_name = "李四";
        b.show(); // 通过创建内部类对象来进行访问即可
    }
    private class Inner{ //修改为私有
        public String inner_name;
        private int inner_age;
        public void show(){
            outer_age = 10; //内部类可直接访问外部类的所以成员和方法
            System.out.println(outer_name);
        }
    }
}
~~~



#### 成员局部类

:ballot_box_with_check: 在类的局部位置定义（比如方法内），所以外界无法直接使用，需要在方法内部创建对象并使

:ballot_box_with_check: 该类可以直接访问外部类的成员，也可以访问方法内的局部变量。

~~~java
public class Outter {
    private int num = 10;
    public void method(){
         class Inner{ //在方法内定义的类
            public void show(){
                System.out.println(num); //访问外部类的成员
            }
        }
         Inner i = new Inner();
         i.show();
    }
}
~~~



#### 匿名内部类

前提：存在一个类或者接口，这里的类可以是具体的类也可以是抽象类。

**其本质是一个继承了该类或者实现了该接口的子类匿名对象**

定义一个接口

~~~java
public interface Inter {
    public abstract void show();
}
~~~



~~~java
new 类名或者接口名(){
    重写方法;
}; // <------多了个分号
public class Outter {
    private int num = 10;
    public void method(){
        new Inter(){
            @Override
            public void show() { //重写接口的show方法
                System.out.println("匿名类");
            }
        }.show(); //因为其本质是对象，因此可以用.来调用方法
~~~

如果要多次调用show方法：

~~~java
public class Outter {
    private int num = 10;
    public void method(){
       Inter i = new Inter(){  //
            @Override
            public void show() {
                System.out.println("匿名类");
            }
        };
        i.show();
        i.show();
~~~



使用示例：

```java
public class test {
    public static void main(String[] args) {
        JumppingOperator jo = new JumppingOperator();

        jo.method(new Jumpping() { //Jumpping是接口，抽象了jump方法
            @Override
            public void jump() {
                System.out.println("猫跳高");
            }
        });
        jo.method(new Jumpping() {
            @Override
            public void jump() {
                System.out.println("狗跳高");
            }
        });
    }
}
```



### 常用API

#### Math类

- `Math`类包含执行基本数字运算的方法，如基本指数，对数，平方根和三角函数。 

没有构造方法，方法被static修饰，我们可以直接通过类名进行调用

![image-20210702104051560](https://i.loli.net/2021/07/02/sTPGYEuhD46iSL5.png)

取0-100的随机数：

~~~java
(int)(Math.random() * 100  + 1)
~~~



#### System类

~~~java
System.exit(0); //退出JVM ，非0表示异常终止
System.currentTimeMillis(); //返回当前时间（以毫秒为单位） unix时间戳
~~~

unix时间戳：是指现在时间与1970.01.01的时间差

可以计算一下，把它转成年份：

~~~java
System.currentTimeMillis() *1.0 / 1000 /60/60/24/365
~~~

可以用来计算程序运行的时间

~~~java
long statTime = System.currentTimeMillis();
for (int i = 0; i < 10000; i++) {
    System.out.println(i);
}
long endTime = System.currentTimeMillis();
System.out.println("共耗时：" + (endTime - statTime) + "毫秒"); //结束时间 - 开始时间
~~~



### 冒泡排序

```java
for (int j = 0; j<arr.length - 1;j++){
    for (int i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            int t = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
        }
    }
}
```



### Arrays类

<kbd>java.util</kbd>

包含了操作数组的各种方法

![image-20210702170435473](https://i.loli.net/2021/07/02/4SAkJrvc5G1fqBm.png)



### 基本类型包装类

将基本数据类型封装成对象的好处在于可以在对象中定义更多的功能方法操作该数据

常用的操作之一：用于基本数据类型与字符串之间的转换

![image-20210702204859813](https://i.loli.net/2021/07/02/Qmva9lkdPxSK3pG.png)





#### Integer类

int和String转换：

~~~java
int num = 100;
String s = "" + num; //方法一
String s = String.valueOf(num); //方法二
~~~

String转int：

```java
String s = "100";
Integer i = Integer.valueOf(s); //方法一，以Integer作为桥梁
int num2 = i.intValue();
System.out.println(num2);
String s = "100";
int num2 = Integer.parseInt(s); //方法一，以Integer作为桥梁
System.out.println(num2);
```

#### 字符串数据排序

```java
public static void main(String[] args) {
   String s = "91 27 46 38 50"; //给出要排序的字符串数组
   String[] str = s.split(" "); //利用分割
   int[] num = new int[str.length]; //定义一个int型数组
   for (int i =0;i<str.length;i++){
        num[i] = Integer.parseInt(str[i]); //利用Ingeter.parseInt()将String-->int
   }
   bubbleSort(num);
}

public static void bubbleSort(int[] arr){ //冒泡排序方法
    for (int i = 0; i < arr.length - 1 ; i++){
        for (int j = 0; j < arr.length - i -1;j++){
            if (arr[j] > arr[j+1]){
                int t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
    System.out.println(printArray(arr));
}

public static String printArray(int[] arr){ //打印数组的方法
    StringBuilder s = new StringBuilder();
    for (int i =0;i< arr.length;i++){
        if (i == arr.length-1){
            s.append(arr[i]);
        }else {
            s.append(arr[i]).append(" ");
        }
    }        
    return s.toString();
}
```



#### 自动装箱和拆箱

* 装箱：把基本数据类型转换为对应的包装类型

```java
Integer i = Integer.valueOf(100);//此过程将基本数据类型100转为了包装对象。因此成为装箱
Integer i = 100; //自动装箱，省去了Integer.valueOf(100);的写入
```



* 拆箱：把包装类型转换为对应的基本数据类型

```java
Integer i = 100; 
if(i != null){ //判断是否为null
    i = i.intValue() + 200 // 拆箱
    i += 200; //不会报错，自动拆箱和装箱
}

```

注意：

在使用包装类型的时候，如果做操作，最好先判断是否为null

推荐，只要是对象，在使用前就必须进行不为null的判断

#### 日期类Date

<kbd>java.util</kbd>

![image-20210702220938377](https://i.loli.net/2021/07/02/4DZ3RYNXtyzFTkp.png)

```java
Date d = new Date();
System.out.println(d.getTime() *1.0 / 1000 /3600 /24/365); //当前时间
d.setTime(1000 * 60 *60);
System.out.println(d); // 1970.1.1 00:00:00
```



#### SimpleDateFormat类概述

<kbd>java.text</kbd>

- `SimpleDateFormat`是一个具体的类，用于以区域设置敏感的方式格式化和解析日期。  它允许格式化（日期文本），解析（文本日期）和规范化。 
- 在日期和时间模式字符串中，从`'A'`到`'Z'`以及从`'a'`到`'z'`引号的字母被解释为表示日期或时间字符串的组件的模式字母。 

|  y   |  年  |
| :--: | :--: |
|  M   |  月  |
|  d   |  日  |
|  H   |  时  |
|  m   |  分  |
|  s   |  秒  |

构造方法：

![image-20210702223059259](https://i.loli.net/2021/07/02/OBW7jymgV5Fo12U.png)



##### SimpleDateFormat格式化和解析日期

1. 格式化（从Date到String）

```java
public final String format(Date date); //将日期格式化成日期/时间字符串
```

2. 解析（从String到Date）

```java
public Date parse(String source) //从给定字符串的开始解析文本以生成
```

示例：

~~~java
Date d = new Date();
SimpleDateFormat sdf = new SimpleDateFormat();
System.out.println(sdf.format(d)); //输出 7/2/21, 下午10:50
~~~

但是我们想要时分秒，还是差点意思，再来：

```java
Date d = new Date();
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); //格式化
 // "yyyy年MM月dd日 HH:mm:ss"
System.out.println(sdf.format(d)); //输出 2021-07-02 22:52:53
```

![image-20210702225601800](https://i.loli.net/2021/07/03/tMWgbUpTuqdk4zx.png)



类：

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class DateUtils {
    private DateUtils(){} //不让其创建对象
    public static String dateToString(Date d , String format){
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        String result = sdf.format(d);
        return result;
    }

    public static Date stringToDate(String date,String pattern) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat(pattern);
        return sdf.parse(date);
    }
}
```

使用：

```java
   public static void main(String[] args) throws ParseException {
        Date d = new Date();
        d = DateUtils.stringToDate("2000-10-10 08:20:05","yyyy-MM-dd HH:mm:ss");
        System.out.println(d.toString());
//        System.out.println(DateUtils.dateToString(d,"yyyy年MM月dd日 HH:mm:ss"));
        System.out.println(DateUtils.dateToString(d,"yyyy年MM月dd日"));
    }
```



### Calendar类

<kbd>[java.util]</kbd>

- `Calendar`类是一个抽象类，可以为在某一特定时刻和一组之间的转换的方法[`calendar  fields`]如`YEAR` ， `MONTH` ，  `DAY_OF_MONTH` ， `HOUR` ，等等，以及用于操纵该日历字段，如获取的日期下个星期。

- `Calendar`提供了一个类方法， `getInstance`  ，用于获取这种类型的一般有用的对象。  `Calendar`的`getInstance`方法返回一个`Calendar`对象，其日历字段已使用当前日期和时间初始化： 

  > ```java
  >      Calendar rightNow = Calendar.getInstance();
  > ```

![image-20210703110640450](https://i.loli.net/2021/07/03/ShVPMWqTzQRxwG8.png)

示例：

~~~java
Calendar c = Calendar.getInstance(); //利用多态初始化
int i = c.get(Calendar.YEAR);
int i2 = c.get(Calendar.MONTH) + 1; //它这个月是从0开始的
int i3 = c.get(Calendar.DATE);
System.out.println(i); //年 2021
System.out.println(i2); //月 7
System.out.println(i3);//日  3
c.add(Calendar.YEAR,-1); //给当前年份-1，输出2020
c.set(2019,5,5); //设置日历的年月日
~~~



案例：二月天（获取任意一年的二月有多少天）

思路

* 年：来自键盘录入
* 月：设置为3月，月份是从0开始的，所以设置的值为2
* 日：设置为1日
* 3月1日往前推一天，就是2月的最后一天
* 输出这一天即可

~~~java
 Calendar c = Calendar.getInstance();
int year = 2021; //获取年
c.set(year,2,1); //设置年月日
c.add(Calendar.DATE,-1); //日 -1
System.out.println(c.get(Calendar.DATE)); //输出
~~~



### 异常

![image-20210703134226736](https://i.loli.net/2021/07/03/XfVwMa81BS6YQp3.png)

#### JVM的默认处理方案

如果程序出现了问题，我们没有做任何处理，最终JVM会做默认的处理

* 把异常的名称、异常原因、异常出现的位置等信息输出在了控制台
* 程序停止执行

#### 异常处理

如果程序出现了问题，我们需要自己来处理，有两种方案：

##### try...catcht..finally

执行流程:
程序从try里面的代码开始执行
出现异常，会自动生成一个异常类对象，该异常对象将被提交给Java运行时系统
当Java运行时系统接收到异常对象时，会到catch中去找匹配的异常类，找到后进行异常的处理执行完毕之后，程序还可以继续往下执行

```java
int[] arr = {1,2,3};
try {
    System.out.println(arr[3]);
}catch (异常类名 变量名){
    异常处理的代码
}finally { //可以不写finally
    System.exit(0);
}
```

示例：

~~~java
int[] arr = {1,2,3};
try {
    System.out.println(arr[3]);
}catch (ArrayIndexOutOfBoundsException a){
    System.out.println("你访问的数组的索引不存在");
    
    a.printStackTrace(); //可以输出错误位置----和JVM不同的是它可以在错误行继续往下执行
}
~~~



###### Throwable的成员方法

~~~java
System.out.println(a.getMessage()); //输出的是字符串错误信息
~~~

![image-20210703135733864](https://i.loli.net/2021/07/03/gxjwfbIuStd5FKh.png)

#### 编译时异常和运行时异常的区别

![image-20210703142553696](https://i.loli.net/2021/07/03/etlOi1fTRcBNdr9.png)

##### throws

虽然我们通过try...catch...可以对异常进行处理，但是并不是所有的情况我们都有权限进行异常的处理也就是说，有些时候可能出现的异常是我们处理不了的，这个时候该怎么办呢?
针对这种情况，Java提供了throws 的处理方案

格式：

```java
throws 异常类名;
```

**注意:**这个格式是跟在方法的括号后面的



### Collection

#### 集合类体系结构

![image-20210703154336526](https://i.loli.net/2021/07/03/Vul9W7eoB4rsEg6.png)



#### Collection概述和使用

<kbd> java.util</kbd>

Collection集合概述
● 是单例集合的顶层接口，它表示一组对象，这些对象也称为Collection的元素JDK不提供此接口的任何直接实现，它提供更具体的子接口(如Set和List)实现

创建Collection集合的对象

* 多态的方式
  * 具体的实现类ArrayList

#### 常用方法

![image-20210703163453078](https://i.loli.net/2021/07/03/Btdc294guGizIJm.png)

#### Collection遍历

lterator:  迭代器，集合的专用遍历方式

<kbd>java.util</kbd>

![image-20210703171355637](https://i.loli.net/2021/07/03/rpezC3K4amoiVHP.png)

```java
Collection<String> c = new ArrayList<String>();
c.add("hello");
c.add("world");
c.add("java");
```

方法一：

~~~java
Iterator<String> iterator2 = c.iterator();
iterator2.hasNext();
for (int i = 0; i < c.size(); i++){
     System.out.println(iterator2.next());
}
~~~

方法二：

~~~java
for (Iterator<String> iterator = c.iterator(); iterator.hasNext();){
    System.out.println(iterator.next());
}
~~~

方法三：

~~~java
while (iterator2.hasNext()){
    System.out.println(iterator2.next());
}
~~~



### List集合

<kbd>java.util</kbd>

#### 概述和特点

![image-20210703174216902](https://i.loli.net/2021/07/03/7kKT8FAMQVH3gOm.png)

~~~java
List<String> l = new ArrayList<String>();
l.add("hello");
l.add("world");
l.add("java");
l.add("hello");
for (Iterator<String> it = l.iterator(); it.hasNext();){
    System.out.println(it.next());
}
~~~

#### List集合特有方法

![image-20210703175006903](https://i.loli.net/2021/07/03/KVFAv27GxSHRkCI.png)







#### 增强for

```java
List<Student> l = new ArrayList<Student>();
for (Student s : l){
    System.out.println(s.getName()+",, "+s.getAge());
}
```



### ArrayList和LinkedList的区别

ArrayList：是通过数组实现的。可以通过索引访问元素，因此遍历快，增删慢

LinkedList：是通过链表实现的。不能通过索引访问元素。因此增删快，遍历慢



### LinkedList集合的特有功能

![image-20210703210207686](https://i.loli.net/2021/07/03/KrvCdMsxHRigVUf.png)



### Set集合

<kbd>java.util</kbd>

不包含重复元素的集合

HashSet：对集合的迭代顺序不作任何保证

~~~java
Set<String> s = new HashSet();
s.add("hello");
s.add("world");
s.add("java");
for (String str : s){
    System.out.println(str); //输出顺序是： java world world
}
~~~





### 哈希值

是JDK根据对象的**地址**或者**字符串**或者**数字**算出来的int类型的数值

Object类中有一个方法可以获取对象的哈希值

~~~java
public int hashCode(); //返回对象的哈希值
~~~



**同一个对象**多次调用hashCode()方法返回的哈希值是相同的

默认情况下，不同对象的哈希值是不同的。因此可以通过方法重写来使不同对象的哈希值相同

~~~java
Student s1 = new Student("张三",18);
System.out.println(s1.hashCode()); // 2003749087
System.out.println(s1.hashCode());// 2003749087
System.out.println("通话".hashCode());
System.out.println("重地".hashCode()); //它们的哈希值是一样的，String类重写了哈希计算方法
~~~



### HaseSet集合

也是不包含重复元素

~~~java
HashSet<String> hs = new HashSet<String>();
hs.add("hello");
hs.add("world");
hs.add("java");
hs.add("java");
for (Iterator<String> it = hs.iterator();it.hasNext();){
    String s = it.next();
    System.out.println(s);
}
~~~

那它怎么保证集合元素唯一性：

![image-20210703215439217](https://i.loli.net/2021/07/03/VFQOsLMiDo6gEwS.png)





### LinkedHaseSet集合

![image-20210703220822557](https://i.loli.net/2021/07/03/nlwEaOhY9ZCULzH.png)



### TreeSet集合

<kbd>java.util</kbd>

![image-20210703222323284](https://i.loli.net/2021/07/03/ey5RBGHUq4I3oDJ.png)

~~~java
TreeSet<Integer> ts = new TreeSet<Integer>(); //需要用包装类型
ts.add(10);
ts.add(80);
ts.add(60);
ts.add(90);
ts.add(70);
ts.add(1);
for (Iterator<Integer> it = ts.iterator();it.hasNext();){
    Integer integer = it.next();
    System.out.println(integer);
} //输出 1 10 60 70 80 90 按自然顺序排序
~~~



### 自然排序Comparable的使用

![image-20210703223631543](https://i.loli.net/2021/07/03/IaisFhKS7EUozJq.png)



Student类：

~~~java
public class Student implements Comparable<Student> {
    private String name;
    private int age;

    public Student() {
    }

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public int compareTo(Student s) {
         //如果return 0 说明它和上一个元素是相同的，那么最后只存一个数据
        //如果return 1 则按照我们输入的顺序输出
        //如果return -1 则倒着输出
        int num = s.age - this.age; // this.age是上一个元素的age
        int num2 = num == 0 ? this.name.compareTo(s.name) : num;//年龄相同时按姓名字母排序
        return  num2;
    }
}

~~~

demo：

~~~java
TreeSet<Student> ths = new TreeSet<Student>();
Student s1 = new Student("张三",2);
Student s2 = new Student("李四",8);
Student s3 = new Student("王五",10);
Student s4 = new Student("赵六",10);

ths.add(s1);
ths.add(s2);
ths.add(s3);
ths.add(s4);

for (Iterator<Student> it = ths.iterator();it.hasNext();){
    Student next = it.next();
    System.out.println(next.getName()+", "+next.getAge());
} 
~~~



![image-20210703230022168](https://i.loli.net/2021/07/03/Ima4RkfqrxWF7YP.png)



### 比较器Comparator的使用

![image-20210704193854873](https://i.loli.net/2021/07/04/LepM3qBfOvkaRzl.png)

~~~java
reeSet<Student> ts = new TreeSet<Student>(new Comparator<Student>() {
   @Override
   public int compare(Student s1, Student s2) {
       int num = s1.getAge() - s2.getAge();
       int num2 = num == 0? s1.getName().compareTo(s1.getName()) : num;
           return num;
   }
);
~~~



### 泛型

<font color=red>相当于C++的模板</font>

#### 概述

泛型:是JDK5中引入的特性，它提供了编译时类型安全检测机制，该机制允许在编译时检测到非法的类型它的本质是**参数化类型**，也就是说所操作的数据类型被指定为一个参数
一提到参数，最熟悉的就是定义方法时有形参，然后调用此方法时传递实参。那么参数化类型怎么理解呢?顾名思义，就是**将类型由原来的具体的类型参数化，然后在使用/调用时传入具体的类型**
这种参数类型可以用在类、方法和接口中，分别被称为泛型类、泛型方法、泛型接口

   ![image-20210704200624042](https://i.loli.net/2021/07/04/xXzSNcUu4VEYLgI.png)

![image-20210704200946445](https://i.loli.net/2021/07/04/N621IykALgFXa8o.png)



#### 泛型类

![image-20210704201716270](https://i.loli.net/2021/07/04/d2cvpXPjxA8GYtW.png)

~~~java
public class Generic <T>{
    private T t;
    public getT(){return t;}
    public setT(T t){this.t = t}
}
~~~



#### 泛型方法

```java
public<T> void (T t){
    ....
}
```



#### 泛型接口

```java
public interface Generic<T>{
    
}
```

接口的实现类：

```java
public class GenericImpl<T> implements Generic<T> {
    @Override
    public void show(T t) {
        System.out.println(t);
    }
}
```



#### 类型通配符

![image-20210704213006333](https://i.loli.net/2021/07/04/JRIMZi8gsFeVhjG.png)



#### 可变参数

可变参数又称参数个数可变，用作方法的形参出现，那么方法参数个数就是可变的了

![image-20210704213844927](https://i.loli.net/2021/07/04/hitfjDNuKSCExeZ.png)

~~~java
public static void main(String[] args) {
    System.out.println(sum(1,2,3));
    System.out.println(sum(1,3));
    System.out.println(sum(2));
    System.out.println(sum(1,2,3,5,4));
}
public static int sum(int...a){ //格式
    int sum = 0;
    for (int i = 0; i <a.length;i++){ //a 是一个数组
        sum += a[i];
    }
    return sum;
}
~~~

注意：

![image-20210704214742964](https://i.loli.net/2021/07/04/MkbqJcN83tGs9lO.png)

```java
public static int sum2(int b ,int ...a){ //如果形参有多个参数，则放前面，即可变参数放最后
     
}
```



#### 可变参数的使用

1. Arrays工具类中有一个静态方法:

   * public static \<T\> List\<T\> asList(... a):返回由指定数组支持的固定大小的列表

   * 返回的集合不能做增删操作，可以做修改操作



2. List接口中有一个静态方法:

   * public static \<E\> List\<E\> of(... elements):返回包含任意数量元素的不可变列表

   * 返回的集合不能做增删改操作



3. Set接口中有一个静态方法:

   * public static \<E\> Set\<E\> of(E... elements):返回一个包含任意数量元素的不可变集合心
   * 返回的集合不能做增删操作，没有修改方法

   



### Map类

有点像Python的字典

#### Map集合概述

![image-20210704221158613](https://i.loli.net/2021/07/04/cg1WvmLJpwQ4dMR.png)



举例：

| 001  | 张曼玉 |
| :--: | :----: |
| 002  | 左冷禅 |
| 003  | 风清扬 |



#### 创建Map集合的对象：

* 多态的方式
* 具体的实现类HashMap

示例：

~~~java
Map<String,String> m = new HashMap<String,String>();
m.put("001","张三");
m.put("002","李四");
m.put("002","王五");//如果键值重复，则把李四改成王五
System.out.println(m); //利用put方法添加数据
~~~



#### Map集合的基本功能

![image-20210704222035816](https://i.loli.net/2021/07/04/UNb3myFBSpJIZWT.png)



#### Map集合的获取功能

![image-20210704224306375](https://i.loli.net/2021/07/04/kWPzuNdJtLh7OsG.png)



#### Map集合的遍历

##### 方法一

先通过keySet()方法获取键的集合。

通过for循环获取键值，再通过get()方法把键值穿进去获取对应的数值。



##### 方法二





![image-20210704231137756](https://i.loli.net/2021/07/04/L5eho26um7dZbIG.png)



~~~java
 Map<String,Student> hs = new HashMap<String,Student>();
        Student s1 = new Student("张三",8);
        Student s2 = new Student("李四",18);
        Student s3 = new Student("王五",80);

        hs.put("1",s1);
        hs.put("2",s2);
        hs.put("3",s3);

        Set<String> keySet = hs.keySet();//方法一
        for (String s : keySet){
            Student student = hs.get(s);
            System.out.println(student.getName()+", "+student.getAge());
        }
        Set<Map.Entry<String, Student>> entrySet = hs.entrySet();//方法二
        for (Map.Entry<String, Student> s :entrySet){
            String key = s.getKey();
            Student value = s.getValue();
            System.out.println(key + ", "+value.getName() + ", "+value.getAge());
        }
~~~



#### 案例:统计字符串中每个字符出现的次数

![image-20210705093804801](https://i.loli.net/2021/07/05/n9BxwhdYLqp63FH.png)

~~~java
String str = "aabbccddeeffabcdabcd";
HashMap<Character, Integer> hs = new HashMap<>();
for (int i = 0; i < str.length(); i++) {
    char key = str.charAt(i);
    Integer value = hs.get(key);

    if (value == null) {
        hs.put(key, 1);
    } else {
        value++;
        hs.put(key, value);
    }
}
StringBuilder sb = new StringBuilder(); //利用StringBuilder
Set<Character> keySet = hs.keySet();
for (Character ch : keySet) {
    Integer value = hs.get(ch);
    sb.append("字符：").append(ch).append(", 出现").append(value).append("次\n");
}
System.out.println(sb.toString());
~~~

![image-20210705095145582](https://i.loli.net/2021/07/05/svJfPIoyjGr6diN.png)

若要对键进行自然排序，可以把HashMap换成TreeMap



### Collections

<kbd>java.util</kbd>

它是针对集合操作的工具类

常用方法：

```java
public static <T extends Comparable<? super T>> void sort(List<T> list)//:将指定的列表按升序排序
public static void reverse(List<?> list)//:反转指定列表中元素的顺序
public static void shuffle(List<?> list)//:使用默认的随机源随机排列指定的列表
```



### 模拟斗地主发牌看牌

~~~java
//创建牌盒，也就是一个集合对象
        ArrayList<String> arr = new ArrayList<>();

        //装牌
        /*
        ◆ 2,3...K, A
        ♣ 2,3...K, A
        ♥2...
        ♠2....
        大王，小王
         */

        //定义花色数组
        String[] colors = {"◆", "♣", "♥", "♠"};
        //定义点数数组
        String[] numbers = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"};

        for (String color : colors) {
            for (String number : numbers) {
                arr.add(color + number);
            }
        }
        arr.add("小王");
        arr.add("大王");

        //洗牌
        Collections.shuffle(arr);

        //发牌，也就是遍历集合，给三个玩家发票
        ArrayList<String> p1 = new ArrayList<>();
        ArrayList<String> p2 = new ArrayList<>();
        ArrayList<String> p3 = new ArrayList<>();
        ArrayList<String> diPai = new ArrayList<>();//底牌
        for (int i = 0; i < arr.size();i++){
            String poker = arr.get(i); //获得当前的牌
            if (i >= arr.size() - 3){
                diPai.add(poker); //留出最后三张作为底牌
            }else if (i % 3 == 0) { //三名玩家，对3取余进行发牌
                p1.add(poker);
            }else if(i % 2 ==0){
                p2.add(poker);
            }else if(i % 1 ==0){
                p3.add(poker);
            }
        }

        //看牌，也就是三个玩家分别遍历自己的牌
        lookPoker("p1",p1);
        lookPoker("p2",p2);
        lookPoker("p3",p3);
        lookPoker("底牌",diPai);
    }
    //看牌的方法
    public static void lookPoker(String name,ArrayList<String> arr){
        System.out.printf(name+"的牌是：");
        for (String s : arr){
            System.out.printf(s + " ");
        }
        System.out.println();
    }
~~~



### 模拟斗地主升级版

需求:通过程序实现斗地主过程中的洗牌，发牌和看牌。要求:对牌进行排序

![image-20210705104616061](https://i.loli.net/2021/07/05/ZXbPkR8VEx1Jlt2.png)

![image-20210705105239445](https://i.loli.net/2021/07/05/bzFsmO4VJI7NiQL.png)

~~~java
//创建HashMap，键是编号，值是牌
        HashMap<Integer,String> hs = new HashMap<>();
        //创建ArrayList，存储编号
        ArrayList<Integer> arr = new ArrayList<>();

        //定义花色数组
        String[] colors = {"◆", "♣", "♥", "♠"};
        //定义点数数组
        String[] numbers = {"3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A","2"};

        //从o开始往HashNap里面存储编号，并存储对应的牌。同时往ArrayList里面存储编号
        int index = 0;
        for (String number : numbers){
            for (String color : colors){
                hs.put(index,color+number);
                arr.add(index);
                index++;
            }
        }
        hs.put(index,"小王");
        index++;
        hs.put(index,"大王");
        arr.add(index);

        //洗牌，洗的是编号，用Collections集合的shuffle方法
        Collections.shuffle(arr);

        //发牌(发的也是编号，为了保证编号是排序的，仓创建TreeSet集合接收)
        TreeSet<Integer> p1 = new TreeSet<>();
        TreeSet<Integer> p2 = new TreeSet<>();
        TreeSet<Integer> p3 = new TreeSet<>();
        TreeSet<Integer> diPai = new TreeSet<>();//底牌

        for (int i = 0 ; i <arr.size(); i++){
            int x = arr.get(i);
            if(i  >= arr.size() - 3){
                diPai.add(x);
            }else if((i % 3) == 0){
                p1.add(x);
            }else if(i % 3 == 1){
                p2.add(x);
            }else if(i % 3 ==2 ){
                p3.add(x);
            }
        }

        lookPoker("p1", p1, hs);
        lookPoker("p2", p2, hs);
        lookPoker("p3", p3, hs);
        lookPoker("底牌", diPai, hs);

    }
    //定义方法看牌(遍历TreeSet集合，获取编号，到HashNap集合找对应的牌)
    public static void lookPoker(String name,TreeSet<Integer> ts, HashMap<Integer,String> hs){
        System.out.printf(name+"的牌是：");
        for (Integer key : ts){
            String s = hs.get(key);
            System.out.print(s+" ");
        }
        System.out.println();
    }
~~~



### File类

<kbd>java.io</kbd>

<font color=lightblue >File: 它是文件和目录路径名的抽象表示</font>

* 文件和目录是可以通过File封装成对象的
* 对于File而言，其封装的并不是一个真正存在的文件，仅仅是一个路径名而已。它可以是存在的
  也可以是不存在的。
  将来是要通过具体的操作把这个路径的内容转换为具体存在的

![image-20210705132711502](https://i.loli.net/2021/07/05/7986iVYkQIKplxs.png)

~~~java
File f1 = new File("D:\\Code\\Java\\test.txt");
System.out.println(f1);  // D:\Code\Java\teset.txt

File f2 = new File("D:\\Code\\Java\\","text.txt");
System.out.println(f2); // D:\Code\Java\teset.txt

File f3 = new File("D:\\Code\\Java\\");
File f4 = new File(f3,"teset.txt");
System.out.println(f4); // D:\Code\Java\teset.txt

~~~



#### File创建功能

![image-20210705133330671](https://i.loli.net/2021/07/05/stlbJ82gHicDKvL.png)

```java
//在所给目录创建一个java.txt
File f = new File("D:\\Code\\Java\\test\\java.txt");
System.out.println(f.createNewFile());
//如果文件不存在，就创建文件并返回true
//如果文件存在，就不创建文件，并返回false
File f2 = new File("D:\\Code\\Java\\test\\test1");//创建一个目录test1
System.out.println(f2.mkdir());
File f3 = new File("D:\\Code\\Java\\test\\JavaWEB\\Html");//创建多级目录JavaWEB\Html
System.out.println(f3.mkdirs());
```



#### File类判断和获取功能

<img src="https://i.loli.net/2021/07/05/Z2XwU5dBnRPALhq.png" alt="image-20210705134645579"  />



~~~java
File f = new File("D:\\Code\\Java\\test");
System.out.println(f.isDirectory());//测试此抽象路径名表示的File是否为目录
System.out.println(f.isFile());// 测试此抽象路径名表示的File是否为文件
System.out.println(f.exists());//测试此抽象路径名表示的File是否存在
System.out.println(f.getAbsolutePath());//返回此抽象路径名的绝对路径名字符串 D:\Code\Java\test
System.out.println(f.getPath());//将此抽象路径名转换为路径名字符串
System.out.println(f.getName()); //返回此抽象路径名表示的文件或目录的名称
String[] list = f.list(); //列出该目录下的文件名
for (int i = 0; i < list.length;i++){
    System.out.println(list[i]);
}
File[] files = f.listFiles(); //获取路径里每个文件的文件对象
   for (int i = 0 ; i < files.length;i++){
       if (files[i].isFile()){ //判断如果是文件则获取文件名
           System.out.println(files[i].getName());
       }
   }
~~~



#### 删除文件

![image-20210705160104920](https://i.loli.net/2021/07/05/txZo7f9aI6Q1Bre.png)

绝对路径和相对路径的区别

* 绝对路径:完整的路径名，不需要任何其他信息就可以定位它所表示的文件。例如: E:llitcast\ljava.txt
* 相对路径:必须使用取自其他路径名的信息进行解释。例: myFile\Viava.txt  

~~~java
File f = new File("D:\\Code\\Java\\test\\JavaWEB\\python.txt");
System.out.println(f.delete());
~~~



**删除目录时的注意事项:**

* 如果一个目录中有内容(目录，文件)，不能直接删除。应该先删除目录中的内容，最后才能删除目录

```java
File f = new File("D:\\Code\\Java\\test\\JavaWEB\\Html");
System.out.println(f.delete());
```



#### 利用递归获取目录所有内容

~~~java
 public static void main(String[] args) {
        File f  = new File("D:\\Code\\Java\\test");
        getAllFilePth(f);
    }
    public static void getAllFilePth(File f){
        File[] list = f.listFiles();
        for (int i =0; i < list.length;i++){
            if(list[i].isDirectory()){ //如果是目录则递归
                getAllFilePth(list[i]);
            }else {
                System.out.println(list[i].getAbsolutePath()); //获取文件的绝对路径
            }
        }
    }
~~~



### 字节流

#### IO流

IO:输入/输出(Input/Output)

按数据流向来分

* 输入流：读数据
* 输出流：写数据

![image-20210705163403538](https://i.loli.net/2021/07/05/L4Y8aoBUc2RrgtN.png)



按照数据类型来分

* 字节流：字节输入流；字节输出流--
* 字符流：字符输入流；字符输出流--

**如果数据通过Window自带的记事本软件打开，我们还可以读懂里面的内容，就使用字符流，否则使用字节流。如果你不知道该使用哪种类型的流，就使用字节流**



#### 字节流写数据

字节流抽象基类

1. lnputStream:这个抽象类是表示字节输入流的所有类的超类

2. OutputStream:这个抽象类是表示字节输出流的所有类的超类子类名特点

3. 子类名称都是以其父类名作为子类名的后缀

FileOutputStream:文件输出流用于将数据写入File

* FileOutputStream(Stringname):创建文件输出流以指定的名称写入文件

~~~java
 public static void main(String[] args) throws IOException {
        FileOutputStream fos = new FileOutputStream("D:\\Code\\Java\\test\\test.txt");
        /*
        * 做了三件事：
        *   A.调用系统功能创建文件
        *   B.创建了字节输出流对象
        *   C.让字节输出流对象指向创建好的文件
        * */
     fos.write(97);
     fos.close();//关闭此文件输出流并释放与此流相关联的任何系统资源。
    }
~~~

![image-20210705164939774](https://i.loli.net/2021/07/05/A1kgxJfGvYbzFrI.png)



#### 字节流写数据的3种方式



![image-20210705165040301](https://i.loli.net/2021/07/05/7D6virQEXmtWSkP.png)

~~~java
byte[] b = {97,98,99,100,101};
fos.write(b);
fos.write(b,2,3); //只写入 99,98,100  即cdf
byte[] bytes = "hello world java".getBytes(); //getBytest方法可以直接获取字符串对应的字符
fos.write(bytes);
~~~
