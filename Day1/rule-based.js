function rulebasedsentimentanalysis(text){
    const positiveWords = ["good", "great", "excellent", "happy", "love"];
    const negativeWords = ["bad", "terrible", "awful", "sad", "hate"];
    const t=text.toLowerCase();

    if(positiveWords.some((word)=>t.includes(word))) return "Positive";
    if(negativeWords.some((word)=>t.includes(word))) return "negative";
    return "Unknown";
}


const reviews = [
  "This phone is amazing, I love it",   // easy
  "The food was not good",              // negation
  "Yeh movie ekdum bakwaas thi",        // Hinglishc
  "Great, another delayed flight...",   // sarcasm
];

for (const review of reviews) {
    console.log(`Review ${review} => Sentiment: ${rulebasedsentimentanalysis(review)}`);
}