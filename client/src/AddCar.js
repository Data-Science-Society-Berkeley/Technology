import React from 'react'
import { Button } from 'semantic-ui-react'

const style = {
    button: {
        background: "White",
        position: 'absolute',
        left: '50%',
        marginLeft: '-50px',
    },
}

const AddCar = () => <Button style={style.button}>Add Car</Button>

export default AddCar