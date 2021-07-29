const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Team {
        _id: ID!
        name: String
        coach: String
        season: String
        playersId: [Player]
    }

    type Player {
        _id: ID!
        name: String
        image: String
        position: String
        height: String
        weight: String
        age: String
        number: String,
        games: String,
        points: String,
        assists: String,
        rebounds: String,
        steals: String,
        blocks: String
        teamId: [Team]
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        username: String!
        password: String!
    }
    
    type Query {
        teams: [Team]
        players: [Player]
        team(teamId: ID!): Team
        player(playerId: ID!): Player
        user(userId: ID!): User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, username: String!, password: String!): User,
        updateTeam(name: String!, coach: String!): Team,
        addPlayer(teamId: ID!, name: String, image: String, position: String, height: String, weight: String, age: String, number: String, games: String, points: String, assists: String, rebounds: String, steals: String, blocks: String): Team,
        updatePlayer(playerId: ID, games: String, points: String, assists: String, rebounds: String, steals: String, blocks: String): Player,
        addTeam(name:String!, coach: String!, season: String!): Team,
        removeTeam(teamId: ID!): Team
    }
`

module.exports = typeDefs