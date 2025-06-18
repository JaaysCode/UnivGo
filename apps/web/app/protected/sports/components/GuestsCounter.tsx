import React, { useState } from 'react';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(Math.min(count + 1, 10)); // Limitamos a un máximo de 10 invitados
  };

  const decrement = () => {
    setCount(Math.max(count - 1, 0)); // Evitamos valores negativos
  };
  return (
    <div className="flex items-center mr-5 bg-white p-3 rounded-lg shadow-sm border border-gray-200">      
      <button 
        onClick={decrement} 
        className={`text-xl hover:scale-110 transition-transform ${count === 0 ? 'text-[var(--primary-red)]' :
                    'text-black hover:text-[var(--primary-blue)] cursor-pointer'}`}
        disabled={count === 0}
      >
        <FiMinusCircle />
      </button>
      <div className="w-12 h-8 relative mx-2 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={count}
            className="absolute text-xl font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>      
      
      <button 
        onClick={increment} 
        className={`text-xl hover:scale-110 transition-transform ${count === 10 ? 'text-[var(--primary-red)]' :
                    'text-black hover:text-[var(--primary-blue)] cursor-pointer'}`}
        disabled={count === 10}
      >
        <FiPlusCircle />
      </button>
    </div>
  );
}

export default Counter;