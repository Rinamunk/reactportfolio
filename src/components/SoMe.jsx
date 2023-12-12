//{ Lavet af Victoria }


import { Box, Stack, Typography } from '@mui/material';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';

export default function SoMe() {
    return (
        <main>
            <Stack direction="row"  sx={{ 
                p: '0 5em', 
                width: "100%", 
                color: customTheme => customTheme.palette.primary.main,
                flexWrap: 'wrap',
                textAlign: 'center',
                justifyContent: 'center'
                          
        }}>
                <Typography variant='h2'
                sx={{
                    fontFamily: 'SEAS',

                }}
                > Lets Connect!</Typography>
                
            </Stack>

            <Stack spacing={4} direction={"row"} sx={{ display: 'flex', justifyContent: 'center', height: '50em', marginTop: '3em' }}>

                <Box>
                    <InstagramEmbed url='https://www.instagram.com/rinasartwork/' width={450} height={800}
                    />
                </Box>

            </Stack>
        </main>


    )
}