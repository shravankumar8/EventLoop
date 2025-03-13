// src/components/CallbackQueue.tsx
import React from "react";
import { motion } from "framer-motion";

interface CallbackQueueProps {
  queue: Array<() => void>;
}

const CallbackQueue: React.FC<CallbackQueueProps> = ({ queue }) => {
  return (
    <div className="callback-queue">
      <h3>Callback Queue</h3>
      {queue.map((_, index) => (
        <motion.div key={index}>Callback {index + 1}</motion.div>
      ))}
    </div>
  );
};

export default CallbackQueue;
