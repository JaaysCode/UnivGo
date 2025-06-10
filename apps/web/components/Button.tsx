
export const Button = ({text}: {text:string}) => {
    return(
        <button 
            className="
                text-white 
                bg-[#F12229]
                hover:bg-[#D32229]
                font-medium 
                rounded-xl 
                text-md 
                px-16 
                py-2.5 
                text-center 
                me-2 
                mb-2 
                transition-transform 
                duration-200 
                ease-in-out 
                hover:scale-105
                cursor-pointer
            ">
                    {text}
        </button>
    )

}