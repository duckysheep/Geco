import QtQuick 2.0
import QtQuick.Window 2.12
import QtQuick.Layouts 1.3
import QtCharts 2.0
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4

    Rectangle {
        anchors.fill: parent
        anchors.leftMargin: 100
//        color: "#F0F0F0"
        color: "green"

            RowLayout{
        //        anchors.fill:parent
                anchors.left: parent.left
                anchors.right: parent.right
                spacing:6
                height:parent.height*0.6
                width: 640


//                Rectangle{
//                    color: "pink"
//        //            Layout.fillHeight: true
//                    Layout.fillWidth: true
//                    Layout.preferredWidth: 1
//                    Layout.preferredHeight: parent.height

//                }

                //Devices
                Rectangle{
//                    color: "lightgreen"
        //            Layout.fillHeight: true
                    Layout.fillWidth: true
                    Layout.preferredWidth: 1
                    Layout.preferredHeight: parent.height
                    Layout.minimumHeight: 240

                    ChartView{
                        id: chart
//                        title: "Devices"
                        title:'<p style="font-size:30px">Devices</p>'
                        anchors.fill:parent
                        legend.visible: true
                        legend.alignment: Qt.AlignBottom
                        antialiasing: true

                        PieSeries{
                            id: pieOuter
                            startAngle: -90
                            endAngle: 90
                            size:0.96
                            holeSize: 0.7
                            verticalPosition: 0.7
                            PieSlice { id: slice; label: "Active"; value: 19511; color: "#99CA53" }
                            PieSlice { label: "Error"; value: 11105; color: "red" }
                            PieSlice { label: "Inactive"; value: 9352; color: "lightgrey" }
                        }
                    }

//                    Component.onCompleted: {
//                        for (var i = 0; i < 50; i++)
//                            pieOuter.append("", 1);
//                }
}
                //Errors per hour
                Rectangle{
//                    color: "lightblue"
        //            Layout.fillHeight: true
                    Layout.fillWidth: true
                    Layout.preferredWidth: 3
                    Layout.preferredHeight: parent.height
                    Layout.minimumHeight: 240

                    ChartView {
                        title: "Errors per hour"
                        anchors.fill: parent
                        legend.alignment: Qt.AlignBottom
                        antialiasing: true

                        ValueAxis {
                               id: xAxis
                               min: 0
                               max: 23
                               tickCount: 4
                           }
                        ValueAxis {
                               id: yAxis
                               min: 0
                               max: 100
                               tickCount: 4
                           }

                        PercentBarSeries {
                            id: mySeries
//                            axisX: xAxis
                            axisX: BarCategoryAxis { categories: ["0AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM" ]; gridVisible: false}
                             BarSet { color: "#FF0000"; label: "Errors"; values: [5, 1, 2, 4, 1, 7,5, 1, 2, 4, 1, 7,5, 1, 2, 4, 1, 7,5, 1, 2, 4, 1, 7] }
                             BarSet { color:"#9FE703"; label: "Active"; values: [2, 2, 3, 4, 5, 6,2, 2, 3, 4, 5, 6,2, 2, 3, 4, 5, 6,2, 2, 3, 4, 5, 6] }

                        }
                    }


                }
            }

}
