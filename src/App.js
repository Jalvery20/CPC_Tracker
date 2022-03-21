import Header from "./components/Header"
import Homepage from "./Pages/Homepage"
import CoinPage from "./Pages/CoinPage"
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

function App() {

  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor:"rgba(0,5,15,.9)",
      color:"white",
      minHeight:"100vh",
    }
  }));
  
  const classes= useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
          
            <Route exact path="/" component={Homepage} />
            <Route exact path="/coins/:id" component={CoinPage} />
       
    </div>
    </BrowserRouter>
  );
}

export default App;
