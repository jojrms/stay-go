const SpanBook = ({avaliation, location, spanId, h2Text, price}) => {

    return (
        <span className='spanBook'>
            <div className='divImage'>
                <span> 
                    <div/>
                    {avaliation}
                </span>
                <span> 
                    <div/>
                    {location}
                </span>
            </div>
            <div>
                <span></span>
                <span></span>
                <span id={spanId}/>
            </div>
            <h2>{h2Text}</h2>
            <div style={{width: '100%', display: 'flex'}}>
                <div>
                    <h3>{price}</h3>
                    <h4>per room per night</h4>
                </div>
            </div>
        </span>
    )
}

export default SpanBook;