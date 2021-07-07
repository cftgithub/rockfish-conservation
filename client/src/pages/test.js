import React, {Component} from "react"
import API from "../utils/API"
class Test extends Component{
    state={
        creels: []
    }
    componentDidMount(){
       API.testCreels().then(results => {
           console.log (results)
       })
    }
     
    render(){
        return(
            <div></div>
        )
    }
}
export default Test