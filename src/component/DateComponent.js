function DateComponent (){
    const myDate = new Date()
    const today = myDate.getDate()// calendar day
    const weekday = myDate.getDay() // week day
    const year = myDate.getFullYear() //full year
    const month = myDate.getMonth() // month
    
    return (
     <div>
         Today is day : {today} 
       <br/>
       Weekday:{weekday}
       <br/>
       Year : {year}
       <br/>
       Month: {month}
       <br/>
       {`${month}/${today}/${year}`}
     </div>
    )
}
export default DateComponent