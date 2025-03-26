import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"
import Stat from "./Stat"
import { formatCurrency } from "../../utils/helpers"

/* eslint-disable react/prop-types */
function Stats({bookings, confirmedStay, numDays, cabinCount}) {
    //1 num of bookings
    const numBookings = bookings.length

    //2 sales
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice , 0)

    //3 checkins
    const checkins = confirmedStay.length

    // 4 occupation
    const occupation = confirmedStay.reduce((acc, cur)=> acc + cur.numNights, 0) / (numDays * cabinCount)
    return (
        <>
            <Stat icon={<HiOutlineBriefcase/>} title="Bookings" color="blue" value={numBookings}/>
            <Stat icon={<HiOutlineBanknotes/>} title="Sales" color="green" value={formatCurrency(sales)}/>
            <Stat icon={<HiOutlineCalendarDays/>} title="Check ins" color="indigo" value={checkins}/>
            <Stat icon={<HiOutlineChartBar/>} title="Occupancy Ratings" color="yellow" value={Math.round(occupation * 100) + "%"}/>    
        </>
    )
}

export default Stats
