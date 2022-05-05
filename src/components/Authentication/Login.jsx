import { VStack } from '@chakra-ui/layout'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button } from '@chakra-ui/react'

const Login = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [show, setShow] = useState()

    const handleClick = () => setShow(!show)

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
                        placeholder='Ingrese su contraseña'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputRightElement width={"4.5rem"}>
                        <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                            {show ? "Esconder" : "Ver"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                colorScheme={"blue"}
                width="100%"
                style={{marginTop: 15}}
                onClick={submitHandler}
            >
                Iniciar Sesion
            </Button>

            <Button
                variant={"solid"}
                colorScheme={"red"}
                width="100%"                
                onClick={() => {
                    setEmail("person1@email.com")
                    setPassword("123456")
                }}
            >
                Entrar como invitado
            </Button>
        </VStack>
    )
}

export default Login