using System;

public static class Program2
{
    public static void Run()
    {
        string input;

        int n1,n2,n3;
        
        Console.Write("Enter number 1: ");
        string input1 = Console.ReadLine() ?? "";


        if (!int.TryParse(input1, out n1))
        {
            Console.WriteLine("Wrong input");
            return;
        }

        Console.Write("Enter number 2: ");
        string input2 = Console.ReadLine() ?? "";


        if (!int.TryParse(input2, out n2))
        {
            Console.WriteLine("Wrong input");
            return;
        }

        Console.Write("Enter number 3: ");
        string input3 = Console.ReadLine() ?? "";


        if (!int.TryParse(input3, out n3))
        {
            Console.WriteLine("Wrong input");
            return;
        }

        if (n1 > n2 && n1 > n3)
        {
            Console.WriteLine($"n1 is greatest,{n1}");
        }
        else if (n2 > n1 && n2 > n3)
        {
            Console.WriteLine($"n2 is greatest,{n2}");
        }
        else
        {
            Console.WriteLine($"n3 is greatest,{n3}");
        }
    }
}