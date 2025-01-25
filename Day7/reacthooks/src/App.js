import logo from './logo.svg';
// import './App.css';
import Class_components from './reactclass';
import Function_Components from './reactFunction';
import ReactEvents from './ReactEvents';
import ReactHooks from './ReactHooks';
import ReactInlineStyle from './ReactInlineStyle';
import ReactInternalStyle from './ReactInternalStyle';
import ReactExternalStyle from './ReactExternalStyle';



function App() 
{
  return (
   <>
   <Class_components />
   <Function_Components name="Payal Tangadkar" college="Amrutvahini College of Engineering"/>
   <ReactEvents />
   <ReactHooks />
   <ReactInlineStyle />
   <ReactInternalStyle />
   <ReactExternalStyle />
   
   </>

  );
}

export default App;
