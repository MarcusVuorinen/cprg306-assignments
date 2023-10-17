"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return a.name.localeCompare(b.name);
    });

    const handleSortByName = () => setSortBy("name");
    const handleSortByCategory = () => setSortBy("category");

    return (
        <div>
            <div>
                <button
                 className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                 onClick={handleSortByName}>Sort by Name
                 </button>

                <button
                className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleSortByCategory}>Sort by Category</button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}