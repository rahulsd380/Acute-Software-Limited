import Navbar from "../../Components/Navbar/Navbar";

const Error = () => {
    return (
        <div className="text-white bg-gradient-to-r from-indigo-950 to-indigo-950 h-screen">
            <Navbar/>
            <div className="flex justify-center items-center">
            Something went wrong. Please try again.
            </div>
        </div>
    );
};

export default Error;