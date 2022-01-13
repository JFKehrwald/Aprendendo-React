function HelloWorld()
{
    return React.createElement('h1', null, 'Hello World')
}
function Hours()
{
    let date = new Date()
    let hours =  date.getHours()
    let minutes = date.getMinutes()
    if(minutes < 10){
    return (<div className="relogio">
          <p>agora são {hours}:0{minutes}</p>
        </div>)}
    else {
        return (<div className="relogio">
        <p>agora são {hours}:{minutes}</p>
      </div>)
      }
    } 

function Container()
{
    return (<div class ="Container"> <HelloWorld /> <Hours/> </div>)
}

ReactDOM.render(
    <Container/>,
    document.getElementById('app')
)