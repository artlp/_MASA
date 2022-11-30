import ContactCard from "./ContactCard";



export default function ContactList({ contacts }) {

    const cardList = contacts.map(contact => 
    <ContactCard contact={contact} key={contact.id} />);
    return (
        <div className = "col-12 col-sm-6 col-md-6 col-lg-6">
            <h3 className="display-4 text-center">Contact List</h3>
            {cardList}
        </div>
    );
}
