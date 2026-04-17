using System;

namespace MaxProfitApp.Models
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] prices = { 7, 1, 5,1,7,3, 6, 4 };

            //int maxProfit = GetMaxProfit(prices);

            //Console.WriteLine("Maximum Profit: " + maxProfit);

            // Keep console open if run outside debugger
            Program x = new Program();
            int y = x.RemoveDuplicates(prices);


            

        }
        
        public int RemoveDuplicates(int[] nums)
        {
            int n = 1;
            int previouse = nums[0];
            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i] != previouse) 
                {
                    nums[n] = nums[i];
                    n++;
                }
                previouse = nums[i];
            }
            //return n;
        }

        static int GetMaxProfit(int[] prices)
        {
            if (prices.Length == 0) return 0;

            int minPrice = prices[0];
            int maxProfit = 0;

            for (int i = 1; i < prices.Length; i++)
            {
                // Update minimum price so far
                if (prices[i] < minPrice)
                    minPrice = prices[i];

                // Calculate profit if sold today
                int profit = prices[i] - minPrice;

                if (profit > maxProfit)
                    maxProfit = profit;
            }

            return maxProfit;
        }
    }
}






public class Solution
{
    public int RemoveDuplicates(int[] nums)
    {
        int n = 1;
        int previouse = nums[0];
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] != previouse)
            {
                nums[n] = nums[i];
                n++;
            }
            previouse = nums[i];
        }
        return n;
    }
}