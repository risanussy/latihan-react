import '../assets/css/App.css'
import Card from "../components/Card"

let App = () => {
    return (
        <>
            <div className="main">
                <h1>React Members</h1>
                <br /><br />
                <div className="sub-main">
                    <div className="kiri">
                        <h2>Create.</h2><br />  
                        <form>
                            <input type="text" placeholder="nama depan" />
                            <hr />
                            <input type="text" placeholder="nama belakang" />
                            <br />
                            <button>Create</button>
                        </form>

                    </div>
                    <div className="kanan">
                        <h2>Members.</h2><br /> 
                        <div className="cards">
                            <Card />
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;