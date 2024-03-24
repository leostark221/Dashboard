import React, { useState } from 'react';
import { useStateContext } from '../../context';
import EnergyDisplay from '../../components/EnergyDisplay';

const Dashboard = () => {
    const { registerParticipant, createOffer, offers } = useStateContext();
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const handleRegister = () => {
        registerParticipant();
    };

    const handleCreateOffer = () => {
        createOffer(amount, price);
    };

    const energyConsumption = 150; // in kWh
    const energyProduction = 200;  // in kWh
    const extraEnergy = energyProduction - energyConsumption; // in kWh

    return (
        <div className="container mx-auto px-4 py-8 flex-col">
            <h1 className="text-center text-3xl font-semibold mb-8">Energy Trading Market Dashboard</h1>
            <div className="flex justify-center flex-wrap gap-4">
                <EnergyDisplay 
                    title="Energy Consumption" 
                    value={energyConsumption} 
                    unit="kWh" 
                    color="blue"
                />
                <EnergyDisplay 
                    title="Energy Production" 
                    value={energyProduction} 
                    unit="kWh" 
                    color="green"
                />
                <EnergyDisplay 
                    title="Extra Energy" 
                    value={extraEnergy} 
                    unit="kWh" 
                    color={extraEnergy >= 0 ? "purple" : "red"}
                />
            </div>

            
        </div>
    );
};

export default Dashboard;
