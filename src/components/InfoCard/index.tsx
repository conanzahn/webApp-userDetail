import React, { Fragment, useState, useEffect } from 'react';

import './style.scss';
import IUsersInfo from '../../types/IUsersInfo';
import { InfoLabel } from '../../constants/InfoLabel';

interface InfoCardProps {
    item: IUsersInfo;
}

const InfoCard:React.FC<InfoCardProps> = ({ item }) => {

    const [isActive, setActive] = useState(false);

    function handleClick() {
        setActive(!isActive);
    }

    // Format date of birth: 01 Jan 2021
    const dateFormatted = (originDate: string) => {
        return new Date(originDate).toUTCString().substring(5,16);
    }

    return (
        <Fragment>
                <div className={`${!isActive ? 'card':'card card-active'}`} onClick={() => handleClick()}>
                    <div className='content'>
                        <div className='content-top'>
                            <div className={`${!isActive ? 'circle' : 'circle circle-active'}`}>
                                <div className='icon' />
                            </div>
                            <div className='head'>
                                <div className='title'>
                                    {item.name.title}
                                </div>
                                <div className='name'>
                                    {item.name.first} {item.name.last}
                                </div>
                            </div>
                            <img className='photo-sm' src={item.picture.thumbnail} />
                            <img className='photo' src={item.picture.medium} />
                        </div>

                        <div className='horizon-line' />

                        <div className='content-body'>
                            <div className='group g-phone'>
                                <div className='data'>
                                    {item.phone}
                                </div>
                                <div className='label'>
                                    {InfoLabel[0]}
                                </div>
                                {isActive && (
                                    <Fragment>
                                        <div className='divide-line' />
                                        <div className='data'>
                                            {item.location.city}
                                        </div>
                                        <div className='label'>
                                            {InfoLabel[3]}
                                        </div>
                                    </Fragment>
                                )}
                            </div>

                            <div className='group g-dob'>
                                <div className='data'>
                                    {dateFormatted(item.dob.date)}
                                </div>
                                <div className='label'>
                                    {InfoLabel[1]}
                                </div>
                                {isActive && (
                                    <Fragment>
                                        <div className='divide-line' />
                                        <div className='data'>
                                            {item.location.state}
                                        </div>
                                        <div className='label'>
                                            {InfoLabel[4]}
                                        </div>
                                    </Fragment>
                                )}
                            </div>

                            <div className='group g-email'>
                                <div className='data'>
                                    {item.email}
                                </div>
                                <div className='label'>
                                    {InfoLabel[2]}
                                </div>
                                {isActive && (
                                    <Fragment>
                                        <div className='divide-line' />
                                        <div className='data'>
                                            {item.location.country}
                                        </div>
                                        <div className='label'>
                                            {InfoLabel[5]}
                                        </div>
                                    </Fragment>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='photo'>
                        <img className='photo' src={item.picture.large} />
                    </div>
                </div>
            
        </Fragment>
    )
}
export default InfoCard;
