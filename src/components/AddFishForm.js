import React from 'react'


class AddFirshForm extends React.Component {
    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()
    createFish = event => {
        event.preventDefault()
        console.log(`making a fish 🐟 `)
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        console.log(fish)
        this.props.addFish(fish)
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name" ref={this.nameRef} defaultValue=""/>
                <input name="price" type="text" placeholder="Price" ref={this.priceRef} />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh !</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} />
                <input name="image" type="text" placeholder="Image" ref={this.imageRef} />
                <button type="submit">Add Fish + </button>
            </form>
        )
    }
}

export default AddFirshForm