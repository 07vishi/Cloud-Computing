   // src/App.js
   import React from 'react';
   import './index.css';
   import Header from './components/Header';
   import About from './components/About';
   import Projects from './components/Projects';
   import Contact from './components/Contact';

   const App = () => {
     return (
       <div className="min-h-screen">
         <Header />
         <main>
           <About />
           <Projects />
           <Contact />
         </main>
       </div>
     );
   };

   export default App;