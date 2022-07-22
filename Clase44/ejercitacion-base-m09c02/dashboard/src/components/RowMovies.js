import React from 'react'
function RowMovies (props){
            let classI = props.icono+" text-gray-300"
            let color = props.color+ " shadow h-100 py-2"
            return(<div className="col-md-4 mb-4">
                <div className={color}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.texto}</div>
                                 <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cantidad}</div>
                            </div>
                            <div className="col-auto">
                                <i className={classI}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
}

RowMovies.defaultProps ={
    texto:"",
    cantidad:0,
    color:"border-left-primary",
    icono:"fas fa-exclamation-triangle"


}
export default RowMovies