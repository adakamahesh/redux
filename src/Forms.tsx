import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, nameUpdate, mobileUpdate, reset } from "./action";
import { AppDispatch } from "./store"; // Assuming `store.ts` exports `AppDispatch` type

function Forms() {
    const dispatch = useDispatch<AppDispatch>();

    // Add types for state variables
    const [amount, setAmount] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [transactionId, updateTransactionId] = useState<number>(0);

    return (
        <>
            <div className="container">
                <h2>Form</h2>
                <div className="row">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setAmount(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-2"
                        onClick={() => {
                            dispatch(deposit(Number(amount))); // Ensure amount is a number
                            updateTransactionId(transactionId + 1);
                            dispatch({
                                type: "ADD_TRANSACTION",
                                payload: {
                                    id: transactionId,
                                    amount: Number(amount),
                                    date: new Date(),
                                    type: "Credit",
                                },
                            });
                            setAmount("");
                        }}
                    >
                        Deposit
                    </button>
                    <button
                        className="btn btn-danger mx-2 col-2"
                        onClick={() => {
                            dispatch(withdraw(Number(amount)));
                            updateTransactionId(transactionId + 1);
                            dispatch({
                                type: "ADD_TRANSACTION",
                                payload: {
                                    id: transactionId,
                                    amount: Number(amount),
                                    date: new Date(),
                                    type: "Debit",
                                },
                            });
                            setAmount("");
                        }}
                    >
                        Withdraw
                    </button>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Full Name"
                            value={fullName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-2 mx-2"
                        onClick={() => {
                            dispatch(nameUpdate(fullName));
                            setFullName("");
                        }}
                    >
                        Update
                    </button>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <input
                            className="form-control"
                            type="number"
                            placeholder="Enter Mobile Number"
                            value={mobile}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
                        />
                    </div>
                    <button
                        className="btn btn-primary col-2 mx-2"
                        onClick={() => {
                            dispatch(mobileUpdate(mobile));
                            setMobile("");
                        }}
                    >
                        Update
                    </button>
                </div>
                <button
                    className="btn btn-danger col-2 mt-2"
                    onClick={() => {
                        dispatch(reset());
                        setMobile("");
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

export default Forms;