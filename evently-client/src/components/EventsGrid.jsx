import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const EventCard = ({ event }) => (
    <Card className="h-100 shadow-sm border-0">
        <Card.Img 
            variant="top" 
            src="https://media.insider.in/image/upload/c_crop,g_custom/v1743521846/s0tsemkrem7ijtcqybnj.jpg"
            style={{ height: '460px',width:"344px" , backgroundColor: event.isBig ? '#3498db' : '#8e44ad' }} 
            className="text-white d-flex align-items-center justify-content-center"
        >
            {/* Image Placeholder */}
        </Card.Img>
        <Card.Body>
            <Card.Title className="fw-bold fs-6">{event.title}</Card.Title>
            <Card.Text className="text-muted small mb-1">{event.venue}</Card.Text>
            <Card.Text className="text-secondary small">{event.date}</Card.Text>
        </Card.Body>
    </Card>
);

const allEvents = [
    { id: 1, title: 'All Star Comedy Show ft. Your Favourite Comedians', venue: 'Canvas Laugh Club', date: 'Today, 7:00 PM', isBig: true },
    { id: 2, title: 'IPL 2024: Delhi Capitals vs...', venue: 'Feroz Shah Kotla', date: 'Tomorrow, 7:30 PM', isBig: true },
    { id: 3, title: 'IPL 2024: Mumbai Indians vs...', venue: 'Wankhede Stadium', date: 'This Weekend, 7:30 PM', isBig: true },
    { id: 4, title: 'Music Night at Deli Cafe', venue: 'Deli Lake', date: 'Fri, 8:00 PM', isBig: false },
    { id: 5, title: 'Heritage Walk', venue: 'Old Delhi', date: 'Sat, 10:00 AM', isBig: false },
    { id: 6, title: 'Yoga Workshop', venue: 'Park Hyatt', date: 'Sun, 6:00 AM', isBig: false },
    { id: 7, title: 'Rock Band Live', venue: 'Aman Gopi Live', date: 'Today, 9:00 PM', isBig: false },
];

const dayFilters = ['All events', 'Today', 'Tomorrow', 'This Weekend'];
const genreFilters = ['Under ₹500', 'Comedy', 'Standup', 'Free'];

const EventsGrid = () => {
    const [activeDayFilter, setActiveDayFilter] = useState('All events');

    const filteredEvents = allEvents.filter(event => 
        activeDayFilter === 'All events' || event.date.includes(activeDayFilter.split(' ')[0])
    );

    const bigEvents = filteredEvents.filter(e => e.isBig);
    const smallEvents = filteredEvents.filter(e => !e.isBig);

    return (
        <Container className="my-5">
      <h3 className="mb-4">All Events</h3>
            
            {/* Day Filters */}
            <div className="mb-4">
                {dayFilters.map(filter => (
                    <Button
                        key={filter}
                        variant={activeDayFilter === filter ? 'dark' : 'outline-secondary'}
                        onClick={() => setActiveDayFilter(filter)}
                        className="rounded-pill me-2 mb-2"
                        size="sm"
                    >
                        {filter}
                    </Button>
                ))}
            </div>

            {/* Genre/Price Filters */}
            <div className="mb-5">
                {genreFilters.map(filter => (
                    <Button 
                        key={filter} 
                        variant="light" 
                        className="rounded-pill border text-dark me-2 mb-2" 
                        size="sm"
                    >
                        {filter}
                    </Button>
                ))}
            </div>

            {/* Big Event Cards (2-column grid) */}
            <Row xs={1} md={2} className="g-4 mb-5">
                {bigEvents.map(event => (
                    <Col key={event.id}>
                        <EventCard event={event} />
                    </Col>
                ))}
            </Row>

            {/* Smaller Event Cards (2-column simpler layout) */}
            <Row xs={1} md={2} className="g-3">
                {smallEvents.map(event => (
                    <Col key={event.id}>
                        <div className="py-2 border-bottom">
                            <p className="fw-bold mb-1">{event.title}</p>
                            <small className="text-secondary">{event.venue} | {event.date}</small>
                        </div>
                    </Col>
                ))}
            </Row>
            
        </Container>
    );
};

export default EventsGrid;