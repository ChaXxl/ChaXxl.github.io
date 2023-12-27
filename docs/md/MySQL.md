## MySQL



### 创建数据库

创建数据库 testDB 并指定字符集为 utf8，校对规则 utf8_general_ci

~~~mysql
create database mydb default charset utf8 collate utf8_general_ci
~~~

* utf8_bin:将字符串中的每一个字符用二进制数据存储，区分大小写。
* utf8_genera_ci:不区分大小写，即大小写不敏感。
* utf8_general_cs:区分大小写，即大小写敏感
* utf8_unicode_ci:不能完全支持组合的记号。

新建数据库时一般选用 utf8_general_ci 就可以

<br/>

### 导入 csv 数据



参考教程：https://www.cnblogs.com/yoyotl/p/9858587.html

导入csv文件

方法一：使用sql语句

~~~sql
load data infile '需要导入的文件全名' into table 将要导入的数据库表名 fields terminated by '列的分隔符' optionally enclosed by '"' escaped by '"' lines terminated by '回车换行符';
~~~

比如：

~~~sql
load data infile 'D:/Master.csv' into table cdr fields terminated by ',' optionally enclosed by '"' escaped by '"' lines terminated by '\r\n';
~~~



~~~sql
LOAD DATA INFILE '/home/paul/clientdata.csv' INTO TABLE CSVImport;
~~~

方法二：在navicat使用向导的方式

参考教程：https://www.cnblogs.com/fightingtong/p/3666195.html

参考教程：https://www.jianshu.com/p/19be94851994



<br/>

### 创建用户

1. 使用 Create User 语句创建用户

~~~sql
CREATE USER 'xxl'@'localhost' IDENTIFIED BY '123';
~~~



2. 使用 Insert 语句创建用户





3. 使用 Grant 语句创建用户

语法：

~~~mysql
grant priv_type ON database.table TO user [IDENTIFIED BY [PASSWORD] 'password']
~~~

参数说明：

- priv_type 参数表示新用户的权限；
- database.table 参数表示新用户的权限范围，即只能在指定的数据库和表上使用自己的权限；
- user 参数指定新用户的账号，由用户名和主机名构成；
- IDENTIFIED BY 关键字用来设置密码；
- password 参数表示新用户的密码。

示例：

~~~MySQL
grant select,insert,update ON mydb.mytable TO 'test3'@localhost IDENTIFIED BY 'test3';
~~~





4. 刷新权限

   ~~~MySQL
   FLUSH  PRIVILEGES;
   ~~~

   

5. 检查权限

   ~~~MySQL
   SHOW GRANTS FOR 'myuser'@'localhost';
   ~~~



6. 补充：权限类型
   * 数据库权限
     - SELECT：表示授予用户可以使用 SELECT 语句访问特定数据库中所有表和视图的权限。
     - INSERT：表示授予用户可以使用 INSERT 语句向特定数据库中所有表添加数据行的权限。
     - DELETE：表示授予用户可以使用 DELETE 语句删除特定数据库中所有表的数据行的权限。
     - UPDATE：表示授予用户可以使用 UPDATE 语句更新特定数据库中所有数据表的值的权限。
     - REFERENCES：表示授予用户可以创建指向特定的数据库中的表外键的权限。
     - CREATE：表示授权用户可以使用 CREATE TABLE 语句在特定数据库中创建新表的权限。
     - ALTER：表示授予用户可以使用 ALTER TABLE 语句修改特定数据库中所有数据表的权限。
     - SHOW VIEW：表示授予用户可以查看特定数据库中已有视图的视图定义的权限。
     - CREATE ROUTINE：表示授予用户可以为特定的数据库创建存储过程和存储函数的权限。
     - ALTER ROUTINE：表示授予用户可以更新和删除数据库中已有的存储过程和存储函数的权限。
     - INDEX：表示授予用户可以在特定数据库中的所有数据表上定义和删除索引的权限。
     - DROP：表示授予用户可以删除特定数据库中所有表和视图的权限。
     - CREATE TEMPORARY TABLES：表示授予用户可以在特定数据库中创建临时表的权限。
     - CREATE VIEW：表示授予用户可以在特定数据库中创建新的视图的权限。
     - EXECUTE ROUTINE：表示授予用户可以调用特定数据库的存储过程和存储函数的权限。
     - LOCK TABLES：表示授予用户可以锁定特定数据库的已有数据表的权限。
     - ALL 或 ALL PRIVILEGES：表示以上所有权限。
   * 表权限
     - SELECT：授予用户可以使用 SELECT 语句进行访问特定表的权限。
     - INSERT：授予用户可以使用 INSERT 语句向一个特定表中添加数据行的权限。
     - DELETE：授予用户可以使用 DELETE 语句从一个特定表中删除数据行的权限。
     - DROP：授予用户可以删除数据表的权限。
     - UPDATE：授予用户可以使用 UPDATE 语句更新特定数据表的权限。
     - ALTER：授予用户可以使用 ALTER TABLE 语句修改数据表的权限。
     - REFERENCES：授予用户可以创建一个外键来参照特定数据表的权限。
     - CREATE：授予用户可以使用特定的名字创建一个数据表的权限。
     - INDEX：授予用户可以在表上定义索引的权限。
     - ALL 或 ALL PRIVILEGES：所有的权限名。
