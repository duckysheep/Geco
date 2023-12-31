import QtQuick 2.14
import QtQuick.Window 2.14
import QtQuick.Controls 2.5


Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    Button{
        id:button1
        x:47
        y:229
        text: qsTr("button 1")
        antialiasing: true
        scale: 1.3
        onClicked: back.changeValue(1)
    }
    Button{
        id:button2
        x:163
        y:229
        text: qsTr("button 2")
        antialiasing: true
        scale: 1.3
        onClicked: back.changeValue(2)
    }
    Button{
        id:button3
        x:279
        y:229
        text: qsTr("button 3")
        antialiasing: true
        scale: 1.3
        onClicked: back.changeValue(3)
    }
    Label{
        id:label
        x:23
        y:88
        width: 355
        height: 62
        text:qsTr("Label")
        horizontalAlignment: Text.AlignHCenter
        elide: Text.ElideMiddle
        font.pointSize: 20

        Connections{
            target: back
            onValueChanged:label.text=s;
        }
    }


}
