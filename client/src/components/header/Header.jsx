import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to K A M A L's</span>
        <span className="headerTitleLg">Blog</span>
        <div className="everyone">
            <span className="headerTitlelast">A Blog for Everyone... <i class="fas fa-user-edit"></i></span>
          <p className="guest">.....BE my Guest, Write an Article Today!</p>
          </div>
        </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
          
          <div className="afterimageheader">
            <span className="headerTitleafterimg">Check Recent Articles Below... <i class="fas fa-angle-double-down"></i></span>
          </div>
    </div>
  );
}