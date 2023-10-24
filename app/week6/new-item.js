import { useState } from "react";

export default function NewItem() {
    const[name, setname] = useState("");
    const[quantity, setquantity] = useState(1);
    const[category, setcategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };

        onAddItem(newItem)
        
        setname("");
        setquantity(1);
        setcategory("produce");
    };

    return (
        <main>
            <div className="min-h-screen bg-teal-800 flex flex-col justify-start items-center">
                <h1 className="text-2xl text-white font-bold mt-4">New Item</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center mt-2">
                        <label htmlFor="name" className="text-white mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            required
                            type="text"
                            value={name}
                            onChange={(event) => setname(event.target.value)}
                            className="bg-white text-black"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <label className="text-white mb-1">Quantity</label>
                        <input
                            id="quantity"
                            required
                            min ="1"
                            max ="99"
                            type="number"
                            value={quantity}
                            onChange={(event) => setquantity(event.target.value)}
                            className="text-black"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <label className="text-white mb-1">Category</label>
                        <select
                            id="category"
                            required
                            value={category}
                            onChange={(event) => setcategory(event.target.value)}
                            className="text-black"
                        >
                            <option value="bakery">Bakery</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dairy">Dairy</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="household">Household</option>
                            <option value="meat">Meat</option>
                            <option value="produce">Produce</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-center">
                        <button 
                            type="submit"
                            className="w-32 py-2 px-4 bg-green-600 rounded-md text-white"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};
