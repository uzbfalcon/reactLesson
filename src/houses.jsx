import React from "react";
import Box from "./boxs.jsx"
import './house.css'
import './index.css'




class Houses extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Box
                    src='https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg'
                    title='New Apartment Nice Wiev'
                    title2='Quincy ST, Brooklyn, NY, USA'
                    FaBed = '4 BEDS'
                    FaCarAlt = '1 GARAGE'
                    FaBath = '2 BATHS'
                    FaRulerCombined = '1200 SQ FT '
                    title3='$2,800/mo'
                    title4='$7500/mo' />
                    

                <Box src='https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg'
                    title='New Apartment Nice Wiev'
                    title2='Quincy ST, Brooklyn, NY, USA'
                    FaBed = '4 BEDS'
                    FaCarAlt = '1 GARAGE'
                    FaBath = '2 BATHS'
                    FaRulerCombined = '1200 SQ FT '
                    title3='$2,800/mo'
                    title4='$7500/mo' />


                <Box src='https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174__340.jpg'
                    title='New Apartment Nice Wiev'
                    title2='Quincy ST, Brooklyn, NY, USA'
                    FaBed = '4 BEDS'
                    FaCarAlt = '1 GARAGE'
                    FaBath = '2 BATHS'
                    FaRulerCombined = '1200 SQ FT '
                    title3='$2,800/mo'
                    title4='$7500/mo' />

            </div>
        )
    }
}




export default Houses