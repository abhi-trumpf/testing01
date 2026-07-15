using System;
using System.Collections.Generic;

namespace CodingPractise.CsharpCoding
{
    public class HappyNumber
    {
        public static void happyNumber()
        {
            int x = 19;
            int original = x;

            HashSet<int> seen = new HashSet<int>();
            while (x != 1 && !seen.Contains(x))
            /* we have to check for both conditions,any 1 condition is not enough*/
            {
                seen.Add(x);
                int sum = 0;
                while (x > 0)
                {
                    int digit = x % 10; //kinda like temp
                    sum += digit * digit;
                    x = x / 10;
                }
                x = sum; //assign sum value to x for next step - genius
            }
            if (x==1)
            {
                Console.WriteLine("Happy number");
            }

            else {
                Console.WriteLine("Not a Happy Number");
            }

        }
    }
}

/*
 * The while loop block is your Engine. It keeps calculating, slicing digits, and tracking 
 * history until it hits a dead end (either reaching $1$ or trapping an endless loop)
 * 
 * The if-else block is your Judge. Once the engine shuts down, the judge looks at the final 
 * resting state of x and delivers the ultimate, final output.*/