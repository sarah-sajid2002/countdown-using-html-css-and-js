

const date_1 = "30 june 2023 10:00 PM";
document.getElementById("date_1").innerText = date_1;
let inputs = document.querySelectorAll("input")

function clock() {
        let new_date =new Date();
        let old_date =new Date(date_1);
        console.log(new_date);
        console.log(old_date);
        let diff = (old_date - new_date)/1000;  //mili sec to sec
        if(diff<0)return;
        // convert seconds into days
        inputs[0].value = (Math.floor(diff/3600/24));
        // convert seconds into hours
        inputs[1].value = (Math.floor(diff/3600)%24);
        // convert seconds into minutes
        inputs[2].value = (Math.floor(diff/60)%60);
        // convert seconds into seconds
        inputs[3].value = (Math.floor(diff)%60);

}
clock();
setInterval(
      ()  =>{
                clock()
        },
        1000
)

