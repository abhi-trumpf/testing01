/*
Two Sum Map Cheat Sheet
Two Sum Concept Shortcut

Instead of standard Index -> Number lookup, use a map hack:

• Key: Array Number (Allows instant searching)

• Value: Array Index (Stored position)

`Number : Index`

Code Snippet (JavaScript)

```

function twoSum(nums, target) {

    let map = {}; 

    for (let i = 0; i < nums.length; i++) {

        let diff = target - nums[i];

        if (diff in map) return [map[diff], i];

        map[nums[i]] = i;

    }

}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

```

Trace Table (`nums = [2, 7]`, `target = 9`)

• `i = 0` (Value: 2): Needs `7`. Not in map. Saves `map = { 2: 0 }`

• `i = 1` (Value: 7): Needs `2`. Found in map! Returns `[map[2], 1]` -> `[0, 1]`

Language Syntax Quick Reference

• JavaScript Object: `{ "2": 0 }` -> `diff in map`

• C# Dictionary: `map[2] = 0;` -> `map.ContainsKey(diff)`

• Python Dict: `{2: 0}` -> `if diff in map:`
*/
/*
number - flow

To see how it behaves for every single element, let's change our target so the code is forced to go through the **entire** array without stopping early.

Let's test: `twoSum([2, 7, 11, 15], 26)` (Target is **26**).
Our notebook starts completely blank: `let map = {};`

---

### 🕵️‍♂️ Step 1: Inspecting Index `0` (Number `2`)

* **The Math:** Target is `26`. Current number is `2`. `diff = 26 - 2 = 24`.
* **The Check:** Is `24` inside our map? **No.** (The map is totally empty!)
* **The Action:** Can't match yet. Scribble down `2` and its index `0`.

```javascript
// Notebook state after Step 1:
map = { "2": 0 };

```

---

### 🕵️‍♂️ Step 2: Moving to Index `1` (Number `7`)

* **The Math:** Target is `26`. Current number is `7`. `diff = 26 - 7 = 19`.
* **The Check:** Is `19` inside our map? **No.** (Our map only has a `2`).
* **The Action:** No match. Scribble down `7` and its index `1`.

```javascript
// Notebook state after Step 2:
map = { "2": 0, "7": 1 };

```

---

### 🕵️‍♂️ Step 3: Moving to Index `2` (Number `11`)

* **The Math:** Target is `26`. Current number is `11`. `diff = 26 - 11 = 15`.
* **The Check:** Is `15` inside our map? **No.** (Our map only has `2` and `7`).
* **The Action:** No match. Scribble down `11` and its index `2`.

```javascript
// Notebook state after Step 3:
map = { "2": 0, "7": 1, "11": 2 };

```

---

### 🕵️‍♂️ Step 4: Moving to Index `3` (Number `15`)

* **The Math:** Target is `26`. Current number is `15`. `diff = 26 - 15 = 11`.
* **The Check:** Is `11` inside our map? **YES!** (We just logged it during Step 3!)
/*
-----------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------
**The Action:** 🎉 **💥 BINGO!** We grab the index of that `11` from our map (`map[11]` which is `2`) and our current index (`3`).

```javascript
return [2, 3]; // CASE CLOSED! The loop stops completely.

```

### The Big Takeaway

As you can see, the map acts like a trail of breadcrumbs. Every number you pass leaves a memory behind. The moment a future number calculates a `diff` that matches an old breadcrumb, the trap snaps shut!



*/
/*
function twosum(nums,target){
    let map = {};         // this is a map.
    let foundpairs = [];  // this is an array (storage box for result) 

    for(let i=0;i<nums.length;i++)
    {
        let diff = target - nums[i];
        if(diff in map)
        {
            // diff = target - nums[i] so we need to push old val and new value.
            // diff - old val , nums[i] -  new val 
            foundpairs.push([diff,nums[i]]);  //Now stores pairs as [[2, 7]] instead of [2,7].
            // we need to push 2 things the new value and old matched value
        }
        /*
Do map keys need to be unique? 
-> YES. Map keys (or object keys) MUST be unique. JavaScript enforces this 
   automatically by design.

How do we know they are unique when running "map[nums[i]] = i;"?
-> We don't! If the same number appears twice in your array, JavaScript will 
   simply OVERWRITE the old entry with the new index. 

Example Behavior:
Suppose nums = [7, 11, 7] and target = 14

1. Loop i = 0: nums[0] is 7. 
   -> map[7] = 0;
   -> Map is now: { 7: 0 }

2. Loop i = 2: nums[2] is 7.
   -> map[7] = 2; (The old index 0 is completely deleted and overwritten!)
   -> Map is now: { 7: 2 }

Why this doesn't break the algorithm:
Because of the order of your code! In the Two Sum loop, you always CHECK for 
the complement ("if (diff in map)") BEFORE you add the current number to the 
map. 

* If a duplicate number is part of the winning pair (e.g., 7 + 7 = 14):
  The code will catch the FIRST 7 in the map while looking at the SECOND 7, 
  triggering a match before any overwriting happens!


        map[nums[i]]=i;  // we are adding all elements to map but how do u know they are unique does it need to be?
    }

    for(let i =0 ; i<foundpairs.length;i++){
        console.log(foundpairs[i]);
    }
    // This allows the final console.log outside the function to see the data!
    return foundpairs;
}


twosum([2, 7, 11, 15], 9);
*/




function twosum(nums,target){
    let map = {};         // this is a map.
    let foundpairs = [];  // this is an array (storage box for result) 

    for(let i=0;i<nums.length;i++)
    {
        let diff = target - nums[i];
        if(diff in map)
        {
            foundpairs.push([diff,nums[i]]); 
        }

        map[nums[i]]=i;  // automatically old version of duplicate numbers gets  
        // overwritten so maps only has unique values.
    }

    for(let i =0 ; i<foundpairs.length;i++){
        console.log(foundpairs[i]);
    }
    // This allows the final console.log outside the function to use the data if we are using 1 that is.
    return foundpairs;
}


twosum([2, 7, 11, 15], 9);