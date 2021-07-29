import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/fontawesome-free-solid'
import TeamForm from './TeamForm'

const topNav = () => {
    return (
      <div class="card-body scoreCard">
          <h1 class="home card-title"><i><FontAwesomeIcon icon={faBasketballBall} /></i>Basketball</h1>
          <TeamForm />
      </div>
    )
}

export default topNav