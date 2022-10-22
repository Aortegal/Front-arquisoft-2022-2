import React from "react";

function FinancialInformation() {
    return (
        <>
            <div className="titles-container">
                <h5>Financial Information</h5>
            </div>
            <div className="container-section">
                <h5>Tuition payment</h5><br />
                <row style={{display: 'flex', marginBottom:"20px"}}>
                    <div className="col-6 container-payment1">
                        <h5> Not paid </h5><br />
                        <p><b>Concept:</b> Full tuition </p>
                        <p><b>Ammount:</b> $1.800.000 </p>
                    </div>
                    <div className="col-6 container-payment2">
                        <button className="btn  button-payment">Make payment</button>
                    </div>
                </row>
                <h5>My debts</h5><br />
                <row style={{display: 'flex', marginBottom:"20px"}}>
                    <div className="col-6 container-payment1">
                        <h5> Not paid </h5><br />
                        <p><b>Concept:</b> Broken glass </p>
                        <p><b>Ammount:</b> $300.000 </p>
                    </div>
                    <div className="col-6 container-payment2">
                        <button className="btn  button-payment">Make payment</button>
                    </div>
                </row>
            </div>
        </>
    );
}

export default FinancialInformation;