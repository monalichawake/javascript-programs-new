function interviewCheck (grandScore, hscScore, sscScore, candidateName){
    var result = grandScore>=70 || hscScore>=80 || sscScore>90 
                 ? `Congrats ${candidateName} you are eligible for TCS interview.`
                 :`Unfortunately ${candidateName} are not eligible for TCS interview.`
    console.log(result);
    
}

interviewCheck(80, 86, 90," Vaishali");
interviewCheck(70, 65, 55, "Rupali");
interviewCheck(60, 79, 88, "Sonali");