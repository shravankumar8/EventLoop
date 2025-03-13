// src/components/CallStack.tsx
import React from "react";
import { motion } from "framer-motion";

interface CallStackProps {
  stack: string[];
}

const CallStack: React.FC<CallStackProps> = ({ stack }) => {
  return (
    <div className="call-stack">
      <h3>Call Stack</h3>
      {stack.map((func, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {func}
        </motion.div>
      ))}
    </div>
  );
};

export default CallStack;
