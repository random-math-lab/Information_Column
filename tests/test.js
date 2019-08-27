import React from 'react';
import { shallow, mount, render } from 'enzyme';
import request from 'supertest';
import app from '../server/index.js';
import { db, getBooking } from '../database/index.js';
import Booking from '../client/src/components/Booking.jsx';

afterAll(() => db.close());

// describe('Booking Component', () => {
//   it('renders the Booking element', () => {
//     const wrapper = shallow(<Booking />);
//     console.log(wrapper);
//     expect(wrapper.find('Booking')).toBe();
//   });
// });

// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
//   });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });

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
