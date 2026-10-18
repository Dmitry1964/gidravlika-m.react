import cls from './header.module.scss';

const Header = () => {
  return (
          <header className={cls.header}>
        <div className='container'>
          <div className={cls.header__content}>
            <div className={cls.header__content_logo}>
              <img src="img/svg/logo.svg" width="50" height="50" alt="Логотип ТD Гидравлика М"/>
              <p>продажа и сервис спецтехники<br/>волгоград</p>
            </div>
            <div className={cls.header__content_phone}>
              <img src="img/svg/title.svg" width="175" height="45" alt="Гидравлика М"/>
              <img src="img/svg/icon-phone.svg" width="30" height="30" alt="Иконка телефон"/>
              <a  href="tel:+78442263102">
                +7 (8442) 263-103
              </a>
            </div>
          </div>
        </div>
      </header>

  )
}

export default Header;