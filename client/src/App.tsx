import LoginTemplates from "./components/templates/LoginTemplates";

const App = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
            <LoginTemplates email="email" password="password" onClick={() => null}/>
        </div>
    )
}

export default App;

