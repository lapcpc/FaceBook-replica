import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App bg-gray-200/50 h-full">
     <header className='w-full '>
        <Head />
     </header>
     <main className='  grid grid-cols-11 md:grid-cols-12 '>
          {/* Sidebar */}
          <Sidebar />

          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
     </main>
    </div>
  );
}

export default App;
