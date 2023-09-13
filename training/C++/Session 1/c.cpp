#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <math.h>
#include <string.h>

// int sq(int x)
// {
//     int result;
//     result = x * x;
//     return result;
// }

int main()
{
    // float number, square;

    // printf("10>1 && 11<10:%5d\n", 10 > 1 && 11 < 10);
    // printf("10>1 || 11<10:%5d\n", 10 > 1 || 11 < 10);

    // int a = 100;
    // a += 10;
    // printf("%d\n", a); // 110
    // a -= 20;
    // printf("%d\n", a); // 90
    // a *= 2;
    // printf("%d\n", a); // 180
    // a /= 3;
    // printf("%d\n", a); // 60

    // printf("%d\n", 9 != 9);

    // printf("Enter a number\n");
    // scanf("%f", &number);

    // square = number * number;
    // printf("square of %f = %.2f", number, square);

    // printf("10<20 : %d\n", (10 < 20) ? 1 : 0);

    // int year;
    // printf("enter a year\n");
    // scanf("%d", &year);

    // if ((year % 400 == 0) ||
    //     (year % 100 != 0) &&
    //         (year % 4 == 0))
    // {
    //     printf("%d is a leap year", year);
    // }
    // else
    // {
    //     printf("%d is not a leap year", year);
    // }
    // return 0;

    // int units;
    // printf("enter number of power units used\n");
    // scanf("%d", &units);

    // if (units <= 0)
    // {
    //     printf("enter a value greater than 0");
    // }
    // else
    // {
    //     if (units <= 100)
    //     {
    //         printf("Power bill is $%d", units * 5);
    //     }
    //     else if (units <= 200)
    //     {
    //         printf("Power bill is $%d", units * 10);
    //     }
    //     else if (units <= 300)
    //     {
    //         printf("Power bill is $%d", units * 15);
    //     }
    //     else
    //     {
    //         printf("Power bill is $%d", units * 20);
    //     }
    // }

    // strcmp(str1,str2) --> strcmp() will return 0 if the strings are the same
    // char str_arr[20], strcmp(str_arr)

    // int age, salary, experience;
    // char gender;

    // if (age >= 40 && gender == 'M')
    // {
    //     if (experience >= 1 && experience <= 10)
    //     {
    //         printf("New salary: $%d", salary + 50000);
    //     }
    //     else if (experience > 10 && experience <= 20)
    //     {
    //         printf("New salary: $%d", salary + 100000);
    //     }
    //     else if (experience > 20 && experience <= 20)
    //     {
    //         printf("New salary: $%d", salary + 100000);
    //     }
    // }

    // int i = 2;
    // while (i <= 50)
    // {
    //     printf("%d ", i);
    //     i += 2;
    // }

    // int i = 11;
    // do
    // {
    //     printf("%d ", i);
    //     i++;
    // } while (i <= 15);

    // int r, c, sum;
    // for (r = 1; r <= 3; r++)
    // {
    //     for (c = 1; c <= 5; c++)
    //     {
    //         sum = r + c;
    //         printf("r=%d c=%d sum=%d\n", r, c, sum);
    //     }
    // }

    // printf("%d", sq(25) + 10);

    // 22 33 44 55 66
    // int a[10];

    // int i;

    // for (i = 0; i < 3; i++)
    // {
    //     scanf("%d", &a[i]);
    // }

    // for (i = 0; i < 3; i++)
    // {
    //     printf("%d\n", a[i]);
    // }

    // int price[3][2];
    // int i;
    // for (i = 0; i <= 2; i++)
    // {
    //     printf("Enter s/n and price:\n");
    //     scanf("%d%d", &price[i][0], &price[i][1]);
    // }

    // for (i = 0; i <= 2; i++)
    // {
    //     printf("%d %d\n", price[i][0], price[i][1]);
    // }

    // char animal[30];
    // printf("Enter an animal: ");

    // gets(animal);
    // puts("hello");
    // puts(animal);

    // int a, *b, **c;
    // a = 10; // a is normal variable (stores the value)
    // b = &a; // b is pointer variable (stores address of a normal variable)
    // c = &b; // c is double pointer variable (stores address of a pointer variable). Double pointer is the maximum, cannot have ***d/****e etc

    // // take 2 numbers from the user and display the number with their addresses
    // int a, b;
    // scanf("%d%d", &a, &b);

    // printf("%d %p\n", a, &a);
    // printf("%d %p\n", b, &b);

    // int a = 123, *aa;
    // aa = &a;
    // printf("address of a= %p\n", aa);
    // printf("value of a= %d\n", *aa);
    // printf("address of aa= %p\n", &aa);

    // int a, *pa;
    // float b, *pb;
    // printf("enter integer and float\n");
    // scanf("%d %f", &a, &b);
    // pa = &a;
    // pb = &b;

    // printf("address of a= %p\n", a);
    // printf("value of a= %d\n", a);
    // printf("value of a= %d\n", *(&a));
    // printf("value of a= %d\n", *pa);

    // printf("address of b= %p\n", b);
    // printf("value of b= %0.2f\n", b);
    // printf("value of b= %0.2f\n", *(&b));
    // printf("value of b= %0.2f\n", *pb);

    // int a = 25, b = 10, *p, *j;
    // p = &a;
    // j = &b;
    // printf("%d\n", *p + b);
    // printf("%d\n", *p - b);
    // printf("%d\n", (*p) * (*j));
    // printf("%d\n", (*p) / (*j));

    // pointer to array
    // char animal[30], *animal_p;
    // printf("enter an animal: ");
    // gets(animal_p);
    // animal_p = animal_p;
    // while (*animal_p != '\0')
    // {
    //     printf("%c", *animal_p);
    //     animal_p++;
    // }

    // struct animal
    // {
    //     float weight;
    //     char animal_name[30];
    //     int id;
    // };

    // struct animal animal1;
    // animal1.weight = 20.1;
    // strcpy(animal1.animal_name, "dog");
    // animal1.id = 1;
    // printf("%0.2f %s %d\n", animal1.weight, animal1.animal_name, animal1.id);

    // struct animal animal2 = {10.8, "cat", 2};
    // printf("%0.2f %s %d\n", animal2.weight, animal2.animal_name, animal2.id);

    // struct employee
    // {
    //     int empno;
    //     char empname[20];
    //     float salary;
    // };

    // struct employee emp1;
    // emp1.empno = 11;
    // strcpy(emp1.empname, "John");
    // emp1.salary = 10000;
    // scanf("%s", emp1.empname);
    // printf("%d %s %0.2f\n", emp1.empno, emp1.empname, emp1.salary);

    // struct product
    // {
    //     int pid;
    //     char pname[30];
    //     float price;
    // };

    // struct product prod1, prod2, prod3;

    // scanf("%d %s %f", &prod1.pid, prod1.pname, &prod1.price);
    // scanf("%d %s %f", &prod2.pid, prod2.pname, &prod2.price);
    // scanf("%d %s %f", &prod3.pid, prod3.pname, &prod3.price);

    // printf("%d %s %0.2f\n", prod1.pid, prod1.pname, prod1.price);
    // printf("%d %s %0.2f\n", prod2.pid, prod2.pname, prod2.price);
    // printf("%d %s %0.2f\n", prod3.pid, prod3.pname, prod3.price);

    // struct animal
    // {
    //     float weight;
    //     char animal_name[30];
    //     int id;
    // };

    // struct animal animal1 = {10.8, "cat", 2};
    // printf("weight: %0.2f, name: %s, id: %d\n", animal1.weight, animal1.animal_name, animal1.id);
    // printf("size of structure: %d", sizeof(animal1)); //allocated size of data types (char/int/float/etc) depends on compiler

    // struct name
    // {
    //     char first[10];
    //     char second[10];
    //     char last[10];
    // };
    // struct bdate
    // {
    //     int day;
    //     int month;
    //     int year;
    // };

    // struct data
    // {
    //     struct name nm;
    //     struct bdate bt;
    // };

    // struct data r1;
    // scanf("%s %s %s", r1.nm.first, r1.nm.second, r1.nm.last);
    // scanf("%d %d %d", &r1.bt.day, &r1.bt.month, &r1.bt.year);

    // printf("%s %s %s\n", r1.nm.first, r1.nm.second, r1.nm.last);
    // printf("%d / %d / %d\n", r1.bt.day, r1.bt.month, r1.bt.year);

    // //annonymous
    // struct
    // {
    //     int age;
    //     float salary;
    // } s1, s2, s3;

    // s1 = {20, 10000};
    // printf("%d %0.2f", s1.age, s1.salary);

    // FILE *fs, *ft;
    // char ch;
    // fs = fopen("pr1.txt", "r");

    // if (fs == NULL)
    // {
    //     puts("cannot open the source");
    //     exit(1);
    // }

    // ft = fopen("pr2.txt", "w");
    // if (fs == NULL)
    // {
    //     puts("cannot open the target file");
    //     exit(2);
    // }

    // while (1)
    // {
    //     ch = fgetc(fs);

    //     if (ch == EOF)
    //     {
    //         break;
    //     }
    //     else
    //     {
    //         fputc(ch, ft);
    //     }
    // }
    // fclose(fs);
    // fclose(ft);
    // getch();
}
