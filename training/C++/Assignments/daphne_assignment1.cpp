#include <stdio.h>
#include <string.h>
#include <math.h>

void Blue()
{
    printf("You like blue color\n");
}
void Red()
{
    printf("You like red color\n");
}
void Pink()
{
    printf("You like pink color\n");
}

float CtoF(float inputC)
{
    float result = (inputC * 9 / 5) + 32;
    return result;
};
float FtoC(float inputF)
{
    float result = (inputF - 32) * 5 / 9;
    return result;
};

int main()
{
    // 1)WAP to print your age,city,name,gender,college,branch on to the monitor.
    int age = 20;
    char city[20] = "Singapore";
    char name[20] = "Jane";
    char gender = 'F';
    char college[20] = "NUS";
    char branch[20] = "Engineering";

    printf("%s( %d %c) from %s, studying in %s %s\n", name, age, gender, city, college, branch);

    // 2)WAP to calculate the square and cube of a number.Take the number from the user.
    int number;
    printf("Enter an integer number\n");
    scanf("%d", &number);
    printf("%d^3:%d, %d^2:%d\n", number, number * number * number, number, number * number);

    // 3)WAP to calculate the total and average(float varible) of marks in 6 subjects.
    float a = 80, b = 50, c = 70, d = 90, e = 67, f = 86;
    printf("sum: %0.2f, avg: %0.2f\n", a + b + c + d + e + f, (a + b + c + d + e + f) / 6);

    // 4) Accept the length and breadth values from the user and calculate the perimeter of rectangle.
    float length, breadth;
    printf("Enter rectangle length and breadth (separated by space)\n");
    scanf("%f %f", &length, &breadth);
    printf("Rectangle perimeter: %0.2f\n", 2 * (length + breadth));

    // 5)Accept the password from the user.If it is user gives "Helloc" then print "You are a valid user".ELse,print "you are an intruder".Use ternary operator
    char pw[20];
    printf("Enter password\n");
    scanf("%s", &pw);
    printf(strcmp(pw, "Helloc") ? "you are an intruder\n" : "You are a valid user\n");

    // 6)Take 3 nos from the user and determine the largest of those nos.
    int x, y, z, largest;
    printf("Enter 3 interger numbers (space separated)\n", &x, &y, &z);
    scanf("%d %d %d", &x, &y, &z);
    largest = x;
    if (largest < y)
    {
        largest = y;
    }
    if (largest < z)
    {
        largest = z;
    }
    printf("largest of %d %d %d: %d\n", x, y, z, largest);

    // 7)Take the age,gender and salary from the employee.
    // If the age is greater than or equal to 40 and the gender is male then you should provide some hike in the salary basing on the no. of. years. of experience by taking the number of years of experience of the user.
    // If the no. of. years. of experience is from 1 to 10 years,then give a hike of 50000 to is salary(salary=salary+50000)
    // If the no. of. years. of experience is from 11 to 20 years,then give a hike of 60000 to is salary (salary=salary+60000).
    // If the no. of. years. of experience is from 21 and above years,then give a hike of 100000 to is salary (salary=salary+100000).
    // If the age is not greater than or equal to 40 or the gender not is male then you should say "sorry there is no hike for you this year".

    int age7, salary, experience;
    char gender7;
    printf("Enter age, salary, experience and gender (M/F) separated by space\n");
    scanf("%d %d %d %c", &age7, &salary, &experience, &gender7);

    if (age7 >= 40 && gender7 == 'M')
    {
        if (experience >= 1 && experience <= 10)
        {
            printf("Old salary: $%d, New salary: $%d\n", salary, salary + 50000);
        }
        else if (experience > 10 && experience <= 20)
        {
            printf("Old salary: $%d, New salary: $%d\n", salary, salary + 60000);
        }
        else
        {
            printf("Old salary: $%d, New salary: $%d\n", salary, salary + 100000);
        }
    }
    else
    {
        printf("sorry there is no hike for you this year\n");
    }

    // 8)Accept the number from the user for 3 times and display the square every time.(use for,while,do while)
    int input, i = 1;
    for (i = 1; i <= 3; i++)
    {
        printf("Enter an integer number\n");
        scanf("%d", &input);
        printf("%d^2 = %d\n", input, input * input);
    }

    // 9)Print the even nos. from 500 to 100 using for loop.(use for,while,do while)
    int i9 = 500;
    while (i9 >= 100)
    {
        printf("%d ", i9);
        i9 -= 2;
    }
    printf("\n");

    // 10)Print the multiples of 56 using the for loop.
    int i10 = 1;
    for (i10 = 1; i10 <= 1000; i10++)
    {
        if (i10 % 56 == 0)
        {
            printf("%d ", i10);
        }
    }
    printf("\n");

    // 11)Take 3 definitions namely Blue(),Red(),Pink().
    // If Blue() is called then u have to print..You likes blue color
    // If Red() is called then u have to print..You likes red color
    // If Pink() is called then u have to print..You likes pink color
    Blue();
    Red();
    Pink();

    // 12)Print 45 to 90 tables upto the multiples of 20 using the nested loops.
    // Not sure what question is asking for

    // 13)Create two functions namely CtoF() and FtoC().
    // CtoF() -->should convert Celsius to Fahrenheit.
    // FtoC() -->should Fahrenheit to Celsius
    printf("%0.2fC\n", CtoF(20));
    printf("%0.2fF\n", FtoC(20));

    // 14)Calculate the perimeter of rectangle using call by value and return the value.
    int length14, width14;
    printf("Enter length and width of rectangle (space separated)\n");
    scanf("%d %d", &length14, &width14);
    printf("Rectangle perimeter: %d\n", 2 * (length14 + width14));

    // 15)Write a program that on strcpy(),strcat(),strcmp(),strlen().
    char str1[20] = "hello", str2[20], str3[20] = " world";
    if (strcmp(str2, str1) != 0)
    {
        strcpy(str2, str1);
        strcat(str2, str3);
    }
    printf("'%s' has %d characters", str2, strlen(str2));
}