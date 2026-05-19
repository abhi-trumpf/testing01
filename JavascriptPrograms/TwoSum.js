### 🏆 The Two Sum Map Cheat Sheet

Got it, cutting out the fluff! Short, sharp, and ready to paste.

---

### 🚀 Two Sum Concept Shortcut

Instead of the standard **Index $\rightarrow$ Number** lookup, we use a map hack:

* **Key:** Array Number *(Allows instant searching)*
* **Value:** Array Index *(Stored position)*

$$\text{Key} : \text{Value} \implies \text{Number} : \text{Index}$$

---

### 🛠️ Code Snippet

```javascript
function twoSum(nums, target) {
    let map = {}; 
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) return [map[diff], i]; // Victory
        map[nums[i]] = i; // Save Number: Index
    }
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

```

---

### 🔄 Trace Table (`nums = [2, 7]`, `target = 9`)

* **`i = 0` (Value: 2):** Needs `7`. Not in map. Saves `map = { 2: 0 }`
* **`i = 1` (Value: 7):** Needs `2`. Found in map! Returns `[map[2], 1]` $\rightarrow$ `[0, 1]`

* **JavaScript Object:** `{ "2": 0 }` $\rightarrow$ Check using `diff in map`
* **C# Dictionary:** `map[2] = 0;` $\rightarrow$ Check using `map.ContainsKey(diff)`
* **Python Dictionary:** `{2: 0}` $\rightarrow$ Check using `if diff in map:`