function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`Month number  ${monthNumber} is:January`);
            break;
        case 2:
            console.log(`Month number ${monthNumber} is:February`);
            break;
        case 3:
            console.log(`Month number ${monthNumber} is:March`);
            break;
        case 4:
            console.log(`Month number ${monthNumber} is:April`);
            break;
        case 5:
            console.log(`Month number ${monthNumber} is:May`);
            break;
        case 6:
            console.log(`Month number ${monthNumber} is:June`);
            break;
        case 7:
            console.log(`Month number ${monthNumber} is:July`);
            break;
        case 8:
            console.log(`Month number ${monthNumber} is:August`);
            break;
        case 9:
            console.log(`Month number ${monthNumber} is:Septeber`);
            break;
        case 10:
            console.log(`Month number  ${monthNumber} is:October`);
            break;
        case 11:
            console.log(`Month number ${monthNumber} is:November`);
            break;
        case 12:
            console.log(`Month number ${monthNumber} is:December`);
            break;
    
        default:
            console.log(`Month number ${monthNumber} is:Invalid`);
            break;
    }

}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);