import Gallery from "./components/gallery";


function App() {
    const pics = [
        {id: 1, url: "../img/1.jpg"},
        {id: 2, url: "../img/2.jpg"},
        {id: 3, url: "../img/3.jpg"},
        {id: 4, url: "../img/4.jpg"},
        {id: 5, url: "../img/5.jpg"},
        {id: 6, url: "../img/6.jpg"},
        {id: 7, url: "../img/7.jpg"},

    ]

    return (
        <div className="App">
            <div className="wrapper">
                <h1>React gallery "app"</h1>
                <Gallery pics={pics}/>

            </div>
        </div>

    );
}

export default App;
