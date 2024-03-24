import React from 'react'

export default function CryptoExchange() {
    // Mock data for cryptocurrencies
    const cryptocurrencies = ['Bitcoin', 'Ethereum', 'Litecoin'];
    const exchangeRate = 50000; // Example exchange rate for demonstration

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Cryptocurrency Exchange</h1>
                
                <div className="flex flex-col space-y-3">
                    <div>
                        <label htmlFor="crypto" className="block text-sm font-medium text-gray-700">Select Cryptocurrency:</label>
                        <select id="crypto" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none">
                            {cryptocurrencies.map((crypto, index) => (
                                <option key={index} value={crypto}>{crypto}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
                        <input 
                            type="number"
                            id="amount"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
                            placeholder="0.00"
                        />
                    </div>

                    <div className="border-t border-gray-300 pt-3">
                        <p className="text-sm text-gray-600">Exchange Rate: 1 BTC = {exchangeRate} YourCurrency</p>
                        <p className="text-lg font-medium text-gray-800">Equivalent in YourCurrency: {/* Calculated amount here */}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

