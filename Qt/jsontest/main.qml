import QtQuick 2.14
import QtQuick.Window 2.14


Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    Component.onCompleted: {
            var JsonString = '{"a":"A whatever, run","b":"B fore something happens"}';
            var JsonObject= JSON.parse(JsonString);

            //retrieve values from JSON again
            var aString = JsonObject.a;
            var bString = JsonObject.b;

            console.log(aString);
            console.log(bString);


        }
}
