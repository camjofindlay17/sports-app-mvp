const { Team, Player } = require('../models');

const resolvers = {
Query: {
    teams: async () => {
        return await Team.find({}).populate('playersId')
    },

    team: async (parent, { teamId }) => {
        return await Team.findOne({ _id: teamId }).populate('playersId')
    },

    players: async () => {
        return await Player.find({})
    },

    player: async (parent, {playerId}) => {
        return await Player.findOne({ _id: playerId })
    }

},

Mutation: {
    addPlayer: async (parent, {teamId, name, image, position, height, weight, age, number, games, points, assists, rebounds, steals, blocks}) => {
        return Team.findOneAndUpdate(
            {_id: teamId},
            { $addToSet: { playersId:
            name,
            image,
            position,
            height,
            weight,
            age,
            number,
            games,
            points,
            assists,
            rebounds,
            steals,
            blocks,
            teamId
            }
            },
            {
                new: true
            }
        )
      },

    addTeam: async (parent, {name, coach, season}) => {
        return await Team.create({name, coach, season})
    },

    addUser: async (parent, {firstName, lastName, username, password}) => {
        return await User.create({firstName, lastName, username, password})
    },

    removeTeam: async (parent, { teamId }) => {
        return Team.findOneAndDelete({ _id: teamId });
      },

    updatePlayer: async (parent, { playerId, games, points, assists, rebounds, steals, blocks }) => {
        return await Player.findOneAndUpdate(
          { playerId: _id }, 
          { games },
          { points },  
          { assists },
          { rebounds },
          { steals },
          { blocks },
          { new: true }
        );
    }
}
}

module.exports = resolvers