using System;

namespace CodingPractise.CsharpCoding
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Select a program to run:");
            Console.WriteLine("1. Swap 2 Numbers");
            Console.WriteLine("2. Greatest of Three Numbers");
            Console.WriteLine("3. Even or Odd Numbers");
            Console.WriteLine("4. Add Two Lists");
            Console.WriteLine("5. Frequency of Characters in a Word");
            Console.WriteLine("6. Integer to String");
            Console.WriteLine("7. Longest Prefix");
            Console.WriteLine("8. Palindrome");
            Console.WriteLine("9. Remove Duplicate");
            Console.WriteLine("10. String to Integer (Atoi)");
            Console.WriteLine("11. StrStr");
            Console.WriteLine("12. Valid Parentheses");

            string choice = Console.ReadLine() ?? "";
            Console.WriteLine();

            switch (choice)
            {
                case "1":
                    SwapTwoNumbers.Run();
                    break;
                case "2":
                    FindGreatestNumber.Run();
                    break;
                case "3":
                    EvenOrOdd.Run();
                    break;
                case "4":
                    AddTwoLists.Run();
                    break;
                case "5":
                    FrequencyOfCharsInAWord.Run();
                    break;
                case "6":
                    IntegerToString.Run();
                    break;
                case "7":
                    LongestPrefix.Run();
                    break;
                case "8":
                    Palindrome.Run();
                    break;
                case "9":
                    RemoveDuplicate.Run();
                    break;
                case "10":
                    StringToInteger.Run();
                    break;
                case "11":
                    IfWordExists.Run();
                    break;
                case "12":
                    ValidParenthesis.Run();
                    break;
                default:
                    Console.WriteLine("Invalid selection. Please pick 1-12.");
                    break;
            }
        }
    }
}