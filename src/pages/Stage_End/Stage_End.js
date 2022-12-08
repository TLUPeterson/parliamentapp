
function Stage_End(){
    var avgvote = localStorage.getItem('avgvote');
    console.log(avgvote);

    return (
    <div className="App-header">
        <p>End of the game</p>
        <p>The average budget came to: {avgvote}</p>
        <p>Members are indifferent to the creation of an agency</p>
    </div>
    )
}

export default Stage_End;