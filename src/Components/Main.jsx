import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { ForkLeft } from '@mui/icons-material';

import './Main.css'

function Main() {

    const [loanamount,setLoanAmount]=useState('');
    const [tenure,setTenure]=useState('');
    const [interest,setInterest]=useState('');
    const [emi,setEmi]=useState('');
    const Calculate=()=>{
        let p=Number(loanamount);
        let n=Number(tenure)*12;
        let r=Number(interest/100/12);
        let x =Math.pow(1+r,n);
        let total=p*r*x/(x-1);
        setEmi(Math.round(total));
        console.log(p,n,r,x,total);
        // setTotalAmt(Math.round(total)*n)
        
    }
  return (
    <div>
 <Box
      sx={{
        width: 1100,
        maxWidth: '100%',
        margin:"50px",
     
    
      }}
    >
        <div className='text'>
      <TextField fullWidth label="LOAN AMOUNT" id="loanamount" onChange={e=>setLoanAmount(e.target.value)} /> <br /><br />
      <br /><TextField fullWidth label="TENURE(YEAR)" id="year" onChange={e=>setTenure(e.target.value)} /><br /><br /><br />
      <TextField fullWidth label="INTEREST" id="interest" onChange={e=>setInterest(e.target.value)} />
      <br />
      <br />
      <Button variant="contained" color="success" onClick={Calculate}>
  CALCULATE EMI
</Button>
      </div>
    </Box>

    <div>
        <h1>YOUR MONTHLY EMI:&#8377;:{emi} </h1>
    </div>
        
    </div>

  )
}

export default Main