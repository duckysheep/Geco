#include "back.h"
#include <QFile>
#include <QDebug>
#include <QJsonDocument>
#include <QJsonObject>
#include <QVariantMap>


Back::Back(QObject *parent):QObject(parent)
{

}

void Back::changeValue(int a)
{
    if(a==1){
        valueChanged("Label");
    }
    else if (a==2){
        valueChanged("value is 2, from c++");
    }
    else{
        valueChanged("!!!!!");
    }
}


void Back::readData(){

    QString file_path="C:/Users/Daphne/Documents/Work/Geco/Geco/Qt/signalSlot/data.json";
    QFile file_obj(file_path);
    if(!file_obj.open(QIODevice::ReadOnly)){
        qDebug()<<"Failed to open "<<file_path;
        exit(1);
    }

    QTextStream file_text(&file_obj);
    QString json_string;
    json_string = file_text.readAll();
    file_obj.close();
    QByteArray json_bytes = json_string.toLocal8Bit();

    QJsonDocument json_doc = QJsonDocument::fromJson(json_bytes);

    if(json_doc.isNull()){
        qDebug()<<"Failed to create JSON doc.";
        exit(2);
    }
    if(!json_doc.isObject()){
        qDebug()<<"JSON is not an object.";
        exit(3);
    }

    QJsonObject json_obj=json_doc.object();
    qDebug()<<json_obj.size();


    if(json_obj.isEmpty()){
        qDebug()<<"JSON object is empty.";
        exit(4);
    }

    QVariantMap json_map = json_obj.toVariantMap();
    jsonChanged(json_map);

    qDebug()<< json_map["name"].toString();
    qDebug()<< json_map["str"].toInt();
    qDebug()<< json_map["enemy"].toString();
    qDebug()<<json_map;


    valueChanged(json_map["enemy"].toString());

}
