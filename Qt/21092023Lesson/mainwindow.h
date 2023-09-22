#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

Q_SIGNALS:
    void mySignal();

public Q_SLOTS:
    void mySlot();

protected:
    void mousePressEvent(QMouseEvent *ev);
    void keyPressEvent(QKeyEvent *ev);

private slots:
    void on_action_New_triggered();

    void on_action_Exit_triggered();

    void on_action_About_QT_triggered();

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
