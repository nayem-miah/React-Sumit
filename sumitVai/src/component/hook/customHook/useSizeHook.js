import React from 'react';

const useSizeHook = (screen) => {

    const [onSmallScreen, setOnSmallScreen] = React.useState(false)



    React.useEffect(()=>{

        const checkScreenSize = ()=>{
            setOnSmallScreen(window.innerWidth < screen);
        }

        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);

        return ()=>window.removeEventListener('resize',checkScreenSize)
 

    },[screen])
    // the thing which is from outside is the dependancy. here screen is the dependency

    return onSmallScreen;
}

export default useSizeHook