import React, {FC} from 'react';


export const Layout:FC<JSX.Element> = ({children}) => {
    return(
        <main>
            {children}
        </main>
        )

}

