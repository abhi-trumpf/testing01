using System;

namespace CodingPractise.CsharpCoding
{
    public class ConstructorOrDeconstructor
    {
        public ConstructorOrDeconstructor()
        {
            Console.WriteLine("Constructor called");
        }
        ~ConstructorOrDeconstructor()
        {
            Console.WriteLine("Destructor called");
        }
        public static void Run()
        {
            ConstructorOrDeconstructor obj = new ConstructorOrDeconstructor();
            // Force garbage collection to see the destructor in action
            GC.Collect();
            GC.WaitForPendingFinalizers();
        }
    }
}
