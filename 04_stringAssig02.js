function stringHandsOn(){
    var givenString="     Hey you are doing good, keep it up       ";
    console.log("**Step 1**");
    console.log("Given String:",givenString);
   
    console.log("**Step 2**");
    console.log("Length of String:",givenString.length);

    console.log("**Step 3**");
    var givenStringTrim=givenString.trim();
    var givenStringTrimLength=givenStringTrim.length;
    console.log("Given string after trimming:",givenStringTrim," Length of string after trim:",givenStringTrimLength);
    
    console.log("**Step 4**");
    var count=givenString.length-givenStringTrim.length;
    console.log("Total number extra spaces count that is removed in Step 3:",count);

    console.log("** Step 5 **");
    console.log("1st & last char on the same line after trim:",givenStringTrim.charAt(0),givenStringTrim.charAt(givenStringTrimLength-1));

    console.log("** Step 6**");
    var givenStringTrimSplit=givenStringTrim.split(" ");
    console.log("Count of total words in srting in step 3:",givenStringTrimSplit.length);

    console.log("** Step 7 **");
    console.log("Index of word 'good' :",givenString.indexOf('good'));

    console.log("** Step 8 **");
    console.log("Substring starting fron index 22 by using slice():",givenString.slice(22));
    console.log("Substring starting fron index 22 by using substring():",givenString.substring(22));

    console.log("** Step 9 **");
    console.log("String starts with word Hey?",givenString.includes("Hey"));

    console.log("** Step 10 **");
    console.log("String ends with word up?",givenString.includes("up"));


}
stringHandsOn();