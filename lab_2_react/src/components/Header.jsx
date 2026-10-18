function Header() {
    return (
        <header className="flex flex-col items-center bg-slate-800 text-white p-6 rounded-2xl shadow-xl border border-slate-700">
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-400 mb-2">
                Сергій Тарасенко
            </h1>
            <p className="text-slate-300 font-medium mb-3">
                Студент <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md ml-1">2026</span>
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
                <a href="mailto:serhiytarasenko233@gmail.com" className="hover:text-blue-300 transition-colors">
                    serhiytarasenko233@gmail.com
                </a>
                <span>|</span>
                <a href="https://t.me/tarasenkos" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors">
                    @tarasenkos
                </a>
            </div>
        </header>
    );
}

export default Header;