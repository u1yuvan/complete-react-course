import './app.css'

function App() {
    let msg = "awesome";

    return (<div>
        <h1 className="header">This is my Header</h1>
        <p className="para">This is my first {msg} component </p>
    </div>);
}


export default App;