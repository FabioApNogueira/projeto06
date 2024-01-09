import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CustomCard({ destination }) {
    const { name, price, description, image } = destination;

    return (
        <div className="col">
            <div className="custom-card shadow-sm h-100">
                <div className="custom-card-image" style={{ height: 200 }}>
                    <Image
                        className="img-fluid"
                        fill={true}
                        objectFit="cover"
                        sizes="100%"
                        title={name}
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="custom-card-body d-flex flex-column justify-content-between">
                    <h5>{name}</h5>
                    <small>Apenas Ida</small>
                    <h3>R$ {price}</h3>
                    <p className="custom-card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link href={`/destination-profile/${destination.id}`} className="btn btn-primary btn-edit m-1">
                            Saiba mais
                            </Link>
                        </div>
                        <small className="text-muted">Até 24x</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
