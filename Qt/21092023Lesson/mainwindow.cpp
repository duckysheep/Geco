#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QMouseEvent>
#include <QKeyEvent>
#include <QtDebug>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    connect(ui->action_About_QT,&QAction::triggered,this,&MainWindow::mySignal,Qt::UniqueConnection);
    connect(ui->action_About_QT,&QAction::triggered,this,&MainWindow::mySignal,Qt::UniqueConnection); //connect signal to signal
    connect(this,&MainWindow::mySignal,this,&MainWindow::mySlot);   //signal to slot
}

MainWindow::~MainWindow()
{
    delete ui;
    disconnect(ui->action_About_QT,0,0,0);
    disconnect(ui->action_About_QT,&QAction::triggered,this,&MainWindow::mySignal);
}

void MainWindow::mySlot(){
//    this->close();
}

void MainWindow::mousePressEvent(QMouseEvent *ev)
{
    qInfo()<<"mouse clicked at: "<<ev->pos();
    emit mySignal();
}

void MainWindow::keyPressEvent(QKeyEvent *ev)
{
    qInfo()<<"key pressed: "<<ev->key();

}

//Pre compilers
//.xml --> cpp moc(meta object compiler),qrc(Qt resource compiler),uic (user interface compiler)
// myapp.h--Moc-->

void MainWindow::on_action_New_triggered()
{
    this->move(20,20);
    MainWindow *sub=new MainWindow();
    sub->show();
}

void MainWindow::on_action_Exit_triggered()
{
    this->close();
}

void MainWindow::on_action_About_QT_triggered()
{
    qApp->aboutQt();
}
