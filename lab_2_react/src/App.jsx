import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Education />
                <Skills />
            </main>
            <Footer />
        </div>
    );
}
export default App;