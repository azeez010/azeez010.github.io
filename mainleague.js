var league = ["a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
//fixture

var teams = {
    "a": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 9,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "b": {"played": 0,
    "points": 0,
    "goals": 0,
        "skills": 4,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "c": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 6,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "d": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 5,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "e": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 3,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "f": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 7,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "g": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 11,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "h": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 4,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "i": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 5,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "j": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 12,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "k": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 8,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "l": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 2,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "m": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 6,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "n": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 8,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },"o": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 6,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "p": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 8,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },"q": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 5,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "r": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 13,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "s": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 8,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
    "t": {
        "played": 0,
        "points": 0,
        "goals": 0,
        "skills": 11,
        "won": 0,
        "loss": 0,
        "draw": 0,
    },
}


var first_leg = []
var second_leg = []
var temp_leg = []

function making_fixtures(){
    for(let j = 0;  j < (league.length - 1); j++){
        for(let i = 0;  i < (league.length/2); i++){
            temp_leg.push(league[i])
            temp_leg.push(league[league.length - 1 - i])
            first_leg.push([league[i], league[league.length - 1 - i]])
            second_leg.push([league[league.length - 1 - i], league[i]])
        }
        
        league = temp_leg.splice(0, temp_leg.length)
       // c.push(a)
    }
    // }
}
// Helps to sort the fixtures
var sort_fixtures;
var week_no = 1
var first_leg_bool = false
var week_match = []

making_fixtures()

function fixtures(){
    if(week_no < 19 && first_leg_bool == true){
        console.log("First season")
        // week_match = first_leg[w]
        week_match = []
        for(let i = 0; i < 10; i++){
            // alert((10 * week_no) + i)
            week_match.push(first_leg[(10 * week_no) + i])
           }
    }
    else if(week_no >= 18 && first_leg_bool == false){
        week_no = 0
        first_leg_bool = true
        newSeason()
    }
    else{
        if(week_no >= 18 && first_leg_bool == true){
            console.log("second season")
            week_no = 0
            first_leg_bool = false
        }
            week_match = []
            for(let i = 0; i < 10; i++){
                week_match.push(second_leg[(10 * week_no) + i])
               }
        }
    week_no++
}

//console.log(week_match)

var result = []

//var matchday = {}

var team1 = 0;
var team2 = 0;
var goal = [team1, team2]
k = 0

let odds_array = []

function odds_making_algo(){
    fixtures()
    odds_array = []
    //Matches()
    for(let i = 0; i < week_match.length; i++){
        let home_name = week_match[i][0] 
        let away_name = week_match[i][1]
        let match_name = `${home_name} VS ${away_name}` 
        let home_chance = teams[week_match[i][0]]["skills"] 
        let away_chance = teams[week_match[i][1]]["skills"]
        let stronger_team = Math.max(home_chance, away_chance)
        let weeker_team = Math.min(home_chance, away_chance)
        // alert("Home: " + home_chance + " away: " + away_chance)
        // alert(weeker_team)
        // alert(stronger_team)
        let home_odds = [1 + (away_chance / home_chance), "home", `${home_name}, ${away_name}`]
        let away_odds = [1 + (home_chance / away_chance), "away", `${home_name}, ${away_name}`]
        let draw_odds = [1.5 + (stronger_team / weeker_team), "draw", `${home_name}, ${away_name}`]
        let over_one = [(0.9 + (weeker_team / stronger_team)), "ov1", `${home_name}, ${away_name}`]
        let over_two = [(1.5 + (weeker_team / stronger_team)), "ov2", `${home_name}, ${away_name}`]
        odds_array.push([match_name, home_odds,  draw_odds, away_odds, over_one, over_two])
    }
}

// array that hold the process bet
let bet_slips = []

// odds_making_algo()
var oddshtml = document.getElementById("odds")
var gen = document.getElementById("gen")    
var add_bet_slip = document.getElementById("addBet")  

