import QtQuick 2.0
import QtQuick.Controls 2.0
import QtQuick.Layouts 1.12


Rectangle{
    width: 300
    height: 300

    RowLayout{
        anchors.fill:parent
        spacing: 10

        Label {
            text: "Hello"
            font.pixelSize: 20
            color: "blue"
            Layout.fillWidth: true
            Layout.fillHeight: true

        }
        Label {
            text: "world"
            font.pixelSize: 20
            color: "red"
            Layout.fillWidth: true
            Layout.fillHeight: true
        }
    }


}
