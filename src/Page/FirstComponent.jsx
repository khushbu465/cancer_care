import React from 'react'

const FirstComponent = () => {
    return (
        <>
            {/* <div className="custom-cursor__cursor" />
            <div className="custom-cursor__cursor-two" />
            <div className="preloader">
                <div
                    className="preloader__image"
                    style={{ backgroundImage: "url(assets/images/loader.png)" }}
                />
            </div> */}
            {/* /.preloader */}
            <div className="page-wrapper">
                <header className="main-header main-header--two sticky-header sticky-header--normal d-none">
                    <div className="container-fluid">
                        <div className="main-header__inner">
                            <div className="main-header__logo logo-retina">
                                <a href="index.html">
                                    <img
                                        src="assets/images/logo-dark.png"
                                        alt="Mediox HTML"
                                        width={164}
                                    />
                                </a>
                            </div>
                            {/* /.main-header__logo */}
                            <div className="main-header__right">
                                <div className="main-header__sidebar-btn sidebar-btn__toggler">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                {/* /.sidebar-btn__toggler */}
                                <nav className="main-header__nav main-menu">
                                    <ul className="main-menu__list one-page-scroll-menu">
                                        <li className="dropdown megamenu scrollToLink current">
                                            <a href="#home">Home</a>
                                            <ul>
                                                <li>
                                                    <section className="home-showcase">
                                                        <div className="container">
                                                            <div className="home-showcase__inner">
                                                                <div className="row">
                                                                    <div className="col-md-6 col-lg-3">
                                                                        <div className="demo-one__card">
                                                                            <div className="demo-one__image">
                                                                                <img
                                                                                    src="assets/images/home-showcase/home-showcase-1.jpg"
                                                                                    alt=""
                                                                                />
                                                                                <div className="demo-one__btns">
                                                                                    <a
                                                                                        href="index.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>Multi Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                    <a
                                                                                        href="index-one-page.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>One Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                </div>
                                                                                {/* /.demo-one__btns */}
                                                                            </div>
                                                                            {/* /.demo-one__image */}
                                                                            <div className="demo-one__content">
                                                                                <h3 className="demo-one__title">
                                                                                    <a href="index.html">Home Page 01</a>
                                                                                </h3>
                                                                                {/* /.demo-one__title */}
                                                                            </div>
                                                                            {/* /.demo-one__content */}
                                                                        </div>
                                                                        {/* /.demo-one__card */}
                                                                    </div>
                                                                    {/* /.col-md-6 col-lg-3 */}
                                                                    <div className="col-md-6 col-lg-3">
                                                                        <div className="demo-one__card">
                                                                            <div className="demo-one__image">
                                                                                <img
                                                                                    src="assets/images/home-showcase/home-showcase-2.jpg"
                                                                                    alt=""
                                                                                />
                                                                                <div className="demo-one__btns">
                                                                                    <a
                                                                                        href="index-2.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>Multi Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                    <a
                                                                                        href="index-2-one-page.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>One Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                </div>
                                                                                {/* /.demo-one__btns */}
                                                                            </div>
                                                                            {/* /.demo-one__image */}
                                                                            <div className="demo-one__content">
                                                                                <h3 className="demo-one__title">
                                                                                    <a href="index-2.html">Home Page 02</a>
                                                                                </h3>
                                                                                {/* /.demo-one__title */}
                                                                            </div>
                                                                            {/* /.demo-one__content */}
                                                                        </div>
                                                                        {/* /.demo-one__card */}
                                                                    </div>
                                                                    {/* /.col-md-6 col-lg-3 */}
                                                                    <div className="col-md-6 col-lg-3">
                                                                        <div className="demo-one__card">
                                                                            <div className="demo-one__image">
                                                                                <img
                                                                                    src="assets/images/home-showcase/home-showcase-3.jpg"
                                                                                    alt=""
                                                                                />
                                                                                <div className="demo-one__btns">
                                                                                    <a
                                                                                        href="index-3.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>Multi Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                    <a
                                                                                        href="index-3-one-page.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>One Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                </div>
                                                                                {/* /.demo-one__btns */}
                                                                            </div>
                                                                            {/* /.demo-one__image */}
                                                                            <div className="demo-one__content">
                                                                                <h3 className="demo-one__title">
                                                                                    <a href="index-3.html">Home Page 03</a>
                                                                                </h3>
                                                                                {/* /.demo-one__title */}
                                                                            </div>
                                                                            {/* /.demo-one__content */}
                                                                        </div>
                                                                        {/* /.demo-one__card */}
                                                                    </div>
                                                                    {/* /.col-md-6 col-lg-3 */}
                                                                    <div className="col-md-6 col-lg-3">
                                                                        <div className="demo-one__card">
                                                                            <div className="demo-one__image">
                                                                                <img
                                                                                    src="assets/images/home-showcase/home-showcase-4.jpg"
                                                                                    alt=""
                                                                                />
                                                                                <div className="demo-one__btns">
                                                                                    <a
                                                                                        href="index-dark.html"
                                                                                        className="mediox-btn demo-one__btn"
                                                                                    >
                                                                                        <span>View Page</span>
                                                                                        <span className="mediox-btn__icon">
                                                                                            <i className="icon-up-right-arrow" />
                                                                                        </span>
                                                                                    </a>
                                                                                    {/* /.thm-btn demo-one__btn */}
                                                                                </div>
                                                                                {/* /.demo-one__btns */}
                                                                            </div>
                                                                            {/* /.demo-one__image */}
                                                                            <div className="demo-one__content">
                                                                                <h3 className="demo-one__title">
                                                                                    <a href="index-dark.html">Home Dark</a>
                                                                                </h3>
                                                                                {/* /.demo-one__title */}
                                                                            </div>
                                                                            {/* /.demo-one__content */}
                                                                        </div>
                                                                        {/* /.demo-one__card */}
                                                                    </div>
                                                                    {/* /.col-md-6 col-lg-3 */}
                                                                </div>
                                                                {/* /.row */}
                                                            </div>
                                                            {/* /.home-showcase__inner */}
                                                        </div>
                                                        {/* /.container */}
                                                    </section>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="scrollToLink">
                                            <a href="#about">About</a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a href="#services">Services</a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a href="#team">team</a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a href="#testimonials">Testimonials</a>
                                        </li>
                                        <li className="scrollToLink">
                                            <a href="#blog">Blog</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /.main-header__nav */}
                                <div className="mobile-nav__btn mobile-nav__toggler">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                {/* /.mobile-nav__toggler */}
                                <a href="#" className="search-toggler main-header__search">
                                    <i className="icon-search" aria-hidden="true" />
                                    <span className="sr-only">Search</span>
                                </a>
                                {/* /.search-toggler */}
                                <a href="cart.html" className="main-header__cart">
                                    <i className="icon-cart" aria-hidden="true" />
                                    <span className="sr-only">Shopping Cart</span>
                                </a>
                                {/* /.search-toggler */}
                                <div className="main-header__call">
                                    <span className="main-header__call__icon">
                                        <i className="icon-telephone" />
                                    </span>
                                    {/* /.main-header__call__icon */}
                                    <div className="main-header__call__content">
                                        <p className="main-header__call__title">call emergency</p>
                                        {/* /.call__title */}
                                        <h4 className="main-header__call__number">
                                            <a href="tel:+208-555-0112">+208-555-0112</a>
                                        </h4>
                                        {/* /.main-header__call__number */}
                                    </div>
                                    {/* /.main-header__call__content */}
                                </div>
                                {/* /.main-header__call */}
                                <a href="appointment.html" className="mediox-btn main-header__btn">
                                    <span>make an appointment</span>
                                    <span className="mediox-btn__icon">
                                        <i className="icon-up-right-arrow" />
                                    </span>
                                </a>
                                {/* /.mediox-btn */}
                            </div>
                            {/* /.main-header__right */}
                        </div>
                        {/* /.main-header__inner */}
                    </div>
                    {/* /.container-fluid */}
                </header>
                {/* /.main-header */}
                <section className="main-slider-one" id="home">
                    <div
                        className="main-slider-one__carousel mediox-owl__carousel mediox-owl__carousel--basic-nav owl-carousel owl-theme"
                        data-owl-options='{
                                    "items": 1,
                                    "margin": 0,
                                    "animateIn": "fadeIn",
                                    "animateOut": "fadeOut",
                                    "loop": false,
                                    "smartSpeed": 700,
                                    "nav": false,
                                    "dots": false,
                                    "autoplay": false,
                                    "navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"]
                                  }'
                    >
                        <div className="main-slider-one__item">
                            <div
                                className="main-slider-one__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/shapes/main-slider-bg-1-1.png)"
                                }}
                            />
                            {/* /.main-slider-one__bg */}
                            <div className="container">
                                <div className="row gutter-y-60">
                                    <div className="col-xl-3"></div>
                                    <div className="col-xl-9  text-center">
                                        <div className="main-slider-one__conten ">
                                            <div className="main-slider-one__top">
                                            </div>
                                            {/* /.main-slider-one__top */}
                                            <h2 className="main-slider-one__title">
                                                <span className="main-slider-one__title__inner">
                                                    Free cancer treatment
                                                    under  <br /> #PMJAY/ayushman card
                                                    <span className="main-slider-one__title__hover">
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--1" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--2" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--3" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--4" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--5" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--6" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--7" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--8" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--9" />
                                                        <span className="main-slider-one__title__hover__box main-slider-one__title__hover__box--10" />
                                                    </span>
                                                    {/* /.main-slider-one__title__hover */}
                                                </span>
                                            </h2>
                                            {/* /.title */}
                                            <div className="main-slider-one__description">
                                                <p className="main-slider-one__text">
                                                    We are doing free Cancer and Head and Neck treatment  with state of the art reconstruction.
                                                    Please feel free to refer patients to me and Dr. Archit Kapoor.<br />
                                                    <blockquote className="text-info">- Dr. Shahab Usmani<br />
                                                        Mch ( Head and Neck Surgery and Oncology, AIIMS )</blockquote>
                                                </p>
                                                {/* /.text */}
                                            </div>

                                            <img
                                                src="assets/images/shapes/main-slider-shape-1-2.png"
                                                alt="shape"
                                                className="main-slider-one__content__shape-1"
                                            />
                                            <img
                                                src="assets/images/shapes/main-slider-shape-1-3.png"
                                                alt="shape"
                                                className="main-slider-one__content__shape-2"
                                            />
                                        </div>
                                        {/* /.main-slider-one__content */}
                                    </div>
                                    {/* /.col-xl-9 */}
                                </div>
                            </div>
                            {/* /.container */}
                            <img
                                src="assets/images/shapes/main-slider-shape-1-1.png"
                                alt="shape"
                                className="main-slider-one__shape-1"
                            />
                            <img
                                src="assets/images/shapes/main-slider-shape-1-4.png"
                                alt="shape"
                                className="main-slider-one__shape-2"
                            />
                            <div className="main-slider-one__bg-top">
                                <div className="main-slider-one__bg-top__1">
                                    <div className="main-slider-one__bg-top__2" />
                                    {/* /.main-slider-one__bg-top__2 */}
                                </div>
                                {/* /.main-slider-one__bg-top__1 */}
                            </div>
                            {/* /.main-slider-one__bg-top */}
                            <div className="main-slider-one__bg-bottom">
                                <div className="main-slider-one__bg-bottom__1">
                                    <div className="main-slider-one__bg-bottom__2" />
                                    {/* /.main-slider-one__bg-bottom__2 */}
                                </div>
                                {/* /.main-slider-one__bg-bottom__1 */}
                            </div>
                            {/* /.main-slider-one__bg-bottom */}
                        </div>
                    </div>
                    {/* /.main-slider-one__carousel */}
                </section>
                {/* /.main-slider-one */}
                <section className="about-one section-space" id="about">
                    <div className="container">
                        <div className="row gutter-y-60 align-items-center">
                            <div className="col-lg-5 wow fadeInLeft" data-wow-duration="1500ms">
                                <div className="about-one__image">
                                    <div className="about-one__image__one">
                                        <img src="https://media.istockphoto.com/id/1322311266/photo/female-doctors-hand-pointing-at-x-ray-medical-imaging-at-a-shoulder-condition.jpg?s=612x612&w=0&k=20&c=MNMFhsyVilvzrW72bIw9BALKT0Ws5AYRxqD7PzXY3dY=" alt="about" />
                                    </div>

                                </div>
                                {/* /.about-one__image */}
                            </div>
                            {/* /.col-lg-6 */}
                            <div className="col-lg-7">
                                <div className="about-one__content">
                                    <div
                                        className="sec-title @@extraClassName wow fadeInUp"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="sec-title__top">
                                            <img
                                                src="assets/images/shapes/sec-title-s-1-1.png"
                                                alt="about us"
                                                className="sec-title__img"
                                            />
                                            <h6 className="sec-title__tagline">about us</h6>
                                            {/* /.sec-title__tagline */}
                                        </div>
                                        {/* /.sec-title__top */}
                                        <h4 className="fs-2 sec-title__title">
                                            Free Cancer and Reconstruction Care for All
                                        </h4>
                                        {/* /.sec-title__title */}
                                    </div>
                                    {/* /.sec-title */}
                                    <div
                                        className="about-one__text-box wow fadeInUp"
                                        data-wow-duration="1500ms"
                                    >
                                        <p className="about-one__text">
                                            Welcome to my website, a dedicated center for free Cancer and Head and Neck treatment with state-of-the-art reconstruction services. Our mission is to restore hope, health, and confidence to patients who need it the most.

                                            Led by Dr. Archit Kapoor and a team of compassionate professionals, we combine advanced medical expertise with cutting-edge technology to provide world-class care at no cost. Our focus is not just on treating diseases but on transforming lives by offering comprehensive, personalized, and empathetic treatment plans.
                                        </p>
                                    </div>
                                </div>
                                {/* /.about-one__content */}
                            </div>
                            {/* /.col-lg-6 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                    <img
                        src="assets/images/about/about-1-3.png"
                        alt="about"
                        className="about-one__shape-1"
                    />
                    <img
                        src="assets/images/shapes/about-shape-1-1.png"
                        alt="shape"
                        className="about-one__shape-2"
                    />
                </section>
                {/* /.about-one section-space */}
                <section className="services-one section-space-two" id="services">
                    <div
                        className="services-one__bg"
                        style={{
                            backgroundImage: "url(assets/images/shapes/services-bg-1-1.png)"
                        }}
                    />
                    <div className="container">
                        <div
                            className="sec-title sec-title--center wow fadeInUp"
                            data-wow-duration="1500ms"
                        >
                            {/* <div className="sec-title__top">
                                <img
                                    src="assets/images/shapes/sec-title-s-1-2.png"
                                    alt="our services"
                                    className="sec-title__img"
                                />
                                <h6 className="sec-title__tagline"> services</h6>
                             
                            </div> */}
                            {/* /.sec-title__top */}
                            {/* <h3 className="sec-title__title">
                                Our Mediox Specialties <br /> Technical Service
                            </h3> */}
                            {/* /.sec-title__title */}
                        </div>
                        {/* /.sec-title */}
                        <div
                            className="services-one__carousel mediox-owl__carousel mediox-owl__carousel--basic-nav owl-carousel owl-theme"
                            data-owl-options='{
                                        "items": 1,
                                        "margin": 10,
                                        "loop": true,
                                        "smartSpeed": 700,
                                        "nav": false,
                                        "navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
                                        "dots": true,
                                        "autoplay": false,
                                        "responsive": {
                                            "0": {
                                                "items": 1,
                                                "nav": true,
                                                "dots": false,
                                                "margin": 10
                                            },
                                            "768": {
                                                "items": 2,
                                                "margin": 30
                                            },
                                            "992": {
                                                "items": 3,
                                                "margin": 30
                                            }
                                        }
                                    }'
                        >
                            <div
                                className="item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="00ms"
                            >
                                <div className="service-card">
                                    <div className="service-card__image">
                                        <img
                                            src="images/img1.jpg"
                                            alt="immediate care"
                                        />
                                    </div>

                                </div>
                                {/* /.service-card */}
                            </div>
                            {/* /.item */}
                            <div
                                className="item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="200ms"
                            >
                                <div className="service-card">
                                    <div className="service-card__image">
                                        <img
                                            src="images/img2.jpg"
                                            alt=" Care"
                                        />
                                    </div>
                                </div>
                                {/* /.service-card */}
                            </div>
                            {/* /.item */}
                            <div
                                className="item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="400ms"
                            >
                                <div className="service-card">
                                    <div className="service-card__image">
                                        <img
                                            src="images/img3.jpg"
                                            alt=" Care"
                                        />
                                    </div>
                                </div>
                                {/* /.service-card */}
                            </div>
                            {/* /.item */}
                            <div
                                className="item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="00ms"
                            >
                                <div className="service-card">
                                    <div className="service-card__image">
                                        <img
                                            src="images/img4.jpg"
                                            alt="gynaecologists"
                                        />
                                    </div>
                                </div>
                                {/* /.service-card */}
                            </div>
                            {/* /.item */}
                            <div
                                className="item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="200ms"
                            >
                                <div className="service-card">
                                    <div className="service-card__image">
                                        <img
                                            src="images/img5.jpg"
                                            alt="orthopaedics"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* /.services-one__carousel */}
                    </div>
                    {/* /.container */}
                </section>
                {/* /.services-one section-space-two */}


                <section className="welcome-one section-space-top">
                    <div className="container">
                        <div class="row bg-info">
                            <div class="col-md-6 ">
                           
                            <div className="welcome-one__content">
                                <div
                                    className="sec-title @@extraClassName wow fadeInUp pt-3"
                                    data-wow-duration="1500ms"
                                >
                                    <h3 className="sec-title__title  mt-5">
                                        Client Feedback
                                    </h3>
                                    {/* /.sec-title__title */}
                                </div>
                                {/* /.sec-title */}
                                <p
                                    className="welcome-one__text wow fadeInUp " style={{ visibility: 'hidden' }}
                                    data-wow-duration="1500ms"
                                >
                                    A brief statement outlining the purpose and mission of the clinic.

                                </p>

                            </div>
                            </div>
                            <div class="col-md-6">
                                <iframe
                                    width="400"
                                    height="300"
                                    src="images/vd.mp4"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="welcome-one__inner d-none">
                            <div
                                className="welcome-one__inner__bg"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/shapes/welcome-inner-bg-1-1.jpg)"
                                }}
                            />
                            <div className="welcome-one__content">
                                <div
                                    className="sec-title @@extraClassName wow fadeInUp pt-3"
                                    data-wow-duration="1500ms"
                                >
                                    <h3 className="sec-title__title mt-5">
                                        Client Feedback
                                    </h3>
                                    {/* /.sec-title__title */}
                                </div>
                                {/* /.sec-title */}
                                <p
                                    className="welcome-one__text wow fadeInUp " style={{ visibility: 'hidden' }}
                                    data-wow-duration="1500ms"
                                >
                                    A brief statement outlining the purpose and mission of the clinic.

                                </p>

                            </div>
                            {/* /.welcome-one__content */}
                            <div className="welcome-one__image">
                                <div
                                    className="welcome-one__image__bg"
                                // style={{
                                //     backgroundImage: "url(assets/images/resources/welcome-1-1.jpg)"
                                // }}
                                >
                                    <iframe
                                        width="400"
                                        height="300"
                                        src="images/vd.mp4"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            </div>
                            {/* /.welcome-one__image */}
                        </div>
                        {/* /.welcome-one__inner */}
                    </div>
                    {/* /.container */}
                </section>
                <br /><br /><br />
                <footer className="main-footer section-space-top">
                    <div
                        className="main-footer__bg"
                        style={{ backgroundImage: "url(assets/images/shapes/footer-bg.png)" }}
                    />
                    {/* /.main-footer__bg */}
                    <div className="container">
                        <div className="row gutter-y-40">
                            <div
                                className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp text-center mb-5"
                                data-wow-duration="1500ms"
                                data-wow-delay="00ms"
                            >
                                <div className="footer-widget footer-widget--about text-center">
                                    <p className="footer-widget__about-text text-light fs-5">
                                        Dr. Shahab Usmani <br />
                                        Mch ( Head and Neck Surgery and Oncology, AIIMS )
                                    </p>

                                    <div className="social-links">
                                        <a href="https://facebook.com/" target='_blank'>
                                            <i className="fab fa-facebook-f" aria-hidden="true" />
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://twitter.com/" target='_blank'>
                                            <i className="fab fa-twitter" aria-hidden="true" />
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://instagram.com/" target='_blank'>
                                            <i className="fab fa-instagram" aria-hidden="true" />
                                            <span className="sr-only">Instagram</span>
                                        </a>
                                        <a href="https://youtube.com/" target='_blank'>
                                            <i className="fab fa-youtube" aria-hidden="true" />
                                            <span className="sr-only">Youtube</span>
                                        </a>
                                    </div>
                                    {/* /.social-links */}
                                </div>
                                {/* /.footer-widget */}
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                </footer>
                {/* /.main-footer section-space-top */}
            </div>
            {/* /.page-wrapper */}

        </>
    )
}

export default FirstComponent
