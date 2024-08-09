
const Header = () => {
    return (
        <div className="header-container">
            <div className='header__logo'>
                <p className='logo'>Библиотека</p><span>Логотип не придумал</span>
            </div>
            <div className='header__buttons'>
                <p>Главаная</p>
                <p>О нас</p>
                <p>Контакты</p>
            </div>
            <div className='contacts'>
                <p>library@gmail.com</p>
                <p>+998 (90) 000-00-00</p>
            </div>
        </div>
    )
}

export default Header