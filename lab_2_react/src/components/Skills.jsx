function Skills() {
    const skills = [
        'ОС: Windows, Linux',
        'Мережеві технології та захист інформації',
        'Діагностика та обслуговування комп\'ютерної техніки',
        'Веброзробка: HTML, CSS, JavaScript, React'
    ];

    return (
        <section className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 shadow-md">
            <h2 className="text-xl font-bold text-blue-400 mb-3 border-b border-slate-700 pb-2">
                Навички
            </h2>
            <ul className="space-y-2">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;