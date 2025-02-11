import styled from 'styled-components';
function DenyAccess() {
    return (
        <DenyWraper>
            <div className="text-wrapper">
                <div className="title" data-content="404">
                    403 - ACCESS DENIED
                </div>

                <div className="subtitle">Rất tiếc, bạn không có quyền truy cập trang này.</div>
                <div className="isi">
                Một máy chủ web có thể trả về mã trạng thái HTTP 403 Forbidden để phản hồi yêu cầu từ phía khách hàng đối với một trang web hoặc tài nguyên, 
                nhằm cho biết rằng máy chủ có thể truy cập và hiểu yêu cầu, 
                nhưng từ chối thực hiện bất kỳ hành động nào khác. Phản hồi với mã trạng thái 403 thường do máy chủ web được cấu hình để từ chối quyền truy cập vào tài nguyên được yêu cầu vì một lý do nào đó.
                </div>

                <div className="buttons">
                    <a className="button" href="/">
                    Đi đến trang chủ
                    </a>
                </div>
            </div>
        </DenyWraper>
    );
}

export default DenyAccess;
const DenyWraper = styled.div`





a {
  color: #EE4B5E !important;
  text-decoration:none;
}
a:hover {
  color: #FFFFFF !important;
  text-decoration:none;
}

.text-wrapper {
    height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #white; 
}

.title {
    font-size: 5em;
    font-weight: 700;
    color: #EE4B5E;margin-top: 50px;
}

.subtitle {
    font-size: 40px;
    font-weight: 700;
    color: #1FA9D6;
    padding-top: 30px;
}
.isi {
    font-size: 18px;
    text-align: center;
    margin:30px;
    padding:20px;
    color: white;
}
.buttons {
    margin: 30px;
        font-weight: 700;
        border: 2px solid #EE4B5E;
        text-decoration: none;
        padding: 15px;
        text-transform: uppercase;
        color: #EE4B5E;
        border-radius: 26px;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        
        .buttons:hover {
            background-color: #EE4B5E;
            color: white;
            transition: all 0.2s ease-in-out;
        }
  }
}
`;
