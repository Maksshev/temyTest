import React from 'react';

const style = {
    position: 'absolute',
    top: '0',
    width: '100%',
    background: '#8BC34A',
    color: '#fff',
    padding: '10px 0px',
    animation: 'cssAnimation 3s ease-in 1s forwards',
    animationFillMode: 'forwards'
}

const UserAddedMessage = ({showAddedStatus}) => {
    return (

        showAddedStatus ?

        <div style={style}>
            User added!
        </div>

            :

            null
    );
};

export default UserAddedMessage;
