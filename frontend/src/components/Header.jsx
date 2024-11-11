import { IconBellFilled, IconBookmarkFilled, IconLogout, IconNotes, IconSettings } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);

    return (
        <div className="bg-white w-full py-4 px-16">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-black text-center">Reent</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <IconBellFilled />
                    <IconBookmarkFilled />
                    <motion.div className="w-10 h-10 cursor-pointer relative" whileHover={{ scale: 1.02 }} onClick={() => setDropDownMenu(!dropDownMenu)}>
                        <img src="https://i.pravatar.cc/300" alt="avatar" className="w-full h-full rounded-full" />
                    </motion.div>
                    {dropDownMenu && (
                        <div className="min-w-96 py-4 px-4 absolute top-20 right-10 bg-white rounded-md">
                            <div className="w-full flex gap-2 cursor-pointer items-center hover:bg-gray-100 px-4 py-4 rounded">
                                <div className="w-10 h-10">
                                    <img src="https://i.pravatar.cc/300" alt="avatar" className="w-full h-full rounded-full" />
                                </div>
                                <h1 className="text-lg font-bold text-black">John Doe</h1>
                            </div>

                            <div className="w-full flex cursor-pointer items-center hover:bg-gray-100 px-4 py-2 rounded">
                                <div className="w-10 h-10 items-center justify-center flex">
                                    <IconNotes stroke={2} className="text-gray-500" />
                                </div>
                                <p className="text-black">My advertisements</p>
                            </div>

                            <div className="w-full flex cursor-pointer items-center hover:bg-gray-100 px-4 py-2 rounded">
                                <div className="w-10 h-10 items-center justify-center flex">
                                    <IconSettings stroke={2} className="text-gray-500" />
                                </div>
                                <p className="text-black">Settings</p>
                            </div>

                            <div className="group w-full flex cursor-pointer items-center hover:bg-gray-100 px-4 py-2 rounded">
                                <div className="w-10 h-10 items-center justify-center flex">
                                    <IconLogout stroke={2} className="text-gray-500 group-hover:text-black" />
                                </div>
                                <p className="text-black">Logout</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
