import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function AuctionAll() {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        pingAuctions();
    }, [])

    const pingAuctions = () => {
        Axios.get("https://api.hypixel.net/skyblock/auctions").then((response) => {
            setAuctions(response.data);
            console.log(response.data.auctions);
        });
    }

    return (
        <div>
           {auctions.map((auctionItem)=>{
               <p>{auctionItem.item_name}</p>
           })}
        </div>
    )
}
