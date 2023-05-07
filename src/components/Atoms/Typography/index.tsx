import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// type typographyType={
//   variant:String,
//   children:String
// }

const TypographyComponent=(props:any)=> {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant={props.variant}>
        {props.children}
      </Typography>
    </Box>
  );
}

export default TypographyComponent;