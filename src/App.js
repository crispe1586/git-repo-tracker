import { connect } from 'react-redux';
import './App.scss';
import Container from './Container';
import { updateUsername, fetchRepos } from './redux/actions';

// mapStateToProps
function mapStateToProps(state) {
  const { username, repos } = state;
  return {
    username: username,
    repos: repos
  }
}

// mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return {
    updateUsername: (username) => dispatch(updateUsername(username)),
    fetchRepos: (username) => dispatch(fetchRepos(username))
  }
}

const App = connect(mapStateToProps, mapDispatchToProps) (Container);

export default App;
