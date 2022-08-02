import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import AddDate from "./forms/AddDate";
import addDate from "./forms/AddDate";

const App = () => {
	const usersData = [
		{ id: 1, name: 'Haifa', username: 'Halotaibi' },
		{ id: 2, name: 'Sami', username: 'SalSami' },
		{ id: 3, name: 'Mona', username: 'MalMendeel' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>Simple CRUD App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit User</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add User</h2>
							<AddUserForm addUser={addUser} />
							<h2>Pick a Date!</h2>
							<AddDate addDate={addDate()}/>
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />

					<h4>Date Booked....</h4>

				</div>
			</div>
		</div>
	)
}

export default App
