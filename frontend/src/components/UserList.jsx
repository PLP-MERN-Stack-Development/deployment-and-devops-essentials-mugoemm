import React from 'react';

function UserList({ users, isLoading, onDelete }) {
  if (isLoading) {
    return (
      <div className="card">
        <p>Loading team members...</p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="card">
        <p>No users found. Add your first teammate above.</p>
      </div>
    );
  }

  return (
    <ul className="list">
      {users.map((user) => (
        <li key={user._id} className="card list__item">
          <div className="list__content">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <small>Created {new Date(user.createdAt).toLocaleString()}</small>
          </div>
          <button type="button" className="button button--danger" onClick={() => onDelete(user._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;

