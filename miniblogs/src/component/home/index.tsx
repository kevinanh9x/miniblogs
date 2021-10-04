// import { Link } from "react-router-dom";
import Lefthome from "./homepage/Lefthome";
import RightHome from "./homepage/RightHome";

const Index = () => {
    return (
        <div className='container'>
            <div className='row mt-20'>
                <div className='col-md-3 home-left'>
                    <Lefthome></Lefthome>
                </div>

                <div className='col-md-8 home-right'>
                    <RightHome></RightHome>
                </div>
            </div>
        </div>
    )
}

export default Index
