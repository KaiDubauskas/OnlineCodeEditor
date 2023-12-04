import React, { useState, useEffect, useRef, useContext } from "react";
import CodeMirror, { keymap, Command, EditorView } from '@uiw/react-codemirror';
import { MinimalContext, ThemeContext } from "../resources/contexts";
import { python } from "@codemirror/lang-python";
import ThemeMap from "../resources/themes";
import "../styles/codeEditor.css"

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

interface CodeEditorProps {
    setOutput: (code: string) => void;
}


const CodeEditor: React.FC<CodeEditorProps> = ({ setOutput }) => {
    const [code, setCode] = useState<string>("");
    const { value: isMinimal } = useContext(MinimalContext);
    const { value: theme } = useContext(ThemeContext);

    useEffect(() => {
        console.log(theme)
    }, [])

    const runCode = async () => {
        try {
            let requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code: code })
            }
            let response = await fetch(`${NEXT_PUBLIC_API_URL}`, requestOptions);
            let data = await response.json()
            if (data && data.output) {
                setOutput(data.output);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const runCodeCommand: Command = (view: EditorView) => {
        runCode();
        return true;
    };

    const customKeymap = keymap.of([{
        key: "Shift-Enter",
        run: runCodeCommand,
        preventDefault: true,
    }]);



    return (
        <div className="code-editor-container">
            <div className={`editor-navbar-container ${isMinimal ? 'hidden' : 'visible'}`}>
                <button className="submit-button run-button" onClick={runCode}>
                    Run
                </button>
            </div>
            <CodeMirror
                className="editor"
                value={code}
                onChange={setCode}
                extensions={[python(), customKeymap]}
                height="100%"
                theme={ThemeMap[theme]}
                basicSetup={{
                    lineNumbers: true,
                    allowMultipleSelections: true,
                    tabSize: 5,
                }}
            />
        </div>
    )
}
export default CodeEditor;
