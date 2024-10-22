const Input = ({ label, ...props }) => {
    return (
        <div className="mb-6">
            {label && <label htmlFor={props?.id} className="block text-sm font-medium mb-2">{label}</label>}
            <input {...props} type="checkbox" className="w-full px-4 py-3 bg-opacity-50 rounded-md border outline-none border-gray-300 font-sm text-black placeholder-gray-500 transition duration-200" />
        </div>
    );
};

export default Input;
