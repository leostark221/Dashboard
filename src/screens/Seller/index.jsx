import React, { useState } from 'react';
import { useStateContext } from '../../context';

const Seller = () => {
    const { registerParticipant, createOffer, offers } = useStateContext();
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const handleRegister = () => {
        registerParticipant();
    };

    const handleCreateOffer = () => {
        createOffer(amount, price);
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-md p-4 space-y-4">

                <button 
                    onClick={handleRegister} 
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Register as Participant
                </button>

                <h2>Create an Offer</h2>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                <button 
                    onClick={handleCreateOffer}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                >
                    Create Offer
                </button>

                <h2>Current Offers</h2>
                <ul className="w-full list-disc pl-5">
                    {offers.map((offer, index) => (
                        <li key={index} className="py-1">
                            Amount: {offer.amount}, Price: {offer.price}
                        </li>
                    ))}
                </ul>

                
            </div>
        </div>
    );
};

export default Seller;
