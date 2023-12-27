import{_ as l,X as d,Y as t,Z as s,$ as e,a0 as i,a2 as a,F as c}from"./framework-c5cbeb87.js";const u={},p=a(`<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><h3 id="随机返回-set-中的元素" tabindex="-1"><a class="header-anchor" href="#随机返回-set-中的元素" aria-hidden="true">#</a> 随机返回 set 中的元素</h3><ol><li>定义</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>srandmember <span class="token operator">&lt;</span>key<span class="token operator">&gt;</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>key：指定从哪个集合获取元素</p><p>count：可选参数，指定返回几个元素</p><br><ol start="2"><li>随机返回 一个 key 集合中的元素：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>srandmember key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>随机返回 两个 key 集合中的元素：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>srandmember key <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="连接操作相关的命令" tabindex="-1"><a class="header-anchor" href="#连接操作相关的命令" aria-hidden="true">#</a> 连接操作相关的命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>默认直接连接 远程连接-h <span class="token number">192.168</span>.1.20 <span class="token parameter variable">-p</span> <span class="token number">6379</span>
ping：测试连接是否存活如果正常会返回pong
echo：打印
select：切换到指定的数据库，数据库索引号 index 用数字值指定，以 <span class="token number">0</span> 作为起始索引值
quit：关闭连接（connection）
auth：简单密码认证
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="服务端相关命令" tabindex="-1"><a class="header-anchor" href="#服务端相关命令" aria-hidden="true">#</a> 服务端相关命令</h3>`,15),r=a(`<li><p>返回当前服务器时间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">time</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),o={href:"http://redisdoc.com/server/client_list.html",target:"_blank",rel:"noopener noreferrer"},v=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`client list
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),b=a(`<li><p>关闭地址为 ip:port 的客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>client <span class="token function">kill</span> ip:port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将数据同步保存到磁盘</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将数据异步保存到磁盘</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bgsave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回上次成功将数据保存到磁盘的Unix时戳</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lastsave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将数据同步保存到磁盘，然后关闭服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shundown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>提供服务器的信息和统计</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重置info命令中的某些统计数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config resetstat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取配置文件信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config get
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>动态地调整 Redis 服务器的配置(configuration)而无须重启，可以修改的配置参数可以使用命令 CONFIG GET * 来列出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config <span class="token builtin class-name">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Redis 服务器时所指定的 redis.conf 文件进行改写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config rewrite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>实时转储收到的请求</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>monitor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>改变复制策略设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slaveof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,12),h=s("br",null,null,-1),m=s("h3",{id:"发布订阅相关命令",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#发布订阅相关命令","aria-hidden":"true"},"#"),e(" 发布订阅相关命令")],-1),k=a(`<li><p>订阅一个或多个符合给定模式的频道 例如psubscribe news.* tweet.*</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>psubscribe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>将信息 message 发送到指定的频道 channel 例如publish msg “good morning”</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>列出当前的活跃频道 例如PUBSUB CHANNELS news.i*</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pubsub channels
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),g={href:"http://news.it",target:"_blank",rel:"noopener noreferrer"},y=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`pubsub numsub
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),x=a(`<li><p>返回客户端订阅的所有模式的数量总和</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pubsub numpat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指示客户端退订所有给定模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>punsubscribe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>订阅给定的一个或多个频道的信息。例如 subscribe msg chat_room</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>subscribe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>指示客户端退订给定的频道。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>unsubscribe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,4),f=a(`<br><h3 id="对key操作的命令" tabindex="-1"><a class="header-anchor" href="#对key操作的命令" aria-hidden="true">#</a> 对KEY操作的命令</h3><ol><li><p>确认一个key是否存在</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>exists<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除一个key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>del<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回值的类型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>type<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回满足给定pattern的所有key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keys<span class="token punctuation">(</span>pattern<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>随机返回key空间的一个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>randomkey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重命名key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keyrename<span class="token punctuation">(</span>oldname, newname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回当前数据库中key的数目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dbsize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设定一个key的活动时间（s）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>expire
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获得一个key的活动时间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ttl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>移动当前数据库中的key到dbindex数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>move<span class="token punctuation">(</span>key, dbindex<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除当前选择数据库中的所有key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flushdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除所有数据库中的所有key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flushall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><br><h3 id="对string操作的命令" tabindex="-1"><a class="header-anchor" href="#对string操作的命令" aria-hidden="true">#</a> 对String操作的命令</h3><ol><li><p>给数据库中名称为key的string赋予值value</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>set<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回数据库中名称为key的string的value</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>get<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>给名称为key的string赋予上一次的value</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getset<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回库中多个string的value</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mget<span class="token punctuation">(</span>key1, key2,…, key N<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加string，名称为key，值为value</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setnx<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>向库中添加string，设定过期时间time</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setex<span class="token punctuation">(</span>key, time, value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>批量设置多个string的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mset<span class="token punctuation">(</span>key N, value N<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如果所有名称为key i的string都不存在</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>msetnx<span class="token punctuation">(</span>key N, value N<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>名称为key的string增1操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>incr<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>名称为key的string增加integer</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>incrby<span class="token punctuation">(</span>key, integer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>名称为key的string减1操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>decr<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>名称为key的string减少integer</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>decrby<span class="token punctuation">(</span>key, integer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>名称为key的string的值附加value</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>append<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>返回名称为key的string的value的子串</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>substr<span class="token punctuation">(</span>key, start, end<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><br><h3 id="对list操作的命令" tabindex="-1"><a class="header-anchor" href="#对list操作的命令" aria-hidden="true">#</a> 对List操作的命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rpush<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span>：在名称为key的list尾添加一个值为value的元素
lpush<span class="token punctuation">(</span>key, value<span class="token punctuation">)</span>：在名称为key的list头添加一个值为value的 元素
llen<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回名称为key的list的长度
lrange<span class="token punctuation">(</span>key, start, end<span class="token punctuation">)</span>：返回名称为key的list中start至end之间的元素
ltrim<span class="token punctuation">(</span>key, start, end<span class="token punctuation">)</span>：截取名称为key的list
lindex<span class="token punctuation">(</span>key, index<span class="token punctuation">)</span>：返回名称为key的list中index位置的元素
lset<span class="token punctuation">(</span>key, index, value<span class="token punctuation">)</span>：给名称为key的list中index位置的元素赋值
lrem<span class="token punctuation">(</span>key, count, value<span class="token punctuation">)</span>：删除count个key的list中值为value的元素
lpop<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回并删除名称为key的list中的首元素
rpop<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回并删除名称为key的list中的尾元素
blpop<span class="token punctuation">(</span>key1, key2,… key N, <span class="token function">timeout</span><span class="token punctuation">)</span>：lpop命令的block版本。
brpop<span class="token punctuation">(</span>key1, key2,… key N, <span class="token function">timeout</span><span class="token punctuation">)</span>：rpop的block版本。
rpoplpush<span class="token punctuation">(</span>srckey, dstkey<span class="token punctuation">)</span>：返回并删除名称为srckey的list的尾元素，并将该元素添加到名称为dstkey的list的头部
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="对set操作的命令" tabindex="-1"><a class="header-anchor" href="#对set操作的命令" aria-hidden="true">#</a> #对Set操作的命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>sadd<span class="token punctuation">(</span>key, member<span class="token punctuation">)</span>：向名称为key的set中添加元素member
srem<span class="token punctuation">(</span>key, member<span class="token punctuation">)</span> ：删除名称为key的set中的元素member
spop<span class="token punctuation">(</span>key<span class="token punctuation">)</span> ：随机返回并删除名称为key的set中一个元素
smove<span class="token punctuation">(</span>srckey, dstkey, member<span class="token punctuation">)</span> ：移到集合元素
scard<span class="token punctuation">(</span>key<span class="token punctuation">)</span> ：返回名称为key的set的基数
sismember<span class="token punctuation">(</span>key, member<span class="token punctuation">)</span> ：member是否是名称为key的set的元素
sinter<span class="token punctuation">(</span>key1, key2,…key N<span class="token punctuation">)</span> ：求交集
sinterstore<span class="token punctuation">(</span>dstkey, <span class="token punctuation">(</span>keys<span class="token punctuation">))</span> ：求交集并将交集保存到dstkey的集合
sunion<span class="token punctuation">(</span>key1, <span class="token punctuation">(</span>keys<span class="token punctuation">))</span> ：求并集
sunionstore<span class="token punctuation">(</span>dstkey, <span class="token punctuation">(</span>keys<span class="token punctuation">))</span> ：求并集并将并集保存到dstkey的集合
sdiff<span class="token punctuation">(</span>key1, <span class="token punctuation">(</span>keys<span class="token punctuation">))</span> ：求差集
sdiffstore<span class="token punctuation">(</span>dstkey, <span class="token punctuation">(</span>keys<span class="token punctuation">))</span> ：求差集并将差集保存到dstkey的集合
smembers<span class="token punctuation">(</span>key<span class="token punctuation">)</span> ：返回名称为key的set的所有元素
srandmember<span class="token punctuation">(</span>key<span class="token punctuation">)</span> ：随机返回名称为key的set的一个元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="对hash操作的命令" tabindex="-1"><a class="header-anchor" href="#对hash操作的命令" aria-hidden="true">#</a> 对Hash操作的命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hset<span class="token punctuation">(</span>key, field, value<span class="token punctuation">)</span>：向名称为key的hash中添加元素field
hget<span class="token punctuation">(</span>key, field<span class="token punctuation">)</span>：返回名称为key的hash中field对应的value
hmget<span class="token punctuation">(</span>key, <span class="token punctuation">(</span>fields<span class="token punctuation">))</span>：返回名称为key的hash中field i对应的value
hmset<span class="token punctuation">(</span>key, <span class="token punctuation">(</span>fields<span class="token punctuation">))</span>：向名称为key的hash中添加元素field
hincrby<span class="token punctuation">(</span>key, field, integer<span class="token punctuation">)</span>：将名称为key的hash中field的value增加integer
hexists<span class="token punctuation">(</span>key, field<span class="token punctuation">)</span>：名称为key的hash中是否存在键为field的域
hdel<span class="token punctuation">(</span>key, field<span class="token punctuation">)</span>：删除名称为key的hash中键为field的域
hlen<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回名称为key的hash中元素个数
hkeys<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回名称为key的hash中所有键
hvals<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回名称为key的hash中所有键对应的value
hgetall<span class="token punctuation">(</span>key<span class="token punctuation">)</span>：返回名称为key的hash中所有的键（field）及其对应的value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function _(N,w){const n=c("ExternalLinkIcon");return d(),t("div",null,[p,s("ol",null,[r,s("li",null,[s("p",null,[e("返回所有连接到服务器的客户端信息和统计数据 参见"),s("a",o,[e("http://redisdoc.com/server/client_list.html"),i(n)])]),v]),b]),h,m,s("ol",null,[k,s("li",null,[s("p",null,[e("返回给定频道的订阅者数量 例如PUBSUB NUMSUB "),s("a",g,[e("news.it"),i(n)]),e(" news.internet news.sport news.music")]),y]),x]),f])}const S=l(u,[["render",_],["__file","Redis.html.vue"]]);export{S as default};
