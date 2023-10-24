"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";


export default function page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
    }; 
    
    return (
        <main>
            <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
        </main>
    );
}