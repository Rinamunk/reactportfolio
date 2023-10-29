import { Button, Typography } from "@mui/material";



export function MainBtn(props){
    return(
            <Button variant="filled"
                component={NavLink}
                to={props.page}
           
                sx={{
                    color: customTheme => customTheme.palette.background.paper,
                    backgroundColor: customTheme => customTheme.palette.secondary.main,
                    width:"80%"
                }}
            >
                <Typography variant="button">{props.name}</Typography>
            </Button>
  

    )
}