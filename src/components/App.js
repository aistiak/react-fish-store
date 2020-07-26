import React from 'react'
import Header from "../components/Header"
import Inventory from "../components/Inventory"
import Order from "../components/Order"
import NotFound from "../components/NotFound"
import SampleFishes from "../sample-fishes"
import Fish from "./Fish"
import base from "../base"

class App extends React.Component {
    state = {
        fishes : {},
        orders: {} ,
    }
    // life cycle method 
    componentDidMount(){
        // restate localstoare 
        const localStorageRef = localStorage.getItem('dummy-store-name')
        if(localStorageRef){
            this.setState({orders: JSON.parse(localStorageRef)})
        } 
        const params = this.props.match
        // this.ref = base.syncState(`${this.props.match.parmas.storeId}`)
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context : this ,
            state : 'fishes'
        })
    }
    componentDidUpdate(){
        console.log(`it updated!!`)
        localStorage.setItem(
            'dummy-store-name',
            JSON.stringify(this.state.orders)
        
        )
    }
    componentWillUnmount(){
        base.removeBinding(this.ref)
    }
    addTocart = key => {
        const orders = {...this.state.orders}
        orders[key] = orders[key] + 1 || 1 
        this.setState({orders})
    }
    addFish = (fish) => {
        const fishes = { ...this.state.fishes}
        fishes[`fish${Date.now()}`] = fish
        this.setState({
            fishes:fishes
        })
    }
    loadFishes = () =>{
        console.log(`loading fishes 🐟🐠🎣🐡🦈🦦`)
        this.setState({fishes:SampleFishes})
    }

    updateFish = (key,Updatedfish) => {
        const fishes = {...this.state.fishes}
        fishes[key] = Updatedfish 
        this.setState({fishes})
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes}
        fishes[key] = null 
        this.setState({fishes})
    }
    deleteFishFromOrder = (key) => {
        const orders = {...this.state.orders}
        delete orders[key] 
        this.setState({orders})
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes)
                        .map(key => <Fish index={key} addTocart={this.addTocart} key={key} details={this.state.fishes[key]} />)}
                            {/* <Fish/> */}
                    </ul>
                </div>
                <Order 
                    fishes={this.state.fishes} 
                    orders={this.state.orders} 
                    deleteFishFromOrder={this.deleteFishFromOrder}
                />
                <Inventory  
                updateFish={this.updateFish} 
                fishes={this.state.fishes} 
                addFish={this.addFish} 
                loadFishes={this.loadFishes} 
                deleteFish={this.deleteFish}
                />
            </div>
        )
    }
}


export default App 