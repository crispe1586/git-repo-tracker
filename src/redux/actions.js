export function updateUsername (username) {
  return {
    type: 'UPDATE_USERNAME',
    payload: username
  }
}

export function fetchRepos (repos) {
  return {
    type: 'FETCH_REPOS',
    payload: repos
  }
}
