import React, { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
};

function UserForm({ onSubmit }) {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldError, setFieldError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFieldError(null);

    if (!formState.username || formState.username.length < 3) {
      setFieldError('Username must be at least 3 characters long');
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setFieldError('Please provide a valid email address');
      setIsSubmitting(false);
      return;
    }

    if (!formState.password || formState.password.length < 8) {
      setFieldError('Password must be at least 8 characters long');
      setIsSubmitting(false);
      return;
    }

    const success = await onSubmit({
      username: formState.username,
      email: formState.email,
      password: formState.password,
    });

    if (success) {
      setFormState(initialState);
    }

    setIsSubmitting(false);
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add a new user</h2>
      <p>Create an account in the MongoDB Atlas-backed API.</p>
      <label className="form__field">
        <span>Username</span>
        <input type="text" name="username" value={formState.username} onChange={handleChange} placeholder="janedoe" autoComplete="username" />
      </label>
      <label className="form__field">
        <span>Email</span>
        <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="jane@example.com" autoComplete="email" />
      </label>
      <label className="form__field">
        <span>Password</span>
        <input type="password" name="password" value={formState.password} onChange={handleChange} placeholder="Secure passphrase" autoComplete="new-password" />
      </label>
      {fieldError && <div className="alert alert--warning">{fieldError}</div>}
      <button type="submit" className="button" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create user'}
      </button>
    </form>
  );
}

export default UserForm;

