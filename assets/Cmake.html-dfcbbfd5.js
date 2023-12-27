import{_ as c,X as p,Y as i,Z as a,$ as n,a0 as e,a1 as t,F as o}from"./framework-dbbbcf5d.js";const l={},r=t(`<h2 id="一-cmake" tabindex="-1"><a class="header-anchor" href="#一-cmake" aria-hidden="true">#</a> 一. Cmake</h2><h3 id="常用内置变量" tabindex="-1"><a class="header-anchor" href="#常用内置变量" aria-hidden="true">#</a> 常用内置变量</h3><ul><li><code>CMAKE_SOURCE_DIR</code>：当前 CMakeLists.txt 文件所在的文件夹路径</li><li><code>CMAKE_BINARY_DIR</code>：对应 cmake 的 build 的目录，主要是运行时生成的文件目录</li><li><code>CMAKE_CURRENT_SOURCE_DIR</code>:一般来说，一个工程会有多个 CMakeLists.txt 文件，对应当前文件目录</li><li><code>CMAKE_CURRENT_BINARY_DIR</code>：对应 build 里的目录</li><li><code>CMAKE_ANDROID_ARCH_ABI</code>：当前 Android abi 架构目录</li></ul><br><h3 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置" aria-hidden="true">#</a> 基础设置</h3><h4 id="设置工程名" tabindex="-1"><a class="header-anchor" href="#设置工程名" aria-hidden="true">#</a> 设置工程名</h4><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">project</span><span class="token punctuation">(</span><span class="token string">&quot;Demo&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="最低支持的版本" tabindex="-1"><a class="header-anchor" href="#最低支持的版本" aria-hidden="true">#</a> 最低支持的版本</h4><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.10.2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="生成静态库和动态库" tabindex="-1"><a class="header-anchor" href="#生成静态库和动态库" aria-hidden="true">#</a> 生成静态库和动态库</h4><ul><li>SHARED：表示生成动态库（.so）</li><li>STATIC：表示生成静态库（.a）</li></ul><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">add_library</span><span class="token punctuation">(</span>nativeLib <span class="token namespace">SHARED</span> nativeLib.cpp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="批量导入源码文件" tabindex="-1"><a class="header-anchor" href="#批量导入源码文件" aria-hidden="true">#</a> 批量导入源码文件</h4><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">file</span><span class="token punctuation">(</span>GLOB ALL_FILE *.cpp *.c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>. ALL_FILE<span class="token punctuation">)</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>nativeLib <span class="token namespace">SHARED</span> <span class="token punctuation">\${</span>ALL_FILE<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="添加一个子目录并构建该子目录" tabindex="-1"><a class="header-anchor" href="#添加一个子目录并构建该子目录" aria-hidden="true">#</a> 添加一个子目录并构建该子目录</h4><p><code>sub/CMakeLists.txt</code></p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.10.2</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
<span class="token keyword">add_library</span><span class="token punctuation">(</span>sub test.cpp<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><code>CMakeLists.txt</code></p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.10.2</span><span class="token punctuation">)</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>

<span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="普通变量" tabindex="-1"><a class="header-anchor" href="#普通变量" aria-hidden="true">#</a> 普通变量</h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><p>声明变量，CMake 中所有变量都是 string 类型</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>变量名, 变量值<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><p>把 var 赋值为 666</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>var <span class="token number">66</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h4><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">message</span><span class="token punctuation">(</span><span class="token string">&quot;var = <span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">var</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h4><p>移除之后，就不能再使用了</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">unset</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="列表变量" tabindex="-1"><a class="header-anchor" href="#列表变量" aria-hidden="true">#</a> 列表变量</h3><h4 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h4><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>列表名 值<span class="token number">1</span> 值<span class="token number">2</span> 值<span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>列表名 <span class="token string">&quot;值1;值2;值3&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>list_var <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">set</span><span class="token punctuation">(</span>list_var <span class="token string">&quot;1;2;3;4;5;6&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="条件判断" tabindex="-1"><a class="header-anchor" href="#条件判断" aria-hidden="true">#</a> 条件判断</h3><br><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><br><h3 id="函数定义" tabindex="-1"><a class="header-anchor" href="#函数定义" aria-hidden="true">#</a> 函数定义</h3><br><h3 id="构建单个源文件" tabindex="-1"><a class="header-anchor" href="#构建单个源文件" aria-hidden="true">#</a> 构建单个源文件</h3><p>项目只有一个源文件，结构如下，我们一般会新建一个目录存储 cmake 运行的产物，这里我新建了一个 build 目录。</p>`,60),u={href:"http://main.cc",target:"_blank",rel:"noopener noreferrer"},d=t(`<br><p><code>main.cc</code> 的内容如下</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">power</span><span class="token punctuation">(</span><span class="token keyword">int</span> num1<span class="token punctuation">,</span> <span class="token keyword">int</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal parameters&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">power</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d x %d = %d&quot;</span><span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><code>CMakeLists.txt</code> 的内容如下：</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># Cmake的最低版本号的要求</span>
<span class="token keyword">cmake_minimum_required</span> <span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.26</span><span class="token punctuation">)</span>

<span class="token comment"># 项目信息---项目文件夹名称</span>
<span class="token keyword">project</span> <span class="token punctuation">(</span>project1<span class="token punctuation">)</span>

<span class="token comment"># 指定生成目标---rrrr 是等会要生成的可运行程序名称</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>rrrr main.cc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 build 目录下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cmake <span class="token punctuation">..</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>然后执行 make 命令就可以得到 rrrr 的可执行文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="同一个目录-多个源文件" tabindex="-1"><a class="header-anchor" href="#同一个目录-多个源文件" aria-hidden="true">#</a> 同一个目录，多个源文件</h3>`,13),k={href:"http://main.cc",target:"_blank",rel:"noopener noreferrer"},m={href:"http://MathFunctions.cc",target:"_blank",rel:"noopener noreferrer"},v={href:"http://MathFunctions.cc",target:"_blank",rel:"noopener noreferrer"},b={href:"http://main.cc",target:"_blank",rel:"noopener noreferrer"},h={href:"http://MathFunctions.cc",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token keyword">add_executable</span><span class="token punctuation">(</span>rrrr main.cc MathFunctions.cc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><p>但是如果有很多文件的情况下，一个文件一个文件的添加很麻烦，cmake 提供了 aux_source_directory 命令，该命令会查找指定目录下所有的源文件，然后将结果存到指定的变量名。CMakeLists.txt 文件内容如下</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># CMake 最低版本号要求</span>
<span class="token keyword">cmake_minimum_required</span> <span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.26</span><span class="token punctuation">)</span>

