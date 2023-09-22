#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QDebug>
#include <QFile>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonValue>
#include <QJsonArray>

int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);

    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;
    const QUrl url(QStringLiteral("qrc:/main.qml"));
    QObject::connect(&engine, &QQmlApplicationEngine::objectCreated,
                     &app, [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
            QCoreApplication::exit(-1);
    }, Qt::QueuedConnection);
    engine.load(url);


    QFile file_obj("C:/Users/Daphne/Documents/Work/Geco/Geco/Qt/jsontest/data.json");
    if(!file_obj.open(QIODevice::ReadOnly)){
        qDebug()<<"Failed to open "<<"C:/Users/Daphne/Documents/Work/Geco/Geco/Qt/jsontest/data.json";
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

    if(json_obj.isEmpty()){
        qDebug()<<"JSON object is empty.";
        exit(4);
    }


    QJsonValue name = json_obj.value("name");
    QJsonValue surname = json_obj.value("surname");
    QJsonValue age = json_obj.value("age"); //this value is integer

    qDebug()<<name<<", "<<surname<<", "<<age;

    QJsonObject address = json_obj.value("address").toObject();
    QJsonValue addr_city = address.value("city");
    QJsonValue addr_country = address.value("country");

    QJsonArray phones = json_obj.value("phone").toArray();
    qDebug() << "There are " + QString::number(phones.size()) + " items in phones array";
    QString phoneList = "";
    for(int i=0; i<phones.size(); i++ ) phoneList.append(phones.at(i).toString() + "\n");


    QString decodedData = "";

    decodedData.append("Name : " + name.toString() + "\n");
    decodedData.append("Surname : " + surname.toString() + "\n");
    decodedData.append("Age : " + QString::number(age.toInt()) + "\n");

    decodedData.append("Address : \n");
    decodedData.append("-City : " + addr_city.toString() + "\n");
    decodedData.append("-Country : " + addr_country.toString() + "\n");

    decodedData.append("Phones : \n" + phoneList + "\n");

//    ui->txtJsonDecoded->setPlainText(decodedData);

    if(name.isString() == true) qDebug() << "name is a string";
    qDebug() << "Firstname : " + name.toString();


    return app.exec();
}
