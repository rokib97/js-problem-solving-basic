//  for loop
 
 var isUnderstood = true;

 var tasks = ["Unlock at 8pm", "Watch Video and practice", "Take Notes", "practice whole module yourself"];

if (isUnderstood == false){
    console.log("Join Support Session");
}
else{
    for (var i = 0; i < tasks.length; i++ ){
        var task = tasks[i];
        console.log(task);
    }
}


// while loop
var tasks = ["Unlock at 8pm", "Watch Video and practice", "Take Notes", "practice whole module yourself"];
var isUnderstood = false;
var i = 0;
if(isUnderstood == false){
    console.log("Join Support Session");
}
else{
    while(i < tasks.length){
        console.log(tasks[i]);
        i++;
        
    }
}