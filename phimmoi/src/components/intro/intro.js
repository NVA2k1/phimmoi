import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import styled from 'styled-components';
import { useState } from 'react';
import videoDemo from '../../assets/images/demo.mp4';
import { Link } from 'react-router-dom';
function Intro() {
    const [isMuted, setIsMute] = useState(false);


    return (
        <IntroContainer>
            <Link to={'/film/detail/677f76a2ba782905f714e43d'}>
            <ReactPlayer
                playing={true}
                width="100%"
                height="100%"
                loop={true}
                volume={1}
                muted={isMuted}
                url={videoDemo}
                className="videoIntro"
                
            />  
            </Link>
            <div className="infoIntro">
                <h1 className="headingIntro">Jonh Wick 3</h1>
                <p className="overviewIntro">
                Siêu sát thủ John Wick (Keanu Reeves) đang chạy trốn sau khi giết một thành viên của hội sát thủ quốc tế, và với mức giá 14 triệu đô la treo trên đầu – anh trở thành mục tiêu của những sát thủ trên khắp thế giới.
                </p>
            </div>
            {isMuted ? (
                <VscMute className="btnVolume" onClick={() => setIsMute((prev) => !prev)} />
            ) : (
                <VscUnmute className="btnVolume" onClick={() => setIsMute((prev) => !prev)} />
            )}
            <div className="fadeBottom"> </div>
        </IntroContainer>
    );
}

export default Intro;
const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 56%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
        height: 10vh;
    }
    .infoIntro {
        position: absolute;
        top: 40%;
        left: 100px;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px;
        }
        @media screen and (max-width: 600px) {
            top: 100px;
            left: 15px;
        }
        .headingIntro {
            font-size: 68px;
            user-select: none;
            color: #fff;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                font-size: 40px;
            }

            @media screen and (max-width: 800px) {
                font-size: 24px;
            }
        }
        .overviewIntro {
            margin-top:20px;
            max-width: 550px;
            width: 100%;
            color: #fff;
            user-select: none;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 22px;
            @media screen and (max-width: 800px) {
                font-size: 16px;
            }

            @media screen and (max-width: 800px) {
                font-size: 14px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        height: 40px;
        width: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3s ease;
        transform: scale(1);

        &:hover {
            color: var(--color-white);
            transform: scale(1.2);
            background-color: rgba(211, 211, 211, 0.18);
        }
        @media screen and (max-width: 800px) {
            height: 30px;
            width: 30px;
            padding: 3px;
        }
        @media screen and (max-width: 600px) {
            height: 20px;
            width: 20px;
            padding: 1px;
        }
    }
    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 130px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgb(17, 17, 17),
            rgb(17, 17, 17)
        );
    }
`;
