import { Button } from 'antd'
import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Helmet } from 'react-helmet'

const FormComponentss = () => {
const [data,setData]=useState([])
const [inputValue, setInputValue] = useState("")
const [postData,setPostData]=useState([])
  const getData = async()=>{
    const response = await axios ("http://localhost:8000/message");
    setData(await response.data)
  }
  useEffect(() => {
  getData();
  }, [])

  

  const postFormData = async()=>{
    const obj={
      name:"Qurban M",
      message:inputValue,
    }
    console.log(obj);
   axios.post("http://localhost:8000/message",obj)

  }
  // useEffect(() => {
  //   postFormData();
  // }, [])

  return (
    <div>
          <Helmet>
<title> Qurban M</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>
      <div>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
  <button onClick={()=>{
    postFormData()
  }}>Gonder</button>
      </div>
        {data.map((element,i)=>{
          return(
            <Flex key={element._id} >
            <Avatar  />
            <Box ml='3' style={{display:"flex", justifyContent:"flex-end"}}>
            <div><i class="fa-regular fa-user"></i></div>
              <Text fontWeight='bold'>
                {element.name}
                <Badge ml='1' colorScheme='green' style={{backgroundColor:"green"}}>
                  New
                </Badge>
              </Text>
              <Text fontSize='sm'>{element.message}</Text>
            </Box>
            
          </Flex>
        
          )
        })     
  }

    </div>
  )
}
export default FormComponentss
