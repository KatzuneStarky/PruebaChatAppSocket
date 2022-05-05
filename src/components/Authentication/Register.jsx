import { VStack } from '@chakra-ui/layout'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button } from '@chakra-ui/react'

const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [show, setShow] = useState()

    const handleClick = () => setShow(!show)

    const postDetails = (pics) => {

    }

    const submitHandler = () => {
        
    }

    return (
        <VStack spacing={"5px"} color="black">
            <FormControl id='first-name' isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input
                    placeholder='Ingrese su nombre'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

            <FormControl id='email' isRequired>
                <FormLabel>Correo Electronico</FormLabel>
                <Input
                    placeholder='Ingrese su email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Ingrese nueva contraseña'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                            {show ? "Esconder" : "Ver"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Confirme su contraseña'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                            {show ? "Esconder" : "Ver"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Sube una foto</FormLabel>
                <Input
                    type={"file"}
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>

            <Button
                colorScheme={"blue"}
                width="100%"
                style={{marginTop: 15}}
                onClick={submitHandler}
            >
                Registrarse
            </Button>
        </VStack>
    )
}

export default Register