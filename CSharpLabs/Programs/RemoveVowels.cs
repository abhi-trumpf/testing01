using System;
using System.Collections.Generic;

namespace CodingPractise
{
    public class RemoveVowels
    {
        public static void Run()
        {
            Console.WriteLine("--- Remove Vowels from a String ---");

            string s1 = "poetry";
            string result = "";

            // Create a list-like collection containing all vowels
            HashSet<char> vowels = new HashSet<char> { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };

            foreach (char item in s1)
            {
                // If the vowels Hashset data container does NOT contain the character, keep it
                if (!vowels.Contains(item))
                {
                    result += item;
                }
            }

            Console.WriteLine($"Original Word: {s1}");
            Console.WriteLine($"Without Vowels: {result}");
        }
    }
}