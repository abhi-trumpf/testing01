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