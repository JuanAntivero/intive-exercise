import { connect } from "react-redux";
import { filterPlayers, fetchPlayers } from "./playersActions";
import {allPlayersInfoSelector, playersFilteredValuesSelector, playersPositionsSelector} from "./playersSelectors";
import PlayersPage from "./PlayersPage";

const mapStateToProps = state => ({
    players: playersFilteredValuesSelector(state),
    loading: allPlayersInfoSelector(state).loading,
    error: allPlayersInfoSelector(state).error,
    playersPositions: playersPositionsSelector(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchPlayers : () => dispatch(fetchPlayers()),
    filterPlayers : (name, position, age) => dispatch(filterPlayers(name, position, age))
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(PlayersPage);