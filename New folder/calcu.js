const agecalculator=()=>{
const today =new Date(); //courrent date
const inputdate=new Date(document.getElementById('input-data').value);
 

// ur input data details
const birthDetails= {
    date: inputdate.getDate(),
    month:inputdate.getMonth()+1,
    year:inputdate.getFullYear(),
};

const currentYear=today.getFullYear();
const courrentMonth=today.getMonth()+1;
const courrentDay=today.getDate();
if(isFutureDate(birthDetails, currentYear, courrentMonth, courrentDay)){
    alert(" not born");
    displayresult("-","-","-");
    return;
}
//function to pass parameter
const{year, month, date}=caculatorage(
    birthDetails,
    currentYear,
    courrentMonth,
    courrentDay
);
displayresult(date,month,year);
};
const isFutureDate=(birthDetails,currentYear,courrentMonth,courrentDay) =>{
    return(
        birthDetails.year>currentYear || (birthDetails.year===currentYear && (birthDetails.month>courrentMonth || (birthDetails.month ===courrentMonth&& birthDetails.Date>courrentDay)))
    );
};
 
const caculatorage =(birthDetails,currentYear, courrentMonth, courrentDay) => {
 let years=currentYear-birthDetails.year;
 let months,dates;
 if(courrentMonth<birthDetails.month){
    years--
    months=12-(birthDetails.month-courrentMonth);
 }else{
    months=courrentMonth-birthDetails.month;
 }
 if(courrentDay<birthDetails.date){
    months--;
    const lastmonth=courrentMonth===1?12:
    courrentMonth-1;
    const dayInLastMonth=getDayInMonth(lastmonth,currentYear);
    dates=dayInLastMonth-(birthDetails.date-courrentDay);

}else{
    dates=courrentDay-birthDetails.date;
}
return{years,months,dates}
};

const getDaysInMonth=(month,year)=>{
    const leapYear=year%4===0 &&(year%100!=0 || year%400===0);
    const getDaysInMonth=[31,leapYear ? 29:28,31,30,31,30,31,31,30,31,30,31];
    return getDaysInMonth[month-1];
};
const displayresult=(bdate,bmonth,byear) =>{
    document.getElementById('year').textContent=byear;
    document.getElementById('month').textContent=bmonth;
    document.getElementById('days').textContent=bdate;
};
 document.getElementById('button-cal').
 addEventListener('click',agecalculator);