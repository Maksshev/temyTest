import React from 'react';

const showUsers = (users) => {
    if (users) {
        return users.map(user => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.country}</td>
                <td>{user.state}</td>
                <td>{user.cityName}</td>
                <td>{user.date}</td>
            </tr>
        ))
    }

    return null
};

const UserTable = ({users}) => {
    return (
        <div className="current_users">
            <h4>
                Current users:
            </h4>
            <table>
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Phone
                    </th>
                    <th>
                        Country
                    </th>
                    <th>
                        State
                    </th>
                    <th>
                        City
                    </th>
                    <th>
                        Date
                    </th>
                </tr>
                </thead>
                <tbody>
                {showUsers(users)}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
