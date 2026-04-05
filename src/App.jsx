import { useState } from 'react'
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const addUser = (user) => {
    setUsers((prev) => [...prev, user])
  }

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Contact Cards</h1>
        <p>Manage your contacts in one place</p>
      </header>
      <main className="app-main">
        <UserForm onAddUser={addUser} />
        <UserList users={users} onDelete={deleteUser} />
      </main>
    </div>
  )
}

export default App
