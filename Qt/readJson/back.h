#ifndef BACK_H
#define BACK_H

#include <QObject>
#include <QString>
#include <QJsonObject>
#include <QVariantMap>

class Back:public QObject
{
    Q_OBJECT
public:
    explicit Back(QObject *parent =nullptr);


signals:
    void valueChanged(QString s);
    void jsonChanged(QVariantMap obj);

public slots:
    void changeValue(int a);
    void readData();

};

#endif // BACK_H
