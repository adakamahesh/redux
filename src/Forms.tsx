import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, nameUpdate, mobileUpdate, reset, addTransaction } from './action';
import { AppDispatch } from "./store"; // Ensure AppDispatch import

function Forms() {
    const dispatch = useDispatch<AppDispatch>();

    const [amount, setAmount] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");

    // Handle transaction logic
    const handleTransaction = (type: "deposit" | "withdraw") => {
        const parsedAmount = Number(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            alert("Please enter a valid amount greater than zero.");
            return;
        }

        const transactionType = type === "deposit" ? "Credit" : "Debit";
        const transactionId = Date.now(); // Using timestamp as a unique ID

        dispatch(type === "deposit" ? deposit(parsedAmount) : withdraw(parsedAmount));

        dispatch(addTransaction({
            id: transactionId,
            amount: parsedAmount,
            date: new Date(),
            type: transactionType,
        }));

        setAmount(""); // Clear input after transaction
    };

    return (
        <div className="container">
            <h2>Form</h2>
            <div className="row">
                <div className="col-4">
                    <input
                        className="form-control"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary col-2"
                    onClick={() => handleTransaction("deposit")}
                >
                    Deposit
                </button>
                <button
                    className="btn btn-danger mx-2 col-2"
                    onClick={() => handleTransaction("withdraw")}
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
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary col-2 mx-2"
                    onClick={() => {
                        if (fullName.trim()) {
                            dispatch(nameUpdate(fullName));
                            setFullName("");
                        } else {
                            alert("Please enter a valid name.");
                        }
                    }}
                >
                    Update Name
                </button>
            </div>
            <div className="row mt-2">
                <div className="col-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary col-2 mx-2"
                    onClick={() => {
                        if (mobile.trim()) {
                            dispatch(mobileUpdate(mobile));
                            setMobile("");
                        } else {
                            alert("Please enter a valid mobile number.");
                        }
                    }}
                >
                    Update Mobile
                </button>
            </div>
            <button
                className="btn btn-danger col-2 mt-2"
                onClick={() => {
                    dispatch(reset());
                    setAmount("");
                    setFullName("");
                    setMobile("");
                }}
            >
                Reset
            </button>
        </div>
    );
}

export default Forms;