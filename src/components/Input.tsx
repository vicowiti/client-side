interface Props {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    touched?: boolean
    error?: string

}


const Input = (props: Props) => {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <div className="mt-1">
                <input
                    onChange={props.onChange}
                    id={props.name}
                    name={props.name}
                    type={`text`}
                    autoComplete={props.name}
                    // required={props.required}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 sha placeholder-gray-400 shadow-md focus:border-[#2fa6de] focus:outline-none  sm:text-sm"
                />
            </div>
            {props.touched && props.error && <p className="mt-2 text-sm font-thin text-red-600">{props.error} </p>}

        </div>
    )
}

export default Input