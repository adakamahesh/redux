import { useSelector } from "react-redux"

function Account() {
    let account = useSelector((state) => state.account);
    let transactions = useSelector((state) => state.transaction);

  return (
    <>
     <div className="container">
        <h2 className="text-primary">Account Details</h2>
        <table className="table table-bordered w-50">
            <thead>
                <tr>  
                    <th>balance</th>
                    <th>User Name</th>
                    <th>Mobile Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{account.balance}</td>
                    <td>{account.fullName}</td>
                    <td>{account.mobile}</td>
                </tr>
            </tbody>
        </table>
        <h2 className="text-primary">Transaction Details</h2>
        <table className="table table-bordered w-50">
            <thead>
                <tr>  
                    <th>Id</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map((tr)=>(
                        <tr key={tr.id}>
                            <td>{tr.id}</td>
                            <td>{tr.amount}</td>
                            <td>{tr.type}</td>
                            <td>{tr.date ? new Date(tr.date).toLocaleDateString() : 'N/A'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
     </div>
    </>
  )
}

export default Account