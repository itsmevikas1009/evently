import React from 'react';
import { Container } from 'react-bootstrap';

const featuredArtists = [
    { name: 'Don Toliver', img: 'https://media.insider.in/image/upload/c_crop,g_custom/v1756987926/pr7s3fjv1w5trer0szf2.png' },
    { name: 'DJ Scheme', img: 'https://media.insider.in/image/upload/c_crop,g_custom/v1757303154/tkmh7tprqfptdjxcki4u.png' },
    { name: 'Karan Aujla', img: 'https://media.insider.in/image/upload/c_crop,g_custom/v1756999925/m6gmdpmfdnpsrri6synm.png' },
    { name: 'Akon', img: 'https://media.insider.in/image/upload/c_crop,g_custom/v1754904330/vipsq91tydphmwjrylhw.jpg' },
];

const ArtistsSpotlight = () => {
    return (
        <Container className="my-5">
            <h3 className="mb-4">Artists in your District</h3>
            <div className="d-flex overflow-auto pb-2">
                {featuredArtists.map((artist, index) => (
                    <div key={index} className="text-center me-4 flex-shrink-0" style={{ cursor: 'pointer', gap: '10px' }}>
                        <div className="bg-secondary rounded-circle mb-2" style={{ width: '20vw', height: '20vw', margin: '0 auto', backgroundImage: `url(${artist.img})`, backgroundSize: 'cover' }}>
                            {/* Image Placeholder */}
                        </div>
                        <p className="small mb-0">{artist.name}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default ArtistsSpotlight;