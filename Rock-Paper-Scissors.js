    
        // converting the JSON string back to object and getting the object from local storage
        let score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            losses : 0,
            ties : 0
        };

        updateScoreElement();

        ///make a function with one parameter for game because otherwise the code will be repeated 
        function playGame(playerMove){

            // make a variable and call the function for choosing computer move
            const computerMove =  pickComputerMove();
            // make variable to store results and initialize it with empty strings
            let result = '';
 
            // save result by comparing computer and player moves
            if (playerMove === 'scissors'){
                if (computerMove === 'rock') {
                    result = 'You lose';
                } else if (computerMove === 'paper') {
                    result = 'You win';
                } else if (computerMove === 'scissors') {
                    result = 'Tie';
                }
            } 
            
            else if (playerMove === 'paper'){
                if (computerMove === 'rock') {
                    result = 'You win';
                } else if (computerMove === 'paper') {
                    result = 'Tie';
                } else if (computerMove === 'scissors') {
                    result = 'You lose';
                }
            } 
            
            else if( playerMove === 'rock'){
                if (computerMove === 'rock') {
                    result = 'Tie';
                } else if (computerMove === 'paper') {
                    result = 'You lose';
                } else if (computerMove === 'scissors') {
                    result = 'You win';
                }
            }

            // according to the results increase the scores...
            if (result === 'You win') {
                score.wins++;
            } else if (result === 'You lose') {
                score.losses++;
            } else if (result === 'Tie') {
                score.ties++;
            }

            
            //localStorage to save the object , we used JSON.stringify because local storage only supports strings
            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();     
            
            document.querySelector('.js-result')
                .innerHTML = result;
            
            
            document.querySelector('.js-moves').innerHTML = `You
            <img src="icons/${playerMove}-emoji.png" class="move-icon">
            <img src="icons/${computerMove}-emoji.png" class="move-icon">
            Computer`;


        }

        function updateScoreElement() {
            document.querySelector('.js-score')
                .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        // function for picking computer move 
        function pickComputerMove() {
            //use random to choose a random number for choosing computer move
            const randomNumber = Math.random();
            //make variable to store computer move and initialize it with empty strings
            let computerMove = '';

            //if number is equal to 0 and less than 1/3 show rock, if is greater than or equal to 1/3 but less than 2/3 show paper, if it is grater than or equal to 2/3 but less than 1 show scissors...
            if ( randomNumber >= 0 && randomNumber < 1/3) {
            computerMove = 'rock';
            } else if ( randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper';
            } else if ( randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissors';
            }
            //we can make computer move a global variable so that it can be access in all code or we can return it in function so that we can use it everywhere easily... returning is preferable
            return computerMove;
        }
        
