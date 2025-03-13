// src/components/WebAPIs.tsx
import React from "react";
import { motion } from "framer-motion";

interface AsyncOp {
  name: string;
  callback: () => void;
}

interface WebAPIsProps {
  operations: AsyncOp[];
  onComplete: (op: AsyncOp) => void;
}

const WebAPIs: React.FC<WebAPIsProps> = ({ operations, onComplete }) => {
  return (
    <div className="web-apis">
      <h3>Web APIs</h3>
      {operations.map((op, index) => (
        <motion.div key={index}>
          {op.name}
          <button onClick={() => onComplete(op)}>Complete</button>
        </motion.div>
      ))}
    </div>
  );
};

export default WebAPIs;
