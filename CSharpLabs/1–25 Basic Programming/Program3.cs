using System;

public static class Program3
{
    public static void Run()
    {
        int n1, n2;

        Console.WriteLine("enter n1");
        string input1 = Console.ReadLine() ?? "";

        if (!int.TryParse(input1, out n1))
        {
            Console.WriteLine("Wrong input");
            return;
        }

        Console.WriteLine("enter n2");
        string input2 = Console.ReadLine() ?? "";

        if (!int.TryParse(input2, out n2))
        {
            Console.WriteLine("Wrong input");
            return;
        }

        Console.WriteLine($"Before swap: {n1}, {n2}");

        int temp = n1;
        n1 = n2;
        n2 = temp;

        Console.WriteLine($"After swap: {n1}, {n2}");
    }
}