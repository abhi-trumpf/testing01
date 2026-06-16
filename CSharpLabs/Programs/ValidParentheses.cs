using System;
using System.Collections.Generic;

namespace CodingPractise.CsharpCoding
{
	public class ValidParenthesis
	{
		private static readonly Dictionary<char, char> bracketMap = new()
		{
			{ ')', '(' },
			{ '}', '{' },
			{ ']', '[' }
		};

		public bool IsValid(string s)
		{
			Stack<char> stack = new Stack<char>();
			foreach (char c in s)
			{ //if its an opening braket push it
				if (bracketMap.ContainsValue(c))
				{
					stack.Push(c);
				}
				// if its a closing bracket 
				else if (bracketMap.ContainsKey(c))
					//check for short circuit 
					if (stack.Count == 0 || stack.Pop() != bracketMap[c])
					{
						return false;
					}
			}
			// ADD THIS LINE: It returns true if the stack is empty, 
			// and false if there are still leftover openers.
			return stack.Count == 0;
		}


		public static void Run()
		{
			ValidParenthesis solver = new ValidParenthesis();

			// Test cases
			string[] testInputs = { "()", "()[]{}", "(]", "([)]", "{[]}" };

			foreach (string input in testInputs)
			{
				bool result = solver.IsValid(input);
				Console.WriteLine($"Input: {input,-6} | IsValid: {result}");
			}
		}
	}
}

/*
 * the trick with last question is its all about stack.pop() making the count = count -1 aka removing element in stack in the next iteration  
 * next iteration so that goes really well when the traversal of elements through the array happens and we have reached the last element
 * 
 * so check if its a closing braces and remove the compliment of current thing inside bracket Map*/
/* WEIRD thing about stacks is that u can only access the last element which is going to be get compared and popped */