import { useForm } from "react-hook-form";
import { useState } from "react";

function UserForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [users, setUsers] = useState([]);

    // Функция добавления пользователя
    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset(); // Очистить поля формы после добавления
    };

    // Функция удаления конкретного пользователя
    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    // Функция очистки всей таблицы
    const clearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <small>{errors.name.message}</small>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("username", { required: "Username is required" })}
                    />
                    {errors.username && <small>{errors.username.message}</small>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <small>{errors.email.message}</small>}
                </div>

                <div>
                    <input
                        type="tel"
                        placeholder="Phone"
                        {...register("phone", { required: "Phone is required" })}
                    />
                    {errors.phone && <small>{errors.phone.message}</small>}
                </div>

                <div>
                    <input
                        type="url"
                        placeholder="Website"
                        {...register("website")}
                    />
                </div>

                <div>
                    <button type="submit">Создать</button>
                    <button type="button" onClick={clearTable}>
                        Очистить таблицу
                    </button>
                </div>
            </form>

            <div>
                {users.length === 0 ? (
                    <p>Таблица пуста</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website || "N/A"}</td>
                                <td>
                                    <button onClick={() => deleteUser(index)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default UserForm;
