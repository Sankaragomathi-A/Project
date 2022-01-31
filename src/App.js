import React from "react";
import Banner from './Banner'


// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import HooksForm from './HooksForm'



function App(){
    return(

        <div>
            
            <Banner></Banner>


       
             {/* <Router>
                <Switch>
                    <Route exact path="/Banner" component={()=><Ba authorized={true}/>}/>
                    <Route exact path="/HooksForm" component={HooksForm} />
            
            
                </Switch>
             </Router> */}
        </div>
    )
}
export default App