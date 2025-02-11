import '../../assets/css/style.css';
import '../../assets/css/elegant-icons.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '~/components/footer/Footer';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/authContext.jsx';
import useLoginAccount from '~/hooks/auth/useLoginAccount';
import styled from 'styled-components';

function LoginPage() {
    const { setUser } = useContext(UserContext);
    const { loginAccount } = useLoginAccount();
    const [loginInfor, setLoginInfor] = useState({
        email: '',
        password: '',
    });

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        await loginAccount(loginInfor);
    };
    return (
        <>
            <Navbar />
            <section className="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Đăng Nhập</h2>
                                <p>Chào mừng bạn đến với Phimmoi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmitLogin}>
                                    <div className="input__item">
                                        <input
                                            type="text"
                                            placeholder="Email address"
                                            onChange={(e) => {
                                                setLoginInfor({ ...loginInfor, email: e.target.value });
                                            }}
                                        />
                                        <span className="icon_mail"></span>
                                    </div>
                                    <div className="input__item">
                                        <input
                                            
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => {
                                                setLoginInfor({ ...loginInfor, password: e.target.value });
                                            }}
                                        />
                                        <span className="icon_lock"></span>
                                    </div>
                                    <button type="submit" className="site-btn">
                                        Đăng Nhập Ngay
                                    </button>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login__register">
                                <h3>Bạn chưa có tài khoản?</h3>
                                <a href="/register" className="primary-btn">
                                Đăng ký ngay
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="login__social">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="login__social__links">
                                    <ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LoginPage;
const LoginContainer = styled.div``;
