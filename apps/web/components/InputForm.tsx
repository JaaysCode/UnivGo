import React from 'react';

interface InputFormProps {
  placeholder: string;
  typeInput: string;
  id: string; // ID es obligatorio y debe ser único para cada input
}

const InputForm = ({ placeholder, typeInput, id }: InputFormProps) => {
  return (
    <div className="relative mb-4">
      <input
        type={typeInput}
        placeholder=" " 
        id={id} // Asegúrate de que aquí se usa el 'id' de las props
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
        htmlFor={id} // Asegúrate de que aquí se usa el 'id' de las props
        className='
          absolute
          text-sm
          text-[var(--primary-gray)]
          duration-300
          transform
          -translate-y-4 
          scale-75
          top-4 
          left-4
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-7 
          peer-focus:text-[var(--primary-blue)]
          pointer-events-none // MUY IMPORTANTE: para que el clic atraviese el label
        '
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputForm;