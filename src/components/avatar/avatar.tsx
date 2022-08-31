import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'

const Avatar: FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
    return (
        <div {...rest}>
            <StaticImage
                alt={'Amelia'}
                src={'./amelia.png'}
                objectFit={'cover'}
                objectPosition={'0px -13px'}
                style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                }}
            />
        </div>
    )
}

export default Avatar
