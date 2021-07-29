// import xxx from '../../../../server/public/js/index.js'

const sideNav = () => {



    return (
        <nav className="sidebar"id="sidebar">
            <div class="sidebar-header">
                <h2>NBA Stats Leaders</h2>
            </div>
            <ul className="list-unstyled components statlist">
                <ul>
                    <h4>Points</h4>
                    <li><a href="https://www.espn.com/nba/player/_/id/3975/stephen-curry" target="_blank">Stephen Curry</a>: 32 PPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/6580/bradley-beal" target="_blank">Bradley Beal</a>: 31.3 PPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/6606/damian-lillard" target="_blank">Damian Lilliard</a>: 28.8 PPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/3059318/joel-embiid" target="_blank">Joel Embiid</a>: 28.5 PPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/3032977/giannis-antetokounmpo" target="_blank">Giannis Antetokounmpo</a>: 28.1 PPG</li>
                </ul>
                <ul>
                    <h4>Assists</h4>
                    <li><a href="https://www.espn.com/nba/player/_/id/3468/russell-westbrook" target="_blank">Russell Westbrook</a>: 11.7 APG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/3992/james-harden" target="_blank">James Harden</a>: 10.8 APG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/4277905/trae-young" target="_blank">Trae Young</a>: 9.4 APG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/2779/chris-paul" target="_blank">Chris Paul</a>: 8.9 APG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/6589/draymond-green" target="_blank">Draymond Green</a>: 8.9 APG</li>
                </ul>
                <ul>
                    <h4>Rebounds</h4>
                    <li><a href="https://www.espn.com/nba/player/_/id/3102529/clint-capela" target="_blank">Clint Capela</a>: 14.3 RPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/3032976/rudy-gobert" target="_blank">Rudy Gobert</a>: 13.5 RPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/6477/jonas-valanciunas" target="_blank">Jonas Valanciunas</a>: 12.5 RPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/6585/andre-drummond" target="_blank">Andre Drummond</a>: 12.0 RPG</li>
                    <li><a href="https://www.espn.com/nba/player/_/id/3155942/domantas-sabonis" target="_blank">Domantas Sabonis</a>: 12.0 RPG</li>
                </ul>
            </ul>
        </nav>
    )
}

export default sideNav