import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'

const CalculatorComp = () => {

    const [count, setCount] = React.useState<string>("")

    const onAddDigit = (digit: string) => {
        const newCount = String(count).concat('', digit);
        setCount(newCount)
    }

    function changeSign() {
        if (count.substring(0, 1) === "-") {
            setCount(count.substring(1, count.length))
        }
        else {
            setCount("-" + count)
        }
    }

    const buttonStyle = { width: "100%" }

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <TextField id="calc" value={count} style={{ width: "100%", marginBottom: "5px" }} color="primary" focused />
                </Grid>
                {/* Row 1 */}
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => { setCount("") }} > Clear </Button>
                </Grid>
                <Grid item xs={5} md={5}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => setCount(count.substring(0, count.length - 1))} > Backspace </Button>
                </Grid>
                <Grid item xs={5} md={5}>
                    {/* eslint-disable-next-line no-eval */}
                    <Button variant="outlined" style={buttonStyle} onClick={() => setCount(eval(count))} > Enter </Button>
                </Grid>
                {/* Row 2 */}
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.exp(Number(count))} > exp </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("1")} > 1 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("2")} > 2 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("3")} > 3 </Button>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("/")} > / </Button>
                </Grid>
                {/* Row 3 */}
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.log(Number(count))} > log </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("4")} > 4 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("5")} > 5 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("6")} > 6 </Button>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("*")} > * </Button>
                </Grid>
                {/* Row 4 */}
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.sqrt(Number(count))} > sqrt </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("7")} > 7 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("8")} > 8 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("9")} > 9 </Button>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("-")} > - </Button>
                </Grid>
                {/* Row 5 */}
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.pow(Number(count), 2)} > sq </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => changeSign()} > +/- </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("0")} > 0 </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit(".")} > . </Button>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("+")} > + </Button>
                </Grid>
                {/* Row 6 */}
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.sin(Number(count))} > sin </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.tan(Number(count))} > tan </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => Math.cos(Number(count))} > cos </Button>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("(")} > ( </Button>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit(")")} > ) </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CalculatorComp