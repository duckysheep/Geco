#include <iostream>
#include <string.h>
#include <math.h>
#include <iomanip>

using namespace std;

class Volume
{
public:
    float length, breadth, width;
    float volume(float length, float breadth, float width)
    {
        return length * breadth * width;
    };
};

class Mobiles
{
public:
    float price, screenSize;
    string model;

    // details not defined inside class definition
    void details(float price, float screenSize, string model);
};

// definition using scope resolution operator ::
void Mobiles::details(float price, float screenSize, string model)
{
    cout << model << " is " << screenSize << "\""
         << " and $" << fixed << setprecision(2) << price << "\n";
};

class GetterSetter
{
private:
    int pin = 1234;

public:
    int getPin()
    {
        return pin;
    }

    void setPin(int newPin)
    {
        pin = newPin;
    }
};

class Employee
{
private:
    float esal = 0;
    int eage = 0;

public:
    int eno = 0;
    string ename = "";

    float getSal()
    {
        return esal;
    }
    int getAge()
    {
        return eage;
    }

    void setSal(float newSal)
    {
        esal = newSal;
    }
    void setAge(int newAge)
    {
        eage = newAge;
    }
};

// single level inheritance
class Teacher
{
public:
    void displayParent()
    {
        cout << "teacher"
             << "\n";
    }
};
class Student : public Teacher
{
public:
    void displayChild()
    {
        cout << "student"
             << "\n";
    }
};

// hierarchical inheritance
class A
{
public:
    void displayParent()
    {
        cout << "A"
             << "\n";
    }
};
class B : public A
{
public:
    void displayChild()
    {
        cout << "B"
             << "\n";
    }
};
class C : public A
{
public:
    void displayChild()
    {
        cout << "C"
             << "\n";
    }
};

// multilevel inheritance
class D
{
public:
    void displayD()
    {
        cout << "D"
             << "\n";
    }
};
class E : public D
{
public:
    void displayE()
    {
        cout << "E"
             << "\n";
    }
};
class F : public E
{
public:
    void displayF()
    {
        cout << "F"
             << "\n";
    }
};

// hybrid inheritance
class G
{
public:
    void displayG()
    {
        cout << "G"
             << "\n";
    }
};
class H : public G
{
public:
    void displayH()
    {
        cout << "H"
             << "\n";
    }
};
class I : public H
{
public:
    void displayI()
    {
        cout << "I"
             << "\n";
    }
};
class J : public H
{
public:
    void displayJ()
    {
        cout << "J"
             << "\n";
    }
};

// multiple inheritance
class K
{
public:
    void displayK()
    {
        cout << "K"
             << "\n";
    }
};
class L
{
public:
    void displayL()
    {
        cout << "L"
             << "\n";
    }
};
class M : public K, public L
{
public:
    void displayM()
    {
        cout << "M"
             << "\n";
    }
};
// scope resolution operator
class A1
{
public:
    void display()
    {
        cout << "From class A1"
             << "\n";
    }
};
class B1
{
public:
    void display()
    {
        cout << "From class B1"
             << "\n";
    }
};
class C1 : public A1, public B1
{
public:
    void hello()
    {
        A1::display();
        B1::display();
    }
};

// virtual based class
class N
{
public:
    void displayN()
    {
        cout << "N"
             << "\n";
    }
};
class O : virtual public N
{
public:
    void displayO()
    {
        cout << "O"
             << "\n";
    }
};
class P : virtual public N
{
public:
    void displayP()
    {
        cout << "P"
             << "\n";
    }
};
class Q : public O, public P
{
public:
    void displayQ()
    {
        cout << "Q"
             << "\n";
    }
};

int main()
{

    // Volume cuboid;
    // cuboid.length = 10;
    // cuboid.breadth = 20;
    // cuboid.width = 30;
    // cout << cuboid.volume(cuboid.length, cuboid.breadth, cuboid.width);

    // Mobiles iphone;
    // iphone.price = 1159.70;
    // iphone.screenSize = 6.1;
    // iphone.model = "iphone13";
    // iphone.details(iphone.price, iphone.screenSize, iphone.model);

    // GetterSetter demo;
    // cout << demo.getPin() << "\n";
    // demo.setPin(9876);
    // cout << demo.getPin() << "\n";

    // Employee Tom;
    // Tom.ename = "Tom";
    // Tom.eno = 123;
    // Tom.setAge(20);
    // Tom.setSal(5000);
    // cout << Tom.ename << " (" << Tom.getAge() << "), "
    //      << "E.No.: " << Tom.eno << ", Salary: $" << Tom.getSal() << "\n";

    // // single level inheritance
    //  Teacher teacher;
    //  teacher.displayParent();
    //  Student student;
    //  student.displayParent();
    //  student.displayChild();

    // // hierarchical inheritance
    //  A a;
    //  a.displayParent();
    //  B b;
    //  C c;
    //  b.displayParent();
    //  b.displayChild();
    //  c.displayParent();
    //  c.displayChild();

    // // multilevel inheritance
    //  D d;
    //  d.displayD();
    //  E e;
    //  e.displayD();
    //  e.displayE();
    //  F f;
    //  f.displayD();
    //  f.displayE();
    //  f.displayF();

    // // hybrid inheritance
    // G g;
    // g.displayG();
    // H h;
    // h.displayG();
    // h.displayH();
    // I i;
    // i.displayG();
    // i.displayH();
    // i.displayI();
    // J j;
    // j.displayG();
    // j.displayH();
    // j.displayJ();

    // // multiple inheritance
    // K k;
    // k.displayK();
    // L l;
    // l.displayL();
    // M m;
    // m.displayK();
    // m.displayL();
    // m.displayM();
    // C1 c1;
    // c1.hello();
    // // c1.display();

    // //virtual based classes
    Q q;
    // no ambiguity of displayN() with virtual class
    q.displayN();

    return 0;
}