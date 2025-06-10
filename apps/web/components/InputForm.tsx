import React from 'react'

interface InputFormProps  {
    placeholder: string;
    typeInput: string;
};

const InputForm = ({placeholder, typeInput} : InputFormProps) => {
  return (
    <div className="relative mb-4">
        <input  
            type={typeInput}
            placeholder=" "
            id="floating-input"
            className='
                w-full
                h-12
                px-4
                pt-2
                peer
                text-[var(--text-color)]
                bg-[var(--background-color)]
                border
                border-[var(--primary-gray)]
                rounded-lg
                transition-all
                duration-200
                focus:outline-none
                focus:ring-0
                focus:border-[var(--primary-blue)]
                focus:border-2
                shadow-sm
                hover:shadow-md
            '
        />
        <label 
            htmlFor="floating-input"
            className='
                absolute
                text-sm
                text-[var(--primary-gray)]
                duration-300
                transform
                -translate-y-4
                scale-75
                top-2
                z-10
                origin-[0]
                left-4
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
                peer-focus:text-[var(--primary-blue)]
            '
        >
            {placeholder}
        </label>
    </div>
  )
}

export default InputForm