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

// virtual base class
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

class Car
{
public:
    void openTank()
    {
        cout << "open tank and refuel"
             << "\n";
    }
};
class Maruthi : public Car
{
public:
    void steering()
    {
        cout << "manual steering"
             << "\n";
    }
    void brakes()
    {
        cout << "hydraulic brakes"
             << "\n";
    }
};
class Santro : public Car
{
public:
    void steering() { cout << "power steering"
                           << "\n"; }
    void brakes() { cout << "gas brakes"
                         << "\n"; }
};

// overloading
class Overloading
{
public:
    void sum(int x, int y)
    {
        cout << x + y << "\n";
    };
    void sum(int x, int y, int z)
    {
        cout << x + y + z << "\n";
    };
    void sum(float x, float y)
    {
        cout << x + y << "\n";
    };
    void sum(int x, float y)
    {
        cout << x + y << "\n";
    };
};
class Area
{
public:
    void area(int length, int breadth)
    {
        cout << length * breadth << "\n";
    }
    void area(int length, float breadth)
    {
        cout << length * breadth << "\n";
    }
    void area(float length, int breadth)
    {
        cout << length * breadth << "\n";
    }
    void area(float length, float breadth)
    {
        cout << length * breadth << "\n";
    }
    void area(int radius)
    {
        cout << 3.14 * radius * radius << "\n";
    }
    void area(float radius)
    {
        cout << 3.14 * radius * radius << "\n";
    }
};

// overriding
class Override
{
public:
    void data(int x, int y)
    {
        cout << "Parent add: " << x + y << "\n";
    }
};
class OverrideChild : public Override
{
public:
    void data(int x, int y)
    {
        cout << "child override substract: " << x - y << "\n";
    }
};

class Mobile
{
public:
    void basicFeatures()
    {
        cout << "Ram: 2GB/4GB/8GB"
             << "\n";
        cout << "ROM: 128GB/256GB"
             << "\n";
        cout << "Number of cameras: 1 front/1 back"
             << "\n";
    }
};
class Samsung : public Mobile
{
public:
    void basicFeatures()
    {
        cout << "Ram: 4GB/8GB"
             << "\n";
        cout << "ROM: 256GB"
             << "\n";
        cout << "Number of cameras: 1 front/4 back"
             << "\n";
    }
};
class XiaoMi : public Mobile
{
public:
    void basicFeatures()
    {
        cout << "Ram: 2GB"
             << "\n";
        cout << "ROM: 128GB"
             << "\n";
        cout << "Number of cameras: 1 front/2 back"
             << "\n";
    }
};

// binding -  virtual function to overcome binding problems with pointers
class Base
{
public:
    virtual void display()
    {
        cout << "Base\n";
    }
};
class D1 : public Base
{
public:
    void display()
    {
        cout << "Derived 1\n";
    }
};
class D2 : public Base
{
public:
    void display()
    {
        cout << "Derived 2\n";
    }
};

// operator overloading
class Sample
{
    int x;

public:
    Sample()
    {
        x = 10;
        cout << x << "\n";
    }
    void operator++()
    {
        x--;
    }
    void print()
    {
        cout << "Value of x: " << x << "\n";
    }
};

// constructor
class StudentNoCon
{
public:
    void insert(int sno, string name)
    {
        cout << sno << " " << name << "\n";
    };
};
class StudentConstructor
{
    int sno;
    string name;

public:
    StudentConstructor()
    {
        sno = 0;
        name = "name";
        cout << sno << " " << name << "\n";
    }

    void insert(int sno, string name)
    {
        cout << sno << " " << name << "\n";
    };
};

// copy constructor
class Copy
{
    int var, fact, i;

public:
    Copy(int temp)
    {
        var = temp;
    }
    double calculate()
    {
        fact = 1;
        for (i = 1; i <= var; i++)
        {
            fact = fact * i;
        }
        return fact;
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

    // //virtual base classes
    // Q q;
    // // no ambiguity of displayN() with virtual class
    // q.displayN();

    // Maruthi maruthi;
    // maruthi.steering();
    // maruthi.brakes();
    // maruthi.openTank();

    // Overloading overload;
    // overload.sum(2, 3);
    // overload.sum(2.3f, 4.5f);

    // float v = 8.9f; //use f to indicate that it is to be stored as float and not double.
    // cout << v;

    // Area area;
    // area.area(5, 6);
    // area.area(5.5f, 5);
    // area.area(5.5f, 6.6f);
    // area.area(5.5f);

    // //Override
    // Override override;
    // override.data(1, 2);
    // OverrideChild overrideChild;
    // overrideChild.data(1, 2);

    // Mobile mobile;
    // mobile.basicFeatures();
    // Samsung samsung;
    // samsung.basicFeatures();
    // XiaoMi xiaoMi;
    // xiaoMi.basicFeatures();

    // // binding
    // Base *b;
    // D1 d1;
    // b = &d1;
    // b->display();

    // // Operator overloading
    // Sample s;
    // s.print();
    // ++s;
    // s.print();

    // // Constructor
    // StudentNoCon s1, s2, s3;
    // s1.insert(1, "Jack");
    // s2.insert(2, "Tom");
    // s3.insert(3, "James");
    // StudentConstructor s4;
    // s4.insert(4, "Peter");
    // return 0;

    // // copy constructor
    int n;
    cout << "enter a number\n";
    cin >> n;
    Copy obj(n);
    Copy cpy = obj;
    cout << "factorial: " << obj.calculate() << "\n";
    cout << "factorial: " << cpy.calculate() << "\n";
}