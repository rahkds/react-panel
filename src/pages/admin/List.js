import React from "react"
import MUIDataTable from "mui-datatables";

import { adminListColumnData, options as tableDataOption } from "../data/TableData";
import axiosInstance from "../../util/AxiosUtil";
import constant from "../../config/Constant";
import config from "../../config/Config";


const data = [
 { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
 { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
 { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
 { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];



export default function() {
    const [adminTableData, setAdminTableData] = React.useState([]);


    React.useEffect(() => {
        (async () => {
          try {
            const response = await axiosInstance(config.ADMIN_URL).get(constant.ADMIN_API_URL.ADMIN_LIST);
            setAdminTableData(response.data);
          } catch (e) {
            console.log(e);
          }
        })();
      }, []);

    return (
    <>
        <MUIDataTable
            title={"Admin List"}
            data={adminTableData}
            columns={adminListColumnData}
            options={tableDataOption}
        />
    </>
    );
}

