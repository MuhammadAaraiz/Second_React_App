import '../../src/App.css'

const Cardsmain2 = (props) => {
    return <>
        <div className='container'>
            <div className="row ">
                <div className="col-sm-3">
                    <div className="card">
                        <span htmlFor="" className={props.className}>{props.span}   </span>
                        <img src="images\Fifth_card.webp" className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">{props.p1} <s>{props.s} </s></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src="images\Sixth_card.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">{props.p}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <span className='paragraph23'>New</span>
                        <img src="images\Seventh_card.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">{props.p3} <s>{props.s1} </s></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src="images\Eight_card.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">$280.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
export { Cardsmain2 }