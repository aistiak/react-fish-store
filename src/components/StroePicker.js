import React ,{Fragment} from 'react'
import {getFunName} from '../helpers'
class StroePicker  extends React.Component{
    myInp = React.createRef()

    goToStore = event => {
        event.preventDefault()
        console.log(this.myInp.current.value)
        const storeName = this.myInp.current.value
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (  
            <form className="store-selector" onSubmit={this.goToStore} >
            {/* comment */}
                <h2>Plear Enter A Store </h2>
                <input 
                type="text"
                ref={this.myInp}
                required 
                placeholder="Store Name"
                defaultValue={getFunName()}    
                /> 
                <button type="submit">Visit Store → </button>
            </form>   
        )
    }
}

export default StroePicker 