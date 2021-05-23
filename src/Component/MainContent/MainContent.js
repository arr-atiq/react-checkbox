import React from 'react';
import DataSet from '../DataSet/DataSet';

const MainContent = () => {
    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <thead>
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
                <tbody>
                    {
                        DataSet.map(AllData =>
                            <tr>
                                <td>{AllData.moduleName}</td>
                                <td>{AllData.activityName}</td>
                                <th scope="row"> <input type="checkbox" /> </th>
                                <th scope="row"> <input type="checkbox" /> </th>
                                <th scope="row"> <input type="checkbox" /> </th>
                                <th scope="row"> <input type="checkbox" /> </th>
                                <th scope="row"> <input type="checkbox" /> </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MainContent;