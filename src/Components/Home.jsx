import Login from "./LogIn";

const Home = () => {
    return ( 
        <div className="md:h-screen w-full bg-[#1D4094] md:bg-gradient-to-r from-[#1C2B61] to-[#1D4094]">
            <div className="ml-20 text-white pt-5 text-xs"><p><span className="underline cursor-pointer">Home</span> {'>'} Login </p></div>
            <div className="w-full h-full flex justify-center mt-14">
                <div>
                    <div className="w-[400px] rounded-sm bg-[#F1F1F1]">
                            <div className="p-10 mb-10">
                                <Login/>
                            </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Home;