function next_turn() {
    alert("Who is going next?");
}

function prev_turn() {
    alert("Who went last time?");
}

function add_combatant() {
    alert("Who is joining the fight?");
}

function add_counter() {
    alert("What counter would you like to start?");
}


function write_name(){
    let welcomeMsg = document.getElementById('name1box');
    let name1 = document.getElementById('name1');
    welcomeMsg.innerHTML = name1.value;
    welcomeMsg = document.getElementById('roll1box');
    let roll1 = document.getElementById('roll1');
    welcomeMsg.innerHTML = roll1.value;
    welcomeMsg = document.getElementById('bonus1box');
    let bonus1 = document.getElementById('bonus1');
    welcomeMsg.innerHTML = bonus1.value;
    welcomeMsg = document.getElementById('total1box');
    let rolltotal = document.getElementById('rolltotal');
    welcomeMsg.innerHTML = rolltotal.value;

    /* This section checks for the added combatant's faction (Ally, Enemy, Neutral)*/
    let faction= document.querySelector('input[name="faction"]:checked').value;
    console.log(faction);
    if (faction === 'Enemy'){
        alert("Enemies Spotted!")
    }
    else if (faction === 'Ally'){
        alert("Reinforcements have arrived!")
    }
    else if (faction === 'Neutral'){
        alert("Watch for bystanders!")
    }
    else {
        alert("Conditions were not met.")
    }
}

function calcSum() {
    let roll1 = document.getElementsByName("roll1")[0].value;
    let bonus1 = document.getElementsByName("bonus1")[0].value;
    document.getElementsByName("rolltotal")[0].value = Number(roll1) + Number(bonus1);
}
function clear1(){
    document.getElementById("name1box").innerHTML = "";
    document.getElementById("total1box").innerHTML = "";
    document.getElementById("roll1box").innerHTML = "";
    document.getElementById("bonus1box").innerHTML = "";
    /*document.getElementById("counters1box").innerHTML = "";*/
}
function clear2(){
    document.getElementById("name2box").innerHTML = "";
    document.getElementById("total2box").innerHTML = "";
    document.getElementById("roll2box").innerHTML = "";
    document.getElementById("bonus2box").innerHTML = "";
    /*document.getElementById("counters2box").innerHTML = "";*/
}
function clear3(){
    document.getElementById("name3box").innerHTML = "";
    document.getElementById("total3box").innerHTML = "";
    document.getElementById("roll3box").innerHTML = "";
    document.getElementById("bonus3box").innerHTML = "";
    /*document.getElementById("counters3box").innerHTML = "";*/
}
function clear4(){
    document.getElementById("name4box").innerHTML = "";
    document.getElementById("total4box").innerHTML = "";
    document.getElementById("roll4box").innerHTML = "";
    document.getElementById("bonus4box").innerHTML = "";
    /*document.getElementById("counters4box").innerHTML = "";*/
}
function clear5(){
    document.getElementById("name5box").innerHTML = "";
    document.getElementById("total5box").innerHTML = "";
    document.getElementById("roll5box").innerHTML = "";
    document.getElementById("bonus5box").innerHTML = "";
    /*document.getElementById("counters5box").innerHTML = "";*/
}
function clear6(){
    document.getElementById("name6box").innerHTML = "";
    document.getElementById("total6box").innerHTML = "";
    document.getElementById("roll6box").innerHTML = "";
    document.getElementById("bonus6box").innerHTML = "";
    /*document.getElementById("counters6box").innerHTML = "";*/
}
function clear7(){
    document.getElementById("name7box").innerHTML = "";
    document.getElementById("total7box").innerHTML = "";
    document.getElementById("roll7box").innerHTML = "";
    document.getElementById("bonus7box").innerHTML = "";
    /*document.getElementById("counters7box").innerHTML = "";*/
}
function clear8(){
    document.getElementById("name8box").innerHTML = "";
    document.getElementById("total8box").innerHTML = "";
    document.getElementById("roll8box").innerHTML = "";
    document.getElementById("bonus8box").innerHTML = "";
    /*document.getElementById("counters8box").innerHTML = "";*/
}
function clear9(){
    document.getElementById("name9box").innerHTML = "";
    document.getElementById("total9box").innerHTML = "";
    document.getElementById("roll9box").innerHTML = "";
    document.getElementById("bonus9box").innerHTML = "";
    /*document.getElementById("counters9box").innerHTML = "";*/
}
function clear10(){
    document.getElementById("name10box").innerHTML = "";
    document.getElementById("total10box").innerHTML = "";
    document.getElementById("roll10box").innerHTML = "";
    document.getElementById("bonus10box").innerHTML = "";
    /*document.getElementById("counters10box").innerHTML = "";*/
}
function clear11(){
    document.getElementById("name11box").innerHTML = "";
    document.getElementById("total11box").innerHTML = "";
    document.getElementById("roll11box").innerHTML = "";
    document.getElementById("bonus11box").innerHTML = "";
    /*document.getElementById("counters11box").innerHTML = "";*/
}
function clear12(){
    document.getElementById("name12box").innerHTML = "";
    document.getElementById("total12box").innerHTML = "";
    document.getElementById("roll12box").innerHTML = "";
    document.getElementById("bonus12box").innerHTML = "";
    /*document.getElementById("counters12box").innerHTML = "";*/
}
