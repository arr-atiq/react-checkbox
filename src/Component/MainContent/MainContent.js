import React, { useEffect, useState } from 'react';
import DataSet from '../DataSet/DataSet';

const MainContent = () => {

    const [check, setCheckData] = useState([]);

    useEffect(() => {
        setCheckData(
            DataSet.map(data => {
                return {
                    isCreate: data.isCreate,
                    isView: data.isView,
                    isEdit: data.isEdit,
                    isDelete: data.isDelete,
                    isApprove: data.isApprove,
                    id: data.id
                }
            })
        )
    }, []);

    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">Module Name</th>
                        <th scope="col">Activity Name</th>
                        <th scope="col">Create</th>
                        <th scope="col">View</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Approve</th>
                    </tr>
                </thead>
                <tbody className="bg-Secondary text-black">
                    {
                        DataSet.map(AllData =>
                            <tr>
                                <td>{AllData.moduleName}</td>
                                <td>{AllData.activityName}</td>
                                <th scope="row"> <input
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        setCheckData(
                                            DataSet.map(newData => {
                                                if (AllData.id === newData.id) {
                                                    newData.isCreate = checked;
                                                    newData.isView = checked;
                                                }
                                                return newData;
                                            })
                                        )
                                    }}
                                    type="checkbox"
                                /> </th>
                                <th scope="row"> <input
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        setCheckData(
                                            DataSet.map(newData => {
                                                if (AllData.id === newData.id) {
                                                    newData.isView = checked;
                                                }
                                                return newData;
                                            })
                                        )
                                    }}
                                    type="checkbox" /> </th>
                                <th scope="row"> <input
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        setCheckData(
                                            DataSet.map(newData => {
                                                if (AllData.id === newData.id) {
                                                    newData.isEdit = checked;
                                                }
                                                return newData;
                                            })
                                        )
                                    }}
                                    type="checkbox" /> </th>
                                <th scope="row"> <input
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        setCheckData(
                                            DataSet.map(newData => {
                                                if (AllData.id === newData.id) {
                                                    newData.isDelete = checked;
                                                }
                                                return newData;
                                            })
                                        )
                                    }}
                                    type="checkbox" /> </th>
                                <th scope="row"> <input
                                    onChange={(event) => {
                                        let checked = event.target.checked;
                                        setCheckData(
                                            DataSet.map(newData => {
                                                if (AllData.id === newData.id) {
                                                    newData.isApprove = checked;
                                                }
                                                return newData;
                                            })
                                        )
                                    }}
                                    type="checkbox" /> </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MainContent;