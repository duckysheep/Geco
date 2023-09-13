#include <iostream>
#include <math.h>

using namespace std;

void CtoF(float temp)
{
    cout << (temp * 9 / 5) + 32 << "\n";
};
void FtoC(float temp)
{
    cout << (temp - 32) * 5 / 9 << "\n";
};

float avg_marks(float m1, float m2, float m3, float m4, float m5, float m6)
{
    float result = (m1 + m2 + m3 + m4 + m5 + m6) / 6;
    return result;
};

float to_square(float num)
{
    float result = num * num;
    return result;
}

float perimeter(float length, float breadth)
{
    float result = 2 * (length + breadth);
    return result;
}

void details(int rno, string name, string dept = "engineering")
{
    cout << rno << " " << name << " " << dept << "\n";
}

float sum(float a, float b); // function prototype declaration

inline float mul(float a, float b, float c)
{
    float result = a * b * c;
    return result;
}

int main()
{

    // string name="john",address="1 wood st";
    // int age=30,rno=123;
    // cout<<name;
    // cout<<address;
    // cout<<age;
    // cout<<rno;

    // int num1=10,num2=20;
    // cout<<num1+num2;

    // int p,t;
    // float r;
    // cin>>p>>t>>r;
    // cout<<p*t*r/100;

    // float length, breadth, radius;

    // cin>>length>>breadth;
    // cout<<"rectangle perimeter:"<<2*(length+breadth)<<"\n";
    // cin>>radius;
    // cout<<"circle area:"<<M_PI*radius*radius;

    // arithmatic operator
    //  cout<<10+3<<"\n";
    //  cout<<10-3<<"\n";
    //  cout<<10*3<<"\n";
    //  cout<<10/3<<"\n";
    //  cout<<10%3<<"\n";

    // relational operator
    //  int a=10,b=3;
    //  cout<<(a==b)<<"\n";
    //  cout<<(a!=b)<<"\n";
    //  cout<<(a>b)<<"\n";
    //  cout<<(a<b)<<"\n";
    //  cout<<(a>=b)<<"\n";
    //  cout<<(a<=b)<<"\n";

    // logical operators
    //  cout<<(a==10 && b==3)<<"\n";
    //  cout<<(a==10 || b==10)<<"\n";
    //  cout<<(!b)<<"\n";

    // string user, pw;
    // cin>>user>>pw;
    // cout<<(user=="c++" && pw=="hello123")<<"\n";

    // int train;
    // cout<<"enter a train number from: 111 / 222 / 333\n";
    // cin>>train;
    // cout<<(train==111 || train==222 || train==333);

    // int a=10,b=0;

    // b=++a;
    // cout<<b<<"\n";

    // a=10,b=0;
    // b=a++;
    // cout<<b<<"\n";

    // int x;

    // cout<<(x=10)<<"\n";
    // cout<<(x+=3)<<"\n";
    // cout<<(x-=3)<<"\n";
    // cout<<(x*=3)<<"\n";
    // cout<<(x/=3)<<"\n";
    // cout<<(x%=3)<<"\n";

    // string gender;
    // cin>>gender;
    // cout<<(gender=="female" ? "discount available" : "no discount");

    // int age;
    // cin>>age;
    // cout<<(age>=25 ? "Eligible for marirage" : "ineligible for marriage");

    // int num;
    // cin >> num;
    // if (num >= 0)
    // {
    //     cout << "positive";
    // }

    // int year;
    // cin >> year;
    // if ((year % 4 == 0))
    // {
    //     cout << "is leap";
    // }
    // else
    // {
    //     cout << "is not leap";
    // }

    // int num;
    // cin >> num;
    // if (num % 2 == 0)
    // {
    //     cout << "even\n";
    // }
    // else
    // {
    //     cout << "odd\n";
    // }

    // string pw;
    // cin >> pw;
    // if (pw == "java")
    // {
    //     cout << "you are a valid user\n";
    // }
    // else
    // {
    //     cout << "you are an intruder\n";
    // }

    // int a, b, c, max, min;

    // cin >> a >> b >> c;
    // if (a >= b && a >= c)
    // {
    //     max = a;
    // }
    // else if (b >= a && b >= c)
    // {
    //     max = b;
    // }
    // else
    // {
    //     max = c;
    // }
    // cout << max << "\n";

    // cin >> a >> b >> c;
    // if (a <= b && a <= c)
    // {
    //     min = a;
    // }
    // else if (b <= a && b <= c)
    // {
    //     min = b;
    // }
    // else
    // {
    //     min = c;
    // }
    // cout << min << "\n";

    // float cost, weight;

    // cout << "Enter package weight (kg)\n";
    // cin >> weight;

    // if (weight <= 1)
    // {
    //     cost = 3 * weight;
    // }
    // else if (weight > 1 && weight <= 5)
    // {
    //     cost = 7 * weight;
    // }
    // else if (weight > 5 && weight <= 10)
    // {
    //     cost = 10 * weight;
    // }
    // else
    // {
    //     cost = 15 * weight;
    // }
    // cout << "Shipping cost: $" << cost << "\n";

    // int age, salary, experience;
    // string gender;
    // cout << "Enter age, salary, experience and gender (M/F)\n";
    // cin >> age >> salary >> experience >> gender;

    // if (age >= 40 && gender == "M")
    // {
    //     if (experience >= 1 && experience <= 10)
    //     {
    //         cout << "Old salary: $" << salary << ", New salary: $" << salary + 50000 << "\n";
    //     }
    //     else if (experience > 10 && experience <= 20)
    //     {
    //         cout << "Old salary: $" << salary << ", New salary: $" << salary + 60000 << "\n";
    //     }
    //     else
    //     {
    //         cout << "Old salary: $" << salary << ", New salary: $" << salary + 100000 << "\n";
    //     }
    // }
    // else
    // {
    //     cout << "sorry there is no hike for you this year\n";
    // }

    // for (int i = 0; i <= 50; i++)
    // {
    //     if (i % 2 == 0)
    //     {
    //         cout << i << "\n";
    //     }
    // }

    // for (int i = 1; i <= 20; i++)
    // {
    //     cout << "51 * " << i << " = " << 51 * i << "\n";
    // }

    // for (int i = 51; i <= 61; i++)
    // {
    //     for (int j = 1; j <= 20; j++)
    //     {
    //         cout << i << " * " << j << " = " << i * j << "\n";
    //     }
    // }

    // int i = 99;
    // while (i >= 1)
    // {
    //     // if (i % 2 == 1)
    //     // {
    //     cout << i << "\n";
    //     // }
    //     i -= 2;
    // }

    // int i = 50;
    // do
    // {
    //     cout << i << "\n";
    //     i += 2;
    // } while (i <= 100);

    // int i = 100;
    // do
    // {
    //     cout << i << "\n";
    //     i -= 5;
    // } while (i >= 0);

    // float a, b;
    // char op;
    // cout << "enter 2 mumbers and operator \n";
    // cin >> a >> b >> op;
    // switch (op)
    // {
    // case '+':
    //     cout << a + b;
    //     break;
    // case '-':
    //     cout << a - b;
    //     break;
    // case '*':
    //     cout << a * b;
    //     break;
    // case '/':
    //     cout << a / b;
    //     break;

    // default:
    //     cout << "invalid choice";
    //     break;
    // }

    // CtoF(30.5);
    // FtoC(86);

    // int rno, age, avg;
    // float m1, m2, m3, m4, m5, m6;
    // string name, gender;

    // cin >> rno >> name >> gender >> age >> m1 >> m2 >> m3 >> m4 >> m5 >> m6;
    // avg = avg_marks(m1, m2, m3, m4, m5, m6);

    // switch (avg / 10)
    // {
    // case 10:
    //     cout << "Grade:A*\n";
    //     break;
    // case 9:
    //     cout << "Grade:A\n";
    //     break;
    // case 8:
    //     cout << "Grade:B\n";
    //     break;
    // case 7:
    //     cout << "Grade:C\n";
    //     break;
    // case 6:
    //     cout << "Grade:D\n";
    //     break;

    // default:
    //     cout << "Grade:F\n";
    //     break;
    // }

    // int num;
    // cin >> num;
    // cout << to_square(num) << "\n";

    // int length, breadth;
    // cin >> length >> breadth;
    // cout << perimeter(length, breadth) << "\n";

    // details(1, "john");
    // details(2, "mary");
    // details(3, "james", "medical");
    // details(4, "tim");

    // cout << sum(1, 2); // function call

    // cout << mul(2, 3, 4);

    int a = 10;
    const int b = 20;
    a += 10;
    // b += 10;
    cout << b;

    return 0;
}

// function definition
float sum(float x, float y)
{
    float result = x + y;
    return result;
}