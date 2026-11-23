import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import './App.css';

export default function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне перемикання теми залежно від часу (день: 07:00 - 21:00)
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    // Ручне перемикання кнопкою
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const appStyles = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#1a1a1a',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        fontFamily: 'sans-serif'
    };

    return (
        <div style={appStyles}>
            <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #555' }}>
                <h1 style={{ fontSize: '20px', margin: 0 }}>Лабораторна робота №4 — Варіант 21 (оновлено)</h1>
                <button
                    onClick={toggleTheme}
                    style={{ padding: '8px 15px', cursor: 'pointer', borderRadius: '6px', border: '1px solid #555', backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: 'inherit' }}
                >
                    {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
                </button>
            </header>

            <main>
                <Reviews />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}