interface Props {
    label: string
    type: "submit" | "reset" | "button" | undefined
}

const Button = (props: Props) => {
    return (
        <button
            type={props.type}
            className="flex w-full justify-center rounded-md border border-transparent bg-[#2fa6de] py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none "
        >
            {props.label}
        </button>
    )
}

export default Button