function rendering_odds(){
    odds_making_algo()
    for(let i = 0; i < odds_array.length; i++){
        // var odd_render = document.getElementById("oddRender")
        //below match name is the render match name
        var matchName = document.createElement("td")
        var home_button = document.createElement("td")
        var draw_button = document.createElement("td")
        var away_button = document.createElement("td")
        var ov1_button = document.createElement("td")
        var ov2_button = document.createElement("td")
        // var tb7= document.createElement("td")
        // var tb8 = document.createElement("td")
        var each_row = document.createElement("tr")
        matchName.innerHTML =  odds_array[i][0]
        home_button.innerHTML = odds_array[i][1][0].toFixed(1)
        draw_button.innerHTML = odds_array[i][2][0].toFixed(1)
        away_button.innerHTML = odds_array[i][3][0].toFixed(1)
        ov1_button.innerHTML = odds_array[i][4][0].toFixed(1)
        ov2_button.innerHTML = odds_array[i][5][0].toFixed(1)

        home_button.style.color = "white"
        draw_button.style.color = "white"
        away_button.style.color = "white"
        ov1_button.style.color = "white"
        ov2_button.style.color = "white"

        home_button.style.backgroundColor = "purple"
        draw_button.style.backgroundColor = "purple"
        away_button.style.backgroundColor = "purple"
        ov1_button.style.backgroundColor = "purple"
        ov2_button.style.backgroundColor = "purple"

        home_button.stylepadding = "5px"
        draw_button.stylepadding = "5px"
        away_button.stylepadding = "5px"
        ov1_button.stylepadding = "5px"
        ov2_button.stylepadding = "5px"
        
        home_button.style.cursor = "pointer"
        draw_button.style.cursor = "pointer"
        away_button.style.cursor = "pointer"
        ov1_button.style.cursor = "pointer"
        ov2_button.style.cursor = "pointer"
      
        home_button.setAttribute('bet_type', `${odds_array[i][1][1]}`)
        draw_button.setAttribute('bet_type', `${odds_array[i][2][1]}`)
        away_button.setAttribute('bet_type', `${odds_array[i][3][1]}`)
        ov1_button.setAttribute('bet_type', `${odds_array[i][4][1]}`)
        ov2_button.setAttribute('bet_type', `${odds_array[i][5][1]}`)

        
        home_button.setAttribute('teams', `${odds_array[i][1][2]}`)
        draw_button.setAttribute('teams', `${odds_array[i][2][2]}`)
        away_button.setAttribute('teams', `${odds_array[i][3][2]}`)
        ov1_button.setAttribute('teams', `${odds_array[i][4][2]}`)
        ov2_button.setAttribute('teams', `${odds_array[i][5][2]}`)

		home_button.setAttribute('class', "each_odd")
        draw_button.setAttribute('class', "each_odd")
        away_button.setAttribute('class', "each_odd")
        ov1_button.setAttribute('class', "each_odd")
        ov2_button.setAttribute('class', "each_odd")
       
        each_row.append(matchName)
        each_row.append(home_button)
        each_row.append(draw_button)
        each_row.append(away_button)
        each_row.append(ov1_button)
        each_row.append(ov2_button)
        oddshtml.append(each_row)
        bet_slip()        
    }
}
//show if a button had already being clicked

let already_clicked = new Array(50) 
already_clicked.fill(false)
let each_odd = document.getElementsByClassName("each_odd")
let total_odds_no = 1
function bet_slip(){
    for(let i = 0; i < each_odd.length; i++){
        each_odd[i].onclick = () =>{
            let bet_id = new Date().getTime()
            bet_slips.push([each_odd[i].innerHTML, each_odd[i].getAttribute("bet_type"), each_odd[i].getAttribute("teams"), `Bet ID: ${bet_id}`, Math.floor(i / 5), i ])
            while(add_bet_slip.firstChild){
                add_bet_slip.removeChild(add_bet_slip.lastChild)
            
            }

            if(already_clicked[i] == true){
                already_clicked[i] = false
                each_odd[i].style.backgroundColor = "purple"
                bet_slips = bet_slips.filter(bet_item => bet_item[5] != i )
            }

            else if(already_clicked[i] == false){
                already_clicked[i] = true
                each_odd[i].style.backgroundColor = "red"
            }
           
            bet_slips.map((item, index) => {
            let match_title = document.createElement("p")
            let match_odds = document.createElement("span")
            let match_bet = document.createElement("p")
            let match_bet_id = document.createElement("p")
            let remove_button = document.createElement("span")
            let each_container = document.createElement("div")
            let total_odds = document.createElement("p") 
        // stylying of generated elements
            match_title.style.fontWeight = "800"
            remove_button.innerHTML = "&#10008"
            remove_button.style.cursor = "pointer"
            remove_button.style.color = "white"
            remove_button.style.float = "right"
           //if(add_bet_slip.firstChild) 
           
           
           remove_button.style.backgroundColor = "red"
           // alert(item[0])
           
           total_odds_no *= item[0]
           
           remove_button.style.padding = "2px 5px"
            remove_button.style.borderRadius = "50%"
            //state.style.padding = "3px 10px"
            match_title.innerHTML = `${item[2]}`;
            match_bet.innerHTML = item[1];
            match_odds.innerHTML = item[0];
            match_bet_id.innerHTML = `${item[3]}`
            total_odds.innerHTML = `<b>Total odds</b>: ${total_odds_no.toFixed(2)}`

        match_title.append(remove_button)
        match_bet.append(match_odds)
        each_container.append(match_title)
        each_container.append(match_bet)
        each_container.append(match_bet_id)

        // state.append(time)
            add_bet_slip.append(each_container)//`${each_odd[i].innerHTML} <br />`)
            i
            //total odds at the end of the html
            if((bet_slips.length - 1) == index){
                add_bet_slip.append(total_odds)
                total_odds_no = 1
            }
            
            //implementation of the remove button
        remove_button.onclick = function(){
            bet_slips = bet_slips.filter(bet_item => bet_item[3] != match_bet_id.innerHTML )
            
            while(add_bet_slip.firstChild){
                add_bet_slip.removeChild(add_bet_slip.lastChild)
            
            }
            rerender_bestslip()
                }
            })
        }
    }
}

function rerender_bestslip(){
    bet_slips.map((item, index) => {
        let match_title = document.createElement("p")
        let match_odds = document.createElement("span")
        let match_bet = document.createElement("p")
        let match_bet_id = document.createElement("p")
        let remove_button = document.createElement("span")
        let each_container = document.createElement("div")
        let total_odds = document.createElement("p") 
        
        match_title.style.fontWeight = "800"
        remove_button.innerHTML = "&#10008"
        remove_button.style.cursor = "pointer"
        remove_button.style.color = "white"
        remove_button.style.float = "right"
       //if(add_bet_slip.firstChild) 
        
       
        total_odds_no *= item[0]

        remove_button.style.backgroundColor = "red"
   
    remove_button.style.padding = "2px 5px"
    remove_button.style.borderRadius = "50%"
    //state.style.padding = "3px 10px"
    match_title.innerHTML = `${item[2]}`;
    match_bet.innerHTML = item[1];
    match_odds.innerHTML = item[0];
    match_bet_id.innerHTML = `${item[3]}`
    total_odds.innerHTML = `<b>Total odds</b>: ${total_odds_no.toFixed(2)}`

    match_title.append(remove_button)
    match_bet.append(match_odds)
    each_container.append(match_title)
    each_container.append(match_bet)
    each_container.append(match_bet_id)
 
        add_bet_slip.append(each_container)//`${each_odd[i].innerHTML} <br />`)
        
        if((bet_slips.length - 1) == index){
            add_bet_slip.append(total_odds)
            total_odds_no = 1
        }
        

        remove_button.onclick = function(){
            bet_slips = bet_slips.filter(bet_item => bet_item[3] != match_bet_id.innerHTML )
            
            while(add_bet_slip.firstChild){
                add_bet_slip.removeChild(add_bet_slip.lastChild)
            }

            rerender_bestslip()

        }
    })
}

let bet_button = document.getElementById("betButton")
let clear_button = document.getElementById("buttonClear")
let bet_list_stake = []
let all_bet_list = []

let accbal = document.getElementById("accbal")
let acc_balance = 50000
accbal.innerHTML = `N${acc_balance.toLocaleString()}`

function take_stake(){
    let stake = document.getElementById("stake")
    //subtracting stakes from account balance
    validate_bet()
    pending_list()
    //clearin the pending list before appending the new list    
    while(pendingBet.firstChild){
        pendingBet.removeChild(pendingBet.lastChild)
    }
}

let displayError = document.getElementById('errors')
//checking or validating acc balance
function validate_bet(){
    if(stake.value == "" ||stake.value == null ){
		displayError.style.display = "block";
		displayError.innerHTML = "Stake something" 
        setTimeout(()=> displayError.style.display = "none", 2000)
        return
    }
    else if(bet_slips.length <= 0){
        displayError.style.display = "block";
		displayError.innerHTML = "No bet selected";
        setTimeout(()=> displayError.style.display = "none", 2000)
        return
    }
    else if(stake.value < 100){
        displayError.style.display = "block";
		displayError.innerHTML = "The minimum stake is 100 Naira";
        setTimeout(()=> displayError.style.display = "none", 2000)
        return
	}
		else if(stake.value > 200000){
		displayError.style.display = "block";
		displayError.innerHTML =  "the maximum stake is 200000 Naira"
        setTimeout(()=> displayError.style.display = "none", 2000)
        return
	}
	
	
	else if(acc_balance <= 0){
        displayError.style.display = "block";
		displayError.innerHTML =  "insufficient funds"
        setTimeout(()=> displayError.style.display = "none", 2000)
        return
	}
	else if(stake.value > acc_balance){
        displayError.style.display = "block";
		displayError.innerHTML =  "insufficient funds"
        setTimeout(()=> displayError.style.display = "none", 2000)
        return
	}
    
	else{
        acc_balance -= stake.value
        //display account balance as it is being subtracted
        accbal.innerHTML = `N${acc_balance.toLocaleString()}`
        bet_slips.push(stake.value)
        bet_slips.push("pending")
        bet_list_stake.push(bet_slips)//[stake.value] = bet_slips
        while(add_bet_slip.firstChild){
            add_bet_slip.removeChild(add_bet_slip.lastChild)
        }
        //Default all color back to purple
        already_clicked.fill(false)
        already_clicked.map((item, i)=>{
            if(item == false){
                each_odd[i].style.backgroundColor ="purple"
            }
        })
        stake.value = ""
        pending_list()
        // all_bet_list.push(bet_list_stake)
        bet_slips = []
	}
}

let fulfilled_bet = [];

function process_result(){
    let bet_processing = bet_list_stake
    if(bet_processing.length <= 0) return
        for(let i = 0; i < bet_processing.length; i++){
                for(let j = 0; j < (bet_processing[i].length - 2); j++){
                        try{           
                            check_each_slip(bet_processing[i][j][1], result[(bet_processing[i][j][4] * 2) + 1], bet_processing[i][j][0])
                            bet_processing[i][j][5] = {"home": result[(bet_processing[i][j][4] * 2) + 1][0], "away": result[(bet_processing[i][j][4] * 2) + 1][1]}
                            
                            if(j == (bet_processing[i].length - 3)){
                                    let bet_stakes = bet_processing[i][j + 1] * final_odds
                                    bet_processing[i][j + 2] = {"won": bet_stakes}
                                    acc_balance +=  bet_stakes
                                    //display result
                                    accbal.innerHTML = `N${acc_balance.toLocaleString()}`
                                    final_odds = 1
                            }
                        }
                        catch(e){
                            console.log(e)
                        }
                    }
                }
                //checking to see if bet list is not empty
                if(bet_list_stake.length != 0){
                    //send it to the fulfilled array to make sure it wn't be processed again
                    if(typeof(fulfilled_bet) == "object"){
                        // fulfilled_bet.push(bet_list_stake.splice(0, bet_list_stake.length))
                            fulfilled_bet = bet_list_stake.splice(0, bet_list_stake.length)
                    }
                    else{
                        fulfilled_bet = [...fulfilled_bet, bet_list_stake.splice(0, bet_list_stake.length)]
                    }
                }
}
            
var final_odds = 1
function check_each_slip(bet_type, result, odds){
    switch(bet_type){
        case "home":
            if(result[0] > result[1]){
                final_odds *= odds
            }
            else{
                final_odds = 0
            }
            break;
        case "away":
            if(result[0] < result[1]){
                final_odds *= odds
            }
            else{
                final_odds = 0
            }
            break;
        case "draw":
            if(result[0] == result[1]){
                final_odds *= odds
            }
            else{
                final_odds = 0
            }
            break;
        case "ov1":
            if((result[0] + result[1]) > 1){
                final_odds *= odds
            }
            else{
                final_odds = 0
            }
            break;
        case "ov2":
            if((result[0] + result[1]) > 2){
                final_odds *= odds
            }
            else{
                final_odds = 0
            }
            break;

    }
}


