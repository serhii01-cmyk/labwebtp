import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-8 flex items-center justify-center">
            <div className="w-full max-w-2xl space-y-6">
                <Header />
                <Education />
                <Skills />
                <Footer />
            </div>
        </div>
    );
}

export default App;