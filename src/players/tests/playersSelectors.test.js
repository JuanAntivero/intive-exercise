import {playersFilteredValuesSelector, playersPositionsSelector} from '../playersSelectors';
import moment from 'moment';


const allPlayers = [
    {
        "contractUntil" : "2019-06-30",
        "dateOfBirth" : "1990-11-07",
        "jerseyNumber" : 1,
        "name" : "David de Gea",
        "nationality" : "Spain",
        "position" : "Keeper"
    },
    {
        "contractUntil" : "2020-06-30",
        "dateOfBirth" : "1994-04-12",
        "jerseyNumber" : 3,
        "name" : "Eric Bailly",
        "nationality" : "Cote d'Ivoire",
        "position" : "Centre-Back"
    },
    {
        "contractUntil" : "2021-06-30",
        "dateOfBirth" : "1987-02-22",
        "jerseyNumber" : 20,
        "name" : "Sergio Romero",
        "nationality" : "Argentina",
        "position" : "Keeper"
    }
];

const onlyPlayersCalledDavid = [
    {
        "age" : moment().diff("1990-11-07",'years'),
        "name" : "David de Gea",
        "nationality" : "Spain",
        "position" : "Goal Keeper"
    }
];

const onlyPlayersBornedAt1987 = [
    {
        "age" : moment().diff("1987-02-22",'years'),
        "name" : "Sergio Romero",
        "nationality" : "Argentina",
        "position" : "Goal Keeper"
    }
];

const onlyDefenders = [
    {
        "age" : moment().diff("1994-04-12",'years'),
        "name" : "Eric Bailly",
        "nationality" : "Cote d'Ivoire",
        "position" : "Defender"
    }
];

const allPlayersFormated = [
    {
        "age" : moment().diff("1990-11-07",'years'),
        "name" : "David de Gea",
        "nationality" : "Spain",
        "position" : "Goal Keeper"
    },
    {
        "age" : moment().diff("1994-04-12",'years'),
        "name" : "Eric Bailly",
        "nationality" : "Cote d'Ivoire",
        "position" : "Defender"
    },
    {
        "age" : moment().diff("1987-02-22",'years'),
        "name" : "Sergio Romero",
        "nationality" : "Argentina",
        "position" : "Goal Keeper"
    }
];

let positions = ['Goal Keeper','Defender'];

describe('Players Selectors', () => {
    describe('Players Filtered Values Selector', () => {
        it('should return full state with format when no filters provided', () => {
        
        let mockState = {
            players: {
                players: allPlayers,
                nameFilter:"",
                positionFilter:"",
                ageFilter:"",
            },
        };
        
        expect(playersFilteredValuesSelector(mockState)).toEqual(allPlayersFormated);
        });

        it('should return players filtered by name', () => {
        
            let mockState = {
                players: {
                    players: allPlayers,
                    nameFilter:"David",
                    positionFilter:"",
                    ageFilter:"",
                },
            };
            
            expect(playersFilteredValuesSelector(mockState)).toEqual(onlyPlayersCalledDavid);
        });

        it('should return players filtered by position', () => {
        
            let mockState = {
                players: {
                    players: allPlayers,
                    nameFilter:"",
                    positionFilter:"Defender",
                    ageFilter:"",
                },
            };
            
            expect(playersFilteredValuesSelector(mockState)).toEqual(onlyDefenders);
        });

        it('should return players filtered by age', () => {
        
            let mockState = {
                players: {
                    players: allPlayers,
                    nameFilter:"",
                    positionFilter:"",
                    ageFilter:moment().diff("1987-02-22",'years'),
                },
            };
            
            expect(playersFilteredValuesSelector(mockState)).toEqual(onlyPlayersBornedAt1987);
        });
    });

    describe('Players Positions Selector', ()=>{
        it('should return existing positions without repetitions', ()=>{

            let mockState = {
                players: {
                    players: allPlayers
                },
            };
        
            expect(playersPositionsSelector(mockState)).toEqual(positions);

        });
    });
});