import { Link } from 'react-router-dom'
import { REMOVE_TEAM } from '../../utils/mutations'
import { useMutation } from '@apollo/client'

const TeamList = ({ teams, title}) => {
  const [removeTeam, { error }] = useMutation(REMOVE_TEAM)
  
  const handleRemoveSkill = async (teamId) => {
    try {
      const { data } = await removeTeam({
        variables: { teamId },
      });
      window.location.reload()
    } catch (err) {
      console.error(err);
    }
  };

  if (!teams.length) {
    return <h3>No Teams Yet</h3>
  }

return (
        <div>
          <h2>Your Teams</h2>
          {teams &&
            teams.map((team) => (
              <div key={team._id} className="card teamCardFull ">
                  <div className="card-header text-light p-2 m-1 ">
                    <div className="teamCardHeader">
                        <Link 
                        className="teamName"
                        to={`/teams/${team._id}`}
                        >
                        {team.name}
                        </Link>
                        <button
                        className="btn btn-sm btn-danger ml-auto teamRemove"
                        onClick={() => handleRemoveSkill(team._id)}
                      >
                        X
                      </button>
                    </div>
                    <div>
                      <h5>Coach: {team.coach}</h5>
                      <h5>Season: {team.season}</h5>
                    </div>
                  </div>
              </div>
            ))}
        </div>
      );
    };
export default TeamList