bet_button.onclick = function(){
    take_stake()
}

// Game time interval
let showtime = document.getElementById("time")
var countdown = setInterval(game_interval, 200);
let game_time = 240

function game_interval(){
    game_time -= 1
    showtime.innerHTML = `${Math.floor((game_time / 60) % 60)} : ${game_time % 60}`
    if(game_time <= 0){
        match()
            if(bet_slips.length > 0){
                bet_slips = []
                already_clicked.fill(false)
            already_clicked.map((item, i)=>{
                if(item == false){
                    each_odd[i].style.backgroundColor ="purple"
                }
            })
            while(add_bet_slip.firstChild){
                add_bet_slip.removeChild(add_bet_slip.lastChild)
            }
        }
        process_result()
        // fixtures()

        while(pendingBet.firstChild){
            pendingBet.removeChild(pendingBet.lastChild)
        }
        // pending_list()
        
        while(fulfillBet.firstChild){
            fulfillBet.removeChild(fulfillBet.lastChild)
        }
        fulfilled_list()

        while(generateTable.firstChild){
            if(generateTable.children.length == 1){
                break;
            }
                
            generateTable.removeChild(generateTable.lastChild)
        }
        render()
        
        while(odds.firstChild){
            if(odds.children.length === 1){
                break;
            }
            odds.removeChild(odds.lastChild)
        }
        rendering_odds()
        game_time = 240
    }
}




function match(){
for(let i = 0; i < week_match.length; i++){
    teama = week_match[i][0]
    teamb = week_match[i][1]
    team1 = 0;
    team2 = 0;
    goal = [team1, team2]
    while(k < 6){
        var opportunity = Math.floor(Math.random() * 2);
        var players = week_match[i][opportunity]
        // console.log(players)
        // console.log(opportunity)
        var score = Math.floor(Math.random() * 18);
                if(teams[players]["skills"] >= score){
                    goal[opportunity]++
                }
                k++
}
result.push([week_match[i][0], week_match[i][1]], goal)
teams[week_match[i][0]]["played"]++
teams[week_match[i][1]]["played"]++
teams[week_match[i][0]]["goals"] += goal[0] 
teams[week_match[i][1]]["goals"] += goal[1]
if(goal[0] === goal[1]){
        teams[week_match[i][0]]["draw"]++
        teams[week_match[i][1]]["draw"]++
        teams[week_match[i][0]]["points"] += 1 
        teams[week_match[i][1]]["points"] += 1 
    }
    else if(goal[0] > goal[1]){
        teams[week_match[i][0]]["won"]++
        teams[week_match[i][0]]["points"] += 3 
        teams[week_match[i][1]]["loss"]++
    }
    else{
        teams[week_match[i][1]]["won"]++
        teams[week_match[i][0]]["loss"]++
        teams[week_match[i][1]]["points"] += 3 
    }
   
    k = 0
}
week_match.splice(0, week_match.length)
ranking()

}

var ranks = []

function ranking(){
ranks.splice(0, ranks.length)    
for( let i in teams){
    teams[i]["team"] = i
    ranks.push(teams[i])
}
ranks.sort((a, b) => a["points"] - b["points"]).reverse()
}

var generateTable = document.getElementById("gen")
function render(){      
  for(let i = 0; i < ranks.length; i++){
      var gen = document.getElementById("gen")
      var tb1 = document.createElement("td")
      var tb2 = document.createElement("td")
      var tb3 = document.createElement("td")
      var tb4 = document.createElement("td")
      var tb5 = document.createElement("td")
      var tb6 = document.createElement("td")
      var tb7= document.createElement("td")
      var tb8 = document.createElement("td")
      var row1 = document.createElement("tr")
      tb1.innerHTML = ranks[i]["played"]
      tb2.innerHTML =  ranks[i]["points"]
      tb3.innerHTML = ranks[i]["goals"]
      tb4.innerHTML = ranks[i]["won"]
      tb5.innerHTML = ranks[i]["loss"]
      tb6.innerHTML = ranks[i]["draw"]
      tb7.innerHTML = ranks[i]["team"]
      tb8.innerHTML = ranks[i]["skills"]
      row1.append(tb1)
      row1.append(tb2)
      row1.append(tb3)
      row1.append(tb4)
      row1.append(tb5)
      row1.append(tb6)
      row1.append(tb7)
      row1.append(tb8)
      generateTable.append(row1)
  }
}

