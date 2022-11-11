
const Service = ({ service }) => {
    const {name,description,icon} = service
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure className="p-10">
                <img src= {icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ name}</h2>
                <p>{ description}</p>
                
            </div>
        </div>
    );
};

export default Service;