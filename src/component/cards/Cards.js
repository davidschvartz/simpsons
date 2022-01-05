import "./Cards.css"
import imagen1 from "../../img/homer.jpg"
import imagen2 from "../../img/maggie.jpg"
import imagen3 from "../../img/bart.jpg"


const Cards = () => {
    return (
        <div className="row d-flex justify-content-center bg-warning ">
            <div className="card m-5" style={{width: "18rem"}}>
                            <img src={imagen1} class="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-danger">Leer mas</a>
                            </div>
                        </div>
                        <div className="card m-5" style={{width: "18rem"}}>
                            <img src={imagen2} class="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-danger">Leer mas</a>
                            </div>
                        </div>
<div className="card m-5 " style={{width: "18rem"}}>
                            <img src={imagen3} class="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-danger">Leer mas</a>
                            </div>
                        </div>

    
</div>


      );
}
 
export default Cards;