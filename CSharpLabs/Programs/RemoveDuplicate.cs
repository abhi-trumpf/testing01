using System;
using System.Collections.Generic;

namespace CodingPractise.CsharpCoding
{
	public class RemoveDuplicate()
	{
		public static void Run()
		{
			String s = "sadnotsad";
			HashSet<char> NoDuplicate = new HashSet<char>(s);
			string output = string.Join("", NoDuplicate);
			Console.WriteLine(output);
		}
	}
}