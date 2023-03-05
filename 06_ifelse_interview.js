function interviewEligibility(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore > 80 || sscScore > 90){
        console.log(`Congrats ${candidateName} you are eligible for TCS interview`)
    }else{
         console.log(`Unfortunately ${candidateName} you are not eligible for TCS interview`);
    }
}
interviewEligibility(80, 86, 90, "Purva");
interviewEligibility(70, 65, 55, "Krisha");
interviewEligibility(60, 79, 88, "Shruti");