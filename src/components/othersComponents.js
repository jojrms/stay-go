/* eslint-disable jsx-a11y/alt-text */
const SpanBook = ({avaliation, location, spanId, h2Text, price, priceInitial, qtdDouble, spaceMeters}) => {

    return (
        <span className='spanBook'>
            <div className='divImage'>
                <span> 
                    <div/>
                    {avaliation}
                </span>
                <span> 
                    <div/>
                    <p>{location}</p>
                </span>
            </div>
            <div className="divInfoSpanBook">
                <span>
                    <img src="https://img.icons8.com/small/16/000000/bedroom.png"/>
                    <p>{qtdDouble}</p>
                </span>
                <span>
                    <img src="https://img.icons8.com/small/16/000000/bedroom.png"/>
                    <p>{spaceMeters}</p>
                </span>
                <span id={spanId}/>
            </div>
            <h2>{h2Text}</h2>
            <div style={{width: '100%', display: 'flex'}}>
                <div>
                    <div style={{display: 'flex'}}>
                        <h3>{price}</h3>    
                        <h4>{priceInitial}</h4>    
                    </div>
                    
                    <h4>per room per night</h4>
                </div>
                <button className="btnChoose">Choose</button>
            </div>
        </span>
    )
}

export default SpanBook;