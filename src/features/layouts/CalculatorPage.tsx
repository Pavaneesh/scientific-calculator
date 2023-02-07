import React from 'react'
import CalculatorComp from '../../components/Calculator/Calculator'
import { Box } from '@mui/material'

const CalculatorPage = () => {

    const styles = { width: "400px", border: "5px solid #1976d2", borderRadius: "10px", padding: "20px" }

    return (
        <Box style={styles}>
            <h3> SCIENTIFIC CALCULATOR </h3>
            <CalculatorComp />
        </Box>
    )
}

export default CalculatorPage