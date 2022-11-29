export default function ContactCard({contacts}) {
  return (

    <div className="card">
        <div className="pic"></div>
        <div className="card-body">
            <div className="card-title">{contacts.fullName}</div>
        </div>
    </div>
  )
}
