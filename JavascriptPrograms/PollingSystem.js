class PollSystem {
  constructor(question, options) {
    this.question = question;
    this.votes = {}; // Combining both object and this concept.

    // Set the starting count for each option to 0
    options.forEach((option) => (this.votes[option] = 0));
  }

  registerNewAnswer(option) {
    // If the option exists in our votes object, increment its count
    if (option in this.votes) {
      this.votes[option]++;
      /*for particular scope of object , the value is going to improve by 1.
       This is the heart of the program */
      this.displayResults();
    }
  }
  displayResults() {
    console.log(`\n=== ${this.question} ===`);

    Object.entries(this.votes).forEach(([option, count]) => {
      console.log(`📍 ${option} ➔ ${count} votes`);
    });
  }
}

// Running the simplified version:
const codingPoll = new PollSystem("Favorite Language?", [
  "C#",
  "JavaScript",
  "C",
]);
//constructor gets called at the exact millisecond you use the new keyword

codingPoll.registerNewAnswer("JavaScript"); // Vote by typing the name directly!
codingPoll.registerNewAnswer("C#");
//objects doing method calls
