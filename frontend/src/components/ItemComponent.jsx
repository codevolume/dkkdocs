import { IconBathFilled, IconBedFilled, IconBookmark, IconDimensions } from "@tabler/icons-react";

const ItemComponent = ({type="rent" }) => {
    return (
        <div className="flex bg-white p-2 shadow rounded-xl hover:shadow-md transition duration-200">
            <div className="mr-4 cursor-pointer">
                <img src="https://ot.ingatlancdn.com/97/58/34450804_234407213_l.jpg" alt="Kép" className="w-36 h-36 rounded-l" />
            </div>
            <div className="flex-1 flex-col justify-between flex">
                {/* Price & Address & Type */}
                <div>
                    <div className="flex justify-between flex-row">
                        <h1 className="text-lg font-bold">
                            120.000 Ft<span className="font-normal">/hó</span>
                        </h1>
                        {type==="rent" && <div className="px-2 py-1 bg-amber-100 text-xs font-bold text-amber-500 rounded-full flex items-center">Kiadó</div>}
                        {type==="buy" && <div className="px-2 py-1 bg-green-100 text-xs font-bold text-green-500 rounded-full flex items-center">Eladó</div>}
                        {type==="room" && <div className="px-2 py-1 bg-blue-100 text-xs font-bold text-blue-500 rounded-full flex items-center">Eladó</div>}
                    </div>
                    <p className="text-xs text-gray-500">Debrecen, Egyetem sugárút</p>
                </div>

                {/* Specs */}
                <div className="flex flex-row gap-2 mt-2">

                    <div className="px-2 py-1 bg-gray-200 flex flex-row items-center rounded gap-1">
                        <IconBedFilled className="text-gray-500" size={20}/>
                        <p className="text-xs text-gray-500">2+1</p>
                    </div>


                    <div className="px-2 py-1 bg-gray-200 flex flex-row items-center rounded gap-1">
                        <IconBathFilled className="text-gray-500" size={20}/>
                        <p className="text-xs text-gray-500">1</p>
                    </div>

                    <div className="px-2 py-1 bg-gray-200 flex flex-row items-center rounded gap-1">
                        <IconDimensions className="text-gray-500" size={20}/>
                        <p className="text-xs text-gray-500">51m2</p>
                    </div>

                </div>

                {/* Uploaded & Save */}
                <div className="flex flex-row justify-between mt-auto">
                    <p className="text-xs text-gray-500">2 hónapja</p>
                    <IconBookmark size={20} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default ItemComponent;
