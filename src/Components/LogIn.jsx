import { useState } from 'react'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const login = {bankType, userId, password};
        fetch("http://localhost:8000/logins", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(login),
            
        })
    }

    const [bankType, setBankType] = useState('Online Banking')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                <h1 className="text-3xl font-bold">Log in</h1>
            </label>
            <select 
                value={bankType} id="" 
                className="mt-5 mb-5 p-2 font-bold
                w-full border-2 hover:border-green-700"
                onChange={(e) => {setBankType(e.target.value)}}
            >
                <option value="Online Banking">Online Banking</option>
                <option value="Commercial Banking">Commercial Banking</option>
            </select>
            <div className="flex flex-col gap-1 mb-5">
                <label className="font-bold ">User ID</label>
                <input 
                    type="text" 
                    className="border-2 hover:border-green-700 p-2"
                    value={userId}
                    onChange={e => setUserId(e.target.value)} />
            </div>     

            <div className="flex flex-col gap-1">
                <label className="font-bold ">Password</label>
                <input type="text" 
                className="border-2 hover:border-green-700 p-2"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div> 
            <button className="bg-[#1D4094] h-10 w-full mt-5 font-bold text-xl text-white mb-2">LOG IN</button>
            <p><a href="" className="">Forgot Login?</a></p>
            <p className="mt-2">First Time User? <a href="" className="">Register.</a></p>
                                    
        </form>
     );
}
 
export default Login;