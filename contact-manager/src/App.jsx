import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";


function App() {
    const contacts = [
        {id: 24, 
        fullName: 'Harley Quinn',
        email: "harqueen@gmail.com",
        phone: "+972 658 21 65",
        gender: "female",},
        {id: 274, 
        fullName: 'Selina Kyle',
        email: "selcat@gmail.com",
        phone: "+972 328 26 21",
        gender: "female",},
        {id: 23, 
        fullName: 'Danny DeVito',
        email: "ddv@gmail.com",
        phone: "+1 23 326 231",
        gender: "male",},

    ];

    return (
        <div className="App">
            <Header />
            <ContactList contacts={contacts}/>
            <AddContact />
        </div>
    );
}

export default App;
