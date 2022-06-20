import { useState } from 'react';
import { ethers, BigNumber } from 'ethers'; 
import { Flex, Box,Input, Text, Button, Spacer, } from '@chakra-ui/react';
import sneakerfaces from './sneakerfaces.json';



const sneakerfacesAddress = "0x1E88d836B476915d58e9b3fbac1741c7F2CcCd07";
const MainMint =({accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
           const provider = new ethers.providers.Web3Provider(window.ethereum);
           const signer = provider.getSigner();
           const contract = new ethers.Contract(
               sneakerfacesAddress,
               sneakerfaces.abi,
               signer
           );
           try{
               const response = await contract.mint(BigNumber.from(mintAmount), { 
               value: ethers.utils.parseEther((0.005 * mintAmount).toString()),
           });
               console.log('response: ', response);
           }     catch (err) {
               console.log ("error: ", err)
           }   
             }
    }
    




            




    const handleDecrement = () => {
        if (mintAmount <= 1 ) return;
        setMintAmount(mintAmount -1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 10 ) return;
        setMintAmount(mintAmount +1);
    };



    return (
        
        <Flex justify="left" align="left" height="100vh" padding="50px">
        <Spacer/>
    
        <Box width ="520px">

            
            <div>
            <Text fontSize="48px">SNEAKER FACES</Text>
            
            </div>
            <h><b>MaxSupply is 5000</b></h>
        
            <div><h><b>10 NFTs Per Wallet</b></h></div>
            <div><h><b>Price = 0.005 ETH</b></h></div>
            <div><h><b>Gas Well Optimized</b></h></div>
            
            
            {isConnected ? (
                <div>
                    <Flex justify="center" align="center">
                        
                        <Button
                        backgroundColor="#D6517D"
                        borderRadius="10px"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop= "10px"
                        onClick={handleDecrement}>-</Button>
                        <Input
                        readOnly
                        fontFamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number" 
                        value={mintAmount} />
                        <Button
                        backgroundColor="#D6517D"
                        borderRadius="10px"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop= "10px"
                        onClick={handleIncrement}>+</Button>
                        </Flex>
                      <Button 
                       backgroundColor="#D6517D"
                       borderRadius="15px"
                       color="white"
                       cursor="pointer"
                       fontFamily="inherit"
                       padding="15px"
                       marginTop= "10px"
                      onClick={handleMint}>Mint Now</Button>
                </div>

            )  : (
                <Text
                marginTop="70px"
                fontSize="30px"
                letterSpacing="-5.5%"
                fontFamily="VT323"
                color="#D6517D"
                >
                You must be connected to Mint.</Text>
            ) }
            </Box>
    
        </Flex>
       
    );
};

export default MainMint;
