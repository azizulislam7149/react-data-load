import React, { use } from 'react';
import User2 from '../User2/User2';

const Users2 = ({usersLoadingdataPromise}) => {
 const useLoadingData = use(usersLoadingdataPromise);
 console.log(useLoadingData);
    return (
        <div>
            <h2>Data loading coming soon........</h2>
            <div>
                {
                    useLoadingData.map(post => <User2 post={post}></User2>)
                }
            </div>
        </div>
    );
};

export default Users2;