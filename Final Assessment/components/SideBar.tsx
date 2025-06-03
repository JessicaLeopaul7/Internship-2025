import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { IoRadioOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { SlTrophy } from "react-icons/sl";
import { SlGraduation } from "react-icons/sl";
import { TbHanger } from "react-icons/tb";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineFlag } from "react-icons/hi2";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <ul>
          <Link to="/" className="nav-link">
            <li
              className={
                location.pathname === "/" ? "active-nav" : "inactive-nav"
              }
            >
              <IoMdHome size={25} />
              <span>Home</span>
            </li>
          </Link>

          <Link to="/shorts" className="nav-link">
            <li
              className={
                location.pathname === "/shorts" ? "active-nav" : "inactive-nav"
              }
            >
              <SiYoutubeshorts size={25} />
              <span>Shorts</span>
            </li>
          </Link>
          <Link to="/subscriptions" className="nav-link">
            <li
              className={
                location.pathname === "/subscriptions"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <MdOutlineSubscriptions size={25} />
              <span>Subscriptions</span>
            </li>
          </Link>
        </ul>
      </div>
      <hr />
      <div className="sidebar-container">
        <ul>
          <Link to="/trending" className="nav-link">
            <li
              className={
                location.pathname === "/trending"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <FaFireAlt size={25} />
              <span>Trending</span>
            </li>
          </Link>
          <Link to="/shopping" className="nav-link">
            <li
              className={
                location.pathname === "/shopping"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <RiShoppingBag4Line size={25} />
              <span>Shopping</span>
            </li>
          </Link>
          <Link to="/music" className="nav-link">
            <li
              className={
                location.pathname === "/music" ? "active-nav" : "inactive-nav"
              }
            >
              <IoMusicalNotesOutline size={25} />
              <span>Music</span>
            </li>
          </Link>
          <Link to="/films" className="nav-link">
            <li
              className={
                location.pathname === "/films" ? "active-nav" : "inactive-nav"
              }
            >
              <PiFilmSlate size={25} />
              <span>Films</span>
            </li>
          </Link>

          <Link to="/live" className="nav-link">
            <li
              className={
                location.pathname === "/live" ? "active-nav" : "inactive-nav"
              }
            >
              <IoRadioOutline size={25} />
              <span>Live</span>
            </li>
          </Link>

          <Link to="/gaming" className="nav-link">
            <li
              className={
                location.pathname === "/gaming" ? "active-nav" : "inactive-nav"
              }
            >
              <IoGameControllerOutline size={25} />
              <span>Gaming</span>
            </li>
          </Link>

          <Link to="/news" className="nav-link">
            <li
              className={
                location.pathname === "/news" ? "active-nav" : "inactive-nav"
              }
            >
              <ImNewspaper size={25} />
              <span>News</span>
            </li>
          </Link>

          <Link to="/sports" className="nav-link">
            <li
              className={
                location.pathname === "/sports" ? "active-nav" : "inactive-nav"
              }
            >
              <SlTrophy size={25} />
              <span>Sports</span>
            </li>
          </Link>

          <Link to="/courses" className="nav-link">
            <li
              className={
                location.pathname === "/courses" ? "active-nav" : "inactive-nav"
              }
            >
              <SlGraduation size={25} />
              <span>Courses</span>
            </li>
          </Link>

          <Link to="/fashion&beauty" className="nav-link">
            <li
              className={
                location.pathname === "/fashion&beauty"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <TbHanger size={25} />
              <span>Fashion & beauty</span>
            </li>
          </Link>

          <Link to="/podcasts" className="nav-link">
            <li
              className={
                location.pathname === "/podcasts"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <MdOutlinePodcasts size={25} />
              <span>Podcasts</span>
            </li>
          </Link>
        </ul>
      </div>
      <hr />
      <div className="sidebar-container">
        <ul>
          <Link to="/settings" className="nav-link">
            <li
              className={
                location.pathname === "/settings"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <IoSettingsOutline size={25} />
              <span>Settings</span>
            </li>
          </Link>

          <Link to="/report" className="nav-link">
            <li
              className={
                location.pathname === "/report" ? "active-nav" : "inactive-nav"
              }
            >
              <HiOutlineFlag size={25} />
              <span>Report History</span>
            </li>
          </Link>

          <Link to="/help" className="nav-link">
            <li
              className={
                location.pathname === "/help" ? "active-nav" : "inactive-nav"
              }
            >
              <MdOutlineHelpOutline size={25} />
              <span>Help</span>
            </li>
          </Link>

          <Link to="/feedback" className="nav-link">
            <li
              className={
                location.pathname === "/feedback"
                  ? "active-nav"
                  : "inactive-nav"
              }
            >
              <MdOutlineFeedback size={25} />
              <span>Send feedback</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
