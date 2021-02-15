
class Machine extends React.Component {
    

    render(){
        let icons = this.props.icons;
        let random = [];
        let slot = []; 
        let winner = Boolean 
        
        for (let i = 0; i < 3; i++){
            random[i] = Math.floor(Math.random() * (icons.length));
            slot [i] = icons[random[i]];
        }

        if (slot[0] === slot[1] && slot[1] === slot[2]){
            winner = true;  
        }else{
            winner = false
        }

        return (
            <div className = "flex">
                <h1>{slot[1]}</h1>
                <h1>{slot[2]}</h1>
                <h1>{slot[0]}</h1>
                <p> You { winner ? 'win' : 'loose'} </p>
            </div>
        );
    }
}