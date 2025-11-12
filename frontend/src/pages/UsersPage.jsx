import React, { useEffect, useState, useCallback } from 'react';
import UserList from '../components/UserList.jsx';
import UserForm from '../components/UserForm.jsx';
import { api } from '../services/api.js';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.getUsers();
      setUsers(response);
    } catch (err) {
      setError(err.message || 'Unable to load users');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleCreateUser = async (payload) => {
    try {
      setError(null);
      const newUser = await api.createUser(payload);
      setUsers((prev) => [newUser, ...prev]);
      return true;
    } catch (err) {
      setError(err.message || 'Unable to create user');
      return false;
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      setError(null);
      await api.deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message || 'Unable to delete user');
    }
  };

  return (
    <section className="users-page">
      <div className="users-page__panel">
        <UserForm onSubmit={handleCreateUser} />
      </div>
      <div className="users-page__panel">
        <div className="users-page__header">
          <h2>Team members</h2>
          <button type="button" className="button button--ghost" onClick={fetchUsers} disabled={isLoading}>
            Refresh
          </button>
        </div>
        {error && <div className="alert alert--error">{error}</div>}
        <UserList users={users} isLoading={isLoading} onDelete={handleDeleteUser} />
      </div>
    </section>
  );
}

export default UsersPage;

