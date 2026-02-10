
        let score = JSON.parse(localStorage.getItem('score')) ||
        {
            wins: 0,
            loss: 0,
            tie: 0
        };
        pro()

        let isautoplaying = false;
        let intervalid;



        function autopay() {
            if (!isautoplaying) {
                intervalid = setInterval( ()=> {
                    const playername = pickcomputermove();
                    playgame(playername)
                }, 1000);
                isautoplaying = true;
            }
            else {
                clearInterval(intervalid);
                isautoplaying = false;

            }
        }
        document.querySelector('.mou').addEventListener('click',()=>{
            playgame('rock')
        })
        document.querySelector('.nov').addEventListener('click', () => {
            playgame('paper')
            })
        document.querySelector('.sov').addEventListener('click', () => {
            playgame('scissor')
                })

document.body.addEventListener("keydown",(event)=>{
    if(event.key==='r'){
        playgame("rock")
    }else if(event.key === 'p'){
        playgame("paper")
    }else if (event.key === 's') {
        playgame("scissor")
    }
 
});



        function playgame(move) {

            const compuermove = pickcomputermove();
            let result = "";
            if (compuermove === 'rock') {
                if (move === 'rock') {
                    result = ' tie'
                } else if (move === 'paper') {
                    result = 'you win'
                } else if (move === 'scissor') {
                    result = 'you lose'
                }
            }
            else if (compuermove === 'paper') {
                if (move === 'rock') {
                    result = 'you lose'
                } else if (move === 'paper') {
                    result = ' tie'
                } else if (move === 'scissor') {
                    result = 'you win'
                }
            }
            if (compuermove === 'scissor') {
                if (move === 'rock') {
                    result = 'you win'
                } else if (move === 'paper') {
                    result = 'you lose'
                } else if (move === 'scissor') {
                    result = ' tie'
                }
            }
            if (result === 'you win') {
                score.wins += 1;

            } else if (result === 'you lose') {
                score.loss += 1;
            } else if (result === ' tie') {
                score.tie += 1
            }


            localStorage.setItem('score', JSON.stringify(score));
            pro();
            document.querySelector('.jsr').innerHTML = result;
            document.querySelector('.jsm').innerHTML = `you <img src="images/${move}.jpeg" class="r"> -
            <img src="images/${compuermove}.jpeg" class="r"> computer`




        }


        function pro() {
            document.querySelector('.Js').innerHTML = `win=${score.wins} loss=${score.loss} tie=${score.tie}`
        }





        function pickcomputermove() {
            const random = Math.random();

            let compuermove = '';
            if (random >= 0 && random < 1 / 3) {
                compuermove = 'rock'
            }
            else if (random >= 1 / 3 && random < 2 / 3) {
                compuermove = 'paper'
            }
            else if (random >= 2 / 3 && random < 1) {
                compuermove = 'scissor'
            }
            return compuermove;

        }



    