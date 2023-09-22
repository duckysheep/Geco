#include "back.h"

Back::Back(QObject *parent):QObject(parent)
{

}

void Back::changeValue(int a)
{
    if(a==1){
        valueChanged("value is 1,from c++");
    }
    else if (a==2){
        valueChanged("value is 2, from c++");
    }
    else{
        valueChanged("!!!!!");
    }
}
