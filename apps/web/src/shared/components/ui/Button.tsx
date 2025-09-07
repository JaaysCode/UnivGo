type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
};

export const Button = ({ text, onClick, href }: ButtonProps) => {
  const buttonClasses = `
    text-white 
    bg-[#F12229]
    hover:bg-[#D32229]
    font-medium 
    rounded-xl 
    text-sm sm:text-md lg:text-lg
    px-6 sm:px-12 lg:px-16 
    py-2 sm:py-2.5 lg:py-3
    text-center 
    me-2 
    mb-2 
    transition-transform 
    duration-200 
    ease-in-out 
    hover:scale-103
    cursor-pointer
    w-full sm:w-auto
    inline-block
  `;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {text}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};
