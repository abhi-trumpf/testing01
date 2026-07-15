using System;
namespace CodingPractise
{
    public class AddBinaryNumbers
    {

        public static string operation(string a ,string b) {
            int num1 = Convert.ToInt32(a, 2);
            int num2 = Convert.ToInt32(b, 2);
            int num3 = num1 + num2;
            return Convert.ToString(num3,2);
        }
        public static void addBinaryNumbers()
        {
            Console.WriteLine("Enter the first binary number:");
            string number1 = Console.ReadLine() ?? "";
            //if empty the left side is empty the right side stuff will be assigned 
            Console.WriteLine("Enter the second binary number:");
            string number2 = Console.ReadLine() ?? "";
            string y = operation(number1, number2);
            Console.WriteLine($"The sum of {number1} and {number2} is: {y}");
        }
    }
}


