import QtQuick 2.0
import QtQuick.Window 2.14
import QtQuick.Controls 2.5
import QtCharts 2.0

Window {
    visible: true
    width: 640
    height: 640
    title: qsTr("Hello World")

    Text {
        x:10
        y:30
        text: qsTr(variantMap.name)
    }

    Button{
        id:button1
        x:47
        y:150
        text: qsTr("button 1")
        antialiasing: true
        scale: 1.3
        onClicked: back.changeValue(1)
    }
    Button{
        id:button4
        x:163
        y:150
        text: qsTr("button 4")
        antialiasing: true
        scale: 1.3
        onClicked: back.readData()
    }
    Button{
        id:button5
        x:279
        y:150
        text: qsTr("update")
        antialiasing: true
        scale: 1.3
        onClicked: chart.title="test"

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
//            onValueChanged:label.text=s;
            onJsonChanged:chart.title=obj.data[0].values.toString();
        }
    }


    Rectangle{
        height: 400
        width:400
        x:30
        y:200
        color: "lightblue"

        ChartView {
            id:chart
            title: "Errors per hour"
            anchors.fill: parent
            legend.alignment: Qt.AlignBottom
            antialiasing: true

            PercentBarSeries {
                id: mySeries
                axisX: BarCategoryAxis { categories: ["0AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM" ]; gridVisible: false}
                BarSet {color: "#FF0000"; label: "Errors"; values: variantMap.data[0].values }
                BarSet { color:"#9FE703"; label: "Active"; values: variantMap.data[1].values }

                Connections{
                    target: back
                    onJsonChanged:mySeries.append("Errors",obj.data[0].values);
                }

            }
        }
    }

}
