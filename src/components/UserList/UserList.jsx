import UserCard from '../UserCard/UserCard'
import './UserList.css'

function UserList({ users, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="user-list-empty">
        <p>No contacts added yet. Use the form above to add your first contact!</p>
      </div>
    )
  }

  return (
    <div className="user-list">
      <h2>Contacts ({users.length})</h2>
      <div className="user-list-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default UserList
