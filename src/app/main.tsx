"use client";
import React, { useState, useEffect, useRef } from "react";
import { LayoutContext, ThemeContext, AuthContext, LanguageContext } from "./resources/contexts";
import { logout, changeDefaultLanguage } from "./resources/pocketbase";
import { ThemeBackgroundMap, ThemeColorMap } from "./resources/themes";
import Resizable from "./components/resizable";
import CodeEditor from "./components/codeEditor";
import Console from './components/console';
import SettingsModal from './components/settingsModal';
import AccountModal from './components/accountModal';
import InfoIcon from './assets/info-icon.png';
import LogoutIcon from './assets/logout-icon.png';
import SettingsIcon from './assets/settings-icon.png';
import AccountIcon from './assets/account-icon.png';
import './styles/main.css';

type outputType = {
    time: string,
    output: string
}

const Home: React.FC = () => {
    const [consoleOutput, setConsoleOutput] = useState<outputType>({ time: "", output: "" });
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
    const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
    const logoutRef = useRef<HTMLDivElement>(null);

    //Context states
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [isMinimal, setIsMinimal] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>("nord");
    const [backgroundColor, setBackgroundColor] = useState<string>(ThemeBackgroundMap["nord"].background);
    const [textColor, setTextColor] = useState<string>(ThemeColorMap["nord"][1][2].value.specs[2].color);
    const [language, setLanguage] = useState<string>("python");
    const [defaultLanguage, setDefaultLanguage] = useState<string>("python");

    const handleOpenSettings = () => {
        setIsSettingsOpen(prevVal => !prevVal);
        setIsLogoutOpen(false);
    }


    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key == 'Escape') {
                handleOpenSettings();
            }
            if (e.key === 'm' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsMinimal(prevVal => !prevVal);
            }
            if (e.key === 'd' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setConsoleOutput({ time: "", output: "" });
            }
            if (e.key === 'o' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsSidebarOpen(prev => !prev)
            }

        }

        const handleCloseLogout = (event: MouseEvent) => {
            if (logoutRef.current && !logoutRef.current.contains(event.target as Node)) {
                setIsLogoutOpen(false);
            }
        }

        document.addEventListener('mousedown', handleCloseLogout);
        window.addEventListener('keydown', handleKeyUp);
        return () => {
            document.removeEventListener('mousedown', handleCloseLogout);
            window.removeEventListener('keydown', handleKeyUp);
        }

    }, [])

    useEffect(() => {
        setBackgroundColor(ThemeBackgroundMap[theme].background);
        setTextColor(ThemeColorMap[theme][1][2].value.specs[2].color);
    }, [theme])

    useEffect(() => {
        if (isSignedIn) {
            changeDefaultLanguage(defaultLanguage);
        }
    }, [defaultLanguage])


    const handleLogin = () => {
        setIsLoginOpen(prev => !prev);
    }

    const toggleIsLogoutOpen = () => {
        setIsLogoutOpen(prev => !prev);
    }

    const handleLogout = () => {
        setIsLogoutOpen(false);
        setIsSignedIn(false);
        setConsoleOutput({ time: "", output: "" });
        setDefaultLanguage("python");
        logout();
    }

    return (
        <div className="main-container"
            style={{ backgroundColor: backgroundColor }}
        >
            <title>Online Code Editor</title>
            <LanguageContext.Provider value={{
                language: language,
                setLanguage: setLanguage,
                defaultLanguage: defaultLanguage,
                setDefaultLanguage: setDefaultLanguage,
            }}>
                <AuthContext.Provider value={{
                    isSignedIn: isSignedIn,
                    setIsSignedIn: setIsSignedIn,
                }}>
                    <LayoutContext.Provider value={{
                        isMinimal: isMinimal,
                        setIsMinimal: setIsMinimal,
                        isSidebarOpen: isSidebarOpen,
                        setIsSidebarOpen: setIsSidebarOpen
                    }} >
                        <ThemeContext.Provider value={{
                            value: theme,
                            setValue: setTheme,
                            backgroundColor: backgroundColor,
                            textColor: textColor,
                        }} >
                            <SettingsModal
                                isOpen={isSettingsOpen}
                                setIsOpen={setIsSettingsOpen}
                            />
                            <AccountModal
                                isOpen={isLoginOpen}
                                setIsOpen={setIsLoginOpen}
                            />
                            <div className={`${isMinimal ? 'hidden' : 'visible'} account-button-container`} ref={logoutRef}>
                                <img className="account-button" onClick={handleOpenSettings} src={SettingsIcon.src} />
                                <img className="account-button" onClick={isSignedIn ? toggleIsLogoutOpen : handleLogin} src={isSignedIn ? LogoutIcon.src : AccountIcon.src} />
                                <button className={`${isLogoutOpen ? 'visible' : 'hidden'} logout-button`} onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                            <div className="main-inner-container">
                                <Resizable
                                    leftPanel={<CodeEditor setOutput={setConsoleOutput} />}
                                    rightPanel={<Console time={consoleOutput.time} output={consoleOutput.output} />}
                                    draggerWidth={4}
                                    draggerColor="#7E4B0E"
                                />
                            </div>
                        </ThemeContext.Provider>
                    </LayoutContext.Provider>
                </AuthContext.Provider>
            </LanguageContext.Provider>

            <div className={`${isMinimal ? 'hidden' : 'visible'} info-icon-container`}>
                <img className="info-icon" src={InfoIcon.src} alt="ESC Button" />
                <div className="info-overlay">
                    Press 'esc' for more info
                </div>
            </div>
        </div>
    )
}

export default Home;
