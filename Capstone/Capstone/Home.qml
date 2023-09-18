import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Layouts 1.3
import QtCharts 2.3
import QtQuick.Controls 1.4
import QtQuick.Controls.Styles 1.4


    Rectangle {
        anchors.fill: parent
        anchors.leftMargin: 100
//        color: "green"

            RowLayout{
        //        anchors.fill:parent
                anchors.left: parent.left
                anchors.right: parent.right
                spacing:6
                height:240
                width: 640


                //menu tabs
                //or try with drawers

//                Rectangle{
//                    color: "pink"
//        //            Layout.fillHeight: true
//                    Layout.fillWidth: true
//                    Layout.preferredWidth: 1
//                    Layout.preferredHeight: parent.height

//                }

                //Devices
                Rectangle{
                    color: "lightgreen"
        //            Layout.fillHeight: true
                    Layout.fillWidth: true
                    Layout.preferredWidth: 1
                    Layout.preferredHeight: parent.height

                    ChartView{
                        id: chart
                        title: "Devices"
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
                            PieSlice { id: slice; label: "Alpha"; value: 19511; color: "#99CA53" }
                            PieSlice { label: "Epsilon"; value: 11105; color: "#209FDF" }
                            PieSlice { label: "Psi"; value: 9352; color: "#F6A625" }
                        }
                    }
                }


                //Errors per hour
                Rectangle{
                    color: "lightblue"
        //            Layout.fillHeight: true
                    Layout.fillWidth: true
                    Layout.preferredWidth: 3
                    Layout.preferredHeight: parent.height

                    ChartView {
                        title: "Errors per hour"
                        anchors.fill: parent
                        legend.alignment: Qt.AlignBottom
                        antialiasing: true

                        StackedBarSeries {
                            id: mySeries
                            axisX: BarCategoryAxis { categories: ["2007", "2008", "2009", "2010", "2011", "2012" ] }
                            BarSet { color: "green"; label: "Active"; values: [2, 2, 3, 4, 5, 6] }
                            BarSet { color: "red"; label: "Error"; values: [5, 1, 2, 4, 1, 7] }

                        }
                    }


                }
            }
    }

