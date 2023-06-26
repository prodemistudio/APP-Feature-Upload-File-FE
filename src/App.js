import './App.css';
import Upload from './pro-upload/upload/Upload'

function App() {
    return (
        <div className="App">
            <Upload formatUpload={["image/jpg", "image/jpeg", "image/png"]} />
        </div>
    );
}

export default App;
