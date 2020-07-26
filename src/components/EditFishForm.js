import React from 'react'

class EditFishForm extends React.Component {

    handelChange = (event) => {
       
        const updatedFish = {
            ...this.props.fish ,
            [event.currentTarget.name] : event.currentTarget.value 
        }
        // bubble this up to App.js to change state     
        this.props.updateFish(this.props.index,updatedFish)
    } 
    render(){
        

        return (
            <div className="fish-edit">
                {/* {this.props.fish.name} */}
                {/* fish */}
                <input type="text" name="name"onChange={this.handelChange} value={this.props.fish.name}/>
                <input type="text" name="price" onChange={this.handelChange} value={this.props.fish.price}/>
                <select type="text" name="status" onChange={this.handelChange} value={this.props.fish.status}>
                    <option value="available" >Fresh! </option>
                    <option value="unavailable" >Sold Out </option>
                </select> 
                <textarea type="text" name="desc" onChange={this.handelChange} value={this.props.fish.desc}></textarea>
                <input type="text" name="image" onChange={this.handelChange} value={this.props.fish.image}/>
                <button 
                onClick={()=> this.props.deleteFish(this.props.index)} 
                >delete</button>
            </div>
        )
    }

}

export default EditFishForm