import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const getdata = (setdata)=>{
    axios.get("https://employeemanagement-z8on.onrender.com/employees").then((res)=>setdata(res.data))
}
const Dashboard = () => {

  const [data, setdata] = useState([])

    useEffect(()=>{
        getdata(setdata);
    })
    return (
        <Box>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

{
    data?.map((ele,i)=>{
        return <tr>
            <td>{i+1}</td>
            <td>{ele.firstName}</td>
            <td>{ele.lastName}</td>
            <td>{ele.email}</td>
            <td>{ele.salary}</td>
            <td>{ele.date}</td>
            <td>{ele.action}</td>
        </tr>
    })
}
                </tbody>
            </table>
        </Box>
    );
};

export default Dashboard;