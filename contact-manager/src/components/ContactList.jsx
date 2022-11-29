import ContactCard from "./ContactCard";



export default function ContactList({ contacts }) {

    const cardList = contacts.map(contact => <ContactCard contact = {contact}/>)
    return (
        <div>
            <h3 className="display-6">Contact List</h3>
        {cardList}
        </div>
    );
}
