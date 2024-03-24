import React, { createContext, useContext, useEffect, useState } from 'react';

import { useAddress, useContract, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export function StateContextProvider ({ children }) {
    const [participants, setParticipants] = useState([]);
    const [offers, setOffers] = useState([]);
    const [bids, setBids] = useState([]);
    const [pendingWithdrawals, setPendingWithdrawals] = useState([]);
    const { contract } = useContract('0x7B8714d56731a03082b14d8bd17d91Cf2c626e9a');
    const address = useAddress();


    useEffect(() => {
        if (contract) {
            fetchParticipants();
            fetchOffers();
            fetchBids();
            // rest functions
        }
    }, [contract]);
    
    const fetchParticipants = async () => {
        // pending
    };
    
    const fetchOffers = async () => {
        // pending 
    };
    
    const fetchBids = async () => {
        // pending 
    };
    
    const registerParticipant = async () => {
        if (!contract.signer) {
            console.error("Please connect to Ethereum"); // Ensure the user is connected to Ethereum network
            return;
        }
    
        try {
            const data = await contract.call("register");
            await data.wait();
            console.log("Participant registered successfully");
    
            fetchParticipants();
        } catch (error) {
            console.error("Error registering participant:", error);
        }
    };
    
    const createOffer = async (amount, price) => {
        if (!contract.signer) {
            console.error("Please connect to Ethereum");
            return;
        }
    
        if (!amount || !price) {
            console.error("Invalid amount or price");
            return;
        }
    
        try {
            const data = await contract.call("offerEnergy", [amount, price]);
            await data.wait();
            console.log("Offer created successfully");
    
            fetchOffers();
        } catch (error) {
            console.error("Error creating offer:", error);
        }
    };
    

    const cancelOffer = async (offerId) => {
        // to cancel an offer
    };

    
    const placeBid = async (offerId, amount) => {
        // to place a bid
    };

    
    const withdrawBid = async (offerId) => {
        //to withdraw a bid
    };

    
    const acceptHighestBid = async (offerId) => {
        // to accept the highest bid
    };

    
    const completeTransaction = async (offerId) => {
        // to complete a transaction
    };

    
    const withdrawFunds = async () => {
        // to withdraw funds
    };

    

    const contextValue = {
        participants,
        offers,
        bids,
        pendingWithdrawals,
        registerParticipant,
        createOffer,
        cancelOffer,
        placeBid,
        withdrawBid,
        acceptHighestBid,
        completeTransaction,
        withdrawFunds,
    };

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);