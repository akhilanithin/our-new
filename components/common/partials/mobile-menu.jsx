import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ALink from '~/components/features/custom-link';
import Card from '~/components/features/accordion/card';

import { mainMenu } from '~/utils/data/menu';

function MobileMenu(props) {
    const [search, setSearch] = useState("");
    const [timer, setTimer] = useState(null);
    const router = useRouter();

    useEffect(() => {
        window.addEventListener('resize', hideMobileMenuHandler);
        document.querySelector("body").addEventListener("click", onBodyClick);

        return () => {
            window.removeEventListener('resize', hideMobileMenuHandler);
            document.querySelector("body").removeEventListener("click", onBodyClick);
        }
    }, [])

    useEffect(() => {
        setSearch("");
    }, [router.query.slug])

    const hideMobileMenuHandler = () => {
        if (window.innerWidth > 991) {
            document.querySelector('body').classList.remove('mmenu-active');
        }
    }

    const hideMobileMenu = () => {
        document.querySelector('body').classList.remove('mmenu-active');
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    function onBodyClick(e) {
        if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');

        document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
        document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
    }

    function onSubmitSearchForm(e) {
        e.preventDefault();
        router.push({
            pathname: '/shop',
            query: {
                search: search
            }
        });
    }

    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-overlay" onClick={hideMobileMenu}>
            </div>

            <ALink className="mobile-menu-close" href="#" onClick={hideMobileMenu}><i className="d-icon-times"></i></ALink>

            <div className="mobile-menu-container scrollable">
                <form action="#" className="input-wrapper" onSubmit={onSubmitSearchForm}>
                    <input type="text" className="form-control" name="search" autoComplete="off" value={search} onChange={onSearchChange}
                        placeholder="Search your keyword..." required />
                    <button className="btn btn-search" type="submit">
                        <i className="d-icon-search"></i>
                    </button>
                </form>

                <ul className="mobile-menu mmenu-anim">
                    <li>
                        <ALink href="/">Home</ALink>
                    </li>

                    <li>
                        <Card title="categories" type="mobile" url="/shop">
                            <ul>
                                <li>
                                    <Card title="Variations 1" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.shop.variation1.map((item, index) => (
                                                    <li key={`shop-${item.title}`}>
                                                        <ALink href={'/' + item.url}>
                                                            {item.title}
                                                            {item.hot ? <span className="tip tip-hot">Hot</span> : ""}
                                                        </ALink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Card>
                                </li>
                                <li>
                                    <Card title="Variations 2" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.shop.variation2.map((item, index) => (
                                                    <li key={`shop-${item.title}`}>
                                                        <ALink href={'/' + item.url}>
                                                            {item.title}
                                                            {item.new ? <span className="tip tip-new">New</span> : ""}
                                                        </ALink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Card>
                                </li>
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="Products" type="mobile" url="/product/default/bodycare-smooth-perfume">
                            <ul>
                                <li>
                                    <Card title="Product Pages" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.product.pages.map((item, index) => (
                                                    <li key={`product-${item.title}`}>
                                                        <ALink href={'/' + item.url}>
                                                            {item.title}
                                                            {item.hot ? <span className="tip tip-hot">Hot</span> : ""}
                                                        </ALink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Card>
                                </li>

                                <li>
                                    <Card title="Product Layouts" type="mobile">
                                        <ul>
                                            {
                                                mainMenu.product.layout.map((item, index) => (
                                                    <li key={`product-${item.title}`}>
                                                        <ALink href={'/' + item.url}>
                                                            {item.title}
                                                            {item.new ? <span className="tip tip-new">New</span> : ""}
                                                        </ALink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Card>
                                </li>
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <Card title="Pages" type="mobile" url="/pages/about-us">
                            <ul>
                                {
                                    mainMenu.other.map((item, index) => (
                                        <li key={`other-${item.title}`}>
                                            <ALink href={'/' + item.url}>
                                                {item.title}
                                                {item.new ? <span className="tip tip-new">New</span> : ""}
                                            </ALink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </li>

                    <li>
                        <ALink href="/blog/classic">Blog</ALink>
                    </li>

                    <li>
                        <Card title="elements" type="mobile" url="/elements">
                            <ul>
                                {
                                    mainMenu.element.map((item, index) => (
                                        <li key={`elements-${item.title}`}>
                                            <ALink href={'/' + item.url}>
                                                {item.title}
                                            </ALink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </li>

                    <li><ALink href="#">Buy Riode!</ALink></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(MobileMenu);