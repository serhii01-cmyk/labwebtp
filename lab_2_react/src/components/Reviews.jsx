import React, { useEffect, useState } from 'react';

export default function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Запит за 21 варіантом згідно з методичкою
        fetch('https://jsonplaceholder.typicode.com/posts/21/comments')
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.error('Помилка завантаження коментарів:', err));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Відгуки попередніх роботодавців (Варіант 21)</h2>
            {/* Використовуємо клас з медіазапитом для зміни макета */}
            <div className="reviews-grid">
                {comments.map(comment => (
                    <div key={comment.id} style={{
                        border: '1px solid #555',
                        padding: '15px',
                        borderRadius: '8px',
                        backgroundColor: 'inherit',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{comment.name}</h4>
                        <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#888' }}>{comment.email}</p>
                        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.4' }}>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}