using System;

namespace CodingPractise
{
    public class Rotation
    {
        public static string CheckRotation(string ss1,string ss2) {
            string temp = ss1 + ss1;
            if (temp.Contains(ss2))
            {
                return "yes";
            }
            else
            {
                return "no";
            }

        }
        public static void Run()
        {
            string s1 = "banana";
            string s2 = "nab";
            string s3 = CheckRotation(s1, s2);
            Console.WriteLine($"{s3}"); 
                
        }
    }
}