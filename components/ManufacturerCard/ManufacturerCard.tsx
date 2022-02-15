/* eslint-disable @next/next/no-img-element */

function ManufacturerCard({ manufacturer }: any) {

    const address = manufacturer?.addresses[0]

    return (
        <div className='col-md-3 my-2 rounded'>
            <div
                className='card shadow-sm position-relative rounded w-100 h-100 p-1'
                style={{ height: '300px' }}
            >
                
                <div className='d-flex justify-content-around w-100 rounded' style={{ height: '90px' }}>
                    {
                        manufacturer?.meta?.banners?.map((cv: any) => (
                            <img
                                className="h-100 w-50 m-1 rounded overflow-hidden"
                                key={cv._id}
                                src={cv.url}
                                alt=''
                                style={{  }}
                            />
                    )) 
                    }
                </div>

                <div
                    className='card-logo ms-3'
                    style={{ position: 'absolute', top: '40px' }}
                >
                    <img
                        src={manufacturer?.meta?.logo?.url} 
                        alt='img-fluid' 
                        className=""
                    />
                </div>

                <div className='card-body mt-4 cb px-3'>
                    <h5 className='card-title fw-bold pt-2'>{manufacturer?.meta?.companyName}</h5>

                    <p className='card-text d-flex justify-content-between align-items-center text-secondary'>
                        <span>
                            {address?.city}, {address?.country}
                        </span>
                        <span className="fw-bold">.</span>
                        <span className='mqty'> Min Qty {manufacturer?.minOrderQty}</span>
                    </p>

                    <p className="text-secondary lh-1">
                        <span>{manufacturer?.productGroups[0]?.name}, </span>
                        <span>{manufacturer?.productGroups[1]?.name}</span>
                    </p>

                    <button 
                        className='btn btn-success text-success rounded-pill border-0 fw-bold px-4'
                        style= {{ backgroundColor: '#d1ffd0', color: '#01896a'}} 
                    >
                        
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerCard