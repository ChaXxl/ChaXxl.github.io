
## 一. Redis

### 1. 随机返回 set 中的元素


1. 定义
  ~~~shell
  srandmember <key> [count]
  ~~~

  key：指定从哪个集合获取元素

  count：可选参数，指定返回几个元素

<br/>

2. 随机返回 一个 key 集合中的元素：

  ~~~shell
  srandmember key
  ~~~

3. 随机返回 两个 key 集合中的元素：

  ~~~shell
  srandmember key 2
  ~~~





### 2. 连接操作相关的命令

~~~shell
默认直接连接 远程连接-h 192.168.1.20 -p 6379
ping：测试连接是否存活如果正常会返回pong
echo：打印
select：切换到指定的数据库，数据库索引号 index 用数字值指定，以 0 作为起始索引值
quit：关闭连接（connection）
auth：简单密码认证
~~~

<br/>

### 3. 服务端相关命令

1. 返回当前服务器时间

   ~~~shell
   time
   ~~~

2. 返回所有连接到服务器的客户端信息和统计数据 参见http://redisdoc.com/server/client_list.html

   ~~~shell
   client list
   ~~~

3. 关闭地址为 ip:port 的客户端

   ~~~shell
   client kill ip:port
   ~~~

4. 将数据同步保存到磁盘

   ~~~shell
   save
   ~~~

5. 将数据异步保存到磁盘

   ~~~shell
   bgsave
   ~~~

6. 返回上次成功将数据保存到磁盘的Unix时戳

   ~~~shell
   lastsave
   ~~~

7. 将数据同步保存到磁盘，然后关闭服务

   ~~~shell
   shundown
   ~~~

8. 提供服务器的信息和统计

   ~~~shell
   info
   ~~~

9. 重置info命令中的某些统计数据

   ~~~shell
   config resetstat
   ~~~

10. 获取配置文件信息

    ~~~shell
    config get
    ~~~

11. 动态地调整 Redis 服务器的配置(configuration)而无须重启，可以修改的配置参数可以使用命令 CONFIG GET * 来列出

    ~~~shell
    config set
    ~~~

12. Redis 服务器时所指定的 redis.conf 文件进行改写

    ~~~shell
    config rewrite
    ~~~

13. 实时转储收到的请求

    ~~~shell
    monitor
    ~~~

14. 改变复制策略设置

    ~~~shell
    slaveof
    ~~~

<br/>

### 4. 发布订阅相关命令

1. 订阅一个或多个符合给定模式的频道 例如psubscribe news.* tweet.*

   ~~~shell
   psubscribe
   ~~~

2. 将信息 message 发送到指定的频道 channel 例如publish msg “good morning”

   ~~~shell
   publish
   ~~~

3. 列出当前的活跃频道 例如PUBSUB CHANNELS news.i*

   ~~~shell
   pubsub channels
   ~~~

4. 返回给定频道的订阅者数量 例如PUBSUB NUMSUB news.it news.internet news.sport news.music

   ~~~shell
   pubsub numsub
   ~~~

5. 返回客户端订阅的所有模式的数量总和

   ~~~shell
   pubsub numpat
   ~~~

6. 指示客户端退订所有给定模式。

   ~~~shell
   punsubscribe
   ~~~

7. 订阅给定的一个或多个频道的信息。例如 subscribe msg chat_room

   ~~~shell
   subscribe
   ~~~

8. 指示客户端退订给定的频道。

   ~~~shell
   unsubscribe
   ~~~

<br/>

### 5. 对KEY操作的命令

1. 确认一个key是否存在

   ~~~shell
   exists(key)
   ~~~

2. 删除一个key

   ~~~shell
   del(key)
   ~~~

3. 返回值的类型

   ~~~shell
   type(key)
   ~~~

4. 返回满足给定pattern的所有key

   ~~~shell
   keys(pattern)
   ~~~

5. 随机返回key空间的一个

   ~~~shell
   randomkey
   ~~~

6. 重命名key

   ~~~shell
   keyrename(oldname, newname)
   ~~~

7. 返回当前数据库中key的数目

   ~~~shell
   dbsize
   ~~~

8. 设定一个key的活动时间（s）

   ~~~shell
   expire
   ~~~

9. 获得一个key的活动时间

   ~~~shell
   ttl
   ~~~

10. 移动当前数据库中的key到dbindex数据库

    ~~~shell
    move(key, dbindex)
    ~~~

11. 删除当前选择数据库中的所有key

    ~~~shell
    flushdb
    ~~~

12. 删除所有数据库中的所有key

    ~~~shell
    flushall
    ~~~

<br/>

### 6. 对String操作的命令

1. 给数据库中名称为key的string赋予值value

   ~~~shell
   set(key, value)
   ~~~

2. 返回数据库中名称为key的string的value

   ~~~shell
   get(key)
   ~~~

3. 给名称为key的string赋予上一次的value

   ~~~shell
   getset(key, value)
   ~~~

4. 返回库中多个string的value

   ~~~shell
   mget(key1, key2,…, key N)
   ~~~

5. 添加string，名称为key，值为value

   ~~~shell
   setnx(key, value)
   ~~~

6. 向库中添加string，设定过期时间time

   ~~~shell
   setex(key, time, value)
   ~~~

7. 批量设置多个string的值

   ~~~shell
   mset(key N, value N)
   ~~~

8. 如果所有名称为key i的string都不存在

   ~~~shell
   msetnx(key N, value N)
   ~~~

9. 名称为key的string增1操作

   ~~~shell
   incr(key)
   ~~~

10. 名称为key的string增加integer

    ~~~shell
    incrby(key, integer)
    ~~~

11. 名称为key的string减1操作

    ~~~shell
    decr(key)
    ~~~

12. 名称为key的string减少integer

    ~~~shell
    decrby(key, integer)
    ~~~

13. 名称为key的string的值附加value

    ~~~shell
    append(key, value)
    ~~~

14. 返回名称为key的string的value的子串

    ~~~shell
    substr(key, start, end)
    ~~~

<br/>

### 7. 对List操作的命令

~~~shell
rpush(key, value)：在名称为key的list尾添加一个值为value的元素
lpush(key, value)：在名称为key的list头添加一个值为value的 元素
llen(key)：返回名称为key的list的长度
lrange(key, start, end)：返回名称为key的list中start至end之间的元素
ltrim(key, start, end)：截取名称为key的list
lindex(key, index)：返回名称为key的list中index位置的元素
lset(key, index, value)：给名称为key的list中index位置的元素赋值
lrem(key, count, value)：删除count个key的list中值为value的元素
lpop(key)：返回并删除名称为key的list中的首元素
rpop(key)：返回并删除名称为key的list中的尾元素
blpop(key1, key2,… key N, timeout)：lpop命令的block版本。
brpop(key1, key2,… key N, timeout)：rpop的block版本。
rpoplpush(srckey, dstkey)：返回并删除名称为srckey的list的尾元素，并将该元素添加到名称为dstkey的list的头部
~~~

<br/>

### 8. #对Set操作的命令

~~~shell
sadd(key, member)：向名称为key的set中添加元素member
srem(key, member) ：删除名称为key的set中的元素member
spop(key) ：随机返回并删除名称为key的set中一个元素
smove(srckey, dstkey, member) ：移到集合元素
scard(key) ：返回名称为key的set的基数
sismember(key, member) ：member是否是名称为key的set的元素
sinter(key1, key2,…key N) ：求交集
sinterstore(dstkey, (keys)) ：求交集并将交集保存到dstkey的集合
sunion(key1, (keys)) ：求并集
sunionstore(dstkey, (keys)) ：求并集并将并集保存到dstkey的集合
sdiff(key1, (keys)) ：求差集
sdiffstore(dstkey, (keys)) ：求差集并将差集保存到dstkey的集合
smembers(key) ：返回名称为key的set的所有元素
srandmember(key) ：随机返回名称为key的set的一个元素
~~~

<br/>

### 9. 对Hash操作的命令

~~~shell
hset(key, field, value)：向名称为key的hash中添加元素field
hget(key, field)：返回名称为key的hash中field对应的value
hmget(key, (fields))：返回名称为key的hash中field i对应的value
hmset(key, (fields))：向名称为key的hash中添加元素field
hincrby(key, field, integer)：将名称为key的hash中field的value增加integer
hexists(key, field)：名称为key的hash中是否存在键为field的域
hdel(key, field)：删除名称为key的hash中键为field的域
hlen(key)：返回名称为key的hash中元素个数
hkeys(key)：返回名称为key的hash中所有键
hvals(key)：返回名称为key的hash中所有键对应的value
hgetall(key)：返回名称为key的hash中所有的键（field）及其对应的value
~~~

