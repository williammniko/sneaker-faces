import React from 'react';
import { Flex, Box,Image, Link, Spacer, Button, } from '@chakra-ui/react';
import Twitter from "./assets/Twitter2.png";
import opensea from "./assets/opensea.png";

const NavBar = ({ accounts, setAccounts }) =>{
    const isConnected =Boolean(accounts[0]);

    async function connectAccount(){
        if (window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
    
        <Flex justify="space-between" align="center" padding="30px">
            <Flex justify="space-between" align="center" padding="30px">
                <Link href="https://twitter.com/DentedGoblins">
                 <Image src={Twitter} boxSize="42px" margin="0 15px" />
            </Link>
                <Link href="https://opensea.io/collection/dentedgoblinz-wtf">
                 <Image src={opensea} boxSize="42px" margin="0 15px" />
            </Link>
            </Flex>
        <Spacer/>
            


            {/*Connect*/}
            {isConnected ?(
            
                <Box margin="0 15px" align ="left"> Connected</Box>
            ) : (
                
                <Button
                backgroundColor="#D6517D"
                borderRadius="5px"
                color="white"
                cursor="pointer"
                fontFamily="inherit"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect</Button>
            )}
            
         </Flex>


    );
};


export default NavBar;