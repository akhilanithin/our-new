import Reveal from "react-awesome-reveal";
import { connect } from 'react-redux';
import { useState } from "react";

// import Custom Components
import ALink from '~/components/features/custom-link';

import { modalActions } from '~/store/modal';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function BannerSectionOne(props) {
    const { openModal } = props;

    const showVideoModalHandler = (e) => {
        e.preventDefault();
        let link = e.currentTarget.closest('.btn-play').getAttribute('data');
        openModal(link);
    }
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = (e) => {
        e.preventDefault();
        setIsPlaying(true);
    };

    return (
        <section className="banner-section pt-md-6 pb-8">
            <div className="container">
                <div className="row">

                    {/* About us-sucess story section */}
                    <div className="col-md-6">
                        <div className="banner h-100">
                            <div className="banner-content pr-lg-4 y-50">
                                <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000} triggerOnce>
                                    {/* <h2 className="banner-title text-white font-weight-bold mb-2">Who we are
                                    </h2> */}
                                    <span className="banner-subtitle text-black font-weight-bold text-uppercase 
                                    " >Success Story</span>

                                    {/* <p className="text-white mb-6"><b>Time to know your skin type and skin problem</b></p> */}

                                    <h2>Konjac SkinFood Develops Its Own Brands</h2>

                                    <p>The Konjac SkinFoode network is being developed and improved, taking into account all consumer.</p>

                                    <p>Forming the range of stores, we, above all, strive not only to meet the format
                                        of "home shop", offering each customer the most basic household goods, but also to create a unique space
                                        of beauty and care. Konjac SkinFoode stores offer their customers the widest and highest quality
                                        selection of products from world-renowned manufacturers.</p>
                                </Reveal>

                                <ALink href="/shop" className="btn btn-dark btn-icon-right mb-1">Shop Now <i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>

                    {/* Skin Analyzer */}

                    <div className="col-md-6">
                        <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                            <div className="card-description overlay-zoom">
                                <figure className="p-relative">
                                    <div className="video-container ">
                                        {!isPlaying && (
                                            <div className="video-placeholder">
                                                <img
                                                    className="w-100 d-block"
                                                    src="https://s.alicdn.com/@sc04/kf/H9cc5104808ed4876af83a68d8920448ej.jpg"
                                                    alt="Product"
                                                    width="550"
                                                    height="410"
                                                />
                                                <a
                                                    className="btn-play"
                                                    href="#"
                                                    onClick={handlePlayClick}
                                                >
                                                    <i className="d-icon-play-solid"></i>
                                                </a>

                                                {/* AI base analyzer */}
                                                {/* <div className="info-blocks__item-img-overlay"><span>AI Base Skin Analyzer</span></div> */}

                                                {/* <a className="btn-play btn-iframe" href="#" data="/uploads/video/video-1.mp4" onClick={showVideoModalHandler}>
                                                    <i className="d-icon-play-solid"></i>
                                                </a>  */}

                                            </div>
                                        )}


                                        {/* Display the iframe when playing */}


                                        {isPlaying && (
                                            <iframe width="550" height="410" src="https://www.youtube.com/embed/1CjpntmL5H8" title="AI BITMOJI   Skin Analyzer - HERCA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        )}


                                        {/* overlay youtube video*/}

                                        {/* <div className="info-blocks__item-img-overlay">
                                            <span>AI Base Skin Analyzer</span>
                                            <div className="info-blocks__item-img-play">
                                                <img src="https://eksfc.com/assets/img/play-btn.png" className="js-img" alt="" />
                                            </div>
                                        </div> */}



                                    </div>
                                </figure>
                            </div>


                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-10 shape-divider shape5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>
        </section >
    )
}

export default connect('', { openModal: modalActions.openModal })(BannerSectionOne)