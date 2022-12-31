import './Dashbord.css';
import logo from '../logo.png';
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect} from 'react';
import { getToken, RemoveToken } from '../helpers/storage';
import { selectUser } from '../features/users/usersSlice.js'
import { useSelector} from 'react-redux';
import ModalAdd from './ModalAdd';
const Dashbord = () => {
  const navigate = useNavigate();
  const userStore = useSelector(selectUser);
  useEffect(() => {
    const token = getToken()
    if (!token) {
      navigate("/login");
    }
  }, [])
  const handleLogout = async (e) => {
    RemoveToken()
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar nav_color">
        <div className="container-fluid">
          <img src={logo} alt="Bootstrap" className='logo' />
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/login" className="logout_link " aria-current="page" onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="dashbord">
        <ModalAdd />
      </div>
      <div className="list-Perso">
        <span className="perso">List of Personal</span>
        <ul className="list-group">
          {userStore.map((item) => {
            return <li className="list-group-item" >{`${item.firstName} ${item.lastName}`}</li>
          })}
        </ul>
      </div>
    </div>
  );
}
export default Dashbord;