interface Props {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
}

const Input = (props: Props) => {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1">
                <input
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    autoComplete={props.name}
                    required={props.required}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 sha placeholder-gray-400 shadow-md focus:border-[#2fa6de] focus:outline-none  sm:text-sm"
                />
            </div>
        </div>
    )
}

export default Input