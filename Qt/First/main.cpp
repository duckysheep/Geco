#include <QtCore/QCoreApplication>      //using QCoreApplication class from QtCore module
#include <QtWidgets/QApplication>
#include <QtWidgets/QLabel>
#include <QDebug>
#include <QtQuick/QQuickView>
#include <QGuiApplication>

//int main (int argc,char** argv)
//{
//    QCoreApplication app(argc,argv);
//    qDebug()<<"test";

//    return 0;
//}


//int main (int argc,char** argv)
//{
//    QApplication app(argc,argv);
// //    qDebug()<<"test";
// //    QLabel *label=new QLabel(0);
// //    label->setText("label text");
// //    label->show();
// //    return 0;

//    QWidget widget;
//    widget.setGeometry(100,100,300,300);

//    QLabel label;
//    label.setParent(&widget);

//    label.setText("label text");
//    label.setAlignment(Qt::AlignCenter);
//    QFont font;
//    font.setFamily("Calibri");
//    font.setBold(true);
//    font.setPixelSize(20);
//    label.setFont(font);
//    label.setGeometry(100,100,300,300);
// //    label.show();

//    widget.show();

//    return app.exec();
//}


int main (int argc,char*argv[])
{
    QGuiApplication app(argc,argv);

    QQuickView view;
    view.setSource(QUrl::fromLocalFile("C:/Users/Daphne/Documents/Work/Geco/Geco/Qt/First/first.qml"));
    view.show();

    return app.exec();

}