render()
rendering_odds()

//pending bet HTML
var pendingBet = document.getElementById("pendingBet")

function pending_list(){
            bet_list_stake.map(item => {
                for(let i = 0; (i < item.length - 2); i++){
                    let match_title = document.createElement("p")
                    let match_odds = document.createElement("span")
                    let match_bet = document.createElement("p")
                    let match_status = document.createElement("p")
                    let match_bet_id = document.createElement("p")
                    let each_container = document.createElement("div")
                    let ticket = document.createElement("p")
                    let stake = document.createElement("p") 
                // stylying of generated elements
                
                    ticket.innerHTML = "Ticket "  + i
                    match_title.style.fontWeight = "800"
                    match_title.innerHTML = `${item[i][2]}`;
                    match_bet.innerHTML = item[i][1];
                    match_odds.innerHTML = item[i][0];
                    match_bet_id.innerHTML = `${item[i][3]}`
                    match_status.innerHTML = "pending"
                    
                    match_bet.append(match_odds)
                    each_container.append(ticket)
                    each_container.append(match_title)
                    each_container.append(match_bet)
                    each_container.append(match_status)
                    each_container.append(match_bet_id)
                    if(i == (item.length - 3)){
                        stake.innerHTML = `<b>stake: ${item[i+1]}</b>`
                        each_container.append(stake)
                    }
                    pendingBet.append(each_container)
                }
            })
}

var fulfillBet = document.getElementById("fulfillBet")

function fulfilled_list(){
    let bet_processing = fulfilled_bet
    console.log(bet_processing)
    for(let i = 0; i < bet_processing.length; i++){        
        for(let j = 0; j < (bet_processing[i].length - 2); j++){
            // console.log(bet_processing[i][j])
                        try{           
                            let match_title = document.createElement("p")
                            let match_odds = document.createElement("span")
                            let match_bet = document.createElement("p")
                            let match_status = document.createElement("p")
                            let match_bet_id = document.createElement("p")
                            let each_container = document.createElement("div")
                            let stake_and_won = document.createElement("p") 
                        // stylying of generated elements
                            match_title.style.fontWeight = "800"
                            match_title.innerHTML = bet_processing[i][j][2];
                            match_bet.innerHTML = bet_processing[i][j][1];
                            match_odds.innerHTML = bet_processing[i][j][0];
                            match_bet_id.innerHTML = `${bet_processing[i][j][3]}`
                            match_status.innerHTML = `Scores: ${bet_processing[i][j][5].home} -  ${bet_processing[i][j][5].away}`
                            
                            match_bet.append(match_odds)
                            each_container.append(match_title)
                            each_container.append(match_bet)
                            each_container.append(match_status)
                            each_container.append(match_bet_id)

                // state.append(time)
                                if(j == (bet_processing[i].length - 3)){
                               stake_and_won.innerHTML =`stake: ${bet_processing[i][j + 1]} Prize: ${bet_processing[i][j + 2].won.toFixed(2)} status: ${bet_processing[i][j + 2].won == 0 ? "Lost": "Won"}`
                                    each_container.append(stake_and_won)
                            }
                            fulfillBet.append(each_container)
                        }
                        catch(e){
                            console.log(e)
                        }
                    }
                }
    
            
}

function newSeason(){
    // alert("happy new season!")
    for(let i = 0; i < league.length; i++){
        let improve_chance = Math.floor(Math.random() * 5)
        if(improve_chance == 0){
            teams[league[i]]["skills"]++
        }
    }

    for(let i = 0; i < league.length; i++){
            teams[league[i]]["draw"] = 0
            teams[league[i]]["played"] = 0
            teams[league[i]]["loss"] = 0
            teams[league[i]]["won"] = 0
            teams[league[i]]["points"] = 0 
        }
        while(generateTable.firstChild){
            if(generateTable.children.length == 1){
                break;
            }
            generateTable.removeChild(generateTable.lastChild)
        }
        render()
     
    //  


    result = []
    ranks = []
    first_leg = []
    second_leg = []
    making_fixtures()
    fixtures()
}

//fulfilled_list()