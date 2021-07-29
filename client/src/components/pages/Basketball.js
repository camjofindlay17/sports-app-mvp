import {useQuery} from '@apollo/client'
import TeamList from './TeamList'
import { QUERY_TEAMS } from '../../utils/queries'
import SideNav from './SideNav'
import TopNav from './topNav'

export default function Basketball() {
    const { loading, data } = useQuery(QUERY_TEAMS)
    const teams = data?.teams || []

    console.log(teams)
    console.log(teams.id)

    return (
      <div>
      <section>
        <TopNav/>
      </section>
      <div className="flex-comps">
        <div>
          <SideNav/>
        </div>
          <div className="teamCard">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <TeamList 
                        teams={teams}
                    />
                )}
                </div>
            </div>
        </div>
    );
}