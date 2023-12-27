

## 文档

文档：https://doc.qt.io/

文档：https://www.wenjiangs.com/docs/qt-doc





## 发起网络请求

`qmake`

~~~cmake
QT += network
~~~



`CMakeLists.txt`

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



## 调用摄像头

`.pro`

~~~cmake
QT += multimedia multimediawidgets
~~~

`CMakeLists.txt`

~~~cmake
find_package(Qt5 COMPONENTS Network multimedia multimediawidgets REQUIRED)

target_link_libraries(Test_Sianal_Slots PRIVATE Qt${QT_VERSION_MAJOR}::MultimediaWidgets)
~~~



`.h`

~~~CPP
#include <QCameraImageCapture>
#include <QCamera>
#include <QCameraInfo>
#include <QCameraViewfinder>
#include <QPixmap>
#include <QMessageBox>

//创建两个摄像头对象
QCamera *ca;
QCameraImageCapture *capture;
~~~



`.cpp`

~~~CPP
//获取可用摄像头设备并输出在控制台
QList<QCameraInfo> infos = QCameraInfo::availableCameras();
qDebug() << infos.value(0).deviceName() << ":" <<infos.value(0).description();
QString camera = infos.value(0).deviceName();
qDebug() << camera;
//显示摄像头
ca =new QCamera(camera.toUtf8() ,this );
ui->camera->show();

QCameraViewfinder *v2 = new QCameraViewfinder(ui->camera);
v2->resize(ui->camera->size());
ca->setViewfinder(v2);
v2->show();
ca->start();
~~~

~~~CPP
//截取用户打卡时的图片
capture = new QCameraImageCapture(ca);
capture->capture("E://你的文件夹//命名.jpg");
QMessageBox::information(this, "good", "good！");
~~~









~~~cmake
cmake_minimum_required(VERSION 3.5)

project(XXLcloudDisk VERSION 0.1 LANGUAGES CXX)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_PREFIX_PATH "/usr/local/Cellar/qt@5/5.15.8_3/lib/cmake/Qt5")
set(QT_DIR "/usr/local/Cellar/qt@5/5.15.8_3/lib/cmake/Qt5")

find_package(QT NAMES Qt6 Qt5 REQUIRED COMPONENTS Widgets)
find_package(Qt${QT_VERSION_MAJOR} REQUIRED COMPONENTS Widgets)

set(PROJECT_SOURCES
        main.cpp
        mainwindow.cpp
        mainwindow.h
        mainwindow.ui
)

if(${QT_VERSION_MAJOR} GREATER_EQUAL 6)
    qt_add_executable(XXLcloudDisk
        MANUAL_FINALIZATION
        ${PROJECT_SOURCES}
    )
# Define target properties for Android with Qt 6 as:
#    set_property(TARGET XXLcloudDisk APPEND PROPERTY QT_ANDROID_PACKAGE_SOURCE_DIR
#                 ${CMAKE_CURRENT_SOURCE_DIR}/android)
# For more information, see https://doc.qt.io/qt-6/qt-add-executable.html#target-creation
else()
    if(ANDROID)
        add_library(XXLcloudDisk SHARED
            ${PROJECT_SOURCES}
        )
# Define properties for Android with Qt 5 after find_package() calls as:
#    set(ANDROID_PACKAGE_SOURCE_DIR "${CMAKE_CURRENT_SOURCE_DIR}/android")
    else()
        add_executable(XXLcloudDisk
            ${PROJECT_SOURCES}
        )
    endif()
endif()

target_link_libraries(XXLcloudDisk PRIVATE Qt${QT_VERSION_MAJOR}::Widgets)

set_target_properties(XXLcloudDisk PROPERTIES
    MACOSX_BUNDLE_GUI_IDENTIFIER my.example.com
    MACOSX_BUNDLE_BUNDLE_VERSION ${PROJECT_VERSION}
    MACOSX_BUNDLE_SHORT_VERSION_STRING ${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}
    MACOSX_BUNDLE TRUE
    WIN32_EXECUTABLE TRUE
)

install(TARGETS XXLcloudDisk
    BUNDLE DESTINATION .
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
)

if(QT_VERSION_MAJOR EQUAL 6)
    qt_finalize_executable(XXLcloudDisk)
endif()

~~~

