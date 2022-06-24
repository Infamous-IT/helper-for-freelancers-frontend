import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SaveUkraine = () => {
    return (
        <Box sx={{maxWidth: 825, margin: '0 auto'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'end',
                flexDirection: 'column',
                maxWidth: 200,
                height: 215,
                mt: 7,
                border: '1px solid rgb(224, 227, 231)',
                borderBottomLeftRadius: '10%',
                borderBottomRightRadius: '10%',
                backgroundColor: 'rgba(243, 246, 249, 0.4)'
            }}>
                <a
                    target='_blank'
                    style={{textDecoration: 'none'}}
                    href="https://war.ukraine.ua/support-ukraine/">
                    <Box sx={{backgroundColor: 'blue', maxWidth: 200, color: 'blue', borderTopLeftRadius: '10%',
                        borderTopRightRadius: '10%'
                    }}>.</Box>
                    <Box sx={{backgroundColor: 'yellow', maxWidth: 200, color: 'yellow'}}>.</Box>
                    <Typography sx={{ml: 1, mt: 2, color: 'rgb(26, 32, 39)'}}>Helper For Freelancers stands in solidarity
                        with the
                        Ukrainian people against the Russian invasion.</Typography>
                    <Typography sx={{ml: 1, mt: 1, mb: 1, color: 'rgb(26, 32, 39)'}}>Find out how you
                        can help.</Typography>
                </a>
            </Box>
        </Box>
    )
}

export default SaveUkraine;