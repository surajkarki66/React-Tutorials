import React, {useEffect} from 'react';

const SideEffects = React.memo(()=> {
    // Like componentDidMount
    // only run on mount. pass an empty array
    useEffect(() => {
        console.log('[Fetching Data From Server]');
    }, []);  // empty array because we only run once

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Fetched Data from the server</h2>
        </div>
    )

});

export default SideEffects;