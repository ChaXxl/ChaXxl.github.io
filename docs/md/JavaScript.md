



##  Javascript

给select元素下拉框赋值

~~~js
var dataList = [
    "6211125886667895", "6211125886667892", "6211125886667897"
];
for (var i = 0; i < dataList.length; i++) {
    var option = document.createElement("option");    //先创建好select里面的option元素
    //转换DOM对象为JQ对象,好用JQ里面提供的方法 给option的value赋值
    $(option).val(dataList[i]);//转换DOM对象为JQ对象,好用JQ里面提供的方法 给option的value赋值   
    $(option).text(dataList[i]); //给option的text赋值,这就是你点开下拉框能够看到的东西   
    $('#problemTypeId').append(option); //获取select 下拉框对象,并将option添加进select
}
~~~



#### Ajax

##### ajax以get方式请求数据

方法一：代码行数比较少，看起来通俗易懂

~~~javascript
// 各参数说明：https://www.cnblogs.com/zhang1f/p/12463738.html
    function func() {
        $.ajax({
                type: "GET",
                url: 'http://127.0.0.1:8000/api/show?name=张三',
                dataType: "json",
                success: function (data) {
                  console.log(data);
                }
            });       
        };
~~~

方法二：

~~~javascript
function func() { // 发送ajax 请求 需要 五步            
     var ajax = new XMLHttpRequest();// （1）创建异步对象
    
     ajax.open('get', 'http://127.0.0.1:8000/api/show?name=肖寻亮');

     ajax.send();// （3）发送请求
         
  //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。  //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
   
     ajax.onreadystatechange = function () {       
         if (ajax.readyState == 4 && ajax.status == 200) {  // 为了保证 数据 完整返回，我们一般会判断 两个值
             // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
             // 5.在注册的事件中 获取 返回的 内容 
             console.log('数据返回成功');                    
             console.log(ajax.responseText);// 数据是保存在 异步对象的 属性中                   
             document.querySelector('h1').innerHTML = ajax.responseText; // 修改页面的显示
         }
     }
 }
~~~

Django后台代码：

~~~python
from django.http.response import HttpResponse, JsonResponse

def index1(request):  
    name = str(request.GET.get('name')) # 获取网址中请求的name属性
    sex = "男"
    age = 18
    address = '长沙'
    return JsonResponse({
        'status': '200',
        'msg': 'success',
        'name':name,
        'sex':sex,
        'age':age,
        'address':address
        })
~~~



##### ajax以post方式请求数据

参考文章：https://www.cnblogs.com/qianguyihao/p/8485028.html

