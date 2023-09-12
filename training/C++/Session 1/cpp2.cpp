#include <iostream>
#include <string.h>
#include <math.h>
using namespace std;

class Products
{
public:
    int sn, price;
    string name;
};

class Books
{
public:
    string title;
    float price;

    void getdata()
    {
        cout << "enter title and price\n";
        cin >> title >> price;
    };

    void putdata()
    {
        cout << title << "($" << price << ")"
             << "\n";
    }
};

class Rectangle
{
public:
    int length, breadth;

    void getData()
    {
        cout << "enter length and breadth\n";
        cin >> length >> breadth;
    }

    void area()
    {
        cout << "area: " << length * breadth << "\n";
    };
};

typedef int (*FunctionPointer)(int, int);

int add(int a, int b)
{
    return a + b;
}
int subtract(int a, int b)
{
    return a - b;
}

int swap(int a, int b)
{
    int temp = a;
    a = b;
    b = temp;
    cout << "a: " << a << ", b: " << b << "\n";
    return 0;
}

typedef int (*FunctionPointer2)(int);
int factorial(int a)
{
    int result = 1;
    for (int i = 1; i <= a; i++)
    {
        result *= i;
    }
    return result;
}

typedef float (*FunctionPointer3)(float, float, float);
float areaTrapezium(float a, float b, float c)
{
    float result = c * (a + b) / 2;
    return result;
}

int main()
{
    // int a[10];
    // int size;
    // cout << "enter size of input (<=10)\n";
    // cin >> size;

    // if (size > 10)
    // {
    //     cout << "size too large for array\n";
    // }
    // else
    // {
    //     for (int i = 0; i < size; i++)
    //     {
    //         cin >> a[i];
    //     }

    //     for (int i = 0; i < size; i++)
    //     {
    //         cout << a[i] << "\n";
    //     }
    // }

    // int marks[3], total = 0, avg;
    // cout << "enter marks in 3 subjects\n";
    // for (int i = 0; i < 3; i++)
    // {
    //     cin >> marks[i];
    // }

    // for (int i = 0; i < 3; i++)
    // {
    //     total += marks[i];
    // }
    // cout << "total marks: " << total << "\n";
    // cout << "average marks: " << (total / 3) << "\n";

    // int row, col, a[3][3], b[3][3];

    // cout << "enter array row and col (<=3)\n";
    // cin >> row >> col;

    // cout << "enter array a values\n";
    // for (int i = 0; i < row; i++)
    // {
    //     for (int j = 0; j < col; j++)
    //     {
    //         cout << "enter " << i << " row " << j << " col values\n";
    //         cin >> a[i][j];
    //     }
    // }

    // cout << "enter array b values\n";
    // for (int i = 0; i < row; i++)
    // {
    //     for (int j = 0; j < col; j++)
    //     {
    //         cout << "enter " << i << " row " << j << " col values\n";
    //         cin >> b[i][j];
    //     }
    // }

    // for (int i = 0; i < row; i++)
    // {
    //     for (int j = 0; j < col; j++)
    //     {
    //         cout << a[i][j] - b[i][j] << " ";
    //     }
    // }

    // int i, n;
    // int *t;
    // cout << "enter array size\n";
    // cin >> i;
    // t = new int[i];

    // if (t == 0)
    // {
    //     cout << "error:memory cannot be allocated\n";
    // }
    // else
    // {
    //     cout << "enter the values\n";
    //     for (int x = 0; x < i; x++)
    //     {
    //         cin >> t[x];
    //     }
    // }

    // cout << "array values\n";
    // for (int x = 0; x < i; x++)
    // {
    //     cout << t[x] << "\t";
    // }

    // delete[] t;

    // Products p1, p2, p3;

    // p1.sn = 1;
    // p1.price = 2;
    // p1.name = "apple";

    // p2.sn = 2;
    // p2.price = 3;
    // p2.name = "orange";

    // p3.sn = 3;
    // p3.price = 4;
    // p3.name = "pear";

    // cout << p1.sn << " " << p1.name << " " << p1.price << "\n";
    // cout << p2.sn << " " << p2.name << " " << p2.price << "\n";
    // cout << p3.sn << " " << p3.name << " " << p3.price << "\n";

    // Books books[4];

    // for (int i = 0; i < 4; i++)
    // {
    //     books[i].getdata();
    //     books[i].putdata();
    // }

    // Rectangle rectangles[4];
    // for (int i = 0; i < 4; i++)
    // {
    //     rectangles[i].getData();
    //     rectangles[i].area();
    // }

    // typedef int i;
    // i a;
    // a = 10;
    // cout << a;

    // FunctionPointer addPointer;
    // addPointer = add;
    // int sum = addPointer(2, 2);
    // cout << sum << "\n";

    // FunctionPointer subtractPointer;
    // subtractPointer = subtract;
    // int subtract = subtractPointer(2, 2);
    // cout << subtract << "\n";

    // FunctionPointer swapPointer;
    // swapPointer = swap;
    // int swap = swapPointer(1, 10);

    // FunctionPointer2 factorialPointer;
    // factorialPointer = factorial;
    // int factorial = factorialPointer(3);
    // cout << factorial << "\n";

    // FunctionPointer3 areaTrapeziumPointer;
    // areaTrapeziumPointer = areaTrapezium;
    // float areaTrapezium = areaTrapeziumPointer(3, 4, 5);

    // cout << areaTrapezium << "\n";

    return 0;
}