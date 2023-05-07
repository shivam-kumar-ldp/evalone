import { CardComponent } from "../molecules/Card";
import ButonComponent from "../Atoms/Button";
import BioLogo from "../../assets/Biology.svg"
import PhysicsLogo from "../../assets/physics.svg"
import chemistryLogo from "../../assets/chemistry.svg"
import HistoryLogo from "../../assets/history.svg"

const Organ=(props:any)=>{
    return(
        <>
            <CardComponent logo={BioLogo} typo1='Super Simple Biology' />
            <CardComponent logo={PhysicsLogo} typo1='Super Simple Physics' />
            <CardComponent logo={chemistryLogo} typo1='Super Chemistry' />
            <CardComponent logo={HistoryLogo} typo1='Super History' />
            <ButonComponent children={props.btnValue}/>
        </>
    )
}

export default Organ;