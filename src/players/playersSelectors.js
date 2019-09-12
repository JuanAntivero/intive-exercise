import moment from 'moment';
import { createSelector } from 'reselect';

let positionMapper = {
    'Keeper':'Goal Keeper',
    'Centre-Back':'Defender',
    'Left-Back':'Defender',
    'Right-Back':'Defender',
    'Defensive Midfield':'Midfielder',
    'Central Midfield':'Midfielder',
    'Left Midfield':'Midfielder',
    'Attacking Midfield':'Midfielder',
    'Left Wing':'Forward',
    'Centre-Forward':'Forward'

}


export const allPlayersInfoSelector = (state) => {
    return state.players;
}

export const playersListSelector = createSelector(
    allPlayersInfoSelector,
    (players) => players.players
);

export const playersPageValuesSelector = createSelector(
    playersListSelector,
    (players) => players.map((player) => {
        return (
            {
                age:moment().diff(player.dateOfBirth,'years'),
                name:player.name, 
                nationality:player.nationality, 
                position:positionMapper[player.position]
            }
        );
    }) 
);

export const playersPositionsSelector = createSelector(
    playersPageValuesSelector,
    (players) => players.reduce((acc,player) => {
        if (acc.includes(player.position)){
            return acc;
        }else{
            return [...acc,player.position];
        }
    },[])
);