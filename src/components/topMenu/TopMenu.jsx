import "./index.css";

const TopMenu = () => {
  return (
    <div className="TopMenu">
      <ul>
        <li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9344/9344210.png"
            alt="twitter logo"
          />
        </li>
        <li className="openCollapse">
          <img
            src="https://img.icons8.com/color/256/twitter--v1.png"
            alt="twitter logo"
          />
        </li>
        <li className="openSide">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6506/6506509.png"
            alt="twitter logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
