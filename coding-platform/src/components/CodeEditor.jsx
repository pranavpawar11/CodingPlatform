import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language, value, onChange }) => {
  const getMonacoLanguage = (lang) => {
    switch(lang) {
      case 'cpp': return 'cpp';
      case 'python': return 'python';
      case 'java': return 'java';
      default: return 'cpp';
    }
  };

  const handleEditorChange = (value) => {
    onChange(value || '');
  };

  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        language={getMonacoLanguage(language)}
        value={value}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
          wordWrap: 'on',
          padding: { top: 16, bottom: 16 },
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: 'on',
          tabSize: 2,
          insertSpaces: true,
          renderWhitespace: 'boundary',
          renderControlCharacters: false,
          renderIndentGuides: true,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
          }
        }}
      />
    </div>
  );
};

export default CodeEditor;