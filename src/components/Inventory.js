import React from 'react'
import AddFirshForm from './AddFishForm'
import EditFishForm from "./EditFishForm"
class Inventory extends React.Component {
    render(){
        return (
            <div className="inventory">
               <h2>
                Inventory !!!   
               </h2>

               {Object.keys(this.props.fishes).map( (key) => <EditFishForm 
               key={key} 
               index={key} 
               updateFish={this.props.updateFish} 
               fish={this.props.fishes[key]} 
               deleteFish={this.props.deleteFish}
               />) }

               <AddFirshForm addFish={this.props.addFish} />
               <button onClick={this.props.loadFishes}>load fishes </button>
            </div>
        )
    }
}

export default Inventory 