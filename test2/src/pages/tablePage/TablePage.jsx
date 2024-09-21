import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/modal/Modal';
import './TablePage.css';

function TablePage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8000/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setMessage('Пользователь успешно создан');
                setShowModal(true);
                fetchUsers();
            } else {
                throw new Error('Failed to create user');
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setMessage('Пользователь удален');
                setShowModal(true);
                fetchUsers();
            } else {
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setMessage('');
    };

    return (
        <div className="container">
            <h1 className="heading">Users</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formGroup">
                    <label className="label">Name:</label>
                    <input className="input" {...register('name', { required: 'Name is required' })} />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div className="formGroup">
                    <label className="label">Email:</label>
                    <input className="input" {...register('email', { required: 'Email is required' })} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div className="formGroup">
                    <label className="label">Username:</label>
                    <input className="input" {...register('username', { required: 'Username is required' })} />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div>
                <button type="submit" className="button">Create User</button>
            </form>

            {users.length > 0 ? (
                <div className="table">
                    <div className="tableHeader">
                        <div className="tableHeaderCell">Name</div>
                        <div className="tableHeaderCell">Email</div>
                        <div className="tableHeaderCell">Username</div>
                        <div className="tableHeaderCell">Actions</div>
                    </div>
                    <div className="tableBody">
                        {users.map(user => (
                            <div key={user.id} className="tableRow">
                                <div className="tableCell">{user.name}</div>
                                <div className="tableCell">{user.email}</div>
                                <div className="tableCell">{user.username}</div>
                                <div className="tableCell">
                                    <button onClick={() => handleDelete(user.id)} className="deleteButton">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Список пуст</p>
            )}

            <Modal message={message} onClose={closeModal} />
        </div>
    );
}

export default TablePage;
