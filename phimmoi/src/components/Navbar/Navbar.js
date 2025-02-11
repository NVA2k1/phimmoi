import styled from 'styled-components';
import { useState, useEffect } from 'react';
import logoImage from '../../assets/images/PhimMoi_logo.jpg';
import { FaSearch } from 'react-icons/fa';
import '../../App.css';
import '../../assets/css/style.css';
import { useScrollY } from '../hook';
import { Link } from 'react-router-dom';
import UserDrop from '../userInfor/user';

// Thêm Dialog Component
const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <DialogOverlay onClick={onClose}>
      <DialogContent onClick={e => e.stopPropagation()}>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
};

function Navbar() {
    const [genresList, setGenresList] = useState([]);
    const [keyWord, setKeyWord] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const getGenreList = async () => {
            const response = await fetch('/Api/api/genres/');
            const data = await response.json();
            if (response.ok) {
                setGenresList(data.datas);
            } else {
                console.log(response.message);
            }
        };
        getGenreList();
    }, []);

    const handleSearch = async () => {
        window.location.href = `/search-film/${keyWord}`;
    };
    
    const handleGenreClick = (genreId) => {
        window.location.href = `/find-by-genre/${genreId}`;
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert('Chức năng thanh toán đang được phát triển!');
        setIsDialogOpen(false);
    };

    const [scrollY] = useScrollY();
    return (
        <Navigation
            style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'var(--color-background)' }}
        >
            <div className="navContainer">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <Link to={'/'}>
                                <img src={logoImage} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active">
                                        <Link to={'/'}>Trang chủ</Link>
                                    </li>
                                    <li className="active">
                                        <a href="#">
                                            Thể loại <span className="arrow_carrot-down"></span>
                                        </a>
                                        <ul className="dropdown">
                                            {genresList.map((genre) => {
                                                return (
                                                    <li
                                                        key={genre._id}
                                                        onClick={() => {
                                                            handleGenreClick(genre._id);
                                                        }}
                                                    >
                                                        <a className="active">{genre.name}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="header__right">
                            <Link>
                                <div className="navSearch">
                                    <FaSearch onClick={handleSearch} className="iconSearch" />
                                    <input
                                        placeholder="Search here!"
                                        type="text"
                                        onChange={(e) => {
                                            setKeyWord(e.target.value);
                                        }}
                                    />
                                </div>
                            </Link>
                            <PremiumButton onClick={() => setIsDialogOpen(true)}>
                                Premium
                            </PremiumButton>
                            <Link to={'/login'}>
                                <div className="navLogin">
                                    <UserDrop />
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Thêm Dialog Payment */}
            <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <PaymentForm onSubmit={handlePaymentSubmit}>
                    <h3>Đăng ký Premium</h3>
                    <CloseButton onClick={() => setIsDialogOpen(false)}>×</CloseButton>
                    <PriceInfo>79.000đ/tháng</PriceInfo>
                    <InputGroup>
                        <label>Số thẻ</label>
                        <input type="text" placeholder="1234 5678 9012 3456" required />
                    </InputGroup>
                    <InputRow>
                        <InputGroup>
                            <label>Ngày hết hạn</label>
                            <input type="text" placeholder="MM/YY" required />
                        </InputGroup>
                        <InputGroup>
                            <label>CVV</label>
                            <input type="text" placeholder="123" required />
                        </InputGroup>
                    </InputRow>
                    <SubmitButton type="submit">Thanh toán ngay</SubmitButton>
                </PaymentForm>
            </Dialog>
        </Navigation>
    );
}

// Giữ nguyên styled Navigation cũ
const Navigation = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 10;

    @media only srceen and (max-width: 600px) {
        height: 100px;
    }

    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        height: 100%;

        @media only srceen and (max-width: 600px) {
            flex-direction: column;
        }
    }
    .row {
        width: 100%;
        height: 70px;
        position: fixed;
        top: 0;
        transition-timing-function: ease-in;
        transition: all 1s;
        z-index: 10;
    }

    .logo {
        width: 100px;
        cursor: pointer;
        img {
            width: 100%;
        }
    }
    .navSearch {
        color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover .iconSearch {
            color: var(--color-white);
        }

        .iconSearch {
            width: 20px;
            height: 20px;
            margin-bottom: 20px;
            cursor: pointer;
            transform: translateX(26px) translateY(10px);
            color: #bbb;
        }

        input {
            font-size: 14px;
            border: 1px solid #fff;
            border-radius: 10px;
            color: white;
            outline: none;
            width: 200px;
            padding: 10px;
            cursor: pointer;
            opacity: 1;
            background: var(--color-background);
            transition: width 0.5s;
            text-align: center;
        }
    }
    .navLogin {
        color: var(--color-white);
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;

        &:hover .iconSearch {
            color: var(--color-white);
        }
    }
    .col-lg-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
    }
`;

// Thêm styled components mới cho dialog và payment
const DialogOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const DialogContent = styled.div`
    background: var(--color-background);
    padding: 24px;
    border-radius: 8px;
    min-width: 400px;
    position: relative;
`;

const PaymentForm = styled.form`
    color: white;
    h3 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const PriceInfo = styled.div`
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #ff6b6b;
`;

const InputGroup = styled.div`
    margin-bottom: 16px;
    label {
        display: block;
        margin-bottom: 8px;
    }
    input {
        width: 100%;
        padding: 8px;
        border: 1px solid #666;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }
`;

const InputRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

const PremiumButton = styled.button`
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 10px;
`;

const SubmitButton = styled.button`
    width: 100%;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 16px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;

export default Navbar;