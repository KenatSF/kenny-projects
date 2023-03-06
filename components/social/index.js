import Icon from '@chakra-ui/icon'
import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import { Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { useState } from "react";
import { Input, useClipboard } from "@chakra-ui/react";
import { Button } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/media-query';

function Social() {
    const [mail, setMail] = useState('main.ksfg@gmail.com');
    const { hasCopied, onCopy } = useClipboard(mail);

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <HStack spacing={isNotSmallerScreen ? "32" : "12"} alignSelf="flex-start">
            
            <Button onClick={onCopy} ml={8}>
                            <Icon as={FaRegEnvelope} boxSize="50" />
                            {hasCopied ? 'Copied' : ''}
                        </Button>
            <Link href='https://github.com/KenatSF' isExternal>
                <Icon as={FaGithub} boxSize="50" />
            </Link>
            <Link href='https://www.linkedin.com/in/kenatsf' isExternal>
                <Icon as={FaLinkedin} boxSize="50" />
            </Link>
        </HStack>
    )
}

export default Social