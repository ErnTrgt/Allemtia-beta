import blog_data from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLeftContent = () => {
    return (
        <>
            <div className='col-xl-8 col-lg-12'>
                <div className='blog-main-wrapper mb-30'>
                    <div className='row'>
                        {blog_data?.map((item) => (
                            <div
                                key={item?.id}
                                className='col-xl-12 col-lg-6 col-md-12'
                            >
                                <div className='blog-wrapper position-relative mb-30'>
                                    <div className='blog-thumb '>
                                        <Link
                                            href={`/blog-details/${item?.id}`}
                                        >
                                            <Image
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                                src={item?.blogImg}
                                                alt='blog-img'
                                            />
                                        </Link>
                                    </div>
                                    <div className='blog-content-wrapper'>
                                        <div className='blog-meta'>
                                            <div className='blog-date'>
                                                <i className='flaticon-calendar'></i>
                                                <span> {item?.date} </span>
                                            </div>
                                            <div className='blog-user'>
                                                <i className='flaticon-avatar'></i>
                                                <span>Mark Hanry</span>
                                            </div>
                                        </div>
                                        <div className='blog-content'>
                                            <Link
                                                href={`/blog-details/${item?.id}`}
                                            >
                                                <h3> {item?.title} </h3>
                                            </Link>
                                            <p>
                                                Girişimciler ve hırslı kişiler
                                                genellikle tüm bir
                                                organizasyonun yükünü
                                                sırtlarında taşıyor gibi
                                                hissederler ve bu yüzden her
                                                zaman biraz daha fazla
                                                motivasyona ihtiyaç duyarlar.
                                                Herkes çalışmak zorunda, ancak
                                                birçoğumuz için bu iş sadece bir
                                                maaş çeki değil, kendimizi ifade
                                                etmek ve bir fırsat yaratmak
                                                için bir yol...{" "}
                                            </p>
                                            <Link
                                                className='blog-btn'
                                                href={`/blog-details/${item?.id}`}
                                            >
                                                Daha fazla oku
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='common-pagination mt-30 mb-20'>
                        <ul>
                            <li>
                                <Link href='#'>
                                    <i className='fal fa-angle-left'></i>
                                </Link>
                            </li>
                            <li className='active'>
                                <Link href='#'>
                                    <span>01</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <span>02</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <i className='fal fa-angle-right'></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogLeftContent;
