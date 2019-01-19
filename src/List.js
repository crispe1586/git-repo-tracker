import React from 'react';

const List = ({ username, repos }) => (
  <div className="List">
    <div>username: {username }</div>
    {repos.map((repo) => <div key={ repo.id }>{ repo.name }</div> )}
  </div>
);

export default List;
