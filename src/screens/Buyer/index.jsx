import React, { useState } from 'react';

export default function Buyer() {
    const [walletAddress, setWalletAddress] = useState('');
    const [energyPoints, setEnergyPoints] = useState('');

    const [selectedOffers, setSelectedOffers] = useState([]);

    const handleOfferSelection = (index) => {
        if (selectedOffers.includes(index)) {
            setSelectedOffers(selectedOffers.filter(item => item !== index));
        } else {
            setSelectedOffers([...selectedOffers, index]);
        }
    };


    const availableOffers = [
        { id: 1, seller: '0xSellerAddress1', energy: 100, price: 50 },
        { id: 2, seller: '0xSellerAddress2', energy: 200, price: 95 },
        { id: 3, seller: '0xSellerAddress3', energy: 150, price: 70 },
        { id: 1, seller: '0xSellerAddress1', energy: 100, price: 50 },
        { id: 2, seller: '0xSellerAddress2', energy: 200, price: 95 },
        { id: 3, seller: '0xSellerAddress3', energy: 150, price: 70 },
        // Add more offers as needed
    ];

    const handleSubmit = () => {
        if (selectedOffers.length > 0) {
            alert('Bid processed');
        }
    };
    return (
    <div>
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
            </form>

            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800">Available Offers to Bid On</h2>
                <ul className="mt-2 overflow-y-scroll h-[300px]">
                {availableOffers.map((offer, index) => (
                    <li key={offer.id} className={`cursor-pointer p-2 border-b cursr-pointer ${selectedOffers.includes(index) ? 'border border-black bg-blue-500' : ''}`} onClick={() => handleOfferSelection(index)}>
                        <p><strong>Seller Address:</strong> {offer.seller}</p>
                        <p><strong>Energy Points:</strong> {offer.energy}</p>
                        <p><strong>Price:</strong> ${offer.price}</p>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <div className='max-w-md mx-auto '>
            <div className='flex justify-center  items-center'>
            <div className='bg-green-500 text-white rounded-lg active:opacity-50 
            cursor-pointer w-20 flex justify-center  items-center '
            onClick={handleSubmit}>Bid</div>
                </div></div>
        </div>
    );
}
