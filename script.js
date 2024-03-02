let b = document.getElementById('container');
b.addEventListener('click', () => {
    let a = document.getElementById('inputdate');
    let b = a.value
    let sep = b.split("-");
     console.log(sep);
    let py = parseInt(sep[0])
    let pm = parseInt(sep[1])
    let pd = parseInt(sep[2])
    let date = new Date();
    let cy = date.getFullYear();
    let cm = date.getMonth() + 1;
    let cd = date.getDate();
   
    let year;
    if (cy >= py) {
        year = cy - py;
    }
    let month;
    if (cm > pm) {
        month = cm - pm;
    }
    else {
        year--;
        month = 12 + cm - pm;
    }
    //   console.log(month);
    //   console.log(year);

    let dates;
    if (cd > pd) {
        dates = cd - pd;
    }
    else {
        month--;
        let noofdates = daysinmonth(pm, py);
        dates = noofdates + cd - pd;
    }
    if (month < 0) {
        month = 11;
        year--;
    }
    // console.log(dates);
    // console.log(month);
    // console.log(year);
  

    let yeardisplay=document.getElementById('ouet-1');
    if(year<0){
        
        yeardisplay.innerText="0";
    }
    else{
    yeardisplay.innerText=year;
    }
    let monthDisplay=document.getElementById('ouet-2')
    monthDisplay.innerText=month;
    let dateDisplay=document.getElementById('ouet-3')
    dateDisplay.innerText=dates;
    

})
function daysinmonth(month, year) {
    return new Date(year, month, 0).getDate();
}
// console.log(dates);
// console.log(month);
//   console.log(year);