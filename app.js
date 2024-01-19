
const App = {

    $: {
        menu : document.querySelector('[data-id="menu"]'),
        menuItems : document.querySelector('[data-id="menu-items"]'),
        resetBtn : document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn : document.querySelector('[data-id="new-round-btn"]'),
        squares : document.querySelectorAll('[data-id="square"]')
    },

    state :{
        currentPlayer : 1,
        moves:[]
    },

    init(){

        App.$.menu.addEventListener("click", (e) => {
            App.$.menuItems.classList.toggle("hidden")
        })

        App.$.newRoundBtn.addEventListener("click", (e) => {
            console.log('Add a new round')
        });

        App.$.resetBtn.addEventListener("click", (e) => {
            console.log('Reset the game')
        });

        App.$.squares.forEach((square) =>{
            square.addEventListener('click', (event)=>{

                // to check if the sqaure is populated
                if(square.hasChildNodes()){
                    return
                }

                // checkin the current player
                const currentPlayer = App.state.currentPlayer

                // create the div for icons
                const icon = document.createElement('div');

                // check the icon wrt to the current player
                if(currentPlayer === 1){
                    icon.classList.add("icon-x");
                }else {
                    icon.classList.add("icon-o");
                }


                // update current player
                App.state.currentPlayer = App.state.currentPlayer === 1?2:1;

                // add the icon to respective sqaure
                square.replaceChildren(icon)

                // check for the result of the game
                const winningPatterns = [
                    [1,2,3],
                    [1,5,9],
                    [1,4,7],
                    [2,5,8],
                    [3,5,7],
                    [3,6,9],
                    [4,5,6],
                    [7,8,9],
                ]
            })
        })
    }
}

window.addEventListener("load", App.init);


