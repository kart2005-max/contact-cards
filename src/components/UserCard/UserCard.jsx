import './UserCard.css'

function UserCard({ user, onDelete }) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="user-card">
      <div className="avatar">
        {initials}
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(user.id)} title="Delete contact">
        &times;
      </button>
    </div>
  )
}

export default UserCard
