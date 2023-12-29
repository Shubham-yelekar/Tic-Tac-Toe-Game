
const App = {

    $: {
        menu : document.querySelector('[data-id="menu"]'),
        menuItems : document.querySelector('[data-id="menu-items"]'),
        resetBtn : document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn : document.querySelector('[data-id="new-round-btn"]'),
        squares : document.querySelectorAll('[data-id="square"]')
    },

    state :{
        currentPlayer : 1
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
                console.log(`Sqaure with id ${event.target.id} was clicked`);
                
                if(square.hasChildNodes()){
                    return
                }

                const currentPlayer = App.state.currentPlayer

                const icon = document.createElement('div');

                if(currentPlayer === 1){
                    icon.classList.add("icon-x");
                }else {
                    icon.classList.add("icon-o");
                }
                
                App.state.currentPlayer = App.state.currentPlayer === 1?2:1;

                square.replaceChildren(icon)
            })
        })      
    }
}

window,addEventListener("load", App.init);