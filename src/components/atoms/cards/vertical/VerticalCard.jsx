import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PlusBtn from '../../buttons/Plus/PlusBtn';
import jar from '../../../../Assets/img/jar.png'
import './verticalCard.scss'
function VerticalCard({ item }) {
    const [bestSellers, setbestSellers] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setbestSellers(item)
        }, 1000);
    }, [])
    return (
        <div className="vertical-card">
            <img src={jar} alt="jar" />
            <div className="bottom">
                <SkeletonTheme color="#fff" highlightColor="#96deda">
                    <h1>{bestSellers.title || <Skeleton width={150} />}</h1>
                    <span>{bestSellers.hint || <Skeleton width={150} />}</span>
                    <p>{bestSellers.description || <Skeleton width={150} count={3} />} </p>
                    <div className="add-to-cart">
                        <span className="price">{bestSellers.price ? bestSellers.price + "$" : <Skeleton width={150} />}</span>
                        <PlusBtn id={bestSellers.id} width={"46px"} />
                    </div>
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default VerticalCard
