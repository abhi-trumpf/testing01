using System;

namespace CodingPractise
{
    public class ListNode
    {
        public int val;
        public ListNode? next;
        public ListNode(int val = 0, ListNode? next = null)
        {
            this.val = val;
            this.next = next;
        }
    }

    public class AddTwoLists
    {
        public static ListNode? AddTwoNumbers(ListNode? l1, ListNode? l2)
        {
            ListNode dummyHead = new ListNode(0);
            ListNode current = dummyHead;
            int carry = 0;

            while (l1 != null || l2 != null || carry != 0)
            {
                int val1 = (l1 != null) ? l1.val : 0;
                int val2 = (l2 != null) ? l2.val : 0;

                int sum = val1 + val2 + carry;
                carry = sum / 10;

                current.next = new ListNode(sum % 10);
                current = current.next;

                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;
            }

            return dummyHead.next;
        }

        public static void Run()
        {
            Console.WriteLine("--- Add Two Lists ---");
            ListNode l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
            ListNode l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

            Console.Write("List 1: ");
            PrintList(l1);
            Console.Write("List 2: ");
            PrintList(l2);

            ListNode? result = AddTwoNumbers(l1, l2);
            Console.Write("Result List: ");
            PrintList(result);
        }

        private static void PrintList(ListNode? head)
        {
            ListNode? temp = head;
            while (temp != null)
            {
                Console.Write(temp.val);
                if (temp.next != null) Console.Write(" -> ");
                temp = temp.next;
            }
            Console.WriteLine();
        }
    }
}