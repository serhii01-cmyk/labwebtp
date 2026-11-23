import React, { useState, useEffect } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Таймер на 1 хвилину (60000 мс) згідно з методичкою
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: 1000,
            backdropFilter: 'blur(3px)'
        }}>
            <div style={{
                backgroundColor: '#222', color: '#fff', padding: '30px',
                borderRadius: '12px', width: '90%', maxWidth: '420px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                position: 'relative', fontFamily: 'sans-serif', border: '1px solid #444'
            }}>
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: 'absolute', top: '15px', right: '15px',
                        background: 'transparent', border: 'none', color: '#aaa',
                        fontSize: '20px', cursor: 'pointer', fontWeight: 'bold'
                    }}
                >
                    ✕
                </button>

                <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', textAlign: 'center' }}>
                    Зворотний зв'язок
                </h3>

                {/* Не забудьте замінити ВАШ_ЕНДПОЙНТ на свій лінк з Formspree */}
                <form action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ім'я"
                        required
                        style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#333', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#333', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Номер телефону"
                        required
                        style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#333', color: '#fff', fontSize: '14px', outline: 'none' }}
                    />
                    <textarea
                        name="message"
                        placeholder="Ваше повідомлення..."
                        required
                        style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #555', backgroundColor: '#333', color: '#fff', fontSize: '14px', height: '90px', resize: 'none', outline: 'none' }}
                    ></textarea>

                    <button
                        type="submit"
                        style={{
                            padding: '12px', backgroundColor: '#007BFF', color: 'white',
                            border: 'none', borderRadius: '6px', fontSize: '16px',
                            cursor: 'pointer', fontWeight: 'bold', marginTop: '5px',
                            transition: 'background 0.2s'
                        }}
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}