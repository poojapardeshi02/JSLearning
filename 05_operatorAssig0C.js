function interviewEligibility(gradScore, hscScore, sscScore, candidateName) {
    var criteria = (gradScore >= 70 || hscScore > 80 || sscScore > 90)
                  ? `Congtrates ${candidateName} you are eligible for TCS interview `
                  : `Unfortunately ${candidateName} you are not eligible for TCS interview`;
    console.log(criteria);
}
interviewEligibility(80, 86, 90, "Purva");
interviewEligibility(70, 65, 55, "Krisha");
interviewEligibility(60, 79, 88, "Shruti");