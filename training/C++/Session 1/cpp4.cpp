#include <iostream>
#include <string.h>
#include <math.h>
#include <iomanip>
#include <fstream>

using namespace std;

// // function template
// template <class t1, class t2>
// void sum(t1 a, t2 b)
// {
//     cout << "sum: " << a + b << "\n";
// }

// class Sample
// {
//     t1 a;
//     t2 b;

// public:
//     void getData()
//     {
//         cout << "enter a and b\n";
//         cin >> a >> b;
//     }
//     void display()
//     {
//         cout << "a, b: " << a << ", " << b << "\n";
//     }
// };

// // constructor
// class Constructor
// {
// public:
//     Constructor();
// };
// Constructor::Constructor()
// {
//     cout << "constructor\n";
// };

// // destructor
// class CRectangle
// {
//     int *width, *height;

// public:
//     CRectangle(int, int); // constructor
//     ~CRectangle();        // destructor
//     int area()
//     {
//         return (*width * *height);
//     }
// };
// CRectangle::CRectangle(int a, int b)
// {
//     width = new int;
//     height = new int;
//     *width = a;
//     *height = b;
// };
// CRectangle::~CRectangle()
// {
//     delete width;
//     delete height;
//     cout << "deleted\n";
// };

// class A
// {
// public:
//     A();
// };
// A::A()
// {
//     cout << "A\n";
// }

// class B : public A
// {
// public:
//     B();
// };
// B::B()
// {
//     cout << "B\n";
// }

// class X
// {
// public:
//     static int i;

// public:
//     static void f()
//     {
//         cout << "this is static function\n";
//     }
// };
// int X::i = 1;

// void counter()
// {
//     static int count = 0;
//     cout << count++;
// };

// // friend functions
// class WithFriend
// {
//     int i;

// public:
//     friend void fun();
// };
// void fun()
// {
//     WithFriend wf;
//     wf.i = 10;
//     cout << wf.i;
// }

// // object as argument
// class Sample
// {
//     int a, b;

// public:
//     void setValue()
//     {
//         a = 25;
//         b = 40;
//     }
//     friend float mean(Sample s);
// };

// float mean(Sample s)
// {
//     return float((s.a + s.b) / 2);
// }

// //exception handling

int main()
{
    // //function template
    // int a, b;
    // float x, y;

    // cout << "enter 2 integers\n";
    // cin >> a >> b;

    // cout << "enter 2 floats\n";
    // cin >> x >> y;

    // sum(a, b);
    // sum(x, y);
    // sum(a, y);

    // Sample<int, int> s1;
    // Sample<int, char> s2;
    // Sample<int, float> s3;
    // s1.getData();
    // s1.display();
    // s2.getData();
    // s2.display();
    // s3.getData();
    // s3.display();

    // // constructor
    // Constructor con;

    // //destructor
    // CRectangle rectA(3, 4), rectB(5, 6);
    // cout << "Rect area: " << rectA.area() << "\n";

    // B b;

    // // static function
    // X obj;
    // cout << obj.i << "\n";

    // X::f();

    // for (int i = 0; i < 5; i++)
    // {
    //     counter();
    // }

    // //writing to file
    // fstream st;
    // st.open("fstream.txt", ios::out);
    // if (!st)
    // {
    //     cout << "file creation failed\n";
    // }
    // else
    // {
    //     cout << "file created\n";
    //     st << "Hello";
    //     st.close();
    // }

    // // opening file
    // ifstream st;
    // st.open("fstream.txt");
    // if (!st.is_open())
    // {
    //     cout << "no file found\n";
    // }
    // else
    // {
    //     char ch;
    //     while (st >> ch)
    //     {
    //         cout << ch;
    //     }
    //     st.close();
    // }

    // // friend functions
    // fun();

    // //objects as arguments
    // Sample x;
    // x.setValue();
    // cout << "mean: " << mean(x);

    // //error handling
    try
    {
        int numerator = 10;
        int denominator = 0;

        if (denominator == 0)
        {
            throw runtime_error("Division by 0 not allowed");
        }
        int result = numerator / denominator;
        cout << result;
    }
    catch (const exception &ex)
    {
        cout << "exception caught: " << ex.what();
    }
    cout << "End";

    return 0;
}