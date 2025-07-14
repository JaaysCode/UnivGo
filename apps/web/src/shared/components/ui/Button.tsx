type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
};

export const Button = ({ text, onClick, href }: ButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
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
                    hover:scale-103
                    cursor-pointer
                    inline-block
                "
      >
        {text}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
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
                hover:scale-103
                cursor-pointer
            "
    >
      {text}
    </button>
  );
};
