import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AccountNav from '../components/AccountNav';
import PlaceImg from '../components/PlaceImg';
import { format, differenceInCalendarDays } from 'date-fns';
import { Link } from 'react-router-dom';
import BookingDates from '../components/BookingDates';

const BookingsPage = () => {
	const [bookings, setBookings] = useState([]);
	useEffect(() => {
		const getBookings = async () => {
			const { data } = await axios.get('/bookings');
			console.log(data);
			setBookings(data);
		};
		getBookings();
	}, []);

	const bookingHelper = (booking) => {
		return (
			<div
				// to={`/account/bookings/${booking._id}`}
				className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden my-2'
			>
				<div className='w-48'>
					<PlaceImg place={booking.place} />
				</div>
				<div className='py-3 pr-3 grow'>
					<h2 className='text-xl'>{booking.place.title}</h2>
					<div className='text-xl'>
						<div className='flex gap-2 border-t '></div>
						<div className='text-xl'>
							<BookingDates
								booking={booking}
								className='items-center mb-2 mt-4  text-gray-600'
							/>

							<div className='flex gap-1 items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-7 h-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
									/>
								</svg>
								<span className='text-2xl'>Total price: ₹{booking.price}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<AccountNav />
			<div>
				{bookings?.length > 0 ? (
					bookings.map(bookingHelper)
				) : (
					<div className='flex flex-col gap-4'>
						<h1 className='text-3xl font-semibold'>No bookings... yet!</h1>
						<p className='font-'>
							Time to dust off your bags and start planning your next adventure
						</p>
						<div className=''>
							<button className='font-semibold border border-black px-4 py-2 rounded-lg bg-transparent hover:bg-slate-100 hover:transition-all'>
								Start planning
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default BookingsPage;