<span class="token comment"># 项目信息</span>
<span class="token keyword">project</span> <span class="token punctuation">(</span>project1<span class="token punctuation">)</span>

<span class="token comment"># 查找目录下的所有源文件，并将名称保存到 DIR_SRCS 变量</span>
<span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>. DIR_SRCS<span class="token punctuation">)</span>

<span class="token comment"># 指定生成目标</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>rrrr <span class="token punctuation">\${</span>DIR_SRCS<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="多个目录多个源文件" tabindex="-1"><a class="header-anchor" href="#多个目录多个源文件" aria-hidden="true">#</a> 多个目录多个源文件</h3><p>现在我们将 MathFounction.h 和 MathFounction.cpp 移动到 math 目录下，项目结构如下：</p>`,7),_={href:"http://main.cc",target:"_blank",rel:"noopener noreferrer"},y={href:"http://MathFunctions.cc",target:"_blank",rel:"noopener noreferrer"},f=t(`<br><p>这种情况我们需要在 project1 目录下和 math 目录下各自编写一个 CmakeLists.txt 文件，我们可以将 math 目录里面的文件编译成静态库再由 main 函数调用。</p><p><code>math/CMakeLists.txt</code></p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># 查找当前目录下的所有源文件, 并将名称保存到 DIR_LIB_SRCS 变量</span>
<span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>. DIR_LIB_SRCS<span class="token punctuation">)</span>

<span class="token comment"># 指定生成 MathFunctions 链接库  将src目录中源文件编译为静态链接库</span>
<span class="token keyword">add_library</span> <span class="token punctuation">(</span>MathFunctions <span class="token punctuation">\${</span>DIR_LIB_SRCS<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><code>CMakeLists.txt</code></p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># 最低版本要求</span>
<span class="token keyword">cmake_minimum_required</span><span class="token punctuation">(</span><span class="token property">VERSION</span> <span class="token number">3.26</span><span class="token punctuation">)</span>  

<span class="token comment"># 项目信息</span>
<span class="token keyword">project</span><span class="token punctuation">(</span>project1<span class="token punctuation">)</span>

<span class="token keyword">set</span><span class="token punctuation">(</span><span class="token variable">CMAKE_INCLUDE_CURRENT_DIR</span> <span class="token boolean">ON</span><span class="token punctuation">)</span>

<span class="token comment"># 是否使用自己的 MathFunctions 库</span>
<span class="token keyword">option</span><span class="token punctuation">(</span>USE_MYMATH
    <span class="token string">&quot;Use provided math implementation&quot;</span> <span class="token boolean">ON</span>
<span class="token punctuation">)</span>

<span class="token comment"># 加入一个配置头文件，用于处理 CMake 对源码的设置</span>
<span class="token keyword">configure_file</span><span class="token punctuation">(</span>
    <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span></span>/config.h.in&quot;</span>
    <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span></span>/config.h&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment"># 是否加入 MathFunctions 库</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>USE_MYMATH<span class="token punctuation">)</span>
    <span class="token keyword">include_directories</span><span class="token punctuation">(</span><span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">\${</span><span class="token variable">PROJECT_SOURCE_DIR</span><span class="token punctuation">}</span></span>/math&quot;</span><span class="token punctuation">)</span>
    
    <span class="token comment"># 指明本项目包含一个子目录 math，这样，math 目录下的 CMakeLists.txt 文件和源代码也会被使用</span>
    <span class="token keyword">add_subdirectory</span><span class="token punctuation">(</span>math<span class="token punctuation">)</span>
    
    <span class="token keyword">set</span><span class="token punctuation">(</span>EXTRA_LIBS <span class="token punctuation">\${</span>EXTRA_LIBS<span class="token punctuation">}</span> MathFunctions<span class="token punctuation">)</span>
<span class="token keyword">endif</span><span class="token punctuation">(</span>USE_MYMATH<span class="token punctuation">)</span>

<span class="token comment"># 查找当前目录下的所有源文件，并将名称保存到 DIR_SRCS 变量</span>
<span class="token keyword">aux_source_directory</span><span class="token punctuation">(</span>. DIR_SRCS<span class="token punctuation">)</span>

<span class="token comment"># 指定生成目标</span>
<span class="token comment"># target_link_libraries 指明可执行文件需要链接一个名为 MathFunctions 的链接库。</span>
<span class="token keyword">add_executable</span><span class="token punctuation">(</span>rrrr <span class="token punctuation">\${</span>DIR_SRCS<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">target_link_libraries</span><span class="token punctuation">(</span>rrrr <span class="token punctuation">\${</span>EXTRA_LIBS<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),x=a("li",null,[a("p",null,"option 命令添加了一个 USE_MYMATH 选项，并且默认值为 ON。之后根据 USE_MYMATH 变量的值决定是否使用我门自己编写的 MathFounctions 库。")],-1),w={href:"http://xn--CMakeconfig-cn0r.h.in",target:"_blank",rel:"noopener noreferrer"},M={href:"http://config.h.in",target:"_blank",rel:"noopener noreferrer"},R=t(`<div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">cmakedefine</span> <span class="token expression">USE_MYMATH</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br>`,2),C={href:"http://main.cc",target:"_blank",rel:"noopener noreferrer"},S=t(`<p><code>main.cc</code></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;config.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">USE_MYMATH</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;MathFunctions.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>argc <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal parameters&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">power</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d x %d = %d\\n\\n&quot;</span><span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">putchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function E(I,L){const s=o("ExternalLinkIcon");return p(),i("div",null,[r,a("blockquote",null,[a("p",null,[n("├── CMakeLists.txt ├── build └── "),a("a",u,[n("main.cc"),e(s)])])]),d,a("p",null,[n("将 "),a("a",k,[n("main.cc"),e(s)]),n(" 的 power 函数抽取出来放到 "),a("a",m,[n("MathFunctions.cc"),e(s)]),n(" 中，项目结构如下：")]),a("blockquote",null,[a("p",null,[n("├── CMakeLists.txt ├── "),a("a",v,[n("MathFunctions.cc"),e(s)]),n(" ├── MathFunctions.h ├── build └── "),a("a",b,[n("main.cc"),e(s)])])]),a("p",null,[n("可以通过在 add_executable 命令中增加 "),a("a",h,[n("MathFunctions.cc"),e(s)]),n(" ，效果如下")]),g,a("blockquote",null,[a("p",null,[n("├── CMakeLists.txt ├── build ├── "),a("a",_,[n("main.cc"),e(s)]),n(" └── math ├── CMakeLists.txt ├── "),a("a",y,[n("MathFunctions.cc"),e(s)]),n(" └── MathFunctions.h")])]),f,a("ul",null,[x,a("li",null,[a("p",null,[n("configure_file 命令用于加入一个配置文件 config.h，这个文件由 "),a("a",w,[n("CMake从config.h.in"),e(s)]),n(" 生成，这样的机制可以通过预定义一些参数和变量来控制代码的生成，"),a("a",M,[n("config.h.in"),e(s)]),n(" 内容如下：")]),R])]),a("p",null,[n("然后需要更改 "),a("a",C,[n("main.cc"),e(s)]),n(" 文件让其根据 USE_MYMATH 的值确定是否调用标准库，内容如下：")]),S])}const A=c(l,[["render",E],["__file","Cmake.html.vue"]]);export{A as default};
