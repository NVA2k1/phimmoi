import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import useGetAllFilm from '~/hooks/film/useGetAllFilm';
import styled from 'styled-components';
import ConfirmDialog from './confirmDialog';
import useDeleteFilm from '~/hooks/film/useDeleteFilm';
import { UserContext } from '~/context/authContext';
import Footer from '~/components/footer/Footer';
import DenyAccess from '~/components/access/403';
import NavbarAdmin from '~/components/Navbar/NavbarAdmin';

function FilmInforPage() {
    const {id}= useParams();
    const { allowAccess } = useContext(UserContext);
    const { filmList } = useGetAllFilm();
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const { deleteFilm } = useDeleteFilm(id);
    const [selectedId, setSelectedId] = useState(null);

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowConfirmDialog(true);
    };

    const confirmDelete = async () => {
        await deleteFilm(selectedId);
        setSelectedId(null);
        setShowConfirmDialog(false);
    };

    const cancelDelete = () => {
        setShowConfirmDialog(false);
    };

    return (
        <TableContainer>
            {allowAccess ? (
                <>
                    <NavbarAdmin />
                    <div className="container">
                        <div className="header">
                            <button className="createButton">
                                <Link to="/filmCreate">Thêm mới</Link>
                            </button>
                        </div>
                        <table>
                            <thead>
                                <tr className="main">
                                    <th>Thông tin phim</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filmList.map((filmInfo) => (
                                    <tr key={filmInfo._id}>
                                        <td>{filmInfo.name}</td>
                                        <td>
                                            <button className="editButton">
                                                <Link to={`/film/edit/${filmInfo._id}`}>Sửa</Link>
                                            </button>
                                            <button className="deleteButton" onClick={() => handleDelete(filmInfo._id)}>
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Footer />
                </>
            ) : (
                <DenyAccess />
            )}
            {showConfirmDialog && (
                <ConfirmDialog
                    message="Bạn có chắc chắn muốn xóa?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </TableContainer>
    );
}

export default FilmInforPage;

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    .container {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-self: center;
        padding-bottom: 25px;
        
        padding-top: 275px;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .createButton {
        background-color: #4caf50;
        padding: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;

        a {
            text-decoration: none;
            color: white;
            padding: 1rem;
        }
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 2rem 0;
        font-size: 1rem;
        text-align: left;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        
    }

    thead {
        background-color: #4caf50;
        color: white;
    }

    th,
    td {
        padding: 1rem;
        border: 1px solid #ddd;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .main:hover {
        background-color: #267d29;
    }

    tr:hover {
        background-color: #e9e9e9;
    }

    button {
        padding: 0.5em 1em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin-right: 0.5em;
        display: inline-block;

        a {
            text-decoration: none;
            color: white;
        }
    }

    .editButton {
        background-color: #2196f3;
    }

    .deleteButton {
        background-color: #f44336;
    }

    .editButton a {
        color: white;
    }

    .deleteButton a {
        color: white;
    }
`;
