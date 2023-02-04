import React from 'react'
import { Button, Input } from 'antd';
const FormCom = () => {
  return (
    <div>
        <h2>Quiz</h2>
       <div >
       <i class="fa-regular fa-user" style={{paddingRight:"25px",}}>
            <span style={{columnGap:"15%"}}>Kanan </span>
            <span style={{backgroundColor:"green"}}>NEW</span>
            <h6>salam Gurban</h6>
        </i>
       </div>
       <div style={{marginRight:'15%'}}>
       <i class="fa-regular fa-user" style={{paddingRight:"25px",}}>
            <span style={{columnGap:"15%"}}>Gurban </span>
            <span style={{backgroundColor:"green"}}>NEW</span>
            <h6>salam Kanan</h6>
        </i>
       </div>
       <div style={{marginRight:'15%',marginLeft:'15%'}}>
       <i class="fa-regular fa-user" style={{paddingRight:"25px",}}>
            <span style={{columnGap:"15%", }}>Kanan </span>
            <span style={{backgroundColor:"green"}}>NEW</span>
            <h6>necesen</h6>
        </i>
       </div>
       <input type="text" placeholder='message'style={{padding:"5px 25px", marginBottom:"1%"}}/><br></br>
        <Button type="primary">Gonder</Button>
    </div>
  )
}

export default FormCom