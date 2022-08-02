import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

function addDate () {
        const [selectedDate, setSelectedDate] = useState(null)
        return (
            <div className='addDate'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText={'dd/mm/yyyy'}
                        filterDate={date => date.getDay() !== 1 && date.getDay() !== 0} // weekends cancel
                        showYearDropdown // year show and scrolldown alos
                        scrollableYearDropdown
                    />
            </div>
        )

}

export default addDate





