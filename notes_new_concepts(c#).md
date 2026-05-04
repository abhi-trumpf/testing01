&#x20; \*return new int\[] { };  - first square bracket then curly braces.

&#x20; \*let wont come just int rem = 0 , int c = x.    1%10 = 1.

&#x20; \*foreach (int num in testNumbers) {

&#x20;           bool result = obj.IsPalindrome(num);

&#x20;           Console.WriteLine($"Is {num} a palindrome? {result}");

&#x20; \*for(int i=s.Length-1;i>0;i++)// Length -- L caps  

&#x20; \*int length = nums.Length;

&#x20; \* if(nums\[i]>=target)



&#x20;  \*  int \[] num3= new int\[m + n];



&#x20;  \*  if (nums.Length == 0) return null;   // ✅ base case



&#x20;  \* var tree = new TreeNode(nums\[mid]);  // num   // creation of manipulation of array VAR IS Important 

&#x20;       tree.left =  SortedArrayToBST(nums\[..mid]);  //2 dots  t CAPS

&#x20;       tree.right = SortedArrayToBST(nums\[(mid +1)..]);



&#x20;   \*int n = int.Parse(Console.ReadLine());   //;  - take input // ipcr  P caps 

&#x20;  \*  Console.Write("");  //



&#x20;   \*       for(int i=0;i<n;i++)

&#x20;           {

&#x20;           for(int j=0;j<i;j++)   //only after selling 

&#x20;           {

&#x20;               int res = prices\[i]-prices\[j];

&#x20;           }

&#x20;           }



&#x20;\*     int\[] n2 = new int\[] {2,2,1};



&#x20;\*    using System.Collections.Generic;

&#x20;     List<int> list = new List<int>();

&#x20;     list.Add(3);    // ✅ Works



\*      if(num == candidate)  // look at spacing 

\*    



\*      Index:   0   1   2   3   4   5

Value:   1   2   3   1   2   3

Compare:

0-3 -> 3 > 2 ❌

1-4 -> 3 > 2 ❌

2-5 -> 3 > 2 ❌

No pair satisfies ≤ k → false



\*using System;

using System.Collections.Generic;



List<int> numbers = new List<int>() { 1, 2, 3, 4 };



nums is an array (int\[]), not a List<int>. You cannot do nums.Remove(i) or nums.Add() on an array. Arrays have fixed size.

\*numbers.Add(5);

\*numbers.Insert(2, 10);

\*numbers.Remove(10);



public class Solution {

&#x20;   public void MoveZeroes(int\[] nums) {

&#x20;       int n = nums.Length;

&#x20;       List<int> numbers = new List<int>(nums);

&#x20;       int size = numbers.Count();

&#x20;       List<int> numbers2 = new List<int>();

&#x20;       int size2 = numbers2.Count();

&#x20;       int \[] new3 = new int\[size+size2];

&#x20;       for(int i=0;i<n;i++){

&#x20;           if(nums\[i]==0)

&#x20;           {

&#x20;               numbers.Remove(i);

&#x20;               numbers2.Add(i);

&#x20;           }

&#x20;       for(int j=0;j<=n;j++)

&#x20;       {

&#x20;           new3\[j]= nums\[j];

&#x20;       }

&#x20;       for(int k=0;k<n;k++)

&#x20;       {

&#x20;           new3\[size2+1] = numbers\[k];     //DONT DO 

&#x20;       }

&#x20;       }

&#x20;   }

}



// WHAT TO DO?????



public class Solution {

&#x20;   public void MoveZeroes(int\[] nums) {

&#x20;       int insertPos = 0; // position where next non-zero will go



&#x20;       // Step 1: Move all non-zero elements to the front

&#x20;       for (int i = 0; i < nums.Length; i++) {

&#x20;           if (nums\[i] != 0) {

&#x20;               nums\[insertPos] = nums\[i];

&#x20;               insertPos++;

&#x20;           }

&#x20;       }



&#x20;       // Step 2: Fill the rest with zeros

&#x20;       for (int i = insertPos; i < nums.Length; i++) {

&#x20;           nums\[i] = 0;

&#x20;       }

&#x20;   }

}









The null comes from the constructor, NOT from prefix.



&#x20;  for (int i = 0; i < n; i++) {                                                       // remove element from array manually 

&#x20;           if (nums\[i] != remove) {

&#x20;               newArray\[j] = nums\[i];

&#x20;               j++;

&#x20;           }

&#x20;       }



Console.WriteLine($"The first distinct maximum is {max}");



'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

using System;



public class Solution {

&#x20;   public int ThirdMax(int\[] nums) {

&#x20;       int n = nums.Length;



&#x20;       // -------- Step 1: Find first maximum --------

&#x20;       int max1 = nums\[0];

&#x20;       for (int i = 1; i < n; i++) {

&#x20;           if (nums\[i] > max1) {

&#x20;               max1 = nums\[i];

&#x20;           }

&#x20;       }

&#x20;       Console.WriteLine($"The first distinct maximum is {max1}");



&#x20;       // -------- Step 2: Remove first max --------

&#x20;       int\[] newarr1 = new int\[n - 1];

&#x20;       int index = 0;

&#x20;       for (int i = 0; i < n; i++) {

&#x20;           if (nums\[i] != max1) {

&#x20;               newarr1\[index] = nums\[i];

&#x20;               index++;

&#x20;           }

&#x20;       }



&#x20;       // -------- Step 3: Find second maximum --------

&#x20;       int max2 = newarr1\[0];

&#x20;       for (int i = 1; i < newarr1.Length; i++) {

&#x20;           if (newarr1\[i] > max2) {

&#x20;               max2 = newarr1\[i];

&#x20;           }

&#x20;       }

&#x20;       Console.WriteLine($"The second distinct maximum is {max2}");



&#x20;       // -------- Step 4: Remove second max --------

&#x20;       int\[] newarr2 = new int\[newarr1.Length - 1];

&#x20;       index = 0;

&#x20;       for (int i = 0; i < newarr1.Length; i++) {

&#x20;           if (newarr1\[i] != max2) {

&#x20;               newarr2\[index] = newarr1\[i];

&#x20;               index++;

&#x20;           }

&#x20;       }



&#x20;       // -------- Step 5: Find third maximum --------

&#x20;       int max3 = newarr2\[0];

&#x20;       for (int i = 1; i < newarr2.Length; i++) {

&#x20;           if (newarr2\[i] > max3) {

&#x20;               max3 = newarr2\[i];

&#x20;           }

&#x20;       }

&#x20;       Console.WriteLine($"The third distinct maximum is {max3}");



&#x20;       // -------- Step 6: Return third maximum --------

&#x20;       return max3;

&#x20;   }

}





\---------------------------------------------------------------------------------------------



public class Solution {

&#x20;   public int ThirdMax(int\[] nums) {

&#x20;       int n = nums.Length;

&#x20;       int max = nums\[0];

&#x20;       int i;

&#x20;       for(i=1;i<n;i++){                          //finding max 

&#x20;           if(nums\[i]>max){

&#x20;               max = nums\[i];

&#x20;           }

&#x20;           Console.WriteLine($"The first distinct maximum is {max}");   ///finding max of array

&#x20;       }

&#x20;       //remove max from array

&#x20;       int\[] newarr = new int\[n];

&#x20;       int index =0;

&#x20;       for(int j=0;j<n;j++){

&#x20;           if(nums\[j]!=max){

&#x20;               newarr\[index++]=nums\[j];

&#x20;           }

&#x20;       }

&#x20;       //// finding 2 nd max 

&#x20;       int max2 = newarr\[0];

&#x20;       for(int k=1;k<index;k++)

&#x20;       {

&#x20;           if (newarr\[k]>max2) {

&#x20;               max2=newarr\[k];

&#x20;           }

&#x20;       }

&#x20;       int\[] newarr2 = new int\[n];

&#x20;       int index2=0;

&#x20;       ///// remove 2nd max

&#x20;       for(int l=0;l<index;l++)

&#x20;       {

&#x20;            if(newarr\[l] !=max2){       // l coMES HEREEEE

&#x20;               newarr2\[index2++] = newarr\[l];     //index2 comes here and l here 2

&#x20;           }

&#x20;       }

&#x20;       if (index2 == 0) {

&#x20;           // No third max exists, return first max

&#x20;           return max;

&#x20;           }



&#x20;       /// find 3 rd max

&#x20;       int max3 = newarr2\[0];

&#x20;       for (int m=1;m<index2;m++){

&#x20;           if(newarr2\[m]>max3){

&#x20;               max3 =newarr2\[m];

&#x20;           }

&#x20;       }

&#x20;       return max3;

&#x20;   }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



using System;



public class HelloWorld

{

&#x20;   public static void Main(string\[] args)

&#x20;   {

&#x20;       string s2 = "my name is Abhishek";

&#x20;       string\[] words= s2.Split(' ');   // S caps                                                                                    //need to split by spaces 

&#x20;       foreach (string word in words){

&#x20;           if(word == "name")

&#x20;           {

&#x20;               Console.WriteLine("hhhaaah");

&#x20;           }

&#x20;           Console.WriteLine(word);  //c caps

&#x20;       }

&#x20;   }

}





/////////////////////////////////////////////





string\[] s2 = s.Split(' ', StringSplitOptions.RemoveEmptyEntries);



/////////////////////////////////////////////////



using System;

using System.Text.RegularExpressions;



public class Solution {

&#x20;   public bool IsPalindrome(string s) {

&#x20;       // Step 1: Remove non-alphanumeric characters and convert to lowercase

&#x20;       string cleaned = Regex.Replace(s, @"\[^a-zA-Z0-9]", "").ToLower();



&#x20;       // Step 2: Reverse the cleaned string

&#x20;       char\[] array = cleaned.ToCharArray();

&#x20;       Array.Reverse(array);

&#x20;       string reversed = new string(array);



&#x20;       // Step 3: Compare

&#x20;       bool isPalindrome = cleaned == reversed;

&#x20;       Console.WriteLine($"\\"{s}\\" is{(isPalindrome ? "" : " NOT")} a palindrome");

&#x20;       return isPalindrome;

&#x20;   }

}





////////////////////////////////////////////

public class Solution {

&#x20;   public int TitleToNumber(string columnTitle) {

&#x20;       int total =0;

&#x20;       foreach(var c in columnTitle){

&#x20;           total = total\*26 +(c-'A'+1);   // imp total = total \*26 

&#x20;       }

&#x20;       return total;

&#x20;   }

}





////////////////////////////////////////////

MAKE LIST FROM STRING 





List<char> l1 = t.ToList();       //t.ToList()  t is string t.ToList();



/////////////////////////////////

using System;

using System.Collections.Generic;



///////////////////////////

(!l2.Contains(c))



TryAdd	“Add if not present”

ContainsKey	“Check if already exists”

dict\[key]	“Get value”



/////////////////////

👉 Two letters mapping to SAME word

👉 Violates rule: unique mapping



if(m2\[day] = a)  MEANS-----

m2\[a:"day"]

/////////////



public class Solution {

&#x20;   public bool WordPattern(string pattern, string s) {

&#x20;       string\[]words = s.Split(' ');

&#x20;       if(pattern.Length!=words.Length){

&#x20;           return false;

&#x20;       }

&#x20;       Dictionary<char,string> d1= new Dictionary<char,string>();

&#x20;       Dictionary<string,char> d2 = new Dictionary<string,char>();



&#x20;       for(int i=0;i<pattern.Length;i++)

&#x20;       {

&#x20;           char p = pattern\[i];    // chars of pattern

&#x20;           string s2 = words\[i];   // string of s 

&#x20;           if(d1.ContainsKey(p))

&#x20;           {

&#x20;               if(d1\[p] != s2)   //d1\[p] 👉 This gives you the VALUE, not the key, not the pair.

&#x20;                   return false;

&#x20;           }

&#x20;           else

&#x20;           {

&#x20;               d1\[p]=s2;

&#x20;           }

&#x20;           if(d2.ContainsKey(s2))

&#x20;           {

&#x20;               if(d2\[s2] != p)

&#x20;               return false;    

&#x20;           }

&#x20;           else{

&#x20;               d2\[s2] = p;

&#x20;           }

&#x20;       }

&#x20;       return true;

&#x20;   }

}





Function Overloading - same function name diff parameters 



void print(int a);



void print(float b);





Function Overriding - change the print statement 



class 1{

print(){

console.log("what is the meaning of life");     // javascript 

}

}



class 2 extends 1{                                // different class name but same function name

print(){   

console.log("the whole point of life is to chill");

}

}





in c#, we are going to do --------- public void print(){}





string str = "Hello world C sharp";

string\[] words = str.Split(' ');





&#x20;    s2\[i]=s\[n-1-i];   // i starts from 0.  s \[0] = s\[5-1-0] = s\[4]







using System;



public class HelloWorld

{

&#x20;   public static void Main(string\[] args)

&#x20;   {

&#x20;       string s = "abcdefg";



&#x20;       if (s.Contains('a') || s.Contains('e') || s.Contains('i') || s.Contains('o') || s.Contains('u'))   // C caps brackets and ' '

&#x20;       {

&#x20;           Console.WriteLine("Vowels found");             //C,W,L Caps 

&#x20;       }

&#x20;   }

}



return haystack.IndexOf(needle);         big part.IndexOf(needle)



if (haystack.Substring(i, needle.Length) == needle)





if ("AEIOUaeiou".Contains(c))        // C caps 



foreach (char c in s2)    // foreach and then gap 



result\[i] = s2\[j] → replaces the current vowel in the original string with the vowel from the end.



Character	Is vowel?	Action	Resulting str

h	No	Append h	h

e	Yes	Pop o	h o

l	No	Append l	h o l

l	No	Append l	h o l l

o	Yes	Pop e	h o l l e





public class Solution {

&#x20;   public string ReverseVowels(string s) {

&#x20;       var str = new StringBuilder();

&#x20;       var l = new Stack<char>();



&#x20;       foreach(var i in s){

&#x20;           if("aeiouAEIOU".Contains(i))

&#x20;               l.Push(i);

&#x20;       }



&#x20;       foreach(var i in s){

&#x20;           if("aeiouAEIOU".Contains(i))

&#x20;               str.Append(l.Pop());

&#x20;           else

&#x20;               str.Append(i);

&#x20;       }

&#x20;       

&#x20;       return str.ToString();

&#x20;   }

}



////////////////////////



public class Solution {

&#x20;   public string ReverseVowels(string s) {

&#x20;       string vowels = "AEIOUaeiou";

&#x20;       string s2 = "";  // collect vowels



&#x20;       foreach (char c in s) {

&#x20;           if (vowels.Contains(c)) {

&#x20;               s2 += c;

&#x20;           }

&#x20;       }



&#x20;       char\[] result = s.ToCharArray();

&#x20;       int j = s2.Length - 1;  // index for reversed vowels



&#x20;       for (int i = 0; i < result.Length; i++) {

&#x20;           if (vowels.Contains(result\[i])) {

&#x20;               result\[i] = s2\[j];  // replace vowel with reversed vowel

&#x20;               j--;

&#x20;           }

&#x20;       }



&#x20;       return new string(result);

&#x20;   }

}



///////



bool() is not a constructor so cant do bool(magazine.IndexOf(ransomNote));)



if present na 1 or else -1 plus it will only return integer not a boolean value.





if (freq.ContainsKey(c)) --- .Contains nope .ContainsKey correct 





Character	Count

l	2        // 1 - consonent 

o	2

v	1

e	4

t	1

c	1

d	1







using System;

using System.Linq;



&#x20;string s = "abcdef";

&#x20;       string shuffled = ShuffleString(s);



Console.WriteLine($"Values before swapping are {n1} and {n2}\\n");



n3.Length → ❌ int has no Length ---> only possible if n3 is a string 



string s3 = "ahahah";

int x = s3.Length; // property not a method   cant do s3.Length() thats wrongg.



string s3 = Console.ReadLine();   // no need parse for this one



Write() → same line

WriteLine() → next line





using System;

public class yes{

&#x20;   public static void Main(){

&#x20;       int n =4;

&#x20;       for(int i=0;i<n;i++){

&#x20;           for(int j=0 ; j<=n-i; j++){   //<=

&#x20;               Console.Write(" ");  //left space 

&#x20;               

&#x20;           }

&#x20;           for (int k = 0; k <= i; k++)  //<=

&#x20;           {

&#x20;               Console.Write("#");   //left hashes 

&#x20;               

&#x20;           }

&#x20;           Console.Write("  ");

&#x20;           for (int l=0 ; l<=i; l++)

&#x20;           {

&#x20;               Console.Write("#");

&#x20;           }

&#x20;           Console.WriteLine();    //only here WriteLine comes

&#x20;       }

&#x20;   }

}

&#x20; \&\& - and ,|| - or 



HelloWorld c1 = new HelloWorld();               //classname obj = new classname();



public class new2{ 

&#x20;                                  ....

}// no() for class  



&#x20;   public static void Main(string\[]  args)  // M caps ad after string we use \[]





/// new stuff

Even though you used $, you didn’t put max inside {}.



👉 $"" only works when variables are inside {}

👉 Here "lcm is" has no placeholder → max is ignored



✅ Correct version

Console.WriteLine($"lcm is {max}");





C# array → fixed size → no push/pop

C# List<T> → dynamic → use .Add() / .RemoveAt() like push/pop concept



No — in C#, .Length is not just for strings. It works for arrays of any type: int\[], double\[], char\[], etc. 

int x = new Array\[];





// 153 → 1³ + 5³ + 3³ = 153 ✅

9474 → 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474 ✅  // Armstrong Number 





//Math.Pow(2,4) --- 2\* 4  = returns a doubly value 



Leap year logic 



A leap year is:



Divisible by 400

OR

Divisible by 4 AND NOT divisible by 100





for taking strings as input 

&#x20;  Console.WriteLine("enter the string");

&#x20;  a = Console.ReadLine();



(char c of s8)         //if u want chars in string





string\[] words = s.Split(' ');   // if u want words instead of characters 





👉 C# ALWAYS needs:



project OR

script runner  // imp





int.TryParse(choiceInput, out choice)

tries to convert input into a number



Examples:



Input	Result

"1"	✔ success → choice = 1

"25"	✔ success → choice = 25

"abc"	❌ fail

""	❌ fail





2\. ! (NOT operator)



This flips the result:



TryParse result	With !

true (valid input)	false

false (invalid input)	true





Why out choice and not just int choice?



Because TryParse is designed to do TWO things at once:



Tell you if conversion worked (true/false)

Give you the converted number







int.Parse("abc") ❌ crash

int.Parse(null) ❌ crash



Good question — this is where things finally “click” in C#.



🔥 What “No more Parse used anywhere” means



It means:



👉 You are NOT using this unsafe method anymore anywhere in your code:



int.Parse(input)

🧠 Why Parse is a problem

int.Parse("abc") ❌ crash

int.Parse(null) ❌ crash



👉 It assumes:



“Input is always a valid number”



But real users don’t behave nicely 😄



🔥 What you replaced it with

int.TryParse(input, out n)

🧠 Why TryParse is better

Feature	Parse	TryParse

crashes on invalid input	❌ yes	❌ no

handles null	❌ no	✔ yes

safe	❌ no	✔ yes

returns success/fail	❌ no	✔ yes

💡 Simple meaning of that line

int.TryParse(input, out n)



👉 means:



“Try converting input into a number.

If it works, store it in n.

If it fails, don’t crash.”



🔥 So when I said:



“No more Parse used anywhere”



I meant:



👉 You have completely removed ALL unsafe conversions like:



int.Parse(...)



and replaced them with:



int.TryParse(...)

🧠 One-line summary



👉 “No more Parse used anywhere” =



You are now using only safe input conversion in your whole program.



⚠️ Key rule

Language	File type

C#	.cs

C	.c



TryParse actually returns two things:



true/false → whether conversion succeeded

the parsed integer → via out





int\[] arr = new int\[11];



for (int i = 0; i < 11; i++)

{

&#x20;   Console.Write($"Enter value for arr\[{i}]: ");

&#x20;   int.TryParse(Console.ReadLine(), out arr\[i]);

}





int\[11] arr6;       // this is wrong

int\[] arr6 = new int\[11];    // this is correct.



long\[] new7 = new long\[11];     // big  values wont become 0.



/tmp/G27RI2YysH/Main.cs(743,1): error CS1022: Type or namespace definition, or end-of-file expected - bracket mismatch 



double avg = (double)sum / n;     / 5/2 = 2.5 n not 2 



Using malloc (runtime allocation)

int \*ptr = (int \*)malloc(10 \* sizeof(int));

You’re asking the system: “Give me memory for 10 integers”

Memory is allocated during execution

Size can be decided dynamically



free(p) -  if its not used,

then not freeing memory , its going to causes a memory leak.





.sln	Solution (container for projects)

.vcxproj	C/C++ project

.c / .cpp	Actual source code





🔥 VALID examples



These are valid numbers:



Input	Why

"10"	pure integer

"0"	valid integer

"-5"	negative integer is still valid

"100000"	valid

" 25 "	spaces are ignored, still valid

❌ INVALID examples



These are NOT valid numbers:



Input	Why

"abcd"	not numeric

"12.5"	decimal (not int)

"10a"	mixed characters

"" (empty)	nothing entered

"@#"	symbols



Valid and invalid numbers 



Array.Reverse(a);

Array.Sort(a);



Finding index

int index = Array.IndexOf(a, 10);

6\. Finding last index

int index = Array.LastIndexOf(a, 10);

7\. Checking existence

bool exists = a.Contains(10); // needs System.Linq

8\. Getting max / min

int max = a.Max();

int min = a.Min();

9\. Sum of elements

int sum = a.Sum();



a.Distinct()  // remove dupicate from array





🧠 Why HashSet is powerful



✔ automatically removes duplicates

✔ very fast (O(n))

✔ commonly used in interviews + production



ONLY HAVE UNIQUE VALUES 



using System;

using System.Collections.Generic;



public class Program

{

&#x20;   public static void Main()

&#x20;   {

&#x20;       int\[] a = { 1, 2, 2, 3, 4, 4, 5 };



&#x20;       HashSet<int> set = new HashSet<int>();



&#x20;       foreach (int x in a)

&#x20;       {

&#x20;           set.Add(x); // duplicates automatically ignored

&#x20;       }



&#x20;       Console.WriteLine("Unique elements:");



&#x20;       foreach (int x in set)

&#x20;       {

&#x20;           Console.WriteLine(x);

&#x20;       }

&#x20;   }

}



✅ What is using System.Collections.Generic;?



It allows you to use generic collection classes like:



List<T>

Dictionary<TKey, TValue>

HashSet<T>

Queue<T>

Stack<T>



using System.Linq  why we need this one????





You need it only when you use LINQ methods like:



✔ Distinct()

✔ Where()

✔ Select()

✔ Max()



if (int.TryParse(input, out num) \&\& num > 0) - 1st part - converts string to integer and returns true only if the conversion is successfull.

&#x20;                                        2nd part - checks if number is greater than 0.





string sentence = "I love programming in Csharp";



&#x20;       string\[] words = sentence.Split(' ');



&#x20;       foreach (string word in words)

&#x20;       {

&#x20;           Console.WriteLine(word);

&#x20;       }



Python - higher order programming language





int \*tmp = malloc(4 \* sizeof(int));



This is allocating memory for an array of 4 integers, and tmp is a pointer to the first element of that array.



Break it down:

malloc(4 \* sizeof(int))

Allocates enough memory to store 4 integers

Returns a void\* pointer to the beginning of that block

int \*tmp

Declares a pointer to int

So tmp will point to the first integer in that allocated block

So what is it exactly?



👉 Both, in a way:



tmp → is a pointer

The memory it points to → behaves like an array of 4 integers

You can use it like an array:

tmp\[0] = 10;

tmp\[1] = 20;

tmp\[2] = 30;

tmp\[3] = 40;



int \*tmp = malloc(4 \* sizeof(int));



tmp → points to first integer

✔️ tmp\[0] → first integer

✔️ \*tmp → also first integer



👉 Meaning:



tmp\[0] == \*tmp

Example:

tmp\[0] = 10;



printf("%d\\n", \*tmp);    // 10

printf("%d\\n", tmp\[0]);  // 10

Simple memory view:

tmp ──► \[10]\[20]\[30]\[40]

&#x20;        ↑

&#x20;       \*tmp



printf("%d\\n", \*(tmp + 1));  // 20



if you use malloc you should always free up spacee.



stdio.h - printf,scanf



stdlib.h - list values

malloc()

calloc()

realloc()   - by  default  will  return 0.  will allocate 4 bytes/n no of bytes then it will 

what memeory has been allocated to u in the past.

free()





free(list)

tmp\[3] = 4;

free(list) 



you are freeing up memory in different list locations (temp\[0] to temp\[2] then we are moving to temp\[3])



Meta-data - helps you maintain data you care about.



Linked List is called Vector in other languages.



(\*n) - dereferance n and then go inside it.

\*n.number // is called dereferancing it.



\* n is the same as n->next = NULL;

n->number = 5; // or u can use get\_int("enter number");



node \* n = malloc(sizeof(node)); 



|\_\_|------>|\_|

&#x20;n         |\_| node 





list = the starting node (head) of the linked list

node \*ptr = list ;





"The ptr != NULL",

&#x20;                                       check acts as a guardrail, preventing the program from crashing by

&#x20;ensuring you don't try to access data once you've run out of nodes."





hiiii





| Header     | Purpose                        |

| ---------- | ------------------------------ |

| `stdio.h`  | input/output                   |

| `stdlib.h` | memory, utilities, conversions |



change github branch from master to main

git branch -m master main

git push -u origin main



pull the remote changes into your local files, resolve any conflicts, and then push.



git pull origin main --rebase



git push origin main



In Git, origin is just a nickname (an alias) for the URL of your GitHub repository. Even if your folder or project is named testing01, the connection to your GitHub repository is almost certainly named origin.



You can verify this by running:



Bash

git remote -v

This command will show you the name (usually origin) and the web address (https://github.com/abhi-trumpf/testing01.git).



Why we use the name origin



// If in middle of list

if (m->number < ptr->next->number)

{

&#x20;   m->next = ptr->next;

&#x20;   ptr->next = n;

&#x20;   break;

}



unload(list) -  free memory



leaf node - no children.



Bst- Binary search tree - ez to add new nodes cuz no need to copy data 1 by 1.Downsise - less speed and dynamism.More Memory 



Array of linked List - Hash Table 



adding new content for ref\\



string\[] myData = { "apple", "apple", "banana" }; is the standard way to declare and initialize a fixed-size array in C#.



string\[] result = myData.Distinct();   returns something called an IEnumerable<T>.



Distinct() not as a "physical box," but as a smart magnifying glass or a filter that you place over your existing data.



pointer (the IEnumerable) that knows how to show you only the unique ones when you start looking.





using System;



class ResourceHandler

{

&#x20;   // Constructor

&#x20;   public ResourceHandler()

&#x20;   {

&#x20;       Console.WriteLine("Object created: Resource initialized.");

&#x20;   }



&#x20;   // Destructor (Finalizer)

&#x20;   \~ResourceHandler()

&#x20;   {

&#x20;       Console.WriteLine("Object destroyed: Resource cleaned up.");

&#x20;   }

}





Default Constructor: When constructors do not have parameters, then it is called the default constructor. These types of constructors have all its instance initialized with the same value.



Parameterized Constructor: When any constructor has at least one parameter, it is called the parameterized constructor.



Copy Constructor: When the constructor is used to create an object just by copying all of its variables from another object, such constructors are called copy constructor. They are used for initializing a new instance from an existing one.



ex



public class MachinePart

{

&#x20;   public string Name { get; set; }        // { get; set; }  This is the "magic" part that makes them Auto-Properties:



get: Allows other parts of your code to read the value. Example: string myName = myPart.Name; set: Allows other parts of your code to change the value. Example: myPart.Weight = 2.5;



&#x20;   // Standard constructor

&#x20;   public MachinePart(string name, double weight)

&#x20;   {

&#x20;       Name = name;

&#x20;       Weight = weight;

&#x20;   }



&#x20;   // The Copy Constructor

&#x20;   public MachinePart(MachinePart other)

&#x20;   {

&#x20;       // Copying values from the 'other' object to the new instance

&#x20;       this.Name = other.Name;

&#x20;       this.Weight = other.Weight;

&#x20;   }

}



// Usage:

MachinePart originalPart = new MachinePart("Laser Nozzle", 0.5);



// Creating a new instance using the Copy Constructor

MachinePart clonedPart = new MachinePart(originalPart);



// Now clonedPart has the same values as originalPart



Private Constructor: When a constructor is produced with a private access modifier, it is called Private Constructor. It does not make it possible for other classes to inherit any data from this class.



Static Constructor: When a constructor needs to be invoked only once, and when that constructor needs to be invoked at creating the first reference, then those constructors are made static and are called static constructors.





using System;



public class Person

{

&#x20;   public string Name;



&#x20;   // Constructor

&#x20;   public Person(string name)

&#x20;   {

&#x20;       Name = name;

&#x20;       Console.WriteLine("Constructor executed for: " + name);

&#x20;   }

}



class Program

{

&#x20;   static void Main()

&#x20;   {

&#x20;       // Constructor is called here when creating the object

&#x20;       Person p1 = new Person("Alice");

&#x20;       Person p2 = new Person("Bob");

&#x20;   }

}











Destructor is another method that uses the class-name but is preceded with a \~ (tilde) operator/symbol. Destructors are used to de-initialize objects, and the memories occupied when constructors are created. You can consider them as the opposite of constructors.



public class EmpGkr

{

&#x20;   int start;

&#x20;   //constructor

&#x20;   public EmpGkr()

&#x20;   {

&#x20;       val = 10;

&#x20;   }



&#x20;   //destructor

&#x20;   \~ EmpGkr()

&#x20;   {

&#x20;       val = 0;

&#x20;   }

}





C# is single inheritance        

. C# (Object-Oriented Language)  oops concept 

C# is built from the ground up to support the Object-Oriented Programming (OOP) paradigm. It provides specific keywords and structures—like class, interface, inheritance, and encapsulation—that automatically manage objects for you.

Garbage Collected (Automatic)

&#x20;        



C is multiple inheritance concept

C (Procedural / Structured Language)

C does not have class or object keywords.

Manually Managed



:wq



<<<<<<<

=======

>>>>>>> 



node \*list = null ,pointer of node is null 



pointer variable name of node is list



HEAD

&#x20;     (Pointer)

&#x20;       |

&#x20;       V

+-------------+      +-------------+      +-------------+

|    Node 1   |      |    Node 2   |      |    Node 3   |

|-------------|      |-------------|      |-------------|

| Data: 10    |      | Data: 20    |      | Data: 30    |

| Link: \[\*]---+----->| Link: \[\*]---+----->| Link: NULL |  <-- End of List

+-------------+      +-------------+      +-------------+





x = 10;	The integer 10.

sizeof(int)	The size of the Integer blueprint (usually 4).

sizeof(node)	The size of the Node blueprint (usually 12 or 16).



node \*list = NULL;

node \*ptr = list ; set node called pointer to BEGINNING of list/beginning of struct - same thing (imp)



A linked list is simply a collection of struct node instances.



node \*temp = ptr  // ptr value store to pointer temp variable of node .





Hash table is basically an array.

Each array is a linked list.



By combining an array of linked lists you get the speed of an array with the flexibility of a linked list. 



soo array act as the SPINE and linked list are the branches of the spine -  Hash TABLE 



char \*word: This is a pointer that holds the address of the start of the string. Start of the string orthe start address of the first char(both are the same thing).

points to start of a string



The function isalpha() is designed to check a single character (char), not an entire string or a pointer.



There is no string keyword in the C langauge.



&#x20;bucket number after combining 2 letters should be unique



Word	Letter 1 (c1)	Letter 2 (c2)   Simple Addition (c 1+ c2)  The Formula (c1\*100) + c2

AC	      0 	    2	              2	                      2

BB	      1	            1	         2 (Collision!)	           101 (Unique!)

CA	      2	            0	         2 (Collision!)	           200 (Unique!)







public class Solution {

&#x20;   public int\[] Intersection(int\[] nums1, int\[] nums2) {

&#x20;       HashSet<int> s1 = new HashSet<int>(nums1);             // S caps //after new use a backspace 

&#x20;       HashSet<int> s2 = new HashSet<int>(nums2);

&#x20;       s1.IntersectWith(s2);   //IW             s1.Add(x); (within a for loop)

&#x20;       return s1.ToArray();        //TA     



&#x20;   }

}



array and linked list similarities



While arrays and linked lists are structurally very different, they share a common purpose in computer science. Since you’ve been exploring software development in C# and C lately—specifically through your testing01 project—understanding these similarities will help you choose the right tool for the job.



1\. They are both "Linear" Data Structures

The most fundamental similarity is that both are linear collections. This means they store elements in a specific order (a sequence).



In an Array, the order is determined by the physical memory slots (0, 1, 2, ...).



In a Linked List, the order is determined by pointers (node A points to node B).



2\. They Store the Same Data Type

Both structures are typically homogeneous.



If you declare an int array, it only holds integers.



If you define a struct node that contains a char \*word, every node in that linked list will store that same type of data.



3\. They Support the Same Basic Operations

Regardless of which one you use, you can perform the same "CRUD" operations on them:



Insertion: Adding a new element.



Deletion: Removing an element.



Traversal: Visiting every element from start to finish (like using a for loop).



Search: Looking for a specific value.



4\. They Both Use Memory

While their memory allocation styles differ (arrays use one big block; linked lists use scattered nodes), they both ultimately occupy space in your computer's RAM.



In C#, the Garbage Collector handles this memory for both structures.



In C, you have to be more mindful of how much memory each is consuming, especially as your project grows.



Summary Table

Feature	Array	Linked List

Logic	Linear Sequence	Linear Sequence

Access	Sequential or Random	Sequential

Data Types	Uniform (Homogeneous)	Uniform (Homogeneous)

Goal	Storing a list of items	Storing a list of items

Think of them like two different ways to store a grocery list: an array is a single piece of paper with numbered lines, while a linked list is a series of post-it notes where each one tells you where the next one is hidden. They both hold the same list of groceries!



how are they structurally different show in diagram



The main structural difference lies in how they occupy your computer's memory: Arrays are a solid block, while Linked Lists are scattered pieces connected by "addresses."



The Structural Diagram

Plaintext

&#x20;      MEMORY LAYOUT: ARRAY (The "Spine")

&#x20;      +-------+-------+-------+-------+

Address| 0x100 | 0x104 | 0x108 | 0x112 |  <-- Contiguous (Next to each other)

&#x20;      +-------+-------+-------+-------+

Data   |  'A'  |  'B'  |  'C'  |  'D'  |  <-- Same size, fixed slots

&#x20;      +-------+-------+-------+-------+

Index  |   0   |   1   |   2   |   3   |





&#x20;      MEMORY LAYOUT: LINKED LIST (The "Branches")

&#x20;      +-------+----+      +-------+----+      +-------+------+

Node 1 |  'A'  |Ptr\*+----->|  'B'  |Ptr\*+----->|  'C'  | NULL |

&#x20;      +-------+----+      +-------+----+      +-------+------+

Address|   0x205           |   0x880           |   0x412

Key Structural Differences

Memory Arrangement:



Array: Stored in **contiguous memory locations**. You can calculate the **exact location of any element instantly.**



Linked List: Stored in scattered memory locations. **Each node must store a "pointer" (the address) to find the next neighbor.**



Size Flexibility:



Array: Has a **fixed size**. To add more items than the array can hold, you usually have to create a brand new, larger array and copy everything over.



Linked List: **Dynamic**. You can add a new "branch" or node at any time just by using malloc in C or creating a new object in C#.



Access Method:



Array: Supports Random Access. You can jump straight to index\[99] in one step.



Linked List: Only supports **Sequential** Access. To find the 100th item, you must start at the head and follow the pointers 99 times.















