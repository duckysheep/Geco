#include <QtWidgets/QApplication>
#include <QtWidgets/QLabel>
#include <QtQuick/QQuickView>
#include <QPalette>
#include <QTextEdit>
#include <QHBoxLayout>
#include <QVBoxLayout>
#include <QPushButton>


int main (int argc,char** argv)
{
    QApplication app(argc,argv);

    QWidget widget;
    widget.setGeometry(500,300,300,400);

    QPalette palette = QPalette();
    palette.setColor(QPalette::Window, "#F0EBE7");

    widget.setAutoFillBackground(true);
    widget.setPalette(palette);


    QLabel label;
    label.setText("Note:");
    label.setAlignment(Qt::AlignLeft);

    QTextEdit textArea;

    QPushButton button1,button2;
    button1.setText("Clear");
    button2.setText("Save");

    QHBoxLayout *hLayout = new QHBoxLayout();
    hLayout->addWidget(&button1);
    hLayout->addWidget(&button2);

    QVBoxLayout *vLayout = new QVBoxLayout(&widget);
    vLayout->addWidget(&label);
    vLayout->addWidget(&textArea);
    vLayout->addLayout(hLayout);



//    QFont font;
//    font.setFamily("Calibri");
//    font.setBold(true);
//    font.setPixelSize(20);
//    label.setFont(font);

    widget.show();

    return app.exec();
}


