import QtQuick 2.14
import QtQuick.Window 2.14
import QtQuick.Controls 2.12
import QtQuick.Controls.Styles 1.4


Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    Column {
        id: column
        x: 56
        y: 20
        width: 563
        height: 440
    }

    Row {
        id: row
        x: 192
        y: 20
        width: 427
        height: 440
    }

    Text {
        id: element
        x: 56
        y: 20
        width: 130
        height: 26
        text: qsTr("Button 1")
        verticalAlignment: Text.AlignTop
        horizontalAlignment: Text.AlignLeft
        padding: 0
        lineHeight: 1
        fontSizeMode: Text.VerticalFit
        renderType: Text.NativeRendering
        textFormat: Text.AutoText
        font.pixelSize: 16

        MouseArea {
            id: mouseArea1
            anchors.fill:parent
            onClicked: {
                console.log("button1")
            }
        }
    }

    Text {
        id: element1
        x: 56
        y: 47
        width: 130
        height: 26
        text: qsTr("Button 2")
        fontSizeMode: Text.VerticalFit
        lineHeight: 1
        verticalAlignment: Text.AlignTop
        textFormat: Text.AutoText
        renderType: Text.NativeRendering
        font.pixelSize: 16
        horizontalAlignment: Text.AlignLeft
        padding: 0

        MouseArea {
            id: mouseArea2
            anchors.fill:parent
            onClicked: {
                console.log("button2")
            }

            Button {
                id: button
                x: 0
                y: 27
                width: 130
                height: 23
                text: qsTr("Button 3")
                contentItem: Text {
                    text: qsTr("Button 3")
                    //                    font: control.font
                    verticalAlignment: Text.AlignTop
                    horizontalAlignment: Text.AlignLeft
                    anchors.fill: parent
                }
                background: Rectangle {
                    width: 130
                    height: 23
                    border.width: control.activeFocus ? 2 : 1
                    border.color: "black"
                    color: "white"
                }
            }



        }
    }




}
