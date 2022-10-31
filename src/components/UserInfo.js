import phoneIcon from './icons/phone.png'
import cellIcon from './icons/cell.png'
import emailIcon from './icons/email.png'
import calendarIcon from './icons/calendar.png'
import locationIcon from './icons/location.png'

const UserInfo = (props) => {
  return (
    <>
      <div className='user-avatar'>
        <img src={props.user.picture.large} alt='user avatar'/>
      </div>
      <div className='user-name'>
        {props.user.name.title + '. ' + props.user.name.first +  ' ' + props.user.name.last}
      </div>
      <div className='user-phone'>
        <img src={phoneIcon} className='icon' alt='phone icon'/>
        {props.user.phone}
      </div>
      <div className='user-cell'>
        <img src={cellIcon} className='icon' alt='cell icon'/>
        {props.user.cell}
      </div>
      <div className='user-email'>
        <img src={emailIcon} className='icon' alt='email icon'/>
        {props.user.email}
      </div>
      <div className='user-age'>
        <img src={calendarIcon} className='icon' alt='calendar icon'/>
        {props.user.dob.date.slice(0,10)} ({props.user.dob.age} y.o)
      </div>
      <div className='user-location'>
        <img src={locationIcon} className='icon' alt='location icon'/>
        {' ' + props.user.location.country + ', ' + props.user.location.state + ' state,' + ' city ' + props.user.location.city + ', ' + props.user.location.street.name + ' st., ' + props.user.location.street.number}
      </div>

    </>
  )
}

export default UserInfo

 //
