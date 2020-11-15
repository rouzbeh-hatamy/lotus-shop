import React from 'react'
import Skeleton from 'react-loading-skeleton';
import PlusBtn from '../../buttons/Plus/PlusBtn';
import jar from '../../../../Assets/img/JAR.png'
import './verticalCard.scss'
function VerticalCard({ item }) {

    return (
        <div className="vertical-card">
            <img src={jar} alt="jar" />
            <div className="bottom">
                <h1>{item.title || <Skeleton />}</h1>
                <span>{item.hint || <Skeleton />}</span>
                <p>{item.description || <Skeleton count={3} />} </p>
                <div className="add-to-cart">
                    <span className="price">{item.price || <Skeleton />}</span>
                    <PlusBtn id={item.id} />
                </div>
            </div>
        </div>
    )
}

export default VerticalCard
