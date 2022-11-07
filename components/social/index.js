import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaRegEnvelope} boxSize="50" />
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