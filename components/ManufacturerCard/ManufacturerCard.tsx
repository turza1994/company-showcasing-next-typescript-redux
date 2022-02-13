/* eslint-disable @next/next/no-img-element */

function ManufacturerCard({ manufacturer }: any) {

    const address = manufacturer.addresses[0]

    return (
        <div className='col-md-3 my-2 equal'>
            <div
                className='card shadow-sm position-relative rounded'
                style={{ width: '19rem' }}
            >
                
                <div className='d-flex justify-content-around overflow-hidden'>
                    {
                        manufacturer.meta.banners.map((cv: any) => (
                            <img
                                className="w-50 rounded mx-1"
                                key={cv._id}
                                src={cv.url}
                                alt=''
                                style={{ objectFit: 'cover', height: '130px' }}
                            />
                    )) 
                    }
                </div>

                <div
                    className='card-logo ms-2'
                    style={{ position: 'absolute', top: '80px' }}
                >
                    <img src={manufacturer.meta.logo.url} alt='img-fluid' />
                </div>

                <div className='card-body mt-5 cb'>
                    <h5 className='card-title fw-bold'>{manufacturer.meta.companyName}</h5>

                    <p className='card-text d-flex justify-content-between align-items-center text-secondary'>
                        <span>
                            {address.city}, {address.country}
                        </span>
                        <span className="align-self-start fw-bold">.</span>
                        <span className='text-success fw-bolder'> Min Qty {manufacturer.minOrderQty}</span>
                    </p>

                    <p className="text-secondary lh-1">
                        <span>{manufacturer?.productGroups[0]?.name}, </span>
                        <span>{manufacturer?.productGroups[1]?.name}</span>
                    </p>

                    <button 
                        className='btn btn-success text-success rounded-pill border-0 fw-bold px-4'
                        style= {{ backgroundColor: '#d1ffd0'}} 
                    >
                        
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerCard