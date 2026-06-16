using System;

namespace CodingPractise.CsharpCoding
{
	public class IfWordExists
	{
		public static void Run()
		{
			string s1 = "sadbutsad";
			string s2 = "sad"; //word to find

			for (int i = 0; i <= s1.Length - s2.Length; i++)
			//goes out of bounce so we need to set it
			//// Loop through s1 just like before
			{
				string chunk = s1.Substring(i, s2.Length);
				//temp chunk containing diff posibilities of s1
				//in length of 3 cuz s2.length
				if (chunk == s2)
				{
					Console.WriteLine($"Found");
					break;
				}
			}
		}
	}
}

