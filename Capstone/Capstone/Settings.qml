import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Layouts 1.3
import QtCharts 2.3
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4

Rectangle {
    anchors.fill: parent
    anchors.leftMargin: 100
    anchors.rightMargin: 25
    anchors.topMargin: 25
    anchors.bottomMargin: 25
    color: "brown"

    Text {
        text: "Settings"
        color: "white"
        anchors.top: parent.top
        anchors.right: parent.right
        anchors.margins: 50
        font.pixelSize: 30

        renderType: Text.NativeRendering
    }


}
