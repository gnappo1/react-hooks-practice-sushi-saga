import { useState } from 'react'

const WalletForm = ({handleAddMoney}) => {
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (quantity) {
            handleAddMoney(Number(quantity))
        }
        setQuantity(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='wallet-quantity'>Add Quantity</label>
            <input type="number" id="wallet-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            
            <input type="submit" value="Add Money!" />
        </form>
    )
}

export default WalletForm