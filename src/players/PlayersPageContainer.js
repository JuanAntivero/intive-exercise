import { connect } from "react-redux";
import { fetchPlayers } from "./playersActions";
import {playersPageValuesSelector, playersPositionsSelector} from "./playersSelectors";
import PlayersPage from "./PlayersPage";

const mapStateToProps = state => ({
    players: playersPageValuesSelector(state),
    loading: state.loading,
    error: state.error,
    playersPositions: playersPositionsSelector(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchPlayers : () => dispatch(fetchPlayers())
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(PlayersPage);