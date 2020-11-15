import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PlusBtn from '../../buttons/Plus/PlusBtn';
import './horizontal.scss'
function HorizontalCard({item}) {
    const [fruits, setfruits] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setfruits(item)
        }, 1000);
    }, [])
    return (
         <SkeletonTheme color="#fff" highlightColor="#96deda">
        <div className="horizontal-card">
            <div className="price">{fruits.price}$</div>
            <div className="img">{<img src={fruits.img} alt=""/> || <Skeleton width={150} />}</div>
            <div className="info">
                <span className="f-name">{fruits.title || <Skeleton width={150} />}</span>
                <span className="f-hint">{fruits.hint || <Skeleton width={150} />}</span>
            </div>
            <div className="add-to-cart">
                <PlusBtn id={item.id} width={"30px"}/>
            </div>
        </div>
            </SkeletonTheme>
    )
}

export default HorizontalCard
