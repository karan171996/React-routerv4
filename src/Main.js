import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import PlayerAPI from './PlayerAPI';

const Main = () => (
  <main>
  <Switch>
   <Route exact path='/' component={Home}/>
   <Route path='/roster' component={Roster}/>
   <Route path='/schedule' component={Schedule}/>
  </Switch>
  </main>
)

const Roster = () => (
  <div>
  <h2>This is Roster Page!</h2>
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
</div>
)

const Player = (props) => {
      const player = PlayerAPI.get(
        parseInt(props.match.params.number,10)
      )
      if(!player){
        return <div>Sorry the player was not Found!</div>
      }
      return(
        <div>
         <h1>{player.name} (#{player.number})</h1>
         <h2>{player.position}</h2>
        </div>
      )
}

const FullRoster = () => (
  <div>
  <ul>
  {
    PlayerAPI.all().map(p => (
      <li key={p.number}>
       <Link to={`/roster/${p.number}`}>{p.name}</Link>
       </li>
    ))
  }
  </ul>
  </div>
)

const Schedule = () => (
  <div>
  <ul>
  <li>6/5 @ Evergreens</li>
  <li>6/8 vs Kickers</li>
  <li>6/14 @ United</li>
  </ul>
  </div>
)

const Home =() => (
  <div>
   <h1>Welcome to Tornadoes Website</h1>
  </div>
)
export default Main;
