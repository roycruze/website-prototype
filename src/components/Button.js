import React, { Children } from 'react'
import'./Button.css'
import { Link } from 'react-router-dom'
const STYLE = ['btn--primary', 'btn-outline']
const SIZES  = ['btn-medium', 'btn--large']

export const Button = ({children, type, onClick, buttonSize, buttonStyle}) => {
        const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        return(
            <Link to='/Sign-up' className='btn-mobile'>
                <Button
                className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                onClick={onclick}
                type={type}
                >
                    {Children}
                </Button>

            </Link>
        )
}