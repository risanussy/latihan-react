import '../assets/css/App.css'
import Card from "../components/Card"

import { useEffect, useState } from 'react'
import axios from 'axios'

let App = () => {
    let [list, setList] = useState([])

    // lifecycle-nya react
    // react - mount
    // react - update
    // react - unmount

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                let data = res.data.data

                setList(data)
            })
    }, []);

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
                            {list.map((member, index) => 
                                <Card key={member.id} index={index} nd={member.first_name} nb={member.last_name} mail={member.email} />
                            )}
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;