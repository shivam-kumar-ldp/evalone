import { Button } from "@mui/material";

type buttonType={
    children:String
}

const ButonComponent=(props:buttonType)=>{
    return(
        <Button variant='text' color='error'>{props.children}</Button>
    )
}

export default ButonComponent;