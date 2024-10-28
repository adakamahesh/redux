import { useSelector } from "react-redux";
import { RootState } from "./store"; // Import the root state type from your store

// Define the Account component with TypeScript annotations
function Account() {
    // Specify the types for account and transactions to make them type-safe
    let account = useSelector((state: RootState) => state.account); // RootState should be the type of your Redux store state
    let transactions = useSelector((state: RootState) => state.transaction);

    return (
        <>
            <div className="container">
                <h2 className="text-primary">Account Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Balance</th>
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
                            transactions.map((tr) => (
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
    );
}

export default Account;