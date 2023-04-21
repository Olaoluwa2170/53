import img from '../assets/Footer.png'

const Article = () => {
    return ( 
        <div className="w-full">
            <div className="grid md:grid-cols-2 gap-10 p-16">
                <div>
                    <h1 className="font-bold text-3xl mb-5">Existing Users</h1>
                    <p>
                    To access your accounts, please use your custom User ID and your associated Online Banking password.
                    </p>
                </div>
                <div>
                    <h1 className="font-bold text-3xl mb-5">First Time Users</h1>
                    <div>
                        <h2 className="font-bold text-xl mb-3">User ID:</h2>
                        <p>
                            Use your Fifth Third debit, credit, prepaid or ATM card number the first time you log in. View <span className="underline">Forgot User ID</span> or <span className="underline">Forgot Password</span>.
                        </p>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl my-3">Password:</h1>
                        <p>
                            Use your Card PIN (Personal Identification Number) to log in to Online Banking. After entering Online Banking 
                            for the first time using your Card PIN, you will be prompted to create an exclusive password for Online Banking.
                        </p>
                    </div>                    
                </div>
            </div>
            <footer className="border-t-2 bg-[#F1F1F1] p-16">
                        <div className=''>
                            <ul className="md:flex">
                                <l1>About Us <span className="mx-2">|</span></l1>
                                <l1>Customer Service <span className="mx-2">|</span></l1>
                                <l1>Careers <span className="mx-2">|</span></l1>
                                <l1>Investor Relations <span className="mx-2">|</span></l1>
                                <l1>Media Center <span className="mx-2">|</span></l1>
                                <l1>Privacy&Security<span className="mx-2">|</span></l1>
                                <l1>Site Map</l1>
                            </ul>
                        </div>
                        <p className='mt-10 mb-5 text-gray-600 text-sm'>Copyright © 2023 Fifth Third Bank, National Association. All Rights Reserved. Member FDIC. FDIC Logo Equal Housing Lender</p>
                        <img src={img} alt="fifth third bank logo" />

                    </footer>
        </div>
     );
}
 
export default Article;