import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_SINGLE_PLAYER } from '../../utils/queries'

const SinglePlayer = () => {
    const { playerId } = useParams()
    const { loading, data } = useQuery(
      QUERY_SINGLE_PLAYER,
      {
        variables: { playerId: playerId },
      }
    );

    const player = data?.player || {}

    console.log(player.image)

    const average = (x, y) => {
        let ppg = x/y
        return Math.round(ppg * 100)/100
    }

    if (loading) {
        return <div>Loading...</div>;
      }
      return (
        <div>
          <div className="Headercontainer">
                <h1 className="singlePlayerHeader">Compare Yourself to an NBA Star</h1> 
          </div>
          <div className="flexContainers">
            <div class="containerPlayer">
              <div class="playerContainer">
                <img src={`${player.image}`} />
                <div>
                  <h2 className="singlePlayerName singlePlayer">{player.name}</h2>
                  <div className="playerInfo">Age: {player.age}</div>
                  <div className="playerInfo">Height: {player.height} inches; Weight: {player.weight} lbs </div>
                  <div className="playerInfo">Position: {player.position}</div>
                  <div className="playerInfo">2021 Points Per Game: {average(player.points, player.games)}</div>
                  <div className="playerInfo">2021 Assists Per Game: {average(player.assists, player.games)}</div>
                  <div className="playerInfo">2021 Rebounds Per Game: {average(player.rebounds, player.games)}</div>
                </div>
                </div>
              </div>
            <div class="containerNBA">
              <div class="playerContainer">
                <img className="lebronImg" src='https://pyxis.nymag.com/v1/imgs/847/0f7/504c63a03d8a751a5cbeda0bc064306bb4-lebron-james.rsquare.w1200.jpg' />
                <div >
                  <h2 className="singlePlayerName lebron">Lebron James</h2>
                  <div className="playerInfo">Age: 36</div>
                  <div className="playerInfo">Height: 81 inches; Weight: 250 lbs</div>
                  <div className="playerInfo">Position: Small Forward</div>
                  <div className="playerInfo">2021 Points Per Game: 25</div>
                  <div className="playerInfo">2021 Assists Per Game: 7.8</div>
                  <div className="playerInfo">2021 Rebounds Per Game: 7.7</div>
                </div>
              </div>
            </div>
          </div>
          </div>
      ); 
}
export default SinglePlayer