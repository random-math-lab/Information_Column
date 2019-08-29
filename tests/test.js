import React from 'react';
import { shallow, mount, render} from 'enzyme';
import request from 'supertest';
import app from '../server/index.js';
import { db, getBooking } from '../database/index.js';
import Booking from '../client/src/components/Booking.jsx';
import Guests from '../client/src/components/Guests.jsx';
import Price from '../client/src/components/Price.jsx';
import Calendar from '../client/src/components/Calendar.jsx';

afterAll(() => db.close());

describe('Booking Component', () => {
  it('renders the Booking element', () => {
    const wrapper = shallow(<Booking />);
    console.log(wrapper);
    expect(wrapper.state('isCheckinOpen')).toBe(false);
    expect(wrapper.state('numAdults')).toBe(1);
  });
});

describe('components Test Suite', () => {
  it('Should render correctly with no props', () => {
    const wrapper = shallow(<Guests />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correctly with no props', () => {
    const wrapper = shallow(<Price />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Guests /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<Guests isOpen/>);
  });
});

describe('<Price /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<Price price/>);
  });
});

describe('<Calendar /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<Calendar calendarMonth firstDayOfMonth/>);
  });
});


describe('Database', () => {
  it('retrieves listing data from the database', () => {
    return getBooking({ _id: 110 }).exec()
      .then(data => expect(data[0]._id).toBe(110))});
});

describe('API Calls', () => {
  it('should respond with index.html', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('should respond with a 404 status with request to unspecified endpoint', async () => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toBe(404);
  });

  it('should respond to GET /guests/:hostid with guests data', async () => {
    const res = await request(app).get('/guests/101');
    expect(res.statusCode).toBe(200);
    expect(res.body[0]).toHaveProperty('_id');
    expect(res.body[0]).toHaveProperty('ownerName');
    expect(res.body[0]).toHaveProperty('guestMax');
    expect(res.body[0]).toHaveProperty('price');
    expect(res.body[0]).toHaveProperty('cleaningFee');
    expect(res.body[0]).toHaveProperty('occupancyFee');
    expect(res.body[0]).toHaveProperty('avgRating');
    expect(res.body[0]).toHaveProperty('numReviews');
    expect(res.body[0]).toHaveProperty('numViews');
    expect(res.body[0]).toHaveProperty('minStay');
    expect(res.body[0]).toHaveProperty('maxStay');
    expect(res.body[0]).toHaveProperty('available');
    expect(res.body[0]._id).toBe(101);
  });
});
