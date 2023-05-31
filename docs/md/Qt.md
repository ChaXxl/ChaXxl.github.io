~~~cmake
target_link_libraries(Test_Sianal_Slots PRIVATE Qt${QT_VERSION_MAJOR}::Network)
~~~



~~~cpp
#include <QtNetwork/QNetworkAccessManager>
#include <QtNetwork/QNetworkRequest>
#include <QtNetwork/QNetworkReply>
#include <QByteArray>

// 数据
QByteArray array;

// url
QString url = "http://www.baidu.com";

// 网络请求类对象
QNetworkAccessManager *m_manager = new QNetworkAccessManager;

// request
QNetworkRequest request;
request.setUrl(QUrl(url));

// 请求头信息
request.setHeader(QNetworkRequest::ContentTypeHeader, QVariant("application/json"));
request.setHeader(QNetworkRequest::ContentLengthHeader, QVariant(array.size()));

// 向服务器发送请求
QNetworkReply *reply = m_manager->post(request, aray);
QNetworkReply *reply = m_manager->get(request);

// 为了让Qt程序能够响应事件循环，我们使用了qApp->processEvents()方法来使其保持活动状态，直到获取到响应。
while (!reply->isFinished()) {
    qApp->processEvents();
}

// 读取返回数据
QByteArray json = reply->readAll();
qDebug() << json;

// 释放资源
reply->deleteLater(); 
~~~

