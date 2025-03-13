// src/components/Editor.tsx
import MonacoEditor from "@monaco-editor/react";

interface EditorProps {
  code: string;
  setCode: (code: string) => void;
}

const Editor: React.FC<EditorProps> = ({ code, setCode }) => {
  return (
    <MonacoEditor
      height="400px"
      language="javascript"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
    />
  );
};

export default Editor;
