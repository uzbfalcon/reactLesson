import React from "react";
import Box from "./boxs.jsx"
import './house.css'
import './index.css'


class Houses extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Box src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU' title='New Apartment Nice Wiev' title2='Quincy ST, Brooklyn, NY, USA' title3='$2,800/mo' title4='$7500/mo' />
                <Box src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOD0dvMatP5SsLWyrKzLcmwBAce-PkwIZIuDaQtxEKVNDrPMem2nv8olutw7bLUAsEEAQ&usqp=CAU' title='New Apartment Nice Wiev' title2='Quincy ST, Brooklyn, NY, USA' title3='$2,800/mo' title4='$7500/mo' />
                <Box src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn_VeykoVVO1vZxKx0I95uu1IEOuIvU8-n1RLdJYRGwM67YPFvrmQbA6X67Ug-hRb2zU4&usqp=CAU' title='New Apartment Nice Wiev' title2='Quincy ST, Brooklyn, NY, USA' title3='$2,800/mo' title4='$7500/mo' />


            </div>
        )
    }
}

export default Houses