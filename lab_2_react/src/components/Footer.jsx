import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [sysInfo, setSysInfo] = useState('');

    useEffect(() => {
        // Зберігаємо дані про систему в localStorage
        const info = `Platform: ${navigator.platform} | User-Agent: ${navigator.userAgent}`;
        localStorage.setItem('systemInfo', info);

        // Зчитуємо дані для відображення
        setSysInfo(localStorage.getItem('systemInfo'));
    }, []);

    return (
        <footer style={{ padding: '20px', textAlign: 'center', marginTop: '40px', borderTop: '1px solid #555', fontSize: '14px' }}>
            <p><strong>Системна інформація:</strong> {sysInfo}</p>
        </footer>
    );
}