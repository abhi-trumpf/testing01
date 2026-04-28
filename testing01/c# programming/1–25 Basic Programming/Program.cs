using System;


class Program
{
    static void Main()
    {
        Console.WriteLine("Choose program number:");
        // 🔥 CHANGE 1: null-safe ReadLine handling
        string choiceInput = Console.ReadLine() ?? "";   // input is never null 

        int choice;
        // 🔥 CHANGE 2: replaced Parse with TryParse (safe)
        if (!int.TryParse(choiceInput, out choice))
        {
            Console.WriteLine("Invalid choice");
            return;
        }
        /*
        string choiceInput = Console.ReadLine();
        int choice;
        if (!int.TryParse(choiceInput, out choice))  // if! true - false - the code wont get executed
        {
            Console.WriteLine("Invalid choice");  // Why out choice and not just int choice?

//Because TryParse is designed to do TWO things at once:

//Tell you if conversion worked (true/false)
//Give you the converted number
            return;
        }
        */
        switch (choice)
        {
            case 1:
            Console.Write("Enter your number: ");
            // 🔥 CHANGE 3: null-safe ReadLine
            string input = Console.ReadLine() ?? "";
            int n;
            // 🔥 CHANGE 4: TryParse instead of Parse (removes warning CS8604)
            if (int.TryParse(input, out n))
            {
                if(n%2 ==0){
                    Console.WriteLine("even");
                }
                else
                    Console.WriteLine("odd");
                }
            else
                {
                        Console.WriteLine("Invalid input");
                }
            break;
        
            case 2:
                Program2.Run();    // R caps and only runs if if class has static in it.
                break;

            case 3:
            Program3.Run();
            break;

            default:
                Console.WriteLine("Invalid program number");
                break;
        }
            
    }
}


