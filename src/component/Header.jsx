
function Header() {
    return (
        <div className="header">
            <nav className="main-nav" id="mainNav">
                <ul className="left-nav-ul">
                    <li>English</li>
                    <li>تسجيل الدخول</li>
                </ul>

                <div className="burger-menu" id="burgerMenu">
                    <div className="burger-peices" id="burgerPeices"></div>
                    <div className="burger-peices" id="burgerPeices"></div>
                    <div className="burger-peices" id="burgerPeices"></div>
                </div>


                <ul className="right-nav-ul">
                    <li className="hide">مركز الاختبارات</li>
                    <li className="hide">الأكاديميات التابعة</li>
                    <li className="hide">حول الأكاديمية</li>
                    <li className="hide">المعسكرات والبرامج</li>
                    <li className="hide">الرئيسية</li>
                    <li><img className="logo" id="logoImg"
                        src="https://web.archive.org/web/20240815012232im_/https://cdn.tuwaiq.edu.sa/landing/images/logo/logo-h-white.png"></img>
                    </li>
                </ul>
            </nav>

            <script src="headerController.js"></script>
        </div>
    )
}

export default Header
