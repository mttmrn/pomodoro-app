$(document).ready(function(){
   
   let count = parseInt($("#num").html());
   let breakTime = parseInt($("#breakNum").html());
   console.log(count);
   console.log(breakTime);
    $("#reset").hide();
$("#start").click(function(){
    var counter = setInterval(timer, 1000);
    count*=60;
    breakTime*=60;
    function timer(){
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
        $("#timeType").show();
        $("#timeType").html("Session Time:");
        count-=1;
        if(count===0){
            clearInterval(counter);
            alert("Times up!");
            var startBreak = setInterval(breakTimer,1000);
            $("#num").hide();
        }

        if (count%60>=10) {
            $("#num").html(Math.floor(count/60) + ":" + count%60);
        }
        else{
            $("#num").html(Math.floor(count/60) + ":" + "0" + count%60); 
        }

  
        function breakTimer(){
        $("#timeType").html("Break Time: ");
        $("#timeType").show();
        $("#breakNum").show();
        breakTime -=1;
        if(breakTime===0){
        clearInterval(startBreak);
        $("#reset").show();
        $("#breakNum, #timeType").hide();
     }
     if (breakTime%60>=10) {
        $("#breakNum").html(Math.floor(breakTime/60) + ":" + breakTime%60);
    }
    else{
        $("#breakNum").html(Math.floor(breakTime/60) + ":" + "0" + breakTime%60); 
    }
    }
    }

});
    
    $("#reset").click(function(){
        count=25;
        breakTime=5;
        $("#num").html(count);
        $("#breakNum").html(breakTime);
        $("#start, #minus5Clock, #minus5Break, #add5Clock, #add5Break, #num, #breakNum, #title1, #title2").show();
        $("#reset").hide();
    });


    $("#minus5Clock").click(function() {
        if(count>5){
        count -= 5;
        $("#num").html(count);
        console.log(count);}
    })

    $("#add5Clock").click(function() {
        count += 5;
        $("#num").html(count);
        console.log(count);
    })

    $("#minus5Break").click(function() {
        if (breakTime > 5) {
        breakTime -= 5;
        $("#breakNum").html(breakTime);
        }
    })

    $("#add5Break").click(function() {
        breakTime += 5;
        $("#breakNum").html(breakTime);
    })

});

