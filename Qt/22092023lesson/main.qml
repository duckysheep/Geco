import QtQuick 2.14
import QtQuick.Window 2.14

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")

    Rectangle{
        id:root
        height: 400
        width: 400
        color: "lightblue"

        Rectangle{
            id:child1
            anchors.left: parent.left
            width: parent.width/4
            height: parent.height/5
            color: "magenta"
            anchors.verticalCenter: parent.verticalCenter
            MouseArea{
                anchors.fill:child1
                onClicked: {
                    console.log("child1")
                }
            }
        }

    MouseArea{
        id:mArea
//        anchors.fill: root
        anchors.fill:parent
        onClicked: {
            console.log("clicked",mArea.acceptedButtons)
        }
    }
    }
}
