import TypographyComponent from "../../Atoms/Typography";
import { Box, Stack } from "@mui/material";


export const CardComponent=(props:any)=> {
  return (
    <Stack sx={{width:'500px',margin:'10px'}} direction='row' spacing={3}>
        <img src={props.logo} alt="BioLogo"/>
        <Box>
            <TypographyComponent variant='h6'>{props.typo1}</TypographyComponent>
            <TypographyComponent variant='body1'>{props.typo2}</TypographyComponent>
            <TypographyComponent variant='body1'>{props.typo3}</TypographyComponent>
        </Box>
    </Stack>

  );
}

CardComponent.defaultProps={
  typo1:'',
  typo2:'By D K Hudson',
  typo3:'Catergory - Humorous'
}



