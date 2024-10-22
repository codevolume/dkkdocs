import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import kep from "../assets/izelito.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {/* Image */}
            <div className="lg:w-1/2 h-screen hidden lg:block relative overflow-hidden">
                <img src={kep} alt="kep" className="object-contain h-max absolute top-1/2 transform -translate-y-1/2 left-1/3 z-0" />
            </div>

            {/* Form */}
            <div className="lg:p-24 bg-white md:p-52 sm:20 p-8 w-full lg:w-1/2 xl:w-3/4 h-screen rounded-l-xl flex flex-col justify-center items-center -10">
                <div className="max-w-md">
                    <h2 className="text-4xl font-bold mb-3 text-black">Sign in to your Reent account</h2>
                    <p className="text-base text-gray-500 mb-6">
                        Don't have an account yet?{" "}
                        <Link to={"/signup"} className="underline hover:text-gray-400">
                            Sign up
                        </Link>
                    </p>
                    <form onSubmit={handleLogin}>
                        <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" />

                        <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />

                        <div className="flex justify-between text-center">
                            <div className="flex items-center">
                                <input type="checkbox" className="w-4 h-4 bg-primary rounded" />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-black">
                                    Remember me
                                </label>
                            </div>

                            <div className="flex items-center">
                                <Link to={"/forgot-password"} className="text-sm text-black hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <motion.button className="mt-5 w-full py-3 px-4 bg-primary text-white font-bold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit">
                            Login
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
