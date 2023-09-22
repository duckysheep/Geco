import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Layouts 1.3
import QtCharts 2.3
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4

Window {
    visible: true
    width: 1280
    height: 480
    color: "#F0F0F0"
    title: qsTr("Capstone Dashboard")
    minimumHeight: 240
    minimumWidth: 1280

    RowLayout {
        id: rowLayout
        anchors.top: parent.top
        anchors.left: parent.left
//        anchors.leftMargin: 40
//        anchors.rightMargin: 25
//        anchors.topMargin: 25
//        anchors.bottomMargin: 25

        Button {
            id: button1
            anchors.top: parent.top
            anchors.left: rowLayout.left
            text: qsTr("Dashboard")
            // Download the component from a file
            onClicked: loader.source = "Home.qml"
        }

        Button {
            id: button2
            anchors.left: rowLayout.left
            anchors.top: button1.bottom
            text: qsTr("My Devices")
            // Loading setSource component through the method of installing the fragment parameters
            onClicked: loader.setSource("MyDevices.qml")
        }

        Button {
            id: button3
            anchors.left: rowLayout.left
            anchors.top: button2.bottom

            text: qsTr("Settings")
            // Loading setSource component through the method of installing the fragment parameters
            onClicked: loader.setSource("Settings.qml")
        }

        Button {
            id: button4
            anchors.left: rowLayout.left
            anchors.top: button3.bottom

            text: qsTr("Help")
            // Installing a fragment from the Component
            onClicked: loader.sourceComponent = fragment4
        }

        Button {
            id: button5
            anchors.left: rowLayout.left
            anchors.top: button4.bottom

            text: qsTr("Add New Drive")
            // Installing a fragment from the Component
            onClicked: loader.sourceComponent = fragment5
        }
    }

    Loader {
        id: loader
        anchors.top: rowLayout.bottom
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.bottom: parent.bottom
        anchors.topMargin: -40
        anchors.leftMargin: 63
        source: "Home.qml"
    }

    Component {
            id: fragment4

            Rectangle {
                anchors.fill: parent
                anchors.leftMargin: 100
                color: "blue"

                Text {
                    text: "Help"
                    color: "white"
                    anchors.top: parent.top
                    anchors.right: parent.right
                    anchors.margins: 50
                    font.pixelSize: 30

                    renderType: Text.NativeRendering
                }

            }
        }

        // The fifth fragment as component
        Component {
            id: fragment5

            Rectangle {
                anchors.fill: parent
                anchors.leftMargin: 100
                color: "black"

                Text {
                    text: "Add New Drive"
                    color: "white"
                    anchors.top: parent.top
                    anchors.right: parent.right
                    anchors.margins: 50
                    font.pixelSize: 30

                    renderType: Text.NativeRendering
                }

            }
        }

}
