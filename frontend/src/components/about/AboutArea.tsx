import React from "react";
import thumb from "../../../public/assets/img/about/about-thumb.jpg";
import logo from "../../../public/assets/img/about/1990.png";
import Image from "next/image";
import Link from "next/link";

const AboutArea = () => {
    return (
        <>
            <section className='about-area pb-90'>
                <div className='container container-small'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div className='about-thumb pos-rel mb-30'>
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    className='about-thumb-main'
                                    src={thumb}
                                    alt='img'
                                />
                                <Image
                                    className='est-time-img'
                                    src={logo}
                                    alt='img'
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='about-content mb-30 align-pb-35'>
                                <div className='section-title'>
                                    <h2 className='section-main-title mb-30'>
                                        Moda, hayatınızda istediğiniz her
                                        şeydir.
                                    </h2>
                                </div>
                                <p className='mb-40'>
                                    Anlıyoruz. Giyinmek zor olabilir ve bu
                                    konuda size yardımcı olmak için buradayız.
                                    İster daha çok rahat bir kız olun,
                                    hissediyorum sizi, bana her gün joggerlar
                                    verin, ister bir sonraki randevu gecenizi
                                    hareketlendirmek istiyor olun, doğru yere
                                    geldiniz. Yazılarımız arasında kaybolun.
                                    Botlar, botlar, her yerde botlar! Sonbahar
                                    ve Kış modası söz konusu olduğunda, botlar
                                    benim zaafım. Büyümemizin bir parçası
                                    olarak, Roman yeni bir ayakkabı ve çanta
                                    koleksiyonunu piyasaya sürdü.
                                </p>
                                <div className='about-btn'>
                                    <Link
                                        href='/shop-sidebar-4-column'
                                        className='fill-btn'
                                    >
                                        Ürünleri Keşfet
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutArea;
