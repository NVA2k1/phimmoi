import styled from 'styled-components';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styled);

function Footer({ className }) {
    return (
        <FooterStyle>
            <div className={cs('wrapper', className)}>
                <div className={cs('info')}>
                    <h4 className={cs('heading')}>Liên hệ</h4>
                    <ul className={cs('list')}>
                        <li className={cs('item')}>
                            <a href="tel:phonenumber" className={cs('item-link')}>
                                <FontAwesomeIcon className={cs('icon')} icon={faPhone} />
                                SĐT : 123456789
                            </a>
                        </li>

                        <li className={cs('item')}>
                            <a href="mailto:admin@gmail.com" className={cs('item-link')}>
                                <FontAwesomeIcon className={cs('icon')} icon={faEnvelope} />
                                Email: admin@gmail.com
                            </a>
                        </li>

                        <li className={cs('item')}>
                            <a
                                href="https://www.google.com/maps/place/Cao+%C4%90%E1%BA%B3ng+C%C3%B4ng+Ngh%E1%BB%87+Th%C3%B4ng+Tin+TP.HCM/@10.7698678,106.6359155,14.5z/data=!4m15!1m8!3m7!1s0x31752ea168a65c0b:0x2a4a7dc43e177de1!2zMTIgVHLhu4tuaCDEkMOsbmggVGjhuqNvLCBIb8OgIFRoYW5oLCBUw6JuIFBow7osIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!3b1!8m2!3d10.7750496!4d106.6344994!16s%2Fg%2F11c5c_5mv7!3m5!1s0x31752ea144839ef1:0x798819bdcd0522b0!8m2!3d10.7749966!4d106.634426!16s%2Fg%2F1v6wltsg?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cs('item-link')}
                            >
                                <FontAwesomeIcon className={cs('icon')} icon={faHome} />
                                Địa chỉ: 12 Trịnh Đình Thảo, Hòa Thạnh, Tân Phú
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cs('info', 'info_follow')}>
                    <h4 className={cs('heading')}>Theo dõi</h4>
                    <ul className={cs('list')}>
                        <li className={cs('item')}>
                            <a href="https://www.facebook.com" target="_blank" className={cs('item-link')}>
                                <FontAwesomeIcon className={cs('icon')} icon={faFacebook} />
                                Facebook
                            </a>
                        </li>

                        <li className={cs('item')}>
                            <a href="https://www.instagram.com" target="_blank" className={cs('item-link')}>
                                <FontAwesomeIcon className={cs('icon')} icon={faInstagram} />
                                Instagram
                            </a>
                        </li>

                        <li className={cs('item')}>
                            <a href="https://web.telegram.org" className={cs('item-link')}>
                                <FontAwesomeIcon className={cs('icon')} icon={faTelegram} />
                                Telegram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </FooterStyle>
    );
}

export default Footer;
const FooterStyle = styled.div`
    .wrapper {
        display: flex;
        justify-content: space-around;
        border-top: 2px solid rgb(209, 207, 207);
        background-color: #1f1d1d;
    }
    .info {
        margin: 30px 30px;
    }
    .heading {
        text-transform: uppercase;
        color: white;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .item {
        padding: 4px 0;
        &-link {
            margin-top: 10px;
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            &:hover {
                color: #da2020;
            }
        }
    }

    .icon {
        font-size: 1.4rem;
        margin: -1px 4px 0 0;
    }

    @media (max-width: 740px) {
        .wrapper {
            flex-direction: column;
            align-items: center;
        }

        .info_follow {
            width: 336px;
        }
    }
`